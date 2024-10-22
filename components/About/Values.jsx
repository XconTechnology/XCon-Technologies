import React from 'react';
import {FaCheckCircle, FaEye, FaFlag, FaHandshake, FaUsers} from "react-icons/fa";

const Values = () => {
    return (
        <>
            <section id="about-values-section" className="mb-0" data-aos="fade-up"> {/* Removed margin-bottom */}
                <div className="bg-black text-white py-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-5xl text-customGreen font-semibold tracking-wide uppercase">
                                Values
                            </h2>
                            <p className="mt-2 text-white leading-8 tracking-tight sm:text-4xl">
                                Core values are fundamental to the working spirit of XCon
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                                {/* Card 1 - Integrity */}
                                <div
                                    className="bg-white p-10 rounded-lg shadow-lg h-70 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105 hover:shadow-[0_0_20px_5px_theme('colors.customGreen')]">
                                    <FaHandshake
                                        className="text-customGreen text-4xl mb-4"/> {/* Increased icon size */}
                                    <h3 className="text-3xl font-medium text-gray-900 tracking-tight">
                                        Integrity
                                    </h3>
                                    <p className="mt-4 text-1xl text-gray-500">
                                        We uphold the highest standards of integrity in all of our actions.
                                        Our commitment to honesty and fairness ensures trust and reliability.
                                    </p>
                                </div>

                                {/* Card 2 - Transparency */}
                                <div
                                    className="bg-white p-10 rounded-lg shadow-lg h-70 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105 hover:shadow-[0_0_20px_5px_theme('colors.customGreen')]">
                                    <FaEye className="text-customGreen text-4xl mb-4"/> {/* Increased icon size */}
                                    <h3 className="text-3xl font-medium text-gray-900 tracking-tight">
                                        Transparency
                                    </h3>
                                    <p className="mt-4 text-1xl text-gray-500">
                                        We foster transparency by ensuring clear, consistent communication at every
                                        level,
                                        building strong relationships with our clients and teams.
                                    </p>
                                </div>

                                {/* Card 3 - Quality Assurance */}
                                <div
                                    className="bg-white p-10 rounded-lg shadow-lg h-70 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105 hover:shadow-[0_0_20px_5px_theme('colors.customGreen')]">
                                    <FaCheckCircle
                                        className="text-customGreen text-4xl mb-4"/> {/* Increased icon size */}
                                    <h3 className="text-3xl font-medium text-gray-900 tracking-tight">
                                        Quality Assurance
                                    </h3>
                                    <p className="mt-4 text-1xl text-gray-500">
                                        We are committed to delivering the highest quality products and services by
                                        continually
                                        improving our processes and standards.
                                    </p>
                                </div>

                                {/* Card 4 - Value of People */}
                                <div
                                    className="bg-white p-10 rounded-lg shadow-lg h-70 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105 hover:shadow-[0_0_20px_5px_theme('colors.customGreen')]">
                                    <FaUsers className="text-customGreen text-4xl mb-4"/> {/* Increased icon size */}
                                    <h3 className="text-3xl font-medium text-gray-900 tracking-tight">
                                        Value of People
                                    </h3>
                                    <p className="mt-4 text-1xl text-gray-500">
                                        We value our people, our greatest asset, by creating a culture of respect,
                                        encouragement, and continuous learning.
                                    </p>
                                </div>

                                {/* Card 5 - Commitment */}
                                <div
                                    className="bg-white p-10 rounded-lg shadow-lg h-70 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105 hover:shadow-[0_0_20px_5px_theme('colors.customGreen')]">
                                    <FaFlag className="text-customGreen text-4xl mb-4"/> {/* Increased icon size */}
                                    <h3 className="text-3xl font-medium text-gray-900 tracking-tight">
                                        Commitment
                                    </h3>
                                    <p className="mt-4 text-1xl text-gray-500">
                                        We are fully committed to delivering excellence in everything we do,
                                        ensuring that every project meets or exceeds expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Values;