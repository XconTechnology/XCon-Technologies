import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaShieldAlt,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import "animate.css";
import Image from 'next/image'; // Import Image component

const PricingSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const tabsData = [
    {
      title: "Web Application Development",
      icon: <FaLaptopCode size={30} />,
      content: [
        "Tailoring existing web applications to meet your unique business needs.",
        "Updating and enhancing legacy systems to improve performance and functionality of web application development.",
        "Ensuring your software solutions are efficiently maintained and updated.",
        "Our website and application development provide solutions that focus on user experience and satisfaction.",
        "Seamlessly integrating new and the right software with existing systems for improved efficiency.",
        "Implementing robust security measures in website app development to protect your data and operations.",
      ],
      image: "/assets/img_placeholder/th-1/webDev.jpg",
    },
    {
      title: "App Development",
      icon: <FaMobileAlt size={30} />,
      content: [
        "Designing mobile applications for better accessibility.",
        "Ensuring high performance and smooth user experience on mobile platforms.",
        "Providing cross-platform mobile application development services.",
        "Crafting responsive mobile application software for all screen sizes.",
        "Building apps with integrated push notifications and real-time updates",
        "Maintaining mobile app development software for continued performance and reliability",
      ],
      image: "/assets/img_placeholder/th-1/app.jpg",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn size={30} />,
      content: [
        "Effective digital marketing gives IT solutions a unique identity, enhancing their appeal",
        "Our software company in US conduct thorough research to understand trends and customer needs",
        "Our strategies align with business goals to get measurable results.",
        "The digital marketing approaches of our software dev company are tailored to each product and target audience.",
        "We utilize various digital channels to effectively engage customers.",
        "Our strategies aim to build long-term relationships and brand loyalty",
      ],
      image: "/assets/img_placeholder/th-1/marketing.jpg",
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush size={30} />,
      content: [
        "Focus on users' needs for a seamless experience.",
        "Maintain visual and functional consistency for easy navigation.",
        "Ensure designs adapt across all devices and screen sizes.",
        "Make designs inclusive for all users, including those with disabilities.",
        "Prioritize content to guide users to key information effectively.",
        "Provide clear feedback to user actions through visual cues.",
        "Test with users regularly to identify and fix issues.",
        "Maintain a clean design to enhance usability and reduce confusion.",
      ],
      image: "/assets/img_placeholder/th-1/demo.jpeg",
    },
    {
      title: "Software Development",
      icon: <FaShieldAlt size={30} />,
      content: [
        "Use Agile practices for flexibility and custom software development",
        "Implement version control (e.g., Git) for tracking changes and collaboration in IT software development.",
        "Conduct thorough testing (unit, integration, user acceptance) for reliability",
        "Keep clear documentation for code, APIs, and user guides.",
        "Focus on clean, maintainable code with best software development methodologies and code reviews",
        "Use CI/CD pipelines to automate testing and deployment",
        "Regularly collect user feedback for improvements.",
        "Incorporate security measures throughout the custom software development process.",
      ],
      image: "/assets/img_placeholder/th-1/sqa.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: true,
    touchThreshold: 10,
    beforeChange: (current, next) => {
      setSelectedService(next);
    },
  };

  const handleServiceChange = (index) => {
    setSelectedService(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
      <section
          ref={sectionRef}
          className={`pricing-section ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}
      >
        <div className="pb-20 mb-7 pt-5 sm:pt-[180px] xl:pb-[60px] xl:pt-[100px]">
          <div className="global-container">
            <div className="text-center lg:mb-12">
              <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px] pt-20 sm:pt-20">
                <h2 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-[1.28]">
                  What <span className={"text-customGreen"}> Services</span> We Offer
                </h2>
                <p className="text-lg mt-4">
                  The complete work hub for professional services
                </p>
              </div>
            </div>

            <div className="relative flex justify-center mb-8">
              <div
                  className="absolute w-[100px] h-[100px] bg-customGreen rounded-full border-2 border-black z-0"
                  style={{right: "682px", bottom: "-130px"}}
              />
            </div>

            <div className="mb-10 z-10 relative">
              <Slider {...settings} ref={sliderRef}>
                {tabsData.map((tab, index) => (
                    <div key={index} className="p-2 flex justify-center">
                      <button
                          className={`px-3 py-4 w-[80px] h-[80px] flex items-center justify-center rounded-full border-2 ${selectedService === index
                              ? "scale-110 bg-customGreen text-black border-gray-300 sm:bg-customGreen lg:bg-white"
                              : "scale-90 bg-white text-black border-gray-300"
                          } font-semibold transition-transform duration-300 ease-in-out`}
                          onClick={() => handleServiceChange(index)}
                      >
                        {tab.icon}
                      </button>
                    </div>
                ))}
              </Slider>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col justify-between">
                <div className="tab-content bg-white shadow-md rounded-lg p-6 h-full flex-grow">
                  <h3 className=" text-3xl text-white bg-customGreen inline-block rounded-lg px-2 py-1 mb-4">
                    {tabsData[selectedService].title}
                  </h3>
                  <ul className="space-y-4">
                    {tabsData[selectedService].content.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span>✔️</span>
                          <span>{item}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:block h-full md:flex md:justify-center">
                <Image
                    src={tabsData[selectedService].image}
                    alt={tabsData[selectedService].title}
                    layout="responsive"
                    width={500} // Set appropriate width
                    height={300} // Set appropriate height
                    className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default PricingSection;
