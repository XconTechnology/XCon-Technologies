import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header_01 from '../header/Header_01';

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
  softwareDevelopment: {
    title: "Custom Software Development Company",
    description: "Grow your global presence with the leading US-based custom software development company. To help you achieve your goals, we embrace diverse programming languages, platforms, and cutting-edge tech.",
    buttonText: "Get a Free Consultation",
    imageUrl: "/assets/img_placeholder/th-1/csm.webp",
    imageAlt: "csm Mockup",
  },
  digitalmarket: {
    title: "Reach Further with  Digital Marketing",
    description: "Our digital marketing agency helps businesses navigate growing modern online challenges with strategic engagement channel(s) selection, integrated marketing communications, and compelling brand building. We not only get your brand to win over the SERPs but also create a brand story that resonates with user personas and compels conversion at every stage.",
    buttonText: "Consult Digital Strategy",
    imageUrl: "https://img.freepik.com/premium-vector/flat-style-digital-marketing-illustration-featuring-mobile-marketing_1033579-91541.jpg?w=1380",
    imageAlt: "digital Mockup",
  },
  videoEditing: {
    title: "Bring Your Vision to Life with Video Editing",
    description: "Our video editing services transform raw footage into captivating visual stories that engage and inspire. Whether you're looking to promote a product, share a brand story, or capture an event, we employ dynamic editing techniques, compelling graphics, and seamless transitions to make your vision a reality.",
    buttonText: "Explore Video Editing",
    imageUrl: "https://img.freepik.com/free-photo/videographer-color-correcting-clips-while-listening-music-headphones_482257-82266.jpg?t=st=1730093875~exp=1730097475~hmac=e3a962ed7fe0e97c141249c31817259e8356067e365bbccac21c31499e4c3810&w=1380",
    imageAlt: "video editing mockup",
  },
  graphicDesign: {
    title: "Creative Graphic Design Services",
    description: "Elevate your brand with visually compelling graphic design solutions tailored to capture your audience’s attention. From logos and branding to marketing materials, our team blends creativity with strategy to bring your vision to life across digital and print media.",
    buttonText: "Discover Graphic Design",
    imageUrl: "https://img.freepik.com/free-vector/design-concept-illustration-idea-style-creativity-projects_613284-3229.jpg?t=st=1730097373~exp=1730100973~hmac=e5db6f13896391455273e86e20742c10082dc12589098027d93238d005a4eaf6&w=1380",
    imageAlt: "graphic design mockup",
  },
  uiUxDesign: {
    title: "User-Centric UI/UX Design Solutions",
    description: "At XCon, we focus on creating intuitive and engaging user interfaces and experiences that enhance user satisfaction. Our design approach combines research, usability testing, and innovative design to ensure your products not only look great but also provide seamless interactions.",
    buttonText: "Start Your UI/UX Project",
    imageUrl: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?t=st=1730098545~exp=1730102145~hmac=feee05dec2cd9d7c5372e6861ba906e44be803fe36ae7d88da214b6863594bc4&w=1380",
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
                serviceType === "appDevelopment" ? "Custom App Development Services" :
                    serviceType === "softwareDevelopment" ? "Custom Software Development Services":
                    serviceType === "digitalmarket" ? "Digital Marketing Services":
                        serviceType === "videoEditing" ? "video Editing Services" :
                            serviceType === "graphicDesign" ? "Graphic Design Services" :
                            serviceType === "uiUxDesign" ? "UI/UX Design Services" :

                        "Service"}
            </p>
            <h1 className="text-4xl md:text-4xl font-bold leading-tight mt-4">
              {title}
            </h1>
            <p className="text-[16px] mt-4">
              {description}
            </p>
            <button className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-customGreen hover:border-customGreen hover:text-white'>
              {buttonText}
            </button>
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
