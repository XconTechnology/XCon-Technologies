'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import 'animate.css';
// import Partners from "@/app/partners/Partners";
import Image from 'next/image'; // Import Next.js Image
const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [animateClass, setAnimateClass] = useState('animate__fadeInRight');

    const headlines = [
        'Grow Your Business with XCON Technologies!',
        'Unlock Innovation with Advanced IT Solutions.',
        'Where Latest Technology Meets Execution!',
        'Innovative IT Software Development at its Best.'
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimateClass('animate__fadeOutLeft');
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
                setAnimateClass('animate__fadeInDown');
            }, 1000);
        }, 5000);
        return () => clearInterval(interval);
    }, [headlines.length]);


    return (
        <section id='section-hero' className="relative">
            <div className="absolute top-0 left-0 w-full h-full z-[0]">
                <Image
                    src="/assets/img_placeholder/th-1/header-bg.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[0]"/>
            <div
                className='relative z-[1] overflow-hidden rounded-bl-[30px] text-white rounded-br-[30px] pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]'>
                <div className='global-container'>
                    <div className='mb-14 flex flex-col items-center text-center lg:mb-20'>
                        <h3 className={`jos slide-from-bottom text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-9 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px] animate__animated ${animateClass}`}>
                            {headlines[index]}
                        </h3>
                        <p className='jos slide-from-bottom mb-11 text-gray-300 max-w-[700px] text-base sm:text-lg md:text-xl xl:max-w-[980px]'>
                            Welcome to XCON Technologies, where innovation meets digital expertise. Dive into our cutting-edge IT solutions, from advanced website and application development to seamless network integration. Let this IT software development company, XCON be your trusted partner in navigating the fast-changing technology landscape. Discover how we can take your digital journey to the next level.
                        </p>
                        <div className='jos flex flex-wrap justify-center gap-6' data-jos_animation='fade'>
                            <Link href='#'
                                  className='button rounded-[50px] border-2 border-black bg-white py-4 text-black after:bg-customGreen hover:border-customGreen hover:text-white'>
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Partners/>*/}
        </section>
    );
};
export default HeroSection;