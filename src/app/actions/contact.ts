'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend cannot send from a *.vercel.app address. Use a verified domain via
// RESEND_FROM, or Resend's test sender (delivers only to the Resend account email).
const FROM = process.env.RESEND_FROM || 'Portfolio <onboarding@resend.dev>';

function escapeHtml(v: string) {
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const name = escapeHtml(formData.name.slice(0, 120));
  const email = escapeHtml(formData.email.slice(0, 200));
  const message = escapeHtml(formData.message.slice(0, 5000));
  try {
    // If no API key, return error message suggesting fallback
    if (!process.env.RESEND_API_KEY) {
      return {
        success: false,
        message: 'Email service not configured. Please use the mailto link instead.',
      };
    }

    const result = await resend.emails.send({
      from: FROM,
      to: 'yuvalmehta.728@gmail.com',
      reply_to: formData.email,
      subject: `Portfolio Inquiry from ${formData.name.slice(0, 80).replace(/[\r\n]/g, ' ')}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again.',
    };
  }
}
