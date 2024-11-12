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
      description: "Enhance your brand’s visibility with our digital marketing agency in Charlotte NC that builds engagement and develops loyalty by reaching audiences where they’re most active."
    },
    {
      icon: <FaSearchDollar />,
      title: "SEO",
      description: "Boost your website’s search engine rankings and organic traffic with our SEO services. From keyword optimization to technical SEO, we ensure your site remains visible and relevant."
    },
    {
      icon: <FaEnvelope />,
      title: "Email Marketing",
      description: "Build strong relationships with your audience through our customized email campaigns. Our digital marketing consultant for small business focuses on driving conversions."
    },
    {
      icon: <FaChartLine />,
      title: "PPC",
      description: "Drive immediate results with precisely targeted PPC advertising on platforms like Google Ads. Our approach prioritizes keyword targeting and cost-effective bidding to maximize ROI."
    }
  ],
  videoEditing: [
    {
      icon: <FaCut />,
      title: "Video Editing",
      description: "Change raw footage into captivating stories by refining, trimming, and enhancing with professional effects to create powerful, engaging content."
    },
    {
      icon: <FaMagic />,
      title: "Color Grading",
      description: "Elevate your visuals with expert color correction and grading, ensuring your footage aligns perfectly with your brand’s aesthetic and vibe."
    },
    {
      icon: <FaVolumeUp />,
      title: "Audio Synchronization",
      description: "Achieve flawless audio by smoothly syncing voice overs, music, and sound effects, ensuring a smooth, professional sound experience throughout your video."
    },
    {
      icon: <FaVideo />,
      title: "Motion Graphics",
      description: "Infuse your videos with dynamic animations, sleek transitions, and eye-catching graphic elements to improve storytelling and captivate your audience."
    }
  ],
  graphicDesign: [
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      description: "Create a distinctive and memorable brand identity with custom logo designs, color palettes, and typography that resonate with your audience."
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description: "Design intuitive, visually engaging interfaces that improve user experience and drive interaction, enhancing both web and mobile applications."
    },
    {
      icon: <FaImages />,
      title: "Visual Content Creation",
      description: "Create striking graphics, infographics, and social media visuals that capture attention and strengthen your brand's online presence."
    },
    {
      icon: <FaDraftingCompass />,
      title: "Print Design",
      description: "Deliver exceptional print designs, from brochures to business cards and banners, ensuring professionalism and creativity in every printed piece."
    }
  ],
  uiUxDesign: [
    {
      icon: <FaEye />,
      title: "User Research",
      description: "We conduct thorough user research to get insights into your audience's behaviors and preferences and making designs that are both user-centric and strategic."
    },
    {
      icon: <FaSketch />,
      title: "Wireframing",
      description: "Our best ecommerce UI design team develops detailed wireframes and prototypes to visualize the user journey, enabling feedback and refined design decisions."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "We create creative UI UX designs that adapt perfectly across all devices, providing a consistent and satisfying user experience on mobile, tablet, and desktop."
    },
    {
      icon: <FaClipboardList />,
      title: "Usability Testing",
      description: "Through rigorous usability testing, our digital marketing and UX design gather user feedback to identify and resolve any challenges, ensuring a user-friendly experience."
    }
  ],



};

const BusinessProspect = ({ serviceType = "webDevelopment" }) => {
  const serviceData = servicesData[serviceType];

  return (
      <section id="business-prospect" className="py-16 bg-white min-h-[600px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl tracking-normal font-bold text-[#273447]">
            {serviceType === "webDevelopment" && "Web Development Solutions to Expand Your Business "}
            {serviceType === "appDevelopment" && "Innovative App Development Solutions to Expand Your Business "}
            {serviceType === "softwareDevelopment" && "Custom Software Development Solutions to Expand Your Business"}
            {serviceType === "videoEditing" && "Modern Video Editing Solutions to Grow Your Brand "}
            {serviceType === "graphicDesign" && "Transform Your Brand with Expert Graphic Design Services "}
            {serviceType === "uiUxDesign" && "Customized UI/UX Solutions for Business Growth"}
            {serviceType === "digitalmarket" && "Grow with our Best Small Business Digital Marketing Solutions"}

          </h2>


          <p className="mt-6 text-lg text-[#273447]">
            {serviceType === "appDevelopment" ? (
                <>
                  Achieve new levels with the best app development company in the US. We provide services for healthcare
                  app development, cloud-based quantum app development, food delivery app development, etc.
                </>
            ) : serviceType === "digitalmarket" ? (
                <>
                  Increase your digital presence with our digital marketing services for small businesses. At XCon Technologies, our digital marketing manager offers modern solutions to improve your business growth.
                </>
            ) : serviceType === "videoEditing" ? (
                <>
                  Enhance your business's reach with our specialized video editing services designed to captivate and engage. Explore top video editing services we offer at XCon Technologies.
                </>
            ) : serviceType === "graphicDesign" ? (
                <>
                  At XCon Technologies, we specialize in delivering custom graphic design services that help businesses build a unique visual identity. Let our graphic design service packages help you stand out in a competitive market with visuals that leave a lasting impression.
                </>
            ) : serviceType === "uiUxDesign" ? (
                <>
                  Elevate your business with XCon Technologies customized UI/UX design services. Discover how our expert design solutions can drive user engagement, satisfaction, and brand impact.
                </>
            ) : (
                <>
                Boost{" "}
                  {serviceType === "webDevelopment" ? "web"
                          : serviceType === "softwareDevelopment" ? "software development"
                                          : "software"}{" "}
                  with our custom web design and development services. Explore the top services of{" "}

                  {serviceType === "webDevelopment"
                      ? "web development"
                          : serviceType === "softwareDevelopment" ? "software development"
                              : serviceType === "videoEditing" ? "video editing"
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
