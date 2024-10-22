import React from 'react';

const Expertise = () => {
    return (
        <section className="py-16 bg-white">
            {/* Title Section */}
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-5xl font-bold text-gray-800">

                    XCon&apos;s Web Development <br /> <span className="text-customGreen">Expertise</span>

                    XCon's Web Development <br /> <span className="text-customGreen">Expertise</span>

                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    We do not claim to be #1, but we excel at what we do. With an experienced, full-scale in-house team,
                    we have a reliable and sought-after web development cycle to produce efficient, secure, and
                    growth-compliant products that businesses love.
                </p>
            </div>

            {/* Expertise Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Card Template */}
                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">Specializes Modern Technologies</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        Accelerate full-stack development using modern low-code, cloud-based frameworks.
                    </p>
                </div>

                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">Result-Driven, Adaptive Workflow</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        We keep the development process simple until it challenges us to scale up resource allocation. On-time project delivery, every time.
                    </p>
                </div>

                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">Expertise Across Industries</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        We help businesses across 15+ domains to research, shape, and launch an authoritative web platform.
                    </p>
                </div>

                <div className="p-10 bg-gray-100 hover:bg-customGreen hover:text-white transition duration-300 shadow-lg group">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">Shorten Time-to-Market</h3>
                    <div className="border-b-4 border-customGreen group-hover:border-white my-4 w-28"></div>
                    <p className="text-gray-600 group-hover:text-white">
                        Reach the masses looking for you online with a fast-loading, friendly, and well-functioning website.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
