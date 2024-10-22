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

const Workflow = () => {
  const workflowSteps = [
    {
      number: "01",
      title: "Kick-Off with Project Idea",
      description: "Evaluate project scope and set objectives with expert consultation.",
      icon: <FaRocket />,
    },
    {
      number: "02",
      title: "Decide Tech Stack",
      description: "Move forward, right and quick, with useful-only resources.",
      icon: <FaCode />,
    },
    {
      number: "03",
      title: "Design",
      description: "Create an appealing, intuitive interface with our UI/UX experts.",
      icon: <FaPaintBrush />,
    },
    {
      number: "04",
      title: "Develop",
      description: "Code to add functionality and backend features with pro developers.",
      icon: <FaClipboardCheck />,
    },
    {
      number: "05",
      title: "App Development",
      description: "Build scalable, high-performance apps tailored to your business needs.",
      icon: <FaMobileAlt />,
    },
    {
      number: "06",
      title: "Test",
      description: "Test, debug, and repeat until it's launch-ready.",
      icon: <FaRegCheckCircle />,
    },
    {
      number: "07",
      title: "Launch & Maintain",
      description: "Go live and reach users. Adapt as you go.",
      icon: <FaRegPaperPlane />,
    },
  ];

  return (
    <section className="workflow-section py-16 bg-gray-100 text-center">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-5xl font-bold text-[#273447] leading-tight">
          Our Simple, Frictionless Web <br />
          Development <span className="text-customGreen"> Workflow</span>
        </h2>
        <p className="mt-4 text-lg text-[#273447] max-w-2xl mx-auto">
          We use lean, agile methodology for collaborative development and
          faster turnarounds. Join the ranks of the 100s of companies we helped
          with our optimized and result-driven web development process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="card bg-white p-6 h-48 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-customGreen duration-300 ease-in-out relative group"
            >
              <div className="card-number text-3xl text-customGreen font-bold mb-2 absolute top-4 left-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-2 mt-10 text-gray-600 transition duration-300 ease-in-out group-hover:text-white text-left">
                {React.cloneElement(step.icon, {
                  className:
                    "text-5xl text-customGreen absolute top-4 right-4 group-hover:text-white",
                })}
                {step.title}
              </h3>
              <p className="text-gray-600 transition duration-300 ease-in-out group-hover:text-white text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <button className="inline-block bg-customGreen text-white font-bold py-3 px-6 mt-10 rounded-full hover:bg-black hover:text-white transition-all mb-6">
          Talk To Our Experts
        </button>
      </div>
    </section>
  );
};

export default Workflow;
