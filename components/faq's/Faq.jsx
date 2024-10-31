import React from 'react';
import Link from "next/link";
import Image from "next/image";
import useAccordion from "@/components/hooks/useAccordion";

const FaqS = () => {
    const [activeIndex, handleAccordion] = useAccordion(0);
    return (
        <>
            <section className='faq-section bg-colorLinenRuffle  '>
                {/* Section Spacer */}
                <div className='pb-10  xl:pb-[70px] '>
                    <div className='global-container  '>
                        <div className='grid grid-cols-1 gap-y-10 md:grid-cols-1 py-14'>


                            {/* FAQ Right Block */}
                            <div
                                className='jos md:ml-10 lg:ml-20 xl:ml-32'
                                data-jos_animation='fade-left'
                            >
                                <div className={"text-5xl pb-10 text-center font-bold "}>FAQ's</div>
                                <ul className='accordion pt-8 '>
                                    <li
                                        className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                                            activeIndex === 0 ? 'active' : ''
                                        }`}
                                        onClick={() => handleAccordion(0)}
                                    >
                                        <div
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-medium leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>How does our custom website development help your business grow?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                Our custom web solutions are designed to enhance your online presence. By utilizing the latest technologies, we help you achieve your business goals and expand your market reach.

                                            </p>
                                        </div>
                                    </li>

                                    <li
                                        className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                                            activeIndex === 1 ? 'active' : ''
                                        }`}
                                        onClick={() => handleAccordion(1)}
                                    >
                                        <div
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-medium leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>What custom web development services does XCon offer?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                XCon provides a wide range of custom web development services, including e-commerce solutions, web applications, content management systems according to your business needs.

                                            </p>
                                        </div>
                                    </li>

                                    <li
                                        className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                                            activeIndex === 2 ? 'active' : ''
                                        }`}
                                        onClick={() => handleAccordion(2)}
                                    >
                                        <div
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-medium leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>What technologies do you use for custom web development?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                We utilize a variety of modern technologies, including HTML, CSS, JavaScript, PHP, Python, and various frameworks like React, Angular, and Node.js to create your brand’s website.

                                            </p>
                                        </div>
                                    </li>

                                    <li
                                        className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                                            activeIndex === 3 ? 'active' : ''
                                        }`}
                                        onClick={() => handleAccordion(3)}
                                    >
                                        <div
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-medium leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>How our website design Charlotte NC provide ongoing support after launch?
                                            </p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                After your website launch, our website development and marketing company provide ongoing support services like security updates and performance monitoring to keep your site up-to-date.

                                            </p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            {/* FAQ Right Block */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default FaqS;