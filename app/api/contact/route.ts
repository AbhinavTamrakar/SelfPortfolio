import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, phone, email, projectNeeds } = await req.json()

    if (!name || !phone || !email || !projectNeeds) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'turke.abhinav@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #111; margin-bottom: 24px;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Project Needs</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; line-height: 1.7;">${projectNeeds.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>

          <p style="margin-top: 32px; font-size: 12px; color: #999;">Sent from your portfolio contact form — tamrakar-abhinav.vercel.app</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}