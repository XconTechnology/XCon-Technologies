const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  if (!name || !email || !phone || !company || !service || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test connection
    await transporter.verify();

    // Send the form data to askforquote@xcontechnologies.com
    const mailOptionsToCompany = {
      from: process.env.SMTP_USER, // Sender email (company email)
      to: process.env.SMTP_USER, // The company email (askforquote@xcontechnologies.com)
      subject: `New Inquiry from ${name}`,
      text: `
    New Inquiry Details:

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Company: ${company}
    Service: ${service}

    Message:
    ${message}

    Best Regards,
    XCon Technologies
  `,
    };

    // Send the form data to the company
    await transporter.sendMail(mailOptionsToCompany);

    // Send a thank-you email to the user (from askforquote@xcontechnologies.com)
    const confirmationMailOptions = {
      from: process.env.SMTP_USER, // The company's email (askforquote@xcontechnologies.com)
      to: email, // The user's email
      subject: "Thank you for contacting us!",
      text: `Dear ${name},\n\nThank you for reaching out. We'll get back to you soon.\n\nXCon Technologies`,
    };

    // Send the thank-you email to the user
    await transporter.sendMail(confirmationMailOptions);

    // Respond to the client
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
