import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header_01 from '../header/Header_01'; // Importing your Header (Navbar) component

// Define the service data for Web Development and App Development
const servicesData = {
  webDevelopment: {
    title: "Built-for-Experience, Scalable Websites",
    description: "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    buttonText: "Request a Quote",
    imageUrl: "/assets/img_placeholder/th-1/computer-mockup.png",
    imageAlt: "Website Mockup",
  },
  appDevelopment: {
    title: "Innovative Mobile App Solutions",
    description: "We build custom mobile applications that are user-friendly, responsive, and engaging across all platforms.",
    buttonText: "Get a Free Consultation",
    imageUrl: "/assets/img_placeholder/th-1/app-mockup.png",
    imageAlt: "App Mockup",
  },
};

const Header = ({ serviceType = "webDevelopment" }) => {
  // Get the specific data for the service type (webDevelopment or appDevelopment)
  const { title, description, buttonText, imageUrl, imageAlt } = servicesData[serviceType];

  return (
    <div>
      {/* Navbar Component */}
      <Header_01 />  {/* Ensure this is your correct Navbar component */}

      <section id="section-Header" className="bg-[#2a3e50] py-20"> {/* Increased padding and margin */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="md:w-1/2 lg:w-1/3 text-white">
            <p className="text-customGreen uppercase font-semibold">Custom {serviceType === "webDevelopment" ? "Web" : "App"} Development Services</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
              {title}
            </h1>
            <p className="text-lg mt-4">
              {description}
            </p>
            <button className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-customGreen hover:border-customGreen hover:text-white'>
              {buttonText}
            </button>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 relative flex justify-end">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={700}
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
