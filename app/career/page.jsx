"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import JoinUs from "@/components/Home/JoinUs";
import Image from "next/image";

function Career() {
    const [visibleCards, setVisibleCards] = useState([]);
    const jobCardsRef = useRef([]);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setVisibleCards((prev) => [...prev, entry.target.id]);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        jobCardsRef.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            jobCardsRef.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    // Define animation classes for each job card
    const animationClasses = [
        "animate-slide-in-left",
        "animate-slide-in-right",
        "animate-slide-in-up",
        "animate-slide-in-down",
        "animate-fade-in",
    ];

    return (
        <>
            <Header_01 />
            <main className="main-wrapper relative overflow-hidden">
                {/*...::: Breadcrumb Section Start :::... */}
                <section
                    id="section-breadcrumb"
                    className="relative"
                    style={{
                        backgroundImage: "url('/assets/img_placeholder/th-1/Careers.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "70vh",
                    }}
                >
                    <div className="relative z-[1] flex items-center justify-center w-full h-full">
                        <div className="global-container text-white text-center">
                            <div className="breadcrumb-block">
                                <h2 className="breadcrumb-title">Careers</h2>
                                <ul className="breadcrumb-nav flex text-white justify-center">
                                    <Link href="/" style={{color: "white"}}>Home</Link>
                                    <span className="">
                                     <Image
                                            src="/assets/img_placeholder/th-1/try.svg"
                                            alt="Background"
                                            height={10}
                                            width={10}
                                     />
                                     </span>
                                    <div className="text-customGreen">Career</div>
                                </ul>
                            </div>

                            {/* Search bar container */}
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-3/4 p-4 bg-white rounded-lg shadow-md">
                                <div className="flex justify-evenly items-center">
                                    <input
                                        type="text"
                                        placeholder="Enter Keyword"
                                        className="p-3 w-1/4 border border-gray-300 bg-gray-100 text-gray-800 rounded-md mr-2 "
                                    />
                                    <select
                                        className="p-3 w-1/4 border border-gray-300 rounded-md  mr-2 bg-gray-100 text-gray-800">
                                        <option defaultValue="" disabled selected>Choose your field</option>
                                        <option>WordPress Developer</option>
                                        <option>Web Developer</option>
                                        <option>SEO</option>
                                        <option>Content Writer</option>
                                        <option>Graphic Designer</option>
                                        <option>Video Editor</option>
                                        <option>Business Developer</option>
                                        <option>Digital Marketing</option>
                                    </select>

                                    <button className="bg-customGreen text-white py-3 px-6 rounded-md">Job Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*...::: Breadcrumb Section End :::... */}

                {/*...::: Job Listings Section Start :::... */}
                <section id="section-jobs" className="py-20 bg-gray-100">
                    <div className="global-container">
                        <div className="mb-10 text-center lg:mb-16 xl:mb-20">
                            <h2 className="text-6xl font-bold text-gray-800 animate-fade-in">Job Openings</h2>
                            <p className="text-lg text-gray-600 mt-4">
                                Explore our current job opportunities and find your perfect fit.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Job Item */}
                            {["software-developer", "web-developer", "mobile-app-developer", "it-consultant", "digital-marketing-specialist"].map((job, index) => (
                                <div
                                    key={job}
                                    id={job}
                                    ref={(el) => (jobCardsRef.current[index] = el)}
                                    className={`bg-white p-8 rounded-lg shadow-lg transition-transform transform ${visibleCards.includes(job) ? "scale-105 shadow-xl bg-gray-50" : "opacity-0"
                                    } ${visibleCards.includes(job) ? animationClasses[index] : ""} duration-300 ease-in-out`}
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">{job.replace(/-/g, ' ')}</h3>
                                    <p className="text-gray-600 mb-6">
                                        {`We are looking for a skilled ${job.replace(/-/g, ' ')} to join our team.`}
                                    </p>
                                    <div className="text-center">
                                        <Link href={`/job-details/${job}`}
                                              className="text-blue-600 font-semibold hover:underline">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/*...::: Job Listings Section End :::... */}

                {/*...::: Apply Now Section Start :::... */}
                <JoinUs/>
                {/*...::: Apply Now Section End :::... */}

                <Footer_01/>
            </main>
        </>
    );
}

export default Career;
