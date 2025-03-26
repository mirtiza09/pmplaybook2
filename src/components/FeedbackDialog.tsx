
"use client"

import { useState } from 'react'
import { usePostHog } from 'posthog-js/react'

export function FeedbackDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const posthog = usePostHog()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    posthog.capture("survey sent", {
      $survey_id: '0195d367-83e3-0000-aa74-d5b5996cad7e',
      $survey_response: feedback
    })
    setFeedback('')
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
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
              className="px-6 py-2 bg-black text-white border border-white hover:bg-gray-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
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
