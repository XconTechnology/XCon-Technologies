import React from "react";
import { FiCode, FiFolder, FiStar, FiThumbsUp, FiSmartphone } from "react-icons/fi";

const achievementsData = {
  webDevelopment: [
    {
      id: 1,
      icon: <FiCode className="text-6xl md:text-8xl text-customGreen" />,
      number: "60+",
      title: "Web Experts",
    },
    {
      id: 2,
      icon: <FiFolder className="text-6xl md:text-8xl text-customGreen" />,
      number: "200+",
      title: "Successful Projects",
    },
    {
      id: 3,
      icon: <FiStar className="text-6xl md:text-8xl text-customGreen" />,
      number: "5.0",
      title: "GoodFirms Rating",
    },
    {
      id: 4,
      icon: <FiThumbsUp className="text-6xl md:text-8xl text-customGreen" />,
      number: "4.8",
      title: "Clutch Rating",
    },
  ],
  appDevelopment: [
    {
      id: 1,
      icon: <FiSmartphone className="text-6xl md:text-8xl text-customGreen" />,
      number: "30+",
      title: "Mobile Experts",
    },
    {
      id: 2,
      icon: <FiFolder className="text-6xl md:text-8xl text-customGreen" />,
      number: "200+",
      title: "Successful Projects",
    },
    {
      id: 3,
      icon: <FiStar className="text-6xl md:text-8xl text-customGreen" />,
      number: "4.91",
      title: "GoodFirms Rating",
    },
    {
      id: 4,
      icon: <FiThumbsUp className="text-6xl md:text-8xl text-customGreen" />,
      number: "4.8",
      title: "Clutch Rating",
    },
  ],
};

const OurAchievements = ({ serviceType = "webDevelopment" }) => {
  const selectedAchievements = achievementsData[serviceType];

  return (
      <section className="bg-gray-800 p-10 md:p-20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Our Achievements</h2>

          {/* Achievement items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {selectedAchievements.map((achievement) => (
                <div key={achievement.id} className="achievement-item flex items-center text-white justify-center">
                  {achievement.icon}
                  <div className="ml-4 text-left">
                    <div className="text-4xl md:text-5xl font-bold text-customGreen">
                      {achievement.number}
                    </div>
                    <p className="mt-2">{achievement.title}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default OurAchievements;
