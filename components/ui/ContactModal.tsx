'use client'

import { useEffect, useState } from 'react'

const productOptions = [
  'Piles Care',
  'Herbal Immunity Booster',
  'Psoria Care Capsules',
]

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  })

  // ✅ Open on load + ESC close
  useEffect(() => {
    setOpen(true)

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      console.log('API response:', data)

      if (!res.ok) {
        throw new Error(data.message || 'Failed to submit')
      }

      alert('Message sent successfully!')
      setOpen(false)
    } catch (err) {
      console.error(err)
      alert('API error – check console')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => setOpen(false)}   // ✅ outside click
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl p-6 relative"
        onClick={(e) => e.stopPropagation()} // ❌ stop close inside
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-5 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded-lg"
          >
            <option value="">Select Product</option>
            {productOptions.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
