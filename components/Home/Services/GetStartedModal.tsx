"use client"
import { useState } from "react"
import { HiXMark } from "react-icons/hi2"

const interestedOptions = [
  "Build and Host Website",
  "Host Existing Website",
  "Custom Domain Setup Help",
  "Other",
]

const GetStartedModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-blue-950 font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 shrink-0 cursor-pointer"
      >
        Get Started Free
      </button>

      {open && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10">

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <div>
                <h2 className="text-blue-950 font-black text-xl">Get Started Free</h2>
                <p className="text-gray-400 text-xs mt-0.5">Tell us about your business and we'll be in touch.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <HiXMark className="text-gray-600 text-lg" />
              </button>
            </div>

            {/* Form */}
            <form className="px-8 py-6 flex flex-col gap-4">

              {/* Business name + Full name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Business / Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address</label>
                <input
                  type="text"
                  placeholder="Street address"
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                />
              </div>

              {/* City + State + Zip */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">City</label>
                  <input
                    type="text"
                    placeholder="Dallas"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">State</label>
                  <input
                    type="text"
                    placeholder="Texas"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
                <div className="w-full sm:w-28 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Zip</label>
                  <input
                    type="text"
                    placeholder="75001"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200"
                />
              </div>

              {/* Interested in */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Interested In</label>
                <select
                  defaultValue=""
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white"
                >
                  <option value="" disabled>Select an option</option>
                  {interestedOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your project..."
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 bg-blue-950 text-white font-bold text-sm py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 cursor-pointer"
              >
                Submit Request
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default GetStartedModal
