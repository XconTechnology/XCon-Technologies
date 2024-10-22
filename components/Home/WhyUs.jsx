import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import 'animate.css';

const WhyUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const services = [
        {
            title: "Resource Flexibility",
            description: "Our software dev company offers scalable resource solutions tailored to your project needs. Whether scaling up or down, our flexible approach ensures optimized efficiency and cost control, helping your business stay agile in a fast-changing environment.",
            imageSrc: "/assets/img_placeholder/th-1/service-icon-black-1.svg",
            hoverImageSrc: "/assets/img_placeholder/th-1/white-8.svg",
            link: "/services"
        },
        {
            title: "Managed Services",
            description: "Being the top software development company in USA, XCon Technologies’ Managed Services, focus on your core business while we handle the IT. Our proactive approach ensures smooth operations, minimizing downtime and reducing costs.",
            imageSrc: "/assets/img_placeholder/th-1/service-icon-black-2.svg",
            hoverImageSrc: "/assets/img_placeholder/th-1/white-2.svg",
            link: "/service-details"
        },
        {
            title: "Web-Based Access",
            description: "Access your business tools anytime, anywhere with XCon web-based solutions. Our secure applications enable seamless connectivity, real-time collaboration, and decision-making from any device, enhancing productivity with intuitive, user-friendly interfaces.",
            imageSrc: "/assets/img_placeholder/th-1/service-icon-black-3.svg",
            hoverImageSrc: "/assets/img_placeholder/th-1/white-1.svg",
            link: "/service-details"
        },
        {
            title: "Anomaly Detection",
            description: "Anomaly detection uses advanced algorithms to identify irregular patterns in data, enabling businesses to spot potential issues early. This proactive approach enhances operational efficiency and minimizes risks, ensuring your systems run smoothly.",
            imageSrc: "/assets/img_placeholder/th-1/service-icon-black-5.svg",
            hoverImageSrc: "/assets/img_placeholder/th-1/white-5.svg",
            link: "/service-details"
        },
        {
            title: "Predictive Analytics",
            description: "Predictive analytics leverages historical data and advanced algorithms to forecast latest software trends. By uncovering valuable insights, it empowers software development agencies and other businesses to make informed decisions, optimize strategies, and drive growth in a competitive landscape.",
            imageSrc: "/assets/img_placeholder/th-1/service-icon-black-6.svg",
            hoverImageSrc: "/assets/img_placeholder/th-1/white-4.svg",
            link: "/service-details"
        },
        {
            title: "Seamless Communication",
            description: "Experience effortless communication with our advanced speech recognition solutions. Transform voice commands into actions, enhancing user interaction and accessibility across platforms and guaranteeing a smoother and more productive experience.",
            imageSrc: "/assets/img_placeholder/th-1/service-icon-black-7.svg",
            hoverImageSrc: "/assets/img_placeholder/th-1/white-7.svg",
            link: "/service-details"
        }
    ];

    return (
        <>
            <section id="team-section">
                <div className="py-4 xl:py-[20px]" data-aos="fade-left">
                    <section id="section-service">
                        <div className="xl:pb-[10px]">
                            <div className="global-container">
                                <div className="jos text-center mb-4 lg:mb-12">
                                    <div className="mx-auto max-w-md lg:max-w-xl xl:max-w-[950px] pt-20">
                                        <h2 className="text-4xl font-bold">
                                            <span className="text-customGreen">Why Choose </span> XCon Technologies
                                        </h2>
                                    </div>
                                </div>

                                <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-customGray bg-black sm:grid-cols-2 lg:grid-cols-3">
                                    {/* Step 2: Map over the services array */}
                                    {services.map((service, index) => (
                                        <li key={index}
                                            className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-customGreen">
                                            <div className="relative mb-9 h-[70px] w-[70px]">
                                                <Image
                                                    src={service.imageSrc}
                                                    alt={`${service.title}-icon`}
                                                    width={70}
                                                    height={70}
                                                />
                                                <Image
                                                    src={service.hoverImageSrc}
                                                    alt={`${service.title}-icon-hover`}
                                                    width={70}
                                                    height={70}
                                                    className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                                />
                                            </div>
                                            <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                                                <Link href={service.link}>
                                                    {service.title}
                                                </Link>
                                            </h3>
                                            <p className="mb-12 duration-300 group-hover:text-white">
                                                {service.description}
                                            </p>
                                            <Link href={service.link}
                                                  className="relative inline-block h-[30px] w-[30px] duration-300">
                                                <Image
                                                    src="/assets/img_placeholder/th-1/Black-Arrow.svg"
                                                    alt="arrow-right-black"
                                                    width={30}
                                                    height={30}
                                                />
                                                <Image
                                                    src="/assets/img_placeholder/th-1/Layer-2.svg"
                                                    alt="arrow-right-hover"
                                                    width={30}
                                                    height={30}
                                                    className="absolute left-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                                                    style={{top: '-18%'}}
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default WhyUs;
