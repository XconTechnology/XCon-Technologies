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
                <div className='pb-20  xl:pb-[150px] '>
                    {/* Section Container */}
                    <div className='global-container  '>
                        <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 py-14'>
                            {/* FAQ Left Block */}
                            <div
                                className='jos flex flex-col'
                                data-jos_animation='fade-right'
                            >
                                {/* Section Content Block */}
                                <div className='mb-6'>
                                    <div className='mx-auto md:mx-0 md:max-w-none'>
                                        <h2>Freely ask us for more information</h2>
                                    </div>
                                </div>
                                {/* Section Content Block */}
                                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                                    <p className='mb-7 last:mb-0'>
                                        Here are answers to some of the most commonly asked questions about our
                                        services,
                                        processes, and expertise. If you have any other questions,
                                        feel free to reach out to our team for assistance.
                                    </p>
                                    <Link
                                        href='/faq-1'
                                        className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-customGreen hover:border-customGreen hover:text-white'
                                    >
                                        Ask you questions
                                    </Link>
                                </div>
                            </div>
                            {/* FAQ Left Block */}

                            {/* FAQ Right Block */}
                            <div
                                className='jos md:ml-10 lg:ml-20 xl:ml-32'
                                data-jos_animation='fade-left'
                            >

                                <ul className='accordion'>
                                    <li
                                        className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                                            activeIndex === 0 ? 'active' : ''
                                        }`}
                                        onClick={() => handleAccordion(0)}
                                    >
                                        <div
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>What services does your company offer?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                We offer a range of services including custom software development, web
                                                design and development,
                                                mobile app development, graphic design, SEO (Search Engine
                                                Optimization), and managed IT solutions.
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
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>How long does it take to develop a custom software solution?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                The time it takes to develop a custom software solution depends on the
                                                complexity of the project.
                                                We work closely with our clients to determine project requirements and
                                                provide an estimated timeline accordingly.
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
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>Do you provide ongoing support for your products?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                Yes, we offer ongoing support and maintenance services for all the
                                                products we develop. Our dedicated
                                                support team is available to assist you with any issues or updates you
                                                may need.
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
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>Can you help improve our website&apos;s search engine ranking?</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24}
                                                       alt='plus'/>
                                            </div>
                                        </div>
                                        <div className='accordion-content text-[#2C2C2C]'>
                                            <p>
                                                Yes, our SEO (Search Engine Optimization) experts can help improve your
                                                website&apos;s search engine ranking
                                                by optimizing your website&apos;s content, structure, and performance to
                                                make it more visible to search engines
                                                like Google.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            {/* FAQ Right Block */}
                        </div>
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>

        </>
    );
};

export default FaqS;