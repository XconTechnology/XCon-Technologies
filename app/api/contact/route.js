import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Function to generate email content
const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  service: "Service",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (
      str +
      `<tr>
        <td class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</td>
        <td class="form-answer" align="left">${val}</td>
      </tr>`
    );
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html>
      <html>
        <head>
          <title>Contact Form Submission</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <style type="text/css">
            body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
            table { border-collapse: collapse !important; width: 100%; }
            body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
            @media screen and (max-width: 525px) {
              .wrapper { width: 100% !important; max-width: 100% !important; }
              .responsive-table { width: 100% !important; }
              .padding { padding: 10px 5% 15px 5% !important; }
              .section-padding { padding: 0 15px 50px 15px !important; }
            }
            .form-container { padding: 20px; border: 1px solid #ccc; }
            .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: bold; font-size: 16px; padding: 8px; background-color: #f7f7f7; }
            .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; font-size: 16px; padding: 8px; }
          </style>
        </head>
        <body style="background-color: #ffffff; padding: 20px;">
          <table class="form-container" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 20px;">
                <h2>New Contact Message</h2>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  ${htmlData}
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
  };
};

export async function POST(request) {
  try {
    const body = await request.json();

    if (
      !body ||
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.company ||
      !body.service ||
      !body.message
    ) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate the email content
    const emailContent = generateEmailContent(body);

    // Send HTML email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${body.name}`,
      text: emailContent.text,
      html: emailContent.html,
    });

    // Send thank-you email to the submitter
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.email,
      subject: "Thank You for Your Submission",
      text: `Dear ${body.name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nXCon Technologies`,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to send email, please try again" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Welcome to the Contact Form API!" });
}
