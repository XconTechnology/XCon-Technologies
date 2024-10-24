import React from 'react';
import Image from 'next/image'; // Importing the Image component from Next.js
import 'animate.css';

const OurSuccess = () => {
    const caseStudies = [
        {
            title: 'Dunya Course Finder',
            description: 'Dunya Course Finder is an online platform designed to help students discover and explore various educational courses available worldwide....',
            tech: [
                {
                    name: 'React',
                    logo: '/assets/img_placeholder/th-1/react.svg'
                },
                {
                    name: 'NodeJs',
                    logo: '/assets/img_placeholder/th-1/node.svg'
                }
            ],
            image: '/assets/img_placeholder/th-1/course.png',
        },
        {
            title: 'Dunya Consultants',
            description: 'Dunya Consultants is a professional consulting firm specializing in providing expert guidance and solutions to businesses and individuals across various industries.....',
            tech: [
                {
                    name: 'WordPress',
                    logo: '/assets/img_placeholder/th-1/wordpress.svg'
                },
            ],
            image: '/assets/img_placeholder/th-1/dunyaCon.png',
        },
        {
            title: 'Fitness Freak',
            description: 'Fitness Freak UI/UX Design is a sleek, user-friendly interface tailored for fitness enthusiasts. It offers an intuitive experience with clean layouts, easy navigation, and vibrant visuals to keep users engaged....',
            tech: [
                {
                    name: 'Figma',
                    logo: '/assets/img_placeholder/th-1/figma.svg'
                },
            ],
            image: '/assets/img_placeholder/th-1/fit.jpeg',
        },
        {
            title: 'Harvest Energy',
            description: 'The main objective of our company is to provide the Dublin region with high quality A rated energy efficient Windows and Doors Dublin at affordable prices....',
            tech: [
                {
                    name: 'WordPress',
                    logo: '/assets/img_placeholder/th-1/wordpress.svg'
                },
            ],
            image: '/assets/img_placeholder/th-1/quality.png',
        },
    ];

    return (
        <>
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Recent <span className="text-customGreen"> Projects</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-600">
                            Explore compelling case studies that showcase our expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 animate__animated animate__zoomIn"
                            >
                                <Image
                                    src={study.image}
                                    alt={`${study.title} screenshot`}
                                    className="mb-4 rounded-md"
                                    width={500} // Specify width
                                    height={250} // Specify height
                                    layout="responsive" // This makes the image responsive
                                />
                                <h3 className="text-xl font-bold text-gray-800">{study.title}</h3>
                                <p className="mt-2 text-gray-600">{study.description}</p>
                                <div className="mt-4 flex space-x-2">
                                    {study.tech.map((tech, idx) => (
                                        <div key={idx} className="flex items-center ">
                                            {tech.logo ? (
                                                <Image
                                                    src={tech.logo}
                                                    alt={`${tech.name} logo`}
                                                    className="w-10 h-6"
                                                    width={40} // Specify width for logo
                                                    height={24} // Specify height for logo
                                                />
                                            ) : (
                                                <span className="text-gray-800">{tech.name}</span>
                                            )}
                                            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="bg-white text-black border-2 px-6 py-3 rounded-3xl font-semibold hover:bg-customGreen hover:text-white transition-colors">
                            Get In Touch With XCon
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurSuccess;
