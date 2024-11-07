import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, deleteOption } = await req.json();

  // Configure the email transporter using Office 365 SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Correct host for Office 365
    port: 587,
    secure: false, // Use false for port 587
    auth: {
      user: 'admin@icupid.app', // Your Office 365 email
      pass: 'K)538757830813ay', // Your Office 365 password
    },
  });

  // Define email options with user's email as the 'from' field
  const mailOptions = {
    from: email, // Set from as user's email
    to: 'admin@icupid.app', // Admin email
    subject: 'Account Deletion Request',
    text: `Dear Admin,

I, ${name}, would like to request the deletion of my account associated with the email: ${email}.

Request Type: ${
      deleteOption === 'accountOnly' ? 'Delete Account Only' : 'Delete Account with Data'
    }

Please proceed with the requested deletion at your earliest convenience. Thank you for your assistance.

Best regards,
${name}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send request' }, { status: 500 });
  }
}
