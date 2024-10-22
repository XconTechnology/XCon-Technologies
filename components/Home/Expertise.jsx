"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Expertise = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const domains = [
        {
            title: "Automotive",
            description: "Implement easy iot solution for real-time vehicle tracking, predictive maintenance, enhanced safety features, and data analytics to optimize fleet management.",
            icon: "/assets/img_placeholder/th-1/Automotive.svg",
        },
        {
            title: "Healthcare",
            description: "Leverage secure telemedicine platforms, integrated EMR/EHR systems, real-time patient monitoring, and AI-driven diagnostics to improve healthcare outcomes.",
            icon: "/assets/img_placeholder/th-1/Healthcare.svg",
        },
        {
            title: "On-Demand",
            description: "Utilize cloud platforms for scalable operations, real-time GPS tracking, AI-driven demand forecasting, and instant delivery management to enhance customer satisfaction.",
            icon: "/assets/img_placeholder/th-1/On_demand.svg",
        },
        {
            title: "Ecommerce",
            description: "Implement scalable best ecommerce platforms with AI-driven product recommendations, secure payment gateways, and real-time inventory management for seamless shopping experiences.",
            icon: "/assets/img_placeholder/th-1/Ecommerse.svg",
        },
        {
            title: "Fintech",
            description: "Leverage cloud-based platforms for secure transactions, real-time data analytics, AI-driven financial insights, and fraud detection to optimize customer experiences.",
            icon: "/assets/img_placeholder/th-1/Fintech.svg",
        },
    ];

    return (
        <div className="bg-gray-100 py-12 relative mx-0 lg:mx-20 xl:mx-32">
            <h2 className="text-center flex flex-start ml-10 text-4xl font-bold mb-8 relative z-10 "> Expertise Across
                Domains </h2>

            <Slider {...settings} className="px-6 relative z-20">
                {domains.map((domain, index) => (
                    <div key={index} className="p-4 group relative">
                        <div
                            className="bg-white p-5 rounded-lg shadow-lg group-hover:bg-customGreen transition-all duration-300 min-h-[300px] sm:min-h-[330px] overflow-hidden relative">
                            {/* Flex Column to keep logo above */}
                            <div className="flex flex-col items-start">
                                <Image
                                    src={domain.icon}
                                    alt={domain.title}
                                    width={50}
                                    height={50}
                                    className="mb-4"
                                />
                                <h3 className="text-3xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                                    {domain.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                                    {domain.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Expertise;
