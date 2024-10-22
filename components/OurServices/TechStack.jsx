import React, { useState, useEffect } from "react";
import Image from "next/image";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [activeTech, setActiveTech] = useState(null);
  const [loading, setLoading] = useState(true);

  const techData = {
    Frontend: [
      { name: "HTML", imgSrc: "/assets/img_placeholder/th-1/html5.webp" },
      { name: "CSS", imgSrc: "/assets/img_placeholder/th-1/css3.webp" },
      { name: "JavaScript", imgSrc: "/assets/img_placeholder/th-1/js.webp" },
      { name: "jQuery", imgSrc: "/assets/img_placeholder/th-1/jquery.webp" },
      { name: "React.js", imgSrc: "/assets/img_placeholder/th-1/reactjs.webp" },
      { name: "Angular", imgSrc: "/assets/img_placeholder/th-1/angular.webp" },
    ],
    Backend: [
      { name: "Java", imgSrc: "/assets/img_placeholder/th-1/java.webp" },
      { name: "Node", imgSrc: "/assets/img_placeholder/th-1/node.webp" },
      { name: "PHP", imgSrc: "/assets/img_placeholder/th-1/php.webp" },
      { name: "Python", imgSrc: "/assets/img_placeholder/th-1/python.webp" },
      { name: "Rails", imgSrc: "/assets/img_placeholder/th-1/rails.webp" },
    ],
    Database: [
      {
        name: "Cassandra",
        imgSrc: "/assets/img_placeholder/th-1/cassandria.webp",
      },
      { name: "MongoDB", imgSrc: "/assets/img_placeholder/th-1/mongodb.webp" },
      { name: "MySQL", imgSrc: "/assets/img_placeholder/th-1/mysql.webp" },
      {
        name: "PostgreSQL",
        imgSrc: "/assets/img_placeholder/th-1/postgre.webp",
      },
    ],
    Cloud: [
      { name: "AWS", imgSrc: "/assets/img_placeholder/th-1/aws-2.webp" },
      { name: "Azure", imgSrc: "/assets/img_placeholder/th-1/azure-2.webp" },
      {
        name: "Google Platforms",
        imgSrc: "/assets/img_placeholder/th-1/google_cloud.webp",
      },
      {
        name: "Kubernetes",
        imgSrc: "/assets/img_placeholder/th-1/kubernetes.webp",
      },
    ],
    AppDevelopment: [
      {
        name: "Flutter",
        imgSrc: "/assets/img_placeholder/th-1/flutter.webp",
      },
      {
        name: "React Native",
        imgSrc: "/assets/img_placeholder/th-1/react-native.webp",
      },
      {
        name: "Swift",
        imgSrc: "/assets/img_placeholder/th-1/swift.webp",
      },
      {
        name: "Kotlin",
        imgSrc: "/assets/img_placeholder/th-1/kotlin.webp",
      },
      {
        name: "Objective-C",
        imgSrc: "/assets/img_placeholder/th-1/objective-c.webp",
      },
    ],
  };

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = [];
      Object.values(techData).forEach((tabData) => {
        tabData.forEach((tech) => {
          imagePromises.push(
            new Promise((resolve) => {
              const img = new window.Image();
              img.src = tech.imgSrc;
              img.onload = resolve;
            })
          );
        });
      });

      Promise.all(imagePromises).then(() => setLoading(false));
    };

    preloadImages();

    return () => {
      setLoading(true); // Reset loading state on unmount
    };
  }, []);

  const renderTechIcons = () => {
    return techData[activeTab]?.map((tech, index) => (
      <div
        key={index}
        className={`text-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg ${
          activeTech === tech.name ? "scale-125 shadow-xl" : ""
        }`}
        onClick={() => setActiveTech(tech.name)}
      >
        <Image src={tech.imgSrc} alt={tech.name} width={70} height={70} />
        <p className="mt-2 text-base">{tech.name}</p>
      </div>
    ));
  };

  return (
    <section className="py-20 min-h-[40vh] bg-gray-800 text-white text-center">
      <div className="container mx-auto max-w-xl px-4 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Tech Stack We Use for Healthcare{" "}
          <span className="text-customGreen">
            {" "}
            Application <br /> Development
          </span>
        </h2>
        <p className="mt-4 text-md px-4">
          Our custom healthcare app development solutions are powered by some of
          the most groundbreaking and latest technology. We have a team of
          healthcare app developers, experts in all languages and technologies,
          and create advanced software solutions.
        </p>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex overflow-x-auto scrollbar-hide py-2 px-4 w-4/5">
          {["Frontend", "Backend", "Database", "Cloud", "AppDevelopment"].map(
            (tab) => (
              <button
                key={tab}
                className={`bg-transparent border-none py-2 px-6 text-lg text-white transition-colors duration-300 hover:text-customGreen ${
                  activeTab === tab ? "text-customGreen shadow-lg" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="border-t-2 border-white w-4/5" />
      </div>

      <div className="flex justify-start gap-8 flex-wrap w-4/5 mx-auto mt-8 min-h-[100px] transition-opacity duration-300 ease-in">
        {loading ? (
          <div className="flex justify-center items-center h-[100px]">
            <p>Loading...</p>
          </div>
        ) : (
          renderTechIcons()
        )}
      </div>
    </section>
  );
};

export default TechStack;
