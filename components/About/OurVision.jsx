import React from 'react';
import Image from "next/image";

const OurVision = () => {
    return (
        <>
            <section id='content-section-2'>
                {/* Section Spacer */}
                <div className='pb-20 xl:pb-[150px]'>
                    {/* Section Container */}
                    <div className='global-container'>
                        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32'>
                            {/* Content Left Block */}
                            <div className='jos order-2 overflow-hidden rounded-md' data-jos_animation='fade-left'>
                                <Image
                                    src='/assets/img_placeholder/th-1/2.jpg'
                                    alt='content-image-2'
                                    width='526'
                                    height='450'
                                    className='h-auto w-full'
                                />
                            </div>
                            {/* Content Right Block */}
                            <div className='jos order-1' data-jos_animation='fade-right'>
                                {/* Section Content Block */}
                                <div className='mb-6 flex flex-col items-start gap-4'>
                                    <div>
                                        <h2 className=" text-5xl text-customGreen text-left">Our Vision</h2>
                                    </div>
                                </div>
                                {/* Section Content Block */}
                                <div className='text-lg leading-[1.4] lg:text-[21px] text-left'>
                                    <p className='mb-7 last:mb-0'>
                                        We&apos;re committed to shaping tomorrow&apos;s digital landscape by embracing innovation
                                        and delivering cutting-edge solutions that drive transformation.

                                    </p>
                                    <ul className='flex flex-col gap-y-5 font-dmSans text-base leading-tight tracking-tighter text-black lg:mt-12 lg:text-[20px]'>
                                        <li className='flex items-center gap-x-3'> {/* Changed to items-center for vertical alignment */}
                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                <Image
                                                    src='/assets/img_placeholder/th-1/check-circle.svg'
                                                    alt='check-circle'
                                                    width='30'
                                                    height='30'
                                                    className='h-full w-full'
                                                />
                                            </div>
                                            <span>Pioneering Future-Ready Technologies</span>
                                        </li>
                                        <li className='flex items-center gap-x-3'> {/* Changed to items-center for vertical alignment */}
                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                <Image
                                                    src='/assets/img_placeholder/th-1/check-circle.svg'
                                                    alt='check-circle'
                                                    width='30'
                                                    height='30'
                                                    className='h-full w-full'
                                                />
                                            </div>
                                            <span>Empowering Digital Transformation</span>
                                        </li>
                                        <li className='flex items-center gap-x-3'> {/* Changed to items-center for vertical alignment */}
                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                <Image
                                                    src='/assets/img_placeholder/th-1/check-circle.svg'
                                                    alt='check-circle'
                                                    width='30'
                                                    height='30'
                                                    className='h-full w-full'
                                                />
                                            </div>
                                            <span>Innovating for a Smarter Tomorrow</span>
                                        </li>
                                        <li className='flex items-center gap-x-3'> {/* Changed to items-center for vertical alignment */}
                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                <Image
                                                    src='/assets/img_placeholder/th-1/check-circle.svg'
                                                    alt='check-circle'
                                                    width='30'
                                                    height='30'
                                                    className='h-full w-full'
                                                />
                                            </div>
                                            <span>Leading the Way in Tech Evolution</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Content Right Block */}
                        </div>
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>
        </>
    );
};

export default OurVision;