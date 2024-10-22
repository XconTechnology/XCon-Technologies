import React from 'react';
import {FaClock, FaFlag, FaHeadset, FaMapMarkedAlt, FaSmile, FaTrophy, FaUsers} from "react-icons/fa";

const FactsFigurers = () => {
    return (
        <>
            <section id="facts-and-figures" className="mb-16" data-aos="fade-up">
                <div className="bg-white text-black py-20">
                    <div className="px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-5xl font-semibold tracking-wide uppercase">
                            Facts and Figures
                        </h2>
                        <p className="mt-2 text-xl leading-8 tracking-tight">
                            XCon offers what it claims
                        </p>
                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
                            {/* Icon 1 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
                                <FaMapMarkedAlt className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">3</h3>
                                <p className="mt-1 text-lg text-gray-600">State-of-The-Art</p>
                                <p className="text-lg text-gray-600">Development Facilities</p>
                            </div>

                            {/* Icon 2 */}
                            {/* <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
									<FaBuilding className="text-customGreen text-8xl" />
									<h3 className="mt-2 text-3xl font-bold">25000</h3>
									<p className="mt-1 text-lg text-gray-600">SQ. MTR of</p>
									<p className="text-lg text-gray-600">Office Space</p>
								</div> */}

                            {/* Icon 3 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
                                <FaUsers className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">500+</h3>
                                <p className="mt-1 text-lg text-gray-600">Software Engineers</p>
                                <p className="text-lg text-gray-600">Technical Staff</p>
                            </div>

                            {/* Icon 4 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
                                <FaFlag className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">1500+</h3>
                                <p className="mt-1 text-lg text-gray-600">Software Designed,</p>
                                <p className="text-lg text-gray-600">Developed & Deployed</p>
                            </div>

                            {/* Icon 5 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="500">
                                <FaHeadset className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">24/7</h3>
                                <p className="mt-1 text-lg text-gray-600">IT Support Staff</p>
                                <p className="text-lg text-gray-600">Availability</p>
                            </div>

                            {/* Icon 6 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
                                <FaClock className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">15+</h3>
                                <p className="mt-1 text-lg text-gray-600">Years of Development</p>
                                <p className="text-lg text-gray-600">Experience</p>
                            </div>

                            {/* Icon 7 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="700">
                                <FaSmile className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">1000+</h3>
                                <p className="mt-1 text-lg text-gray-600">Happy</p>
                                <p className="text-lg text-gray-600">Customers</p>
                            </div>

                            {/* Icon 8 */}
                            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="800">
                                <FaTrophy className="text-customGreen text-8xl"/>
                                <h3 className="mt-2 text-3xl font-bold">3</h3>
                                <p className="mt-1 text-lg text-gray-600">Own Successful</p>
                                <p className="text-lg text-gray-600">Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FactsFigurers;