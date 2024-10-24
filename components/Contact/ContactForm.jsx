import React, { useState, useRef } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import nodemailer from "nodemailer";

const ContactForm = () => {
  const formRef = useRef(null);
  const [showAlert, setShowAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    setForm({ ...form, phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use the email entered by the user as the recipient
      const recipientEmail = form.email;

      // Log form data and recipient email to the console
      console.log("Form Data:", form);
      console.log("Recipient Email:", recipientEmail);

      // Send form data to the recipient email entered by the user
      const result = await sendEmail({
        ...form,
        SMTP_USER: process.env.SMTP_USER, // Dynamic recipient based on the user's email
      });

      if (result.success) {
        setLoading(false);

        // Send a thank-you message to the user's email
        await sendThankYouEmail(recipientEmail); // Send the thank-you message to the user

        setShowAlert("success");

        // Reset the form
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setShowAlert("error");
      }
    } catch (error) {
      setShowAlert("error");
    } finally {
      setLoading(false);
    }
  };

  const handleOkayClick = () => {
    setShowAlert(null);
  };

  // Function to send a thank-you email to the user
  const sendFormEmail = async (formData) => {
    try {
      // Nodemailer transporter configuration
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for port 465
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email options for the recipient (askforquote email)
      const mailOptions = {
        from: `"XCon Technologies" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Send to askforquote@xcontechnologies.com
        subject: "New Contact Form Submission",
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\nMessage: ${formData.message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return { success: true };
    } catch (error) {
      console.error("Error sending form email:", error);
      return { success: false };
    }
  };

  const sendThankYouEmail = async (recipientEmail) => {
    try {
      // Reuse the same transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for port 465
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email options for the thank-you email
      const mailOptions = {
        from: `"XCon Technologies" <${process.env.SMTP_USER}>`,
        to: recipientEmail, // Send to the user
        subject: "Thank You for Contacting Us",
        text: "We have received your message. Our team will get back to you shortly.",
      };

      // Send the thank-you email
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending thank you email:", error);
    }
  };

  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="global-container">
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full mx-auto relative">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/img_placeholder/Dark Logo.png"
                  alt="Company Logo"
                  width={100}
                  height={40}
                  className="h-6 w-auto mb-4"
                />
                {showAlert === "success" && (
                  <div className="text-green-600 text-lg font-bold text-center mb-4">
                    Thank you! We will get back to you as soon as possible.
                  </div>
                )}
                {showAlert === "error" && (
                  <div className="text-red-600 text-lg font-bold text-center mb-4">
                    Something went wrong. Please try again.
                  </div>
                )}
                <button
                  onClick={handleOkayClick}
                  className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Right Block */}
        <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/img_placeholder/Dark Logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5"
          >
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-name"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Adam Smith"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-email"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-phone"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={"pk"}
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  containerClass="w-full relative"
                  inputStyle={{
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    fontWeight: "bold",
                    color: "black",
                    outline: "none",
                    transition: "all 0.2s ease-in-out",
                    fontSize: "16px",
                    height: "65px",
                    width: "100%",
                  }}
                  dropdownStyle={{
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    zIndex: 1000,
                  }}
                  enableSearch={true}
                  buttonStyle={{
                    borderRadius: "50%",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    marginLeft: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-company"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Your Business
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Business"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-services"
                className="text-lg font-bold leading-[1.6]"
              >
                Services
              </label>
              <select
                name="service"
                id="service"
                value={form.service}
                onChange={handleChange}
                className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                required
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="SEO">SEO</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-message"
                className="text-lg font-bold leading-[1.6]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                required
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`mt-4 rounded-lg bg-blue-500 text-white px-6 py-3 font-semibold ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

async function sendEmail(formData) {
  // Your email sending logic here
  return { success: true }; // Simulating email send success
}
