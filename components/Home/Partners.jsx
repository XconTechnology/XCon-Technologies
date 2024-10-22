'use client';
import React from 'react';
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import 'swiper/swiper-bundle.css';

const Partners = () => {
    return (
        <div className="bg-[#fff] py-5 flex flex-col drop-shadow-lg absolute w-full md:w-auto md:mx-14" style={{top: '89%'}}>
            <Marquee
                pauseOnHover
                speed={60}
                gradient={false}
            >
                <div className="flex justify-between items-center space-x-10">
                    <Image
                        src="/assets/img_placeholder/th-1/client1-Photoroom.png"
                        alt="client1"
                        width={180}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/client2-Photoroom.png"
                        alt="client2"
                        width={180}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/client3.png"
                        alt="client3"
                        width={180}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/client4-Photoroom.png"
                        alt="client4"
                        width={180}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/example.png"
                        alt="client4"
                        width={120}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/amazon.png"
                        alt="client4"
                        width={120}
                        height={80}
                    />

                    <Image
                        src="/assets/img_placeholder/th-1/alpha.png"
                        alt="client4"
                        width={180}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/zwai.png"
                        alt="client4"
                        width={100}
                        height={80}
                    />
                    <Image
                        src="/assets/img_placeholder/th-1/law.png"
                        alt="client4"
                        width={180}
                        height={80}
                    />


                </div>
            </Marquee>
        </div>
    );
};

export default Partners;
