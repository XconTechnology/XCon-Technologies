import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const AWSCertificates = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Display 4 logos at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Tablets and smaller screens
                settings: {
                    slidesToShow: 4, // Keep showing 4 logos
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 4, // Keep showing 4 logos on mobile as well
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Small mobile devices
                settings: {
                    slidesToShow: 4, // Ensure 4 logos are shown on small devices too
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="aws-certificates" className="py-10">
            <div className="global-container">
                <div className="flex justify-center"> {/* Centers the slider in the parent */}
                    <Slider
                        {...settings}
                        className="w-full max-w-3xl" // Ensures the slider respects its container
                    >
                        {[
                            'developer',
                            'devOps',
                            'cloud-practitioner',
                            'security',
                            'sysOps',
                            'solution-architect',
                        ].map((logo, index) => (
                            <div key={index} className="px-2"> {/* Padding between logos */}
                                <a
                                    href={`https://www.${logo}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center"
                                >
                                    <Image
                                        src={`/assets/img_placeholder/th-1/aws-${logo}.png`}
                                        alt={`AWS ${logo} Certified`}
                                        width={120}
                                        height={120}
                                        className="object-contain w-full h-auto mx-auto
                                                   sm:w-24 sm:h-24 // Default for small screens
                                                   md:w-32 md:h-32 // Larger size for tablets
                                                   lg:w-40 lg:h-40" // Even larger size for desktops
                                    />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default AWSCertificates;
