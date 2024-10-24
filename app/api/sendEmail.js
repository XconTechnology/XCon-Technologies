import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, company, service, message, recipientEmail } =
      req.body;

    // Validate the incoming request data
    if (!name || !email || !phone || !company || !service || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    try {
      // Create transporter with SMTP configuration
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // SMTP_HOST from environment variables
        port: process.env.SMTP_PORT, // SMTP_PORT from environment variables
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // Your company email (SMTP_USER from .env)
          pass: process.env.SMTP_PASS, // Your SMTP password (SMTP_PASS from .env)
        },
      });

      // Test SMTP connection
      await transporter.verify();

      // Send the main email to the recipient (company email or recipient provided in form)
      const mailOptions = {
        from: process.env.SMTP_USER, // Company's email as the sender
        to: recipientEmail, // Recipient email from the form submission
        subject: `Message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}
          Service: ${service}
          Message: ${message}
        `,
      };

      // Send confirmation email to the user (the person submitting the form)
      const confirmationMailOptions = {
        from: process.env.SMTP_USER, // Company's email as the sender
        to: email, // Send a thank-you email to the user's email
        subject: "Thank you for contacting us!",
        text: `Dear ${name},\n\nThank you for reaching out. We've received your message and will get back to you soon.\n\nBest regards,\nXCon Technologies`,
      };

      // Send confirmation email to the recipient (optional for form data recipient)
      const recipientConfirmationMailOptions = {
        from: process.env.SMTP_USER, // Company's email as the sender
        to: recipientEmail,
        subject: "Message Received Confirmation",
        text: `Hello,\n\nYou have received a new message from the website. Please see the details below:\n\nBest regards,\nXCon Technologies`,
      };

      // Send the form data to the company’s email
      const companyEmailOptions = {
        from: process.env.SMTP_USER, // Company's email as the sender
        to: process.env.SMTP_USER, // Send form data to the company itself
        subject: `New Form Submission from ${name}`,
        text: `
          You have received a new form submission:

          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}
          Service: ${service}
          Message: ${message}

          Sent from: ${email}
        `,
      };

      // Sending emails
      await transporter.sendMail(mailOptions); // Email to recipient
      await transporter.sendMail(confirmationMailOptions); // Thank you email to the user
      await transporter.sendMail(recipientConfirmationMailOptions); // Confirmation to recipient
      await transporter.sendMail(companyEmailOptions); // Form data to company

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
