"use client";
import React from 'react'
import Image from "next/image";

// Reviews data
const reviews = [
    {
        rating: "/assets/img_placeholder/th-1/rating.svg",
        review: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
        name: "Max Weber",
        position: "HR Manager",
        img: "/assets/img_placeholder/th-1/testimonial-img-1.jpg",
        animation: "fade-left",
        delay: "0.1"
    },
    {
        rating: "/assets/img_placeholder/th-1/rating.svg",
        review: "It answers immediately, and we've seen a significant reduction in response time. Our customers love it and so do we!",
        name: "Douglas Smith",
        position: "Businessman",
        img: "/assets/img_placeholder/th-1/testimonial-img-2.jpg",
        animation: "fade-left",
        delay: "0.2"
    },
    {
        rating: "/assets/img_placeholder/th-1/rating.svg",
        review: "It is accurate, fast and supports multiple languages. It is a must for any international business success.",
        name: "Abraham Maslo",
        position: "Founder @ Marketing Company",
        img: "/assets/img_placeholder/th-1/testimonial-img-3.jpg",
        animation: "fade-left",
        delay: "0.3"
    },
    {
        rating: "/assets/img_placeholder/th-1/rating.svg",
        review: "Security is a top concern for us, and AI SaaS takes it seriously. It's a reassuring layer of protection for our organization.",
        name: "Jack Fayol",
        position: "HR Manager",
        img: "/assets/img_placeholder/th-1/testimonial-img-4.jpg",
        animation: "fade-right",
        delay: "0.1"
    },
    {
        rating: "/assets/img_placeholder/th-1/rating.svg",
        review: "We were concerned about integrating their APIs, but they were well documented, and their support team was super cool.",
        name: "Karen Lynn",
        position: "Software Engineer",
        img: "/assets/img_placeholder/th-1/testimonial-img-5.jpg",
        animation: "fade-right",
        delay: "0.2"
    },
    {
        rating: "/assets/img_placeholder/th-1/rating.svg",
        review: "The return on investment has exceeded our expectations. It's an investment in the future of our business.",
        name: "Henry Ochi",
        position: "Bank Manager",
        img: "/assets/img_placeholder/th-1/testimonial-img-6.jpg",
        animation: "fade-right",
        delay: "0.3"
    }
];

const Testimonial = () => {
    return (
        <div>
            <section className="testimonial-section">
                <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
                    <div className="global-container">
                        <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                            <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
                                <h2 className="text-white">
                                    Positive feedback from our users
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className={`jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white`}
                                    data-jos_animation={review.animation}
                                     data-jos_delay={review.delay}
                                >
                                   <div className="block">
                                        <Image
                                            src={review.rating}
                                            alt="rating"
                                            width={146}
                                            height={25}
                                        />
                                    </div>
                                    <p>{`"${review.review}"`}</p>
                                    <div className="flex items-center gap-x-4">
                                        <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                                            <Image
                                                src={review.img}
                                                alt="testimonial-img"
                                                width={60}
                                                height={60}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <span className="block text-lg font-semibold leading-[1.6]">
                                                {review.name}
                                            </span>
                                            <span className="block text-sm font-light leading-[1.4]">
                                                {review.position}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
