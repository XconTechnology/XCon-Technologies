import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const BreadCrumb = () => {
    return (
        <>
            <section id="section-breadcrumb" className="relative mb-16" style={{height: '50vh'}}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/img_placeholder/th-1/4.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <div className="global-container text-white">
                        <div className="breadcrumb-block text-center">
                            <h2 className="breadcrumb-title text-4xl sm:text-4xl md:text-5xl">About Us</h2>
                            <p className="breadcrumb-nav text-lg sm:text-xl pb-3">Empowering Your Digital Journey</p>
                            <ul className="breadcrumb-nav flex justify-center">

                                    <Link href="/" style={{color: 'white'}}>Home</Link>
                                <span className="">
                                        <Image
                                            src="/assets/img_placeholder/th-1/try.svg"
                                            alt="Background"
                                            height={10}
                                            width={10}

                                        />
                                    </span>
                                <div className="text-customGreen">About</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadCrumb;