import React from "react";
import {
  FaRocket,
  FaCode,
  FaPaintBrush,
  FaClipboardCheck,
  FaRegCheckCircle,
  FaRegPaperPlane,
  FaMobileAlt,
} from "react-icons/fa";

const Workflow = ({ serviceType = "webDevelopment" }) => {
  const workflowSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "In this initial phase, we properly understand your business, target audience, and objectives.",
      icon: <FaRocket />,
    },
    {
      number: "02",
      title: "Research & Analysis",
      description: "We conduct thorough market research and competitor analysis to identify trends within your industry.",
      icon: <FaCode />,
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description: "Our website management services team creates intuitive designs according to your brand identity.",
      icon: <FaPaintBrush />,
    },
    {
      number: "04",
      title: "Development",
      description: "Once the design is approved, our skilled developers bring it to life using cutting-edge technology.",
      icon: <FaClipboardCheck />,
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Before launching, our QA specialists rigorously test the website for functionality, security, and compatibility.",
      icon: <FaMobileAlt />,
    },
    {
      number: "06",
      title: "Launch Strategy",
      description: "We prepare a comprehensive website launch strategy for a smooth transition from development to live operation.",
      icon: <FaRegCheckCircle />,
    },

  ];

  return (
    <section className="workflow-section py-16 bg-gray-100 text-center">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-5xl font-bold text-[#273447] leading-tight">
          Our <span className="text-customGreen">
             {serviceType === "webDevelopment" ? "Web Development ?"
                 : serviceType === "appDevelopment" ? "App Development"
                     : serviceType === "softwareDevelopment" ? "Custom Software Development"
                                         : "Our Services"}

          {" "}  </span>Process
        </h2>
        <p className="mt-4 text-lg text-[#273447] max-w-2xl mx-auto">
          We implement an agile software development methodology developing collaboration and delivering timely. Here’s the process we use for custom software development for small business:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="card bg-white p-6 h-60 rounded-lg shadow-lg transition  transform hover:scale-105 hover:bg-customGreen duration-300 ease-in-out relative group"
            >
              <div className="card-number text-3xl text-customGreen font-bold mb-2 group-hover:text-white absolute top-4 left-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-2 mt-10 text-gray-600 transition tracking-normal	 duration-300 ease-in-out group-hover:text-white text-left">
                {React.cloneElement(step.icon, {
                  className:
                    "text-5xl text-customGreen absolute  top-4 right-4 group-hover:text-white",
                })}
                {step.title}
              </h3>
              <p className="text-gray-600 transition duration-300 ease-in-out group-hover:text-white text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;
