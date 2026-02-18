'use client'

import { useState } from 'react'

interface FormData {
  name: string
  companyName: string
  phone: string
  email: string
  productRequired: string
  quantity: string
  message: string
  honeypot?: string // Spam protection
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    productRequired: '',
    quantity: '',
    message: '',
    honeypot: '',
  })

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.productRequired.trim()) newErrors.productRequired = 'Product is required'
    if (!formData.quantity.trim()) newErrors.quantity = 'Quantity is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Thank you! Your inquiry has been received. We will contact you within 24 hours.',
        })
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          productRequired: '',
          quantity: '',
          message: '',
        })
        // Reset after 5 seconds
        setTimeout(() => {
          setFormState({ status: 'idle', message: '' })
        }, 5000)
      } else {
        setFormState({
          status: 'error',
          message: data.message || 'An error occurred. Please try again.',
        })
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Failed to submit form. Please try again.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50/50 rounded-lg border-2 border-gray-200/80 p-8 md:p-10 shadow-inner">
      <h3 className="text-xl font-bold mb-6 text-[#0A1F33] border-b-2 border-gray-200 pb-4 uppercase tracking-wide">
        Request for Quotation (RFQ)
      </h3>

      {/* Success Message */}
      {formState.status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm">
          <p className="text-green-800 text-sm font-bold">{formState.message}</p>
        </div>
      )}

      {/* Error Message */}
      {formState.status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-red-800 text-sm font-bold">{formState.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-white border-2 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Your Name"
            disabled={formState.status === 'loading'}
          />
          {errors.name && <p className="text-red-600 text-xs mt-1 font-bold">{errors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-white border-2 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400 ${errors.companyName ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Company Name"
            disabled={formState.status === 'loading'}
          />
          {errors.companyName && (
            <p className="text-red-600 text-xs mt-1 font-bold">{errors.companyName}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-white border-2 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="+91 98765 43210"
            disabled={formState.status === 'loading'}
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1 font-bold">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-white border-2 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="work@email.com"
            disabled={formState.status === 'loading'}
          />
          {errors.email && <p className="text-red-600 text-xs mt-1 font-bold">{errors.email}</p>}
          <p className="text-[11px] text-gray-500 mt-1.5 font-medium">For official quotation purposes only.</p>
        </div>

        {/* Product Required */}
        <div>
          <label
            htmlFor="productRequired"
            className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide"
          >
            Product Required *
          </label>
          <input
            type="text"
            id="productRequired"
            name="productRequired"
            value={formData.productRequired}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-white border-2 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400 ${errors.productRequired ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="e.g., TE-AMP-2.0-2"
            disabled={formState.status === 'loading'}
          />
          {errors.productRequired && (
            <p className="text-red-600 text-xs mt-1 font-bold">{errors.productRequired}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
            Quantity *
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-white border-2 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400 ${errors.quantity ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="e.g., 1000 pieces"
            disabled={formState.status === 'loading'}
          />
          {errors.quantity && <p className="text-red-600 text-xs mt-1 font-bold">{errors.quantity}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-0 focus:border-[#D61F26] transition-colors text-sm font-medium text-gray-900 placeholder-gray-400"
          placeholder="Any additional requirements or specifications..."
          disabled={formState.status === 'loading'}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="w-full bg-[#D61F26] text-white py-4 rounded-sm font-extrabold uppercase tracking-wider hover:bg-[#B91C22] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base transform active:scale-[0.99] flex items-center justify-center gap-3"
      >
        {formState.status === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing Request...
          </>
        ) : (
          'Submit Quotation Request'
        )}
      </button>

      {/* Privacy Note */}
      <div className="mt-4 text-center">
        <p className="text-[11px] text-gray-400 font-medium flex items-center justify-center gap-1.5">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
          We respect your privacy. Your information is used strictly for quotation purposes.
        </p>
      </div>

      {/* Honeypot Field (Hidden) */}
      <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
        <label htmlFor="honeypot">Website URL</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot || ''}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
    </form>
  )
}
