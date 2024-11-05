import React from "react";
import Link from "next/link";
import { FaGlobe,FaEye,FaSketch,FaClipboardList, FaShoppingBag,FaPalette,FaPencilRuler,FaImages,FaDraftingCompass, FaMobileAlt, FaFileAlt,FaLaptopCode,FaDatabase,FaLock,FaCogs,FaBullhorn,FaSearchDollar,FaEnvelope,FaChartLine,FaCut,FaMagic,FaVolumeUp,FaVideo } from "react-icons/fa";

const servicesData = {
  webDevelopment: [
    {
      icon: <FaGlobe />,
      title: "Websites",
      description: "Develop dynamic websites with best designs and scalable architectures. Ensure effortless navigation with no delays while effectively generating leads."
    },
    {
      icon: <FaShoppingBag />,
      title: "E-Commerce",
      description: "Build secure, mobile-first e-commerce platforms with user-centric functionalities. Optimize your site for search engines, making it easy to reach customers and scale your business."
    },
    {
      icon: <FaMobileAlt />,
      title: "Web Applications",
      description: "Design progressive web apps that deliver mobile-like experiences. Create interactive products that enhance engagement metrics across all devices."
    },
    {
      icon: <FaFileAlt />,
      title: "CMS",
      description: "Implement a custom, headless CMS that streamlines content staging and accelerates time-to-market through intuitive workflows and templates."
    }
  ],
  softwareDevelopment: [
    {
      icon: <FaLaptopCode />,
      title: "Custom Web Applications",
      description: "Customized web applications created to meet your unique business needs and ensure exceptional scalability and performance for growth.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design & Management",
      description: "Comprehensive database solutions that facilitate structured storage, efficient retrieval, and effective management of complex datasets.",
    },
    {
      icon: <FaLock />,
      title: "Security & Compliance",
      description: "Advanced security measures and adherence to industry standards to protect sensitive information and ensure compliance with regulations.",
    },
    {
      icon: <FaCogs />,
      title: "System Integrations",
      description: "Effortless integration with third-party systems, increasing functionality and enabling smooth data exchange across platforms.",
    },

  ],
  appDevelopment: [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "We create captivating, user-friendly mobile applications that engage audiences across any device. Our apps are thoughtfully designed to provide intuitive experiences."
    },
    {
      icon: <FaShoppingBag />,
      title: "Multi-Platform apps",
      description: "Using advanced tools, our best app developer company creates cross-platform applications that deliver native-like experiences on both iOS and Android."
    },
    {
      icon: <FaGlobe />,
      title: "API Integration",
      description: "Our custom mobile app development company integrates your app with essential third-party platforms, providing a cohesive and smooth experience."
    },
    {
      icon: <FaFileAlt />,
      title: "Post-Launch Support",
      description: "We offer continuous support after launch, including regular updates. Our software and app development company works to keep your app running smoothly."
    }
  ],
  digitalmarket: [
    {
      icon: <FaBullhorn />,
      title: "Social Media Marketing",
      description: "Boost brand visibility with targeted social media strategies across platforms like Facebook, Instagram, and Twitter."
    },
    {
      icon: <FaSearchDollar />,
      title: "Search Engine Optimization (SEO)",
      description: "Improve website rankings with SEO best practices, driving organic traffic and increasing visibility."
    },
    {
      icon: <FaEnvelope />,
      title: "Email Marketing",
      description: "Engage and nurture your audience with personalized email campaigns designed to convert leads into customers."
    },
    {
      icon: <FaChartLine />,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Generate immediate traffic and conversions with strategic PPC campaigns across platforms like Google Ads and Bing."
    }
  ],
  videoEditing: [
    {
      icon: <FaCut />,
      title: "Video Editing",
      description: "Craft engaging visual stories by trimming, arranging, and adding effects to videos, ensuring impactful content."
    },
    {
      icon: <FaMagic />,
      title: "Color Grading",
      description: "Enhance visual appeal through precise color correction and grading, aligning footage with desired aesthetics and mood."
    },
    {
      icon: <FaVolumeUp />,
      title: "Audio Synchronization",
      description: "Ensure clear audio by synchronizing voice, music, and sound effects with video content for a seamless viewing experience."
    },
    {
      icon: <FaVideo />,
      title: "Motion Graphics",
      description: "Add engaging animations, transitions, and graphic elements to enrich video presentations and enhance visual storytelling."
    }
  ],
  graphicDesign: [
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      description: "Develop unique and memorable brand identities through custom logo designs, color schemes, and typography that represent your brand's voice."
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description: "Create user-centered, visually appealing interfaces that enhance user experience and engagement across web and mobile applications."
    },
    {
      icon: <FaImages />,
      title: "Visual Content Creation",
      description: "Design eye-catching graphics, infographics, and social media visuals that captivate audiences and boost online presence."
    },
    {
      icon: <FaDraftingCompass />,
      title: "Print Design",
      description: "Produce high-quality print designs, including brochures, business cards, and banners, that convey professionalism and creativity."
    }
  ],
  uiUxDesign: [
    {
      icon: <FaEye />,
      title: "User Research",
      description: "Conduct comprehensive user research to understand needs and preferences, ensuring designs are informed and user-centric."
    },
    {
      icon: <FaSketch />,
      title: "Wireframing & Prototyping",
      description: "Create wireframes and interactive prototypes that visualize user journeys and interactions, facilitating better design decisions."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Develop responsive interfaces that provide a seamless experience across all devices, enhancing accessibility and user satisfaction."
    },
    {
      icon: <FaClipboardList />,
      title: "Usability Testing",
      description: "Conduct usability testing to gather feedback, identify pain points, and optimize the user experience for improved satisfaction."
    }
  ],



};

