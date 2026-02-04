import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const { name, email, company, units, message } = await request.json();

    // Send notification to Tessa
    await resend.emails.send({
      from: 'Faev <onboarding@resend.dev>',
      to: 'tessa@faev.app',
      subject: `New Property Manager Inquiry from ${name}`,
      html: `
        <h2>New Property Manager Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Number of Units:</strong> ${units || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `,
    });

    // Send auto-reply to the property manager
    await resend.emails.send({
      from: 'Faev <onboarding@resend.dev>',
      to: email,
      subject: 'Thanks for signing up for Faev',
      html: `
        <p>Hi there —</p>
        <p>Thank you for signing up for Faev. We've received your information and a member of our team will reach out shortly with next steps.</p>
        <p>We're currently onboarding a small group of brokers and property managers as part of our beta, and we'll be in touch soon to confirm access and details.</p>
        <p>If you have any questions in the meantime, feel free to reply to this email.</p>
        <p>Best,<br>Tessa Gordon<br>Co-founder of Faev</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
