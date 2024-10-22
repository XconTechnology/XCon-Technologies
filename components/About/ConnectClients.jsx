import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ConnectClients = () => {
    return (
        <>
            <section id="about-contact" className="">
                <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
                    <div className="global-container">
                        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
                            {/* Content Left Block */}
                            <div
                                className="jos order-2 overflow-hidden rounded-[20px] md:order-1 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105     "
                                data-jos_animation="fade-right"
                            >
                                <Image
                                    src="/assets/img_placeholder/Light Logo.png"
                                    alt="XCon-Logo"
                                    width={526}
                                    height={550}

                                    className="h-auto w-full"
                                />
                            </div>

                            {/* Content Right Block */}
                            <div
                                className="jos order-1 md:order-2 md:pl-10" // Padding-left added on larger screens
                                data-jos_animation="fade-down"
                            >
                                <div className="mb-6 md:max-w-max">
                                    <h2 className="text-white text-5xl">
                                        Ready to transform your vision into reality?
                                    </h2>
                                </div>

                                <div className="mb-6 md:max-w-max">
                                    <h2 className="text-white text-3xl">
                                        Let’s create something amazing together.
                                    </h2>
                                </div>
                                <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                                    <p className="mb-7 last:mb-0">
                                        XCon Technologies is more than just a software company, we are your partner in innovation. If you have any query or would like to discuss how we can bring your project whether software development, web development, or any other to life, we would love to connect with you. Simply fill out the form, and let’s start the journey together.

                                    </p>
                                    <Link
                                        href="/contact"
                                        className="button rounded-[50px] bg-white text-black text-center flex items-center justify-center after:bg-[#61a00e] hover:border-[#61a00e] hover:text-white lg:inline-block"
                                    >
                                        Contact us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ConnectClients;