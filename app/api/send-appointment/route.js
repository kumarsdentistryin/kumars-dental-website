import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, service, notes } = body;

    // Format message for Dr
    const message = `
📞 NEW APPOINTMENT BOOKING

Patient Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Service: ${service}
Notes: ${notes || 'None'}

Confirm this appointment?
Reply: YES / NO
    `.trim();

    // Send WhatsApp message to Dr
    const whatsappMessage = await client.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${process.env.DR_WHATSAPP_NUMBER}`
    });

    // Also send SMS confirmation to patient
    await client.messages.create({
      body: `Hi ${name}! Your appointment request has been sent to our doctor. You'll receive confirmation via WhatsApp soon. Kumar's Dental Care - ${process.env.TWILIO_PHONE_NUMBER}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${phone}`
    });

    return Response.json({
      success: true,
      message: 'Appointment request sent to doctor!'
    });

  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
