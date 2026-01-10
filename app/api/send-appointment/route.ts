export const dynamic = 'force-dynamic';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const appointmentData = await req.json();
    const { name, phone, email, date, time, service } = appointmentData;
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification to clinic
    const emailResult = await resend.emails.send({
      from: 'Kumar\'s Dental <appointments@kumarsdental.com>',
      to: 'kumarsdentistry.in@gmail.com', // Your clinic email
      replyTo: email || undefined,
      subject: `🦷 New Appointment: ${name} - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .detail { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #dc2626; }
              .label { font-weight: bold; color: #1e3a8a; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🦷 New Appointment Request</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Kumar's Microscopic Dental Care</p>
              </div>
              <div class="content">
                <div class="detail">
                  <span class="label">👤 Patient Name:</span> ${name}
                </div>
                <div class="detail">
                  <span class="label">📞 Phone Number:</span> <a href="tel:${phone}">${phone}</a>
                </div>
                ${email ? `<div class="detail">
                  <span class="label">📧 Email:</span> <a href="mailto:${email}">${email}</a>
                </div>` : ''}
                <div class="detail">
                  <span class="label">📅 Preferred Date:</span> ${date}
                </div>
                <div class="detail">
                  <span class="label">⏰ Preferred Time:</span> ${time}
                </div>
                <div class="detail">
                  <span class="label">🔹 Service Requested:</span> ${service}
                </div>
                
                <div class="footer">
                  <p><strong>Action Required:</strong></p>
                  <ul>
                    <li>Call the patient to confirm appointment</li>
                    <li>Add to clinic schedule</li>
                    <li>Send confirmation via WhatsApp</li>
                  </ul>
                  <p style="margin-top: 15px;">
                    Submitted from: <strong>kumarsdental.com</strong><br>
                    Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', emailResult);

    return Response.json({
      success: true,
      message: 'Appointment email sent',
      emailId: emailResult.data ? emailResult.data.id : null,
    });

  } catch (error: unknown) {
    console.error('Email sending failed:', error);

    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email'
    }, { status: 500 });
  }
}