const BusinessProspect = ({ serviceType = "webDevelopment" }) => {
  const serviceData = servicesData[serviceType];

  return (
      <section id="business-prospect" className="py-16 bg-white min-h-[600px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl tracking-normal font-bold text-[#273447]">
            {" "}
            {serviceType === "webDevelopment" ? "Web Development"
                : serviceType === "appDevelopment" ? "Innovative App Development"
                    : serviceType === "softwareDevelopment" ? "Custom Software Development"
                        : serviceType === "digitalmarket" ? "Digital Marketing"
                            : serviceType === "videoEditing" ? "Video Editing"
                                : serviceType === "graphicDesign" ? "Graphic Design"
                                    : serviceType === "uiUxDesign" ? "UI/UX Design"
                                        : "Software"}{" "}
            Solutions to Expand Your {" "}
            <span className="text-customGreen">Business</span>
          </h2>


          <p className="mt-6 text-lg text-[#273447]">
            {serviceType === "appDevelopment" ? (
                <>
                  Achieve new levels with the best app development company in the US. We provide services for healthcare
                  app development, cloud-based quantum app development, food delivery app development, etc.
                </>
            ) : (
                <>
                  Boost{" "}
                  {serviceType === "webDevelopment"
                      ? "web"
                      : serviceType === "digitalMarket"
                          ? "digital marketing"
                          : serviceType === "softwareDevelopment"
                              ? "software development"
                              : serviceType === "videoEditing"
                                  ? "video editing"
                                  : serviceType === "uiUxDesign"
                                      ? "UI/UX design"
                                      : serviceType === "graphicDesign"
                                          ? "graphic design"
                                          : "software"}{" "}
                  with our custom web design and development services. Explore the top services of{" "}
                  {serviceType === "webDevelopment"
                      ? "web development"
                      : serviceType === "digitalMarket"
                          ? "digital marketing"
                          : serviceType === "softwareDevelopment"
                              ? "software development"
                              : serviceType === "videoEditing"
                                  ? "video editing"
                                  : serviceType === "uiUxDesign"
                                      ? "UI/UX design"
                                      : serviceType === "graphicDesign"
                                          ? "graphic design"
                                          : "software"}{" "}
                  that businesses can get at XCon Technologies.
                </>
            )}
          </p>


          {/* Icon Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {serviceData.map((service, index) => (
                <div className="flex flex-col items-center  p-6" key={index}>
                  <div className="text-customGreen text-6xl mb-12">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold  tracking-normal  text-[#273447] mb-5">
                    {service.title}
                  </h3>
                  <p className="text-md text-[#273447] text-center mb-10">
                    {service.description}
                  </p>
                </div>
            ))}
          </div>

        </div>
      </section>
  );
};

export default BusinessProspect;
