import React from "react";
import Image from "next/image";
import Link from "next/link";


const servicesData = {
  webDevelopment: {
    title: "Custom Website Development for Maximum Reach",
    description1: "Looking for website designers for small business? A website is designed to maximize user interaction and engagement. Our web design development services provide scalable, high-performance digital platforms with streamlined UI/UX.",
    description2: "Our web design terms prioritize security, ongoing maintenance, and custom CMS solutions to support your website’s adaptability.",
    buttonText: "Start with a Free Consultation",
    sections: [
      {
        title: "UI/UX Web Design",
        content: "Our team creates visually engaging, user-focused designs that enhance engagement and brand alignment. Using tools like Figma and Adobe Creative Cloud, our website developers for small business deliver interfaces that are not only pixel-perfect but also accessible and consistent across all devices, improving user engagement and conversions."
      },
      {
        title: "Frontend Development",
        content: "Our website developers for small business create fast, SEO-optimized interfaces with modern technologies to ensure a seamless experience across all devices. Our flexible approach to both monolithic and micro-frontend solutions improve performance and scalability, optimizing each design for a smooth user journey and higher conversion rates."
      },
      {
        title: "Backend Development",
        content: "With expertise in server-side frameworks like Node.js and Python, our custom website development company develops scalable backend systems that power reliable web applications. Our backend solutions integrate seamlessly with frontend components, ensuring best data processing and API functionality for the best digital experience."
      },
      {
        title: "Full Stack Development",
        content: "Our full-stack developers offer end-to-end solutions that connect all web application components, from front to back. Our responsive website design company build dynamic, scalable applications designed to provide a cohesive user experience and support long-term growth, delivering the best web solutions according to your business needs."
      },
      {
        title: "No/Low Code Development",
        content: "Accelerate your project timelines without sacrificing functionality through no-code and low-code platforms like Appian and OutSystems. Our streamlined development approach enables rapid deployment, helping you innovate and iterate efficiently for faster market readiness."
      },
      {
        title: "Cloud Development",
        content: "Harness the power of cloud computing to optimize your web application for security, scalability, and cost-efficiency. Our custom web solutions span AWS, Azure, and Google Cloud, ensuring high availability and performance for your web presence, easily adaptable to growth and demand."
      },
      {
        title: "Web Testing",
        content: "We meticulously test all design and code components, identifying and resolving bugs and ensuring seamless functionality across all platforms. Using a shared staging environment, web design terms give you a true-to-life experience before launch and guarantee zero-downtime rollouts, meeting the highest quality standards."
      },
      {
        title: "Maintenance & Updates",
        content: "Our ongoing support ensures your applications remain competitive, secure, and current even after custom web development. We provide regular updates, security patches, and feature enhancements to keep your web presence running smoothly and aligned with evolving industry standards and user expectations."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/lapi.png",
    imageAlt: "Web Development Mockup",
  },
  softwareDevelopment: {
    title: "Custom Software Solution for Multi-Platform Success",
    description1: "Selecting the right custom software development services company for your business project is key to success. Our custom software developer delivers the best custom software design that support a smooth, multi-channel presence and help you connect with customers wherever they are.",
    description2: "From creating unique software to providing system enhancements and scalable integrations, our custom programming services ensure every solution is according to your needs.",
    buttonText: "Get a Free Consultation",
    sections: [
      {
        title: "Mobile UI/UX Design",
        content: "Our software engineering professionals creates stunning, user-friendly, and responsive mobile interfaces that prioritize user experience. From initial prototyping to final design, our mobile app developers focus on user-focused interfaces using the latest design tools.",
        points: 15
      },
      {
        title: "iOS & Android Development",
        content: "Our mobile application developers specialize in building secure, scalable mobile applications for both iOS and Android platforms. By leveraging modern technologies, we ensure seamless functionality of mobile application development across all devices.",
        points: 25
      },
      {
        title: "Cross-Platform Development",
        content: "Utilizing frameworks like React Native and Flutter, we create cross-platform custom software for small business that deliver a native-like experience on both iOS and Android. This strategy improves time-to-market while maintaining high-quality performance.",
        points: 20
      },
      {
        title: "API Integration & Backend Development",
        content: "Our skilled developers manage API integrations and backend services, ensuring that your mobile phone app development process sync smoothly with web services and third-party platforms for the best user experience.",
        points: 30
      },
      {
        title: "Mobile App Testing",
        content: "Our custom software development services company perform detailed testing on a variety of devices and platforms to identify and resolve any issues prior to deployment. Our rigorous testing process ensures your computer software development operates smoothly.",
        points: 10
      },
      {
        title: "Post-Launch Support & Updates",
        content: "After your app goes live, our custom software services provide ongoing support, including performance monitoring, updates, and new feature trends, to ensure your app remains relevant and fully functional as your business evolves.",
        points: 15
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/customdev.webp",
    imageAlt: "Software Development Mockup",
  },
  appDevelopment: {
    title: "Cross-Platform App Development Company for Maximum Reach",
    description1: "At XCon, our custom mobile app development tools empower businesses to connect with users on any device and provide a smooth, engaging experience.",
    description2: "Our enterprise mobile app development company creates scalable apps with cross-platform compatibility, ensuring optimal performance and robust security, so your app is ready to make an impact wherever your audience is.",
    buttonText: "Get a Free Consultation",
    sections: [
      {
        title: "Mobile UI/UX Design",
        content: "Our android app development software design engaging and responsive mobile interfaces that improves user experience. From wireframing to final design, our team creates the best interfaces using advanced tools to ensure seamless interaction and aesthetic appeal.",
      },
      {
        title: "iOS & Android Development",
        content: "Our team is expert in iOS mobile app development as well as Android, focusing on security, scalability, and smooth functionality. Leveraging the latest technologies, our android application development company delivers apps optimized for each platform."
      },
      {
        title: "Cross-Platform Development",
        content: "Using powerful tools like React Native and Flutter, our custom mobile app development company creates cross-platform apps that provide the best experience on both iOS and Android. This approach improves development timelines while maintaining performance."
      },
      {
        title: "API Integration & Backend Development",
        content: "Our flutter mobile app development team specialize in API integrations and backend solutions that ensure smooth connectivity with third-party platforms. We create mobile apps that work flawlessly within your digital landscape."
      },
      {
        title: "Mobile App Testing",
        content: "Through proper testing across devices and platforms, our enterprise mobile app development company identifies and resolves any issues prior to launch. Our extensive quality assurance ensures your app delivers a smooth, reliable experience to every user."
      },
      {
        title: "Post-Launch Support & Updates",
        content: "Our ionic app development company provides continuous support after launch, monitoring performance and giving updates to keep your app advanced. Our team ensures your app stays updated with your business goals."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/App-Sec.png",
    imageAlt: "App Development Mockup",
  },
  digitalmarket: {
    title: "Maximize Your Impact with our Digital Marketing Consultant",
    description1: 'Our local digital marketing services are created to connect your business with target audiences across digital platforms, using engaging, strategic approaches according to your goals.',
    description2: 'XCon being one of the best digital marketing agencies develop data-driven campaigns that improve your brand visibility and make sure every interaction strengthens the digital presence and impact of your business.',
    buttonText: "Consult Digital Strategy",
    sections: [
      {
        title: "Search Engine Optimization (SEO)",
        content: "We elevate your online presence to increase search visibility, attract organic traffic, and increase your SERP rankings. Our SEO services team implements cutting-edge SEO strategies including on-page, off-page, and technical SEO for long-term growth."
      },
      {
        title: "Social Media Marketing",
        content: "Our targeted social media marketing services are created to engage audiences and build brand loyalty. From content creation to in-depth analytics, our digital marketing strategy manage your presence across key platforms like Facebook, Instagram, etc."
      },
      {
        title: "Content Marketing",
        content: "At XCon, our content marketing services are focused on producing valuable, audience-centric content that builds trust and authority in your industry. Our digital marketing specialist create blogs, videos, and more to drive engagement and establish your brand as a leader."
      },
      {
        title: "Email Marketing Campaigns",
        content: "We design and run personalized email marketing solutions that nurture leads and retain customers. Through segmentation, A/B testing, and automation, our full-service digital marketing agency ensures high engagement rates and optimized conversions."
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        content: "Our PPC advertising specialists run targeted ad campaigns on Google, Bing, and social media to maximize return on investment. We emphasize strategic keyword selection, best ad copy, and effective bid management to accomplish cost-efficient results."
      },
      {
        title: "Analytics & Performance Tracking",
        content: "Our digital marketing packages provide comprehensive analytics and performance tracking to assess campaign success. We support ongoing optimization to align with your business goals and ensure consistent growth, increasing chances of your brand success."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/digital2.png",
    imageAlt: "Digital Marketing Mockup",
  },
  videoEditing: {
    title: "Engage, Inspire, and Captivate with Expert Video Editing",
    description1: "Transform your vision into captivating visual stories with our professional video editing services. Whether you’re producing social media content, promotional videos, or brand storytelling, we bring your ideas to life.",
    description2: "Our best video editor for social media uses the best video editing software like Adobe Premiere Pro, Final Cut Pro, and After Effects to deliver engaging, professional videos. Grow your brand with videos that connect with your audience.",
    sections: [
      {
        title: "Corporate Video Editing",
        content: "Deliver your brand’s message through our best corporate video editing services. We enhance each video with professional transitions and branded graphics to improve brand presence."
      },
      {
        title: "Social Media Content Editing",
        content: "We use the best video editing software for social media shorts or reels. Boost your social media engagement with custom-edited, platform-ready videos that align with current trends."
      },
      {
        title: "Promotional Video Editing",
        content: "Make your products, services, or events stand out with our high-quality promotional video editing. Using dynamic transitions, our good video editor creates compelling videos."
      },
      {
        title: "Comprehensive post-production",
        content: "From color grading and sound mixing to special effects, our post-production services cover every detail. Our approach ensures a polished, professional result that brings your vision to life."
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
    imageUrl: "/assets/img_placeholder/th-1/Video2.png",
    imageAlt: "Video Editing Mockup",
  },
  graphicDesign: {
    title: "Creative Graphic Design Services",
    description1: "Boost your brand’s visual appeal with our expert graphic design services. From branding to marketing collateral, we create captivating designs that communicate your message effectively and leave a lasting impression.",
    description2: "Our designers leverage creativity and strategic thinking to bring your ideas to life across both digital and print media.",
    buttonText: "Discover Graphic Design",
    sections: [
      {
        title: "Brand Identity & Logo Design",
        content: "We create memorable brand identities, including logos, color schemes, and visual guidelines that reflect your brand values and resonate with your target audience."
      },
      {
        title: "Marketing Collateral",
        content: "From brochures and flyers to business cards and banners, we design cohesive marketing materials that support your brand message and engage potential clients."
      },
      {
        title: "Social Media Graphics",
        content: "Enhance your social media presence with customized graphics designed to capture attention and convey your message on platforms like Instagram, Facebook, and LinkedIn."
      },
      {
        title: "Infographics & Data Visualization",
        content: "Transform complex data into visually appealing infographics that communicate insights clearly and effectively, perfect for reports, presentations, and content marketing."
      },
      {
        title: "Illustrations & Icon Design",
        content: "Our team creates unique illustrations and icons tailored to your brand's style, adding personality and a distinctive touch to your digital or print content."
      },
      {
        title: "Packaging Design",
        content: "Make a strong impression on your customers with packaging designs that blend aesthetics and functionality, ensuring your product stands out on the shelves."
      },
      {
        title: "Print Design",
        content: "We specialize in print-ready designs that maintain clarity and quality, from magazine layouts to posters and signage, ensuring your brand stands out offline."
      },
      {
        title: "UI Graphics for Digital Products",
        content: "Complement your digital products with UI graphics that enhance user experience and align with the overall design, creating seamless, visually engaging interfaces."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/Graphic2.png",
    imageAlt: "Graphic Design Mockup",
  },
  uiUxDesign:{
    title: "Transforming User Experiences with Expert UI/UX Design",
    description1: "Our UI/UX design services focus on creating seamless, engaging user experiences that connect with your audience. We prioritize user-centered design principles to ensure every interaction is intuitive and satisfying.",
    description2: "By utilizing research-driven methodologies and industry-leading design tools, we craft visually appealing interfaces that not only look great but also enhance functionality.",
    buttonText: "Start Your UI/UX Project",
    sections: [
      {
        title: "User Research & Analysis",
        content: "We conduct thorough user research to understand your target audience’s needs, preferences, and behaviors. This analysis informs our design process, ensuring we create solutions that resonate with users."
      },
      {
        title: "Wireframing & Prototyping",
        content: "Our team creates wireframes and prototypes to visualize the user journey and interface layout. These prototypes allow for early feedback and iterative design, ensuring a refined user experience."
      },
      {
        title: "Visual Design",
        content: "We develop stunning visual designs that align with your brand identity. Our aesthetic approach enhances usability and creates a lasting impression, combining color theory, typography, and imagery effectively."
      },
      {
        title: "Interaction Design",
        content: "We focus on crafting intuitive interactions that engage users. Our interaction designs are aimed at providing seamless transitions, animations, and feedback to improve the overall user journey."
      },
      {
        title: "Usability Testing",
        content: "We conduct usability testing to gather real user feedback and identify areas for improvement. This ensures the final product is user-friendly, addressing any pain points before launch."
      },
      {
        title: "Responsive Design",
        content: "We ensure that your UI/UX designs are fully responsive, providing an optimal experience across all devices and screen sizes. Our designs adapt seamlessly from desktop to mobile."
      },
      {
        title: "Brand Integration",
        content: "Our designs are aligned with your brand strategy, ensuring consistent messaging and aesthetics across all platforms. We create a cohesive brand experience that resonates with users."
      },
      {
        title: "Ongoing Support & Iteration",
        content: "Post-launch, we offer ongoing support and iterative design improvements based on user feedback and analytics. This ensures your UI/UX continues to meet user needs as they evolve."
      }
    ],
    imageUrl: "/assets/img_placeholder/th-1/UI2.png",
    imageAlt: "UI/UX Design Mockup",

  }




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
                width={900}
                height={500}
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

          </div>
        </div>

        {/* Scrollable Content */}
        <div className="bg-gray-200 w-full py-10 mt-20">
          <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Left Section */}
            <div className="md:w-1/2 lg:w-2/5 space-y-4 md:mr-10">
              <h2 className="text-4xl font-bold leading-tight text-[#273447]">
                {serviceType === "webDevelopment" ? "What Custom Web Development Services We Offer?"
                    : serviceType === "appDevelopment" ? "What Custom App Development Services We Offer?"
                        : serviceType === "softwareDevelopment" ? "What Custom Software Development Services We Offer?"
                            : serviceType === "digitalmarket" ? "What Digital Marketing Services We Offer?"
                                : serviceType === "videoEditing" ? "What Video Editing Services We Offer at XCon?"
                                    : serviceType === "graphicDesign" ? "Graphic Design Services to Amplify Your Brand’s Visual Presence"
                                    : serviceType === "uiUxDesign" ? "UI/UX Design Services to Amplify Your Brand’s Visual Presence"
                                            : "Our Services"}
              </h2>


            </div>

            {/* Right Scrollable Section */}
            <div className="md:w-1/2 lg:w-3/5 overflow-y-auto h-96 px-4 space-y-6">
              {sections.map((section, index) => (
                  <div className="space-y-4" key={index}>
                    <h3 className="text-2xl font-semibold tracking-normal text-[#273447]">
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
