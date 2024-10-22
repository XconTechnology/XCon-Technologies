"use client";
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const engagementModels = [
    {
        title: "Project-Based Development",
        description: "Assign dedicated product managers & developers for your adaptive software development project.",
        image: "/assets/img_placeholder/th-1/pbd.png",
    },
    {
        title: "Team-Based Development",
        description: "Deploy a cooperative and professional team to deliver custom end-to-end,software solutions",
        image: "/assets/img_placeholder/th-1/sa.png",
    },
    {
        title: "Staff Augmentation",
        description: "Integrate the best and expert app developers into your team for improved project success.",
        image: "/assets/img_placeholder/th-1/tbd.png",
    },
];

const EngagementModels = () => {
    return (
        <>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-customGreen">Engagement</span>  Models</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {engagementModels.map((model, index) => (
                            <div key={index} className="text-center border rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                                <div className="relative w-full h-60">
                                    {/* Image taking full width of the top */}
                                    <Image
                                        src={model.image}
                                        alt={model.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 transition-colors duration-300 bg-white group-hover:bg-customGreen group-hover:text-white">
                                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300">{model.title}</h3>
                                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">{model.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="text-center mt-12">

                        <Link
                            href="/contact"
                            className="button hidden rounded-[70px]  bg-customGreen text-white after:bg-[black] hover:border-[black] hover:text-white lg:inline-block"
                        >
                            Book a Free Consultation
                        </Link>
                        {/*<button*/}
                        {/*    className="px-6 py-3 bg-customGreen text-black after:bg-[black] hover:border-[black] hover:text-black text-white font-semibold rounded-full hover:bg-white hover:text-customGreen border border-customGreen transition-colors">*/}
                        {/*    */}
                        {/*</button>*/}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EngagementModels;
