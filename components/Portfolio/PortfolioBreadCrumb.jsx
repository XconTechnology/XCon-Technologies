import React from 'react';
import Link from "next/link";
import Image from "next/image";

const PortfolioBreadCrumb = () => {
    return (
        <>
            <section id="section-breadcrumb" className="relative mb-10 bg-cover bg-center h-[50vh]"
                     style={{backgroundImage: "url('/assets/img_placeholder/th-1/Portfolio.jpg')",}}>

                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    {/* Section Container */}
                    <div className="global-container text-white px-4 md:px-8">
                        <div className="breadcrumb-block text-center">
                        <h1 className="breadcrumb-title text-4xl md:text-6xl font-bold">Our Portfolio</h1>
                            <ul className="breadcrumb-nav flex  text-white">

                                <Link href="/" style={{color: 'white'}}>Home</Link>
                                <span className="">
                                        <Image
                                            src="/assets/img_placeholder/th-1/try.svg"
                                            alt="Background"
                                            height={10}
                                            width={10}

                                        />
                                     </span>
                                <div className="text-customGreen">Our Portfolio</div>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>

        </>
);
};

export default PortfolioBreadCrumb;