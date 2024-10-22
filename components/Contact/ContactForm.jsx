import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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

    const [isClient, setIsClient] = useState(false); // track if the component is rendered on the client side
    useEffect(() => {
        setIsClient(true); // After first render on the client side
    }, []);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (phone) => {
        setForm({ ...form, phone });
    };

    const handleOkayClick = () => {
        setShowAlert(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();
            if (result.success) {
                setShowAlert("success");
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
    return (
        <section id="contact" className="py-10 bg-gray-100">
            <div className="global-container">

                {showAlert && (
                    <div>
                        {/* Blurred and Darkened Background */}
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

                        {/* Alert Box */}
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full mx-auto relative transform transition-transform duration-500 scale-105">
                                <div className="flex flex-col items-center">
                                    <Image
                                        src="/assets/img_placeholder/Dark Logo.png"
                                        alt="Company Logo"
                                        width={100} // Made the logo smaller
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
                    </div>
                )}

                {/* Contact Right Block */}
                <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/assets/img_placeholder/Dark Logo.png"
                            alt="Logo"
                            width={100} // Adjust the width and height according to your requirement
                            height={40}
                            className="h-10 w-auto"
                        />

                    </div>
                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-y-5">
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
                                    country={'pk'}
                                    placeholder="Enter phone number"
                                    value={form.phone}
                                    onChange={handlePhoneChange}
                                    containerClass="w-full relative"
                                    inputStyle={{
                                        borderRadius: '10px',
                                        border: '1px solid #d1d5db',
                                        backgroundColor: 'white',
                                        fontWeight: 'bold',
                                        color: 'black',
                                        outline: 'none',
                                        transition: 'all 0.2s ease-in-out',
                                        fontSize: '16px',
                                        height: '65px',
                                        width: '100%', // Ensure this matches other input fields
                                        placeholder: {
                                            fontWeight: 'normal', // Make placeholder normal
                                        },
                                    }}
                                    dropdownStyle={{
                                        borderRadius: '10px',
                                        border: '1px solid #d1d5db',
                                        zIndex: 1000,
                                    }}
                                    enableSearch={true}
                                    buttonStyle={{
                                        borderRadius: '50%',
                                        border: '1px solid #d1d5db',
                                        backgroundColor: 'white',
                                        width: '40px',
                                        height: '40px',
                                        marginLeft: '4px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        left: '5px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
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
                                <option value="">Select Service</option>
                                <option value="software-development">Software Development</option>
                                <option value="wordpress">WordPress</option>
                                <option value="mobile-app-development">Mobile App Development</option>
                                <option value="web-design">Web Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="seo-services">SEO</option>
                                <option value="consulting">Consulting</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-y-[10px]">
                            <label
                                htmlFor="contact-message"
                                className="text-lg font-bold leading-[1.6]"
                            >
                                How can we help?
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message..."
                                className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                                rows= "6"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 rounded-[10px] bg-customGreen px-8 py-4 text-white text-lg font-bold transition-all hover:bg-opacity-90"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Submit Now'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
