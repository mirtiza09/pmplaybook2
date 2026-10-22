"use client"

import { useState } from 'react'
import { track, captureSurveyResponse } from '@/lib/analytics'

/**
 * Survey this dialog posts into. Configured rather than hardcoded so the
 * survey can be replaced in PostHog without a deploy; the literal is only a
 * fallback for the survey that exists today.
 */
const FEEDBACK_SURVEY_ID =
  process.env.NEXT_PUBLIC_POSTHOG_FEEDBACK_SURVEY_ID ||
  '0195d367-83e3-0000-aa74-d5b5996cad7e'

export function FeedbackDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    captureSurveyResponse(FEEDBACK_SURVEY_ID, feedback)
    track('feedback_submitted', { surface: 'footer', response_length: feedback.length })
    setFeedback('')
    setIsOpen(false)
  }

  const handleOpen = () => {
    track('feedback_opened', { surface: 'footer' })
    setIsOpen(true)
  }

  // Abandonment is as informative as submission: a long draft that never gets
  // sent is a different problem from nobody opening the dialog at all.
  const handleDismiss = () => {
    track('feedback_dismissed', { surface: 'footer', response_length: feedback.length })
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        data-attr="feedback-open"
        className="px-6 py-2 bg-black text-white border border-white relative hover:before:content-['•'] hover:before:absolute hover:before:left-2 hover:before:top-1/2 hover:before:transform hover:before:-translate-y-1/2 hover:before:text-lg disabled:opacity-50 transition-all"
      >
        Give Feedback
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-6 border border-white max-w-md w-full">
        <h3 className="text-white font-medium mb-4">Give us feedback</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-32 p-2 mb-4 bg-transparent text-white border border-white outline-none"
            placeholder="What can we do to improve our product?"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              data-attr="feedback-submit"
              className="px-6 py-2 bg-black text-white border border-white hover:bg-gray-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              data-attr="feedback-cancel"
              className="px-6 py-2 bg-black text-white border border-white hover:bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
