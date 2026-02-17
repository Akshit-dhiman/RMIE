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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Request for Quotation (RFQ)</h3>

      {/* Success Message */}
      {formState.status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800">{formState.message}</p>
        </div>
      )}

      {/* Error Message */}
      {formState.status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800">{formState.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your name"
            disabled={formState.status === 'loading'}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your company"
            disabled={formState.status === 'loading'}
          />
          {errors.companyName && (
            <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+91 98765 43210"
            disabled={formState.status === 'loading'}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
            disabled={formState.status === 'loading'}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Product Required */}
        <div>
          <label
            htmlFor="productRequired"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Required *
          </label>
          <input
            type="text"
            id="productRequired"
            name="productRequired"
            value={formData.productRequired}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.productRequired ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., TE-AMP-2.0-2"
            disabled={formState.status === 'loading'}
          />
          {errors.productRequired && (
            <p className="text-red-600 text-sm mt-1">{errors.productRequired}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
            Quantity *
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.quantity ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., 1000 pieces"
            disabled={formState.status === 'loading'}
          />
          {errors.quantity && <p className="text-red-600 text-sm mt-1">{errors.quantity}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any additional requirements or specifications..."
          disabled={formState.status === 'loading'}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState.status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  )
}
