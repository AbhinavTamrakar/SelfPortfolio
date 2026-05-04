'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Syne, Lora } from 'next/font/google'
import { Send, Mail } from 'lucide-react'

const syne = Syne({ subsets: ['latin'], weight: '400' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectNeeds: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', projectNeeds: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={`${syne.className} min-h-screen bg-black text-white px-6 md:px-16 py-20`}>
      <div className="max-w-2xl mx-auto">

        {/* Header with mail icon */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-700 text-gray-400">
            <Mail size={16} />
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Contact</p>
        </motion.div>

        <motion.h1
          className={`${lora.className} text-[clamp(2rem,6vw,3.5rem)] leading-tight italic mb-12 text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's work together.
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-widest text-gray-400">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Abhinav Tamrakar"
              className="bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors duration-200 text-[15px]"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-widest text-gray-400">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+977 98XXXXXXXX"
              className="bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors duration-200 text-[15px]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-widest text-gray-400">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors duration-200 text-[15px]"
            />
          </div>

          {/* Project Needs */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-widest text-gray-400">
              Project Needs <span className="text-red-500">*</span>
            </label>
            <textarea
              name="projectNeeds"
              value={form.projectNeeds}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project — what you need, timeline, budget..."
              className="bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors duration-200 text-[15px] resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="mt-4 self-start flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={14} />
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Feedback */}
          {status === 'success' && (
            <motion.p
              className="text-green-400 text-[13px] tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="text-red-400 text-[13px] tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✗ Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </main>
  )
}