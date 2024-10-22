import React from "react";
import Link from "next/link";
import { FaGlobe, FaShoppingBag, FaMobileAlt, FaFileAlt } from "react-icons/fa";

// Define the service data
const servicesData = {
  webDevelopment: [
    {
      icon: <FaGlobe />,
      title: "Websites",
      description: "Create dynamic websites with responsive design and scalable architectures. Offer easy navigation with zero latency and generate leads."
    },
    {
      icon: <FaShoppingBag />,
      title: "E-Commerce",
      description: "Build mobile-first, secure e-commerce platforms with user-focused features. Optimize for SERPs, reach customers easily, and scale."
    },
    {
      icon: <FaMobileAlt />,
      title: "Web Applications",
      description: "Progressive web apps for mobile-like experiences. Interactive products that keep dwell metrics above par across devices."
    },
    {
      icon: <FaFileAlt />,
      title: "Content Management System",
      description: "Custom, headless CMS for automated content staging and accelerated time-to-market using intuitive workflows and templates."
    }
  ],
  appDevelopment: [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Engaging and intuitive mobile applications that reach users across devices, optimized for performance and user experience."
    },
    {
      icon: <FaShoppingBag />,
      title: "Cross-Platform Development",
      description: "Build applications with tools like React Native and Flutter, ensuring high-quality performance and native-like experiences."
    },
    {
      icon: <FaGlobe />,
      title: "API Integration",
      description: "Seamless integration of your app with web services and third-party platforms for a unified experience."
    },
    {
      icon: <FaFileAlt />,
      title: "Post-Launch Support",
      description: "Ongoing support and updates to keep your mobile application relevant and fully functional."
    }
  ]
};

const BusinessProspect = ({ serviceType = "webDevelopment" }) => {
  const serviceData = servicesData[serviceType];

  return (
      <section id="business-prospect" className="py-16 bg-white min-h-[600px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-[#273447]">
            Custom {serviceType === "webDevelopment" ? "Web" : "App"} Development Services to Broaden{" "}
            <span className="text-customGreen">Business Prospects</span>
          </h2>
          <p className="mt-6 text-lg text-[#273447]">
            Experience {serviceType === "webDevelopment" ? "web" : "app"} development prowess with a team specialized in agile
            project management and delivery. Here are the top {serviceType === "webDevelopment" ? "web" : "app"} development
            solutions businesses trust XCon for.
          </p>

          {/* Icon Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {serviceData.map((service, index) => (
                <div className="flex flex-col items-center p-6" key={index}>
                  <div className="text-customGreen text-6xl mb-12">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#273447] mb-5">
                    {service.title}
                  </h3>
                  <p className="text-md text-[#273447] text-center mb-10">
                    {service.description}
                  </p>
                </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <Link href="/project-scope">
            <span className="button  rounded-[50px] border-2  bg-black py-4 text-white after:bg-customGreen hover:border-customGreen hover:text-white">
              Discuss Project Scope
            </span>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default BusinessProspect;
