"use client";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; // React Icons for checkmark

const servicesData = [
    {
        text: "For",
        title: "Startups",
        points: ["Rapid Prototyping", "MVP Development", "POC Development"],
    },
    {
        text: "For",
        title: "SMBs",
        points: [
            "Custom Software Development",
            "Digital Marketing Solutions",
            "App Maintenance and Fixes",
        ],
    },
    {
        text: "For",
        title: "Enterprises",
        points: [
            "Enterprise Software Solutions",
            "Cloud Implementation Services",
            "DevOps Services",
        ],
    },
];

const ServicesSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Launched Over <span className="text-customGreen">200 Projects</span> – For All-Sized Businesses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index}
                             className="group p-8 min-h-72 bg-gray-50 border rounded-xl shadow hover:shadow-lg transition-shadow hover:bg-customGreen hover:text-white text-gray-800">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-2xl font-semibold">{service.text}</h3>
                                <h3 className="text-4xl font-semibold mb-8">{service.title}</h3>
                            </div>

                            <ul className="space-y-2">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-center">
                                        <AiOutlineCheckCircle
                                            className="text-customGreen group-hover:text-white mr-2 transition-colors"/>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
