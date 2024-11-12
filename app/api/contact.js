import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, company, service, message } = req.body;

    // Validate input fields
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ message: "Valid recipient email is required" });
    }
    if (!message || message.length > 500) {
      return res.status(400).json({
        message: "Message is required and must be less than 500 characters",
      });
    }
    if (!name || !company || !phone) {
      return res
        .status(400)
        .json({ message: "Name, Company, and Phone number are required" });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send email to admin with form data
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER, // Replace with admin email(s)
        subject: "Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`,
      });

      // Send thank-you email to the submitter
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Thank You for Your Submission",
        text: `Dear ${name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nXCon Technologies`,
      });

      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        message: "Failed to send email",
        error: error.message || error,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
