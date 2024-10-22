import React from 'react';
import Image from "next/image";

const OurMission = () => {
    return (
        <>
            <section id='content-section-1'>
                {/* Section Spacer */}
                <div className='pb-20 xl:pb-[150px]'>
                    {/* Section Container */}
                    <div className='global-container'>
                        <div
                            className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
                            {/* Content Left Block */}
                            <div
                                className='jos order-2 overflow-hidden rounded-md md:order-1'
                                data-jos_animation='fade-left'
                            >
                                <Image
                                    src='/assets/img_placeholder/th-1/mission.jpg'
                                    alt='content-image-1'
                                    width='526'
                                    height='450'
                                    className='h-auto w-full'
                                />
                            </div>
                            {/* Content Left Block */}
                            {/* Content Right Block */}
                            <div
                                className='jos order-1 md:order-2'
                                data-jos_animation='fade-right'
                            >
                                {/* Section Content Block */}
                                <div className='mb-6 flex  items-center'>
                                    <h2 className={" text-5xl text-customGreen"}>Our Mission</h2>

                                </div>
                                {/* Section Content Block */}
                                <div className=' leading-[1.4]  lg:text-[21px]'>
                                    <p className='mb-7 last:mb-0'>
                                        Our mission is to empower businesses with modern software development that drive growth and efficiency. We specialize in crafting tailored digital tools that solve real-world challenges, streamline operations, and enhance customer experiences. Being the top IT software development company, our goal is to be a trusted partner in your digital transformation journey, delivering exceptional results through cutting-edge technology.
                                    </p>

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

export default OurMission;