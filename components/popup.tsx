'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup Container - Full mobile optimization */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0">
        <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 sm:zoom-in-95 duration-500 max-h-[92vh] overflow-y-auto sm:max-h-[90vh]">
          {/* Close Button - Larger for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2.5 sm:p-3 rounded-full transition-all duration-200 z-10 active:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close"
          >
            <X className="w-6 h-6 sm:w-6 sm:h-6" />
          </button>

          {/* Gradient Header - Compact mobile, spacious desktop */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-10 sm:py-14 text-center overflow-hidden">
            {/* Animated background shapes - Subtler on mobile */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full -ml-12 sm:-ml-16 -mb-12 sm:-mb-16 blur-2xl" />

            {/* Icon with pulse effect */}
            <div className="relative z-10 flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse w-14 h-14 sm:w-16 sm:h-16" />
                <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full backdrop-blur-md">
                  <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Header Text - Optimized sizing */}
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
              Join Our Community
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm">
              Connect with B.D. Public Ara
            </p>
          </div>

          {/* Main Content - Optimized spacing */}
          <div className="px-5 sm:px-8 py-7 sm:py-10 pb-5 sm:pb-6">
            {/* Description - Cleaner on mobile */}
            <p className="text-slate-700 text-center text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Join our <span className="font-bold text-blue-600">BD Public Ara</span> chat space to stay connected with the school community!
            </p>

            {/* Features - Compact mobile layout */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-none">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                </div>
                <span className="text-slate-600 text-xs sm:text-sm leading-snug">Latest school updates & announcements</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-none">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                </div>
                <span className="text-slate-600 text-xs sm:text-sm leading-snug">Connect with parents & teachers</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-none">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                </div>
                <span className="text-slate-600 text-xs sm:text-sm leading-snug">Instant event notifications</span>
              </div>
            </div>

            {/* Buttons - Extra large touch targets */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <a
                href="https://bdpublicschoolara.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 sm:py-4 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 min-h-[52px] sm:min-h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Sparkles className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base leading-tight">Join Chat Space</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform hidden sm:block" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-semibold py-3.5 sm:py-4 px-4 rounded-xl transition-all duration-300 text-sm sm:text-base active:scale-95 min-h-[52px] sm:min-h-[48px] focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Continue Browsing
              </button>
            </div>
          </div>

          {/* Footer Info - Subtle on mobile */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-5 sm:px-8 py-3 sm:py-4 text-center border-t border-slate-200">
            <p className="text-xs sm:text-sm text-slate-600">
              Access the chat space anytime from our website
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
