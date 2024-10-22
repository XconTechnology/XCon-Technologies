import React from 'react';

const Projects = () => {
    return (
        <>
            <section id="about-funfact-section" className="m-20 text-center" data-aos="fade-up">
                <div className="global-container">
                    <div className="jos mb-10 text-center lg:mb-12 xl:mb-20">
                        <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
                            <h3 className="text-5xl">Driving Innovation, Delivering Excellence</h3>
                        </div>
                    </div>
                </div>

                <div className="global-container">
                    <ul className="grid grid-cols-2 gap-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Counter Items */}
                        <li className="jos text-center" data-jos_delay="0.1">
                            <h3 className="text-5xl text-customGreen md:text-6xl lg:text-7xl xl:text-[80px]"
                                data-module="countup">
                                <span className="start-number" data-countup-number={2}>500</span>+
                            </h3>
                            <span className="block text-lg font-normal text-black">Projects Done</span>
                        </li>
                        {/* Counter Items */}
                        <li className="jos text-center" data-jos_delay="0.2">
                            <h3 className="text-5xl text-customGreen md:text-6xl lg:text-7xl xl:text-[80px]"
                                data-module="countup">
                                <span className="start-number" data-countup-number={95}>50</span>+
                            </h3>
                            <span className="block text-lg font-normal text-black">Happy Client Satisfaction Rate</span>
                        </li>
                        {/* Counter Items */}
                        <li className="jos text-center" data-jos_delay="0.3">
                            <h3 className="text-5xl text-customGreen md:text-6xl lg:text-7xl xl:text-[80px]"
                                data-module="countup">
                                <span className="start-number" data-countup-number={40}>4.7</span>%
                            </h3>
                            <span className="block text-lg font-normal text-black">Client Rating</span>
                        </li>
                        {/* Counter Items */}
                        <li className="jos text-center" data-jos_delay="0.4">
                            <h3 className="text-5xl text-customGreen md:text-6xl lg:text-7xl xl:text-[80px]"
                                data-module="countup">
                                <span className="start-number" data-countup-number={73}>67</span>
                            </h3>
                            <span className="block text-lg font-normal text-black">On Going Projects</span>
                        </li>
                    </ul>
                </div>
            </section>


        </>
    );
};

export default Projects;