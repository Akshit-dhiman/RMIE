import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactRequest {
  name: string
  companyName: string
  phone: string
  email: string
  productRequired: string
  quantity: string
  message: string
  honeypot?: string // Spam protection
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactRequest = await request.json()

    // 1. Spam Protection (Honeypot)
    if (data.honeypot) {
      // If honeypot is filled, it's likely a bot. Return success to fool them.
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 })
    }

    // 2. Validate required fields
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

    if (errors.length > 0) {
      return NextResponse.json({ success: false, message: 'Validation failed', errors }, { status: 400 })
    }

    // 3. Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 4. Verify SMTP connection
    try {
      await transporter.verify()
    } catch (error) {
      console.error('SMTP Connection Failed:', error)
      return NextResponse.json(
        { success: false, message: 'Email service unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    // 5. Send Email
    const mailOptions = {
      from: `"RMI Web Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'radhamadhavindia11@gmail.com',
      replyTo: data.email,
      subject: `New RFQ Submission: ${data.companyName} - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0A1F33; border-bottom: 2px solid #D61F26; padding-bottom: 10px;">New RFQ Submission</h2>
          <p style="color: #555;"><strong>Received From:</strong> Website Form</p>
          <p style="color: #555;"><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.companyName}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${data.phone}" style="color: #D61F26; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${data.email}" style="color: #D61F26; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Product Required</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.productRequired}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Quantity</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.quantity}</td>
            </tr>
             <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Additional Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.message || 'N/A'}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            <p>This is an automated email from the Radha Madhav India Enterprise website.</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. We will contact you within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v1] Contact API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    )
  }
}
