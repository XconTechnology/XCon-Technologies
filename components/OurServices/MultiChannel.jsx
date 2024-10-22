import React from "react";
import Image from "next/image";
import Link from "next/link";


const servicesData = {
  webDevelopment: {
    title: "Web Development for Multi-Channel Visibility",
    description1: "A website or web app is built to facilitate user engagement. Our web development services help create scalable digital platforms with intuitive UI/UX and perform well under various conditions.",
    description2: "We leverage threat resistance, tested architectures, continuous maintenance, and custom CMS solutions.",
    buttonText: "Start with a Free Consultation",
    sections: [
      {
        title: "UI/UX Web Design",
        content: "We design captivating interfaces and experiences using tools like Figma and Adobe Creative Cloud for increased user stickiness and cross-platform breakpoint consistency. Our designs are not just pixel-perfect but also optimized for accessibility and brand consistency that drive maximum engagement and conversion."
      },
      {
        title: "Frontend Development",
        content: "We build lightning-fast, SEO-friendly user interfaces using novel technologies that work flawlessly across devices. Our flexibility across monolithic and micro-frontend solutions brings performance and scalability to every interface we design, guaranteeing a smooth user experience and high conversion rates."
      },
      {
        title: "Backend Development",
        content: "From Node.js to Python, we architect secure and scalable server-side solutions that power your web applications. Our backend expertise ensures quick integration with frontend components for zero latency, efficient data processing, and robust API functionality."
      },
      {
        title: "Full Stack Development",
        content: "Get comprehensive hyper-connected, end-to-end web solutions with dynamic capabilities across channels. Our full-stack developers excel in building scalable, maintainable applications for your business, providing a cohesive user experience from start to finish."
      },
      {
        title: "No/Low Code Development",
        content: "Accelerate your development process with no-code and low-code platforms like Appian and OutSystems. Build and deploy web applications quickly without compromising functionality or scalability to speed up innovation and iteration."
      },
      {
        title: "Cloud Development",
        content: "Optimize your web applications for performance, security, and scalability with cloud computing solutions. Whether on AWS, Azure, or Google Cloud, our cloud development expertise ensures high availability and cost-effectiveness to scale your web presence easily."
      },
      {
        title: "Web Testing",
        content: "We thoroughly test and fix bugs and glitches across design, code, and other web components. With a shared staging environment, we let you experience the real feel and do not finalize until you are happy. Zero-downtime rollout is second to none in our quality benchmark."
      },
      {
        title: "Maintenance & Updates",
        content: "We value progressive enhancements. Our experienced team provides ongoing support, security patches, and feature upgrades to keep your web applications running smoothly and up-to-date, ensuring your online presence remains competitive and secure."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/lapi.png",
    imageAlt: "Web Development Mockup",
  },
  appDevelopment: {
    title: "App Development for Multi-Channel Presence",
    description1: "Custom mobile app development services designed to help businesses reach users across devices with engaging and intuitive apps.",
    description2: "We build scalable mobile apps with cross-platform compatibility, optimized performance, and secure frameworks.",
    buttonText: "Get a Free Consultation",
    sections: [
      {
        title: "Mobile UI/UX Design",
        content: "Our team crafts beautiful, intuitive, and responsive mobile interfaces optimized for user experience. From prototyping to design, we create mobile-first, user-centered interfaces using the latest tools and frameworks."
      },
      {
        title: "iOS & Android Development",
        content: "We develop robust, scalable, and secure native mobile applications for both iOS and Android platforms, utilizing cutting-edge technologies to provide seamless functionality across devices."
      },
      {
        title: "Cross-Platform Development",
        content: "With tools like React Native and Flutter, we build cross-platform applications that provide a native-like experience on both iOS and Android. This approach reduces time-to-market while ensuring high-quality performance."
      },
      {
        title: "API Integration & Backend Development",
        content: "Our expert developers handle API integrations and backend services to create mobile applications that sync flawlessly with web services and third-party platforms, ensuring a unified experience across devices."
      },
      {
        title: "Mobile App Testing",
        content: "We conduct thorough testing across multiple devices and platforms to identify and fix any issues before deployment. Our comprehensive testing guarantees your app runs smoothly and is bug-free."
      },
      {
        title: "Post-Launch Support & Updates",
        content: "Our post-launch services include monitoring app performance, providing updates, and rolling out new features to keep your app relevant and fully functional as your business grows."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/mobile_app_leap.webp",
    imageAlt: "App Development Mockup",
  }
};

const MultiChannel = ({ serviceType = "webDevelopment" }) => {
  // Get the specific data for the service type (webDevelopment or appDevelopment)
  const { title, description1, description2, buttonText, sections, imageUrl, imageAlt } = servicesData[serviceType];

  return (
      <section id="section-multiChannel" className="py-12 bg-white">
        {/* First Section */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Image */}
          <div className="md:w-1/2 lg:w-1/2 relative max-w-lg mx-auto -ml-6">
            <Image
                src={imageUrl}
                alt={imageAlt}
                width={900} // Increased image width
                height={500} // Increased image height
                className="w-full h-auto rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Right content */}
          <div className="md:w-3/5 lg:w-3/5 space-y-4">
            <h2 className="text-5xl font-bold leading-tight text-[#273447]">
              {title}
            </h2>
            <p className="text-lg text-[#273447]">{description1}</p>
            <p className="text-lg text-[#273447]">{description2}</p>
            <Link href="/consultation">
              <button className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-customGreen hover:border-customGreen hover:text-white">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="bg-gray-200 w-full py-10 mt-20">
          <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Left Section */}
            <div className="md:w-1/2 lg:w-2/5 space-y-4 md:mr-10">
              <h2 className="text-5xl font-bold leading-tight text-[#273447]">
                {serviceType === "webDevelopment"
                    ? "Web Development Services for Novel, Best-Functioning Websites"
                    : "App Development Services for Engaging Mobile Experiences"}
              </h2>
            </div>

            {/* Right Scrollable Section */}
            <div className="md:w-1/2 lg:w-3/5 overflow-y-auto h-96 px-4 space-y-6">
              {sections.map((section, index) => (
                  <div className="space-y-4" key={index}>
                    <h3 className="text-2xl font-semibold text-[#273447]">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-lg text-[#273447]">{section.content}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default MultiChannel;
