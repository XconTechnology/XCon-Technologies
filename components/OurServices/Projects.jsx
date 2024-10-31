import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic'; // Dynamic import for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic import of Slider component
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Dummy projects data for slider
const projects = [
  {
    logoSrc: "/assets/img_placeholder/Dark Logo.png",
    laptopSrc: "/assets/img_placeholder/th-1/project-1.webp",
    title: "XCon Technologies Projects 1 Title",
    description: "This is a brief description of Project 1.",
    caseStudy: "Case Studies",
  },
  {
    logoSrc: "/assets/img_placeholder/Dark Logo.png",
    laptopSrc: "/assets/img_placeholder/th-1/project-2.webp",
    title: "XCon Technologies Projects 2 Title",
    description: "This is a brief description of Project 2.",
    caseStudy: "Case Studies",
  },
  {
    logoSrc: "/assets/img_placeholder/Dark Logo.png",
    laptopSrc: "/assets/img_placeholder/th-1/project-3.webp",
    title: "XCon Technologies Projects 3 Title",
    description: "This is a brief description of Project 3.",
    caseStudy: "Case Studies",
  },
  {
    logoSrc: "/assets/img_placeholder/Dark Logo.png",
    laptopSrc: "/assets/img_placeholder/th-1/project-4.webp",
    title: "XCon Technologies Projects 4 Title",
    description: "This is a brief description of Project 4.",
    caseStudy: "Case Studies",
  },
];

const Projects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true to ensure the component is fully loaded
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 768, // Mobile view breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: "0px", // No padding on mobile
          centerMode: false, // Disable center mode for mobile
        },
      },
    ],
  };

  if (!mounted) return null; // Avoid rendering the component before it mounts

  return (
    <section className="py-12">
      <div className="container mx-auto text-center mb-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-[#273447] leading-tight">
          Complete <span className={"text-customGreen"}>Web Development</span>  {" "} - From Launch to Redesigns
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto mt-20 overflow-hidden select-none">
        <Slider {...settings}>
          {/* Slider Items */}
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col bg-white rounded-lg border border-gray-300 shadow-lg mx-4 max-w-[850px]">
                {/* Updated max width */}
                <div className="flex flex-col md:flex-row items-start justify-between p-8 md:p-10">
                  <div className="flex flex-col items-start justify-start mb-8 md:mb-0">
                    <Image
                      src={project.logoSrc}
                      alt={`${project.title} Logo`}
                      width={200} // Adjusted width
                      height={200} // Adjusted height
                      className="mb-5 rounded-lg"
                    />
                    <h3 className="text-3xl font-semibold text-gray-800 mb-5 text-left">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-left">
                      {project.description}
                    </p>
                    <Link href="/" className="text-gray-600 underline text-left">
                      {project.caseStudy}
                    </Link>
                  </div>

                  {/* Laptop Image */}
                  <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
                    <Image
                      src={project.laptopSrc}
                      alt={`Laptop for ${project.title}`}
                      width={400}
                      height={350}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
