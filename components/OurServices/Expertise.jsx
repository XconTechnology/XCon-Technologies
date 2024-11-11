import React from 'react';

const Expertise = ({ serviceType = "webDevelopment" }) => {
    return (
        <section className="py-16 bg-white">
            {/* Title Section */}
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-5xl font-bold text-gray-800">

                    {serviceType === "webDevelopment" ? "Get Custom Web Development Expertise at ?"
                    : serviceType === "appDevelopment" ? "Get Custom App Development Expertise at"
                        : serviceType === "softwareDevelopment" ? "Get Custom Software Development Expertise at"
                            : "Our Services"}
                    {" "}  <span className="text-customGreen">Xcon!</span>
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    We don’t proclaim to be the best custom website development company, but we take pride in our expertise. Our professional, full-service in-house team follows a modern web development process to deliver efficient, secure, and scalable products that businesses trust and appreciate.
                </p>
            </div>

            {/* Expertise Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Card Template */}
                <div className="p-10 bg-gray-100 hover:bg-customGreen 	 hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white tracking-wide">Modern Tech Expertise
                    </h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        Enhance full-stack development with innovative low-code and cloud-based frameworks.

                    </p>
                </div>

                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white tracking-wide">Industry Expertise</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        We assist businesses across 15+ sectors in researching, developing, and launching best web platforms.
                    </p>
                </div>

                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white tracking-wide">Faster Launch Times</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        Connect with your target audience quickly through a fast-loading, user-friendly, and high-performing website.</p>
                </div>

                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white tracking-wide">Efficient  Workflow</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        We simplify the development process until it necessitates scaling up resources. Timely project delivery is our priority.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
