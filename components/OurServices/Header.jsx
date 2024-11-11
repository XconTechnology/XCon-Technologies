import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header_01 from '../header/Header_01';

const servicesData = {
  webDevelopment: {
    title: "Built for User-Focused, Scalable Web Solutions!",
    description: "Get custom web development services that's optimized for speed and function, keeping users engaged.",
    buttonText: "Request a Quote",
    imageUrl: "/assets/img_placeholder/th-1/computer-mockup.png",
    imageAlt: "Website Mockup",
  },
  appDevelopment: {
    title: "Get the Best Custom App Development Services!",
    description: "Being the best custom app development company, our team creates customized apps according to your expectations. Our best app development software combines advanced technology with user-focused design.",
    buttonText: "Get a Free Consultation",
    imageUrl: "/assets/img_placeholder/th-1/app-mockup.png",
    imageAlt: "App Mockup",
  },
  softwareDevelopment: {
    title: "Get the Best Customer Software Development Services!",
    description: "Improve your online presence with XCon – a trusted IT company in USA. We are dedicated to bringing global vision to life through high-performance custom software for businesses.",
    buttonText: "Get a Free Consultation",
    imageUrl: "/assets/img_placeholder/th-1/Softwaredevelopment.png",
    imageAlt: "csm Mockup",
  },
  digitalmarket: {
    title: "Best Digital Marketing Agency in Charlotte NC!",
    description: 'Our digital marketing agency allows businesses to overcome today’s evolving online challenges. We do not just improve your brand’s SERP ranking but our online marketing services develop a brand story according to your target audience and drives conversions at every stage of your business journey.',
    imageUrl:"/assets/img_placeholder/th-1/DigitalMarketing .png" ,
    imageAlt: "digital Mockup",
  },
  videoEditing: {
    title: "Craft stories from your footage with our editing!",
    description: "Our expert editors create engaging visuals that attract viewers and drive results for brands, businesses, and creators alike. By using the best editing tool for videos, we bring your vision to life and make every second worth-watching.",
    buttonText: "Explore Video Editing",
    imageUrl: "/assets/img_placeholder/th-1/videoediting.png",
    imageAlt: "video editing mockup",
  },
  graphicDesign: {
    title: "Graphic Design Services to Grow Your Brand",
    description: 'We specialize in providing all graphic design services that improve the identity of your brand. Whether you need logos, marketing materials, or web graphics, our custom graphic design services bring your ideas to life with strategy and creativity.',
    buttonText: "Discover Graphic Design",
    imageUrl: "/assets/img_placeholder/th-1/Graphic_design.png",
    imageAlt: "graphic design mockup",
  },
  uiUxDesign: {
    title: "Get Engaging Interfaces with UI UX Graphic Design!",
    description: "At XCon, our UI UX design and development services specialize in designing intuitive, user-focused interfaces. Our approach uses in-depth user research, usability testing, and creative innovation to create products that deliver smooth, interactive UI design.",
    imageUrl: "/assets/img_placeholder/th-1/ui ux.png",
    imageAlt: "UI/UX Design Mockup",
  },


};

const Header = ({ serviceType = "webDevelopment" }) => {
  const { title, description, buttonText, imageUrl, imageAlt } = servicesData[serviceType];

  return (
    <div>
      <Header_01 />

      <section id="section-Header" className="bg-[#2a3e50] py-20"> {/* Increased padding and margin */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="md:w-1/2 lg:w-1/3 text-white">
            <p className="text-customGreen uppercase font-semibold">
              {serviceType === "webDevelopment" ? "Custom Web Development Services" :
                serviceType === "appDevelopment" ? "App Development Services" :
                    serviceType === "softwareDevelopment" ? "Custom Software Development Services":
                    serviceType === "digitalmarket" ? "Digital Marketing Services":
                        serviceType === "videoEditing" ? "video Editing Services" :
                            serviceType === "graphicDesign" ? "Graphic Design Services" :
                            serviceType === "uiUxDesign" ? "UI/UX Design Services" :

                        "Service"}
            </p>
            <h1 className="text-4xl md:text-4xl font-bold tracking-normal mt-4">
              {title}
            </h1>
            <p className="text-[16px] mt-4">
              {description}
            </p>

          </div>

          {/* Right side image */}
          <div className="md:w-1/2 lg:w-2/3  md:mt-0 relative flex justify-end">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={700}
              height={700}
              className="rounded-lg shadow-lg mt-12"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
