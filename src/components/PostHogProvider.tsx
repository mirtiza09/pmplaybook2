"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react"
import { Suspense, useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { registerGlobalContext, track } from "@/lib/analytics/track"
import { scrubPII } from "@/lib/analytics/privacy"
import { resolveContent } from "@/lib/analytics/content"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

    // Without a key there is nothing to send to, so skip init entirely rather
    // than logging a misconfiguration error on every page load. Capture calls
    // on the uninitialized client are no-ops.
    if (!key || posthog.__loaded) {
      return
    }

    posthog.init(key, {
      // Direct to PostHog by default, which is what this site has always done.
      // Set NEXT_PUBLIC_POSTHOG_HOST to "/ingest" to route through the proxy
      // declared in netlify.toml, which survives ad blockers — but verify the
      // redirects are live before switching, or events stop arriving.
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.posthog.com",
      ui_host: "https://eu.posthog.com",

      // Pageviews are captured by hand below, because the App Router does not
      // trigger a document load on navigation.
      capture_pageview: false,
      capture_pageleave: true,

      capture_dead_clicks: true,
      capture_heatmaps: true,
      capture_exceptions: true,

      // Autocapture is kept, but narrowed to elements that opt in. Unrestricted
      // autocapture on a 71-card grid produces mostly noise, and the explicit
      // events in @/lib/analytics carry far better properties.
      autocapture: { css_selector_allowlist: ["[data-attr]"] },

      // There is no login, so almost every visitor is anonymous. Processing
      // person profiles for them is the only way to get retention and cohorts
      // out of a content site.
      person_profiles: "always",
      persistence: "localStorage+cookie",

      session_recording: {
        maskAllInputs: true,
        maskTextSelector: "[data-ph-mask]",
        recordCrossOriginIframes: false,
      },
      enable_recording_console_log: true,

      // Runtime backstop against personal data reaching the event stream.
      before_send: scrubPII,

      loaded: () => {
        registerGlobalContext()
      },
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      <ScrollDepthTracker />
      {children}
    </PHProvider>
  )
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  useEffect(() => {
    if (!pathname || !posthog) return

    // Let PostHog derive $current_url itself. Building it by hand dropped the
    // hash and diverged from the URL used everywhere else in the SDK.
    const content = resolveContent(pathname.slice(1))
    posthog.capture("$pageview", {
      content_type: content?.contentType ?? null,
      content_id: content?.item.id ?? null,
      content_category: content?.item.category ?? null,
    })
  }, [pathname, searchParams, posthog])

  return null
}

function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}

const DEPTH_MILESTONES = [25, 50, 75, 100] as const

/**
 * Reading depth, reported once per milestone per route.
 *
 * On a reference site, how far down a page someone gets is the closest thing
 * there is to an engagement signal — a pageview on its own cannot tell a read
 * from a bounce.
 */
function ScrollDepthTracker() {
  const pathname = usePathname()
  const reached = useRef<Set<number>>(new Set())

  useEffect(() => {
    reached.current = new Set()
  }, [pathname])

  useEffect(() => {
    if (!pathname) return

    const content = resolveContent(pathname.slice(1))

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return

      const pct = ((window.scrollY / scrollable) * 100)

      for (const milestone of DEPTH_MILESTONES) {
        if (pct >= milestone && !reached.current.has(milestone)) {
          reached.current.add(milestone)
          track("content_scroll_depth", {
            content_type: content?.contentType ?? null,
            content_id: content?.item.id ?? null,
            depth_pct: milestone,
          })
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  return null
}
