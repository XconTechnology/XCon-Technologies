import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic import for Slider component
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const Image = dynamic(() => import("next/image"), { ssr: false });
const Link = dynamic(() => import("next/link"), { ssr: false });

// Projects data organized by serviceType
const projectsData = {
  webDevelopment: [
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/Laptop-01.png",
      title: "Beautiful Bathrooms In Dublin",
      description: "Your ultimate source for innovative and high-quality bathroom solutions, expertly tailored to meet your needs",
    },
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/Laptop-02.png",
      title: "Door 2 Door House Removal Services",
      description: "Delivering affordability without compromise – explore our array of services at budget-friendly rates.",
    },
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/Laptop-03.png",
      title: "Carpets & Flooring Specialists",
      description: "Work with a professional Interior Designer anywhere in Ireland from the comfort of your own home.",
    },
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/Laptop-04.png",
      title: "We construct your dream projects",
      description: "We specialize in all aspects of construction from home extensions, home renovations & new home builds.",
    },
  ],
  appDevelopment: [
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/App1.png",
      title: "Beautiful Bathrooms In Dublin",
      description: "Your ultimate source for innovative and high-quality bathroom solutions, expertly tailored to meet your needs",
    },
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/App2.png",
      title: "Door 2 Door House Removal Services",
      description: "Delivering affordability without compromise – explore our array of services at budget-friendly rates.",
    },
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/App3.png",
      title: "Carpets & Flooring Specialists",
      description: "Work with a professional Interior Designer anywhere in Ireland from the comfort of your own home.",
    },
    {
      logoSrc: "/assets/img_placeholder/Dark Logo.png",
      laptopSrc: "/assets/img_placeholder/th-1/App4.png",
      title: "We construct your dream projects",
      description: "We specialize in all aspects of construction from home extensions, home renovations & new home builds.",
    },
  ],
};

const Projects = ({ serviceType }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };

  if (!mounted || !projectsData[serviceType]) return null;

  return (
      <section className="py-12">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold text-[#273447] tracking-normal">
            Complete {" "}
            <span className="text-customGreen">
              {serviceType === "webDevelopment" ? "Web Development" :
                  serviceType === "appDevelopment" ? "App Development" :
                      serviceType === "softwareDevelopment" ? "Custom Software Development Services":
                          "Service"}


            </span> - From Launch to Redesigns
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto mt-20 overflow-hidden select-none">
          <Slider {...settings}>
            {projectsData[serviceType].map((project, index) => (
                <div key={index} className="flex justify-center">
                  <div className="flex flex-col bg-white rounded-lg border border-gray-300 shadow-lg mx-4 max-w-[850px]">
                    <div className="flex flex-col md:flex-row items-start justify-between p-8 md:p-10">
                      <div className="flex flex-col items-start justify-start mb-8 md:mb-0">
                        <Image
                            src={project.logoSrc}
                            alt={`${project.title} Logo`}
                            width={200}
                            height={200}
                            className="mb-5 rounded-lg"
                        />
                        <h3 className="text-3xl font-semibold text-gray-800 mb-5 text-left">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-left">
                          {project.description}
                        </p>

                      </div>

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
