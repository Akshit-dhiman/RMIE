import { NextRequest, NextResponse } from 'next/server'

interface ContactRequest {
  name?: string
  companyName?: string
  phone?: string
  email?: string
  productRequired?: string
  quantity?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactRequest = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'companyName', 'phone', 'email', 'productRequired', 'quantity']
    const errors: string[] = []

    for (const field of requiredFields) {
      if (!data[field as keyof ContactRequest] || !String(data[field as keyof ContactRequest]).trim()) {
        errors.push(`${field} is required`)
      }
    }

    // Validate email format
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Invalid email format')
    }

    // Return validation errors
    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
        },
        { status: 400 }
      )
    }

    // TODO: In production, you would:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send confirmation email to customer
    // 4. Integrate with CRM system

    console.log('[v0] Contact form submission:', {
      timestamp: new Date().toISOString(),
      data,
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. We will contact you within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact API error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    )
  }
}
