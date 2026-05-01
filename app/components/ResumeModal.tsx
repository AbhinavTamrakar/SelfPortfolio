'use client'
import { X, Download } from 'lucide-react'

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-[90%] max-w-3xl h-[90vh] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black text-white rounded-full p-1 hover:bg-gray-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Download button */}
        <a
          href="/resume.pdf"
          download="Abhinav_Tamrakar_Resume.pdf"
          className="absolute top-3 right-12 z-10 bg-black text-white rounded-full p-1 hover:bg-gray-800 transition"
          title="Download Resume"
        >
          <Download className="w-5 h-5" />
        </a>

        {/* Resume PDF */}
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  )
}