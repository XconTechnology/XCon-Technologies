import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
  methods: ["GET", "POST"],
  origin: "*", // Allow your frontend to make requests
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      result instanceof Error ? reject(result) : resolve(result);
    });
  });
}

// Function to generate email content for the contact form submission
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
  await runMiddleware(request, null, cors); // Apply CORS middleware

  try {
    const body = await request.json();

    // Validate required fields
    if (
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.company ||
      !body.service ||
      !body.message
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { message: "Valid email address is required" },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length > 500) {
      return NextResponse.json(
        { message: "Message must be less than 500 characters" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate the email content
    const emailContent = generateEmailContent(body);

    // Send email to admin with form data
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Replace with admin email(s)
      subject: `New Contact Form Submission from ${body.name}`,
      text: emailContent.text,
      html: emailContent.html,
    });

    // Send a thank-you email to the submitter
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.email,
      subject: "Thank you for contacting us!",
      text: `Dear ${body.name},\n\nThank you for reaching out! We will get back to you shortly.\n\nBest regards,\nXCon Technologies`,
    });

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
