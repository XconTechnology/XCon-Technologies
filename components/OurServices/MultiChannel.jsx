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
  softwareDevelopment: {
    title: "Software Development for Multi-Channel Presence",
    description1: "Choose a reputable partner for your business project – a professional team that understands your needs. Our software development services ensure personalized solutions, including unique software creation, system updates, and safe, scalable integration.",
    description2: "Check out our amazing reviews, which demonstrate our commitment to excellence as a top-ranked software development company in the USA.",
    buttonText: "Get a Free Consultation",
    sections: [
      {
        title: "Mobile UI/UX Design",
        content: "Our team crafts beautiful, intuitive, and responsive mobile interfaces optimized for user experience. From prototyping to design, we create mobile-first, user-centered interfaces using the latest tools and frameworks.",
        points: 15
      },
      {
        title: "iOS & Android Development",
        content: "We develop robust, scalable, and secure native mobile applications for both iOS and Android platforms, utilizing cutting-edge technologies to provide seamless functionality across devices.",
        points: 25
      },
      {
        title: "Cross-Platform Development",
        content: "With tools like React Native and Flutter, we build cross-platform applications that provide a native-like experience on both iOS and Android. This approach reduces time-to-market while ensuring high-quality performance.",
        points: 20
      },
      {
        title: "API Integration & Backend Development",
        content: "Our expert developers handle API integrations and backend services to create mobile applications that sync flawlessly with web services and third-party platforms, ensuring a unified experience across devices.",
        points: 30
      },
      {
        title: "Mobile App Testing",
        content: "We conduct thorough testing across multiple devices and platforms to identify and fix any issues before deployment. Our comprehensive testing guarantees your app runs smoothly and is bug-free.",
        points: 10
      },
      {
        title: "Post-Launch Support & Updates",
        content: "Our post-launch services include monitoring app performance, providing updates, and rolling out new features to keep your app relevant and fully functional as your business grows.",
        points: 15
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/customdev.webp",
    imageAlt: "Software Development Mockup",
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
  },
  digitalmarket: {
    title: "Expand Your Reach with Digital Marketing",
    description1: "Our digital marketing services are designed to help your business connect with audiences across digital channels with engaging and strategic approaches.",
    description2: "We create data-driven campaigns that improve brand visibility, drive user engagement, and generate conversions.",
    buttonText: "Consult Digital Strategy",
    sections: [
      {
        title: "Search Engine Optimization (SEO)",
        content: "We optimize your online presence to enhance search visibility, drive organic traffic, and improve SERP rankings. Our team applies the latest SEO strategies, including on-page, off-page, and technical SEO, to ensure long-term growth."
      },
      {
        title: "Social Media Marketing",
        content: "We craft targeted social media strategies to engage audiences, build community, and drive brand loyalty. Our team handles content creation, scheduling, and analytics across platforms like Facebook, Instagram, LinkedIn, and Twitter."
      },
      {
        title: "Content Marketing",
        content: "Our content marketing services involve creating valuable and relevant content that resonates with your target audience, building trust and authority in your industry. We produce blogs, videos, infographics, and more."
      },
      {
        title: "Email Marketing Campaigns",
        content: "We design and execute personalized email marketing campaigns to nurture leads and retain customers. Our campaigns are optimized for engagement and conversion, utilizing segmentation, A/B testing, and automation."
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        content: "Our PPC experts manage targeted ad campaigns on Google, Bing, and social media platforms to maximize ROI. We focus on keyword optimization, ad copy, and bid management to deliver cost-effective results."
      },
      {
        title: "Analytics & Performance Tracking",
        content: "We provide detailed analytics and performance reports to measure campaign effectiveness and make data-driven adjustments. Our approach ensures continuous improvement and alignment with business goals."
      }
    ],
    imageUrl: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063172.jpg?t=st=1729936722~exp=1729940322~hmac=51eb7103ff8486b039ab96d1fe440ee968d721d16c3d02bbd9ba5a38dd391ae7&w=1060",
    imageAlt: "Digital Marketing Mockup",
  },
  videoEditing: {
    title: "Bring Your Vision to Life with Professional Video Editing",
    description1: "Transform raw footage into compelling visual stories with our expert video editing services. From social media content to promotional videos, we bring ideas to life with a focus on engagement and brand storytelling.",
    description2: "Our team combines creativity with the latest software tools, including Adobe Premiere Pro, Final Cut Pro, and After Effects, to produce polished, professional results that captivate audiences.",
    buttonText: "Get a Free Video Editing Consultation",
    sections: [
      {
        title: "Corporate Video Editing",
        content: "We craft corporate videos that communicate your brand’s message effectively, adding transitions, graphics, and color correction to enhance visual impact and brand presence."
      },
      {
        title: "Social Media Content Editing",
        content: "Create engaging, platform-optimized videos for social media. Our team edits short-form content that aligns with trends, captures attention, and enhances shareability on platforms like Instagram, TikTok, and YouTube."
      },
      {
        title: "Promotional Videos",
        content: "Our promotional video editing services are designed to highlight products, services, or events. We use dynamic cuts, effects, and sound design to create impactful videos that boost conversions and reach."
      },
      {
        title: "Post-Production Services",
        content: "We offer comprehensive post-production services, including color grading, sound mixing, and special effects. Our meticulous attention to detail ensures a professional finish for any type of project."
      },
      {
        title: "Animation & Motion Graphics",
        content: "Enhance your videos with animated elements and motion graphics. We create visuals that add depth and engagement to your content, from logo animations to explainer videos."
      },
      {
        title: "Video Quality Optimization",
        content: "Ensure your videos look their best across all devices. We focus on resolution, clarity, and format compatibility, optimizing videos for smooth playback and high-quality visuals."
      },
      {
        title: "Feedback & Revision Process",
        content: "Our editing process includes multiple review stages to ensure your vision is fully realized. We collaborate closely with you, incorporating feedback until you’re satisfied with the final product."
      },
      {
        title: "Ongoing Support & Updates",
        content: "Receive continued support for future edits or reformatting needs. We assist in keeping your video content relevant and up-to-date as your brand evolves."
      }
    ],
    imageUrl: "https://img.freepik.com/free-photo/empty-modern-creative-agency-office-with-dual-monitors-setup-with-processing-video-film-montage-vide_482257-3406.jpg?t=st=1730094138~exp=1730097738~hmac=8dc0a8a8c3956a5bbccf7bf1afb94b650287618766f90b41e29e40067256c448&w=1380",
    imageAlt: "Video Editing Mockup",
  },



};

const MultiChannel = ({ serviceType = "webDevelopment" }) => {
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
              <h2 className="text-4xl font-bold leading-tight text-[#273447]">
                {serviceType === "webDevelopment" ? "Web Development Services for Novel, Best-Functioning Websites"
                    : serviceType === "appDevelopment" ? "App Development Services for Engaging Mobile Experiences"
                        : serviceType === "softwareDevelopment" ? "Software Development Services for Comprehensive Solutions"
                            : serviceType === "digitalmarket" ? "Digital Marketing Services to Amplify Your Online Presence"
                                : serviceType === "videoEditing" ? "Video Editing Services to Amplify Your Brand’s Visual Presence"
                                : "Our Services"}
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
