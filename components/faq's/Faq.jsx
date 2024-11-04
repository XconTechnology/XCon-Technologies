import React from 'react';
import Image from "next/image";
import useAccordion from "@/components/hooks/useAccordion";

const faqData = {
    webDevelopment: {
        section: [
            {
                question: 'How does our custom website development help your business grow?',
                answer: 'Our custom web solutions are designed to enhance your online presence. By utilizing the latest technologies, we help you achieve your business goals and expand your market reach.'
            },
            {
                question: 'What custom web development services does XCon offer?',
                answer: 'XCon provides a wide range of custom web development services, including e-commerce solutions, web applications, content management systems according to your business needs.',
            },
            {
                question: 'What technologies do you use for custom web development?',
                answer: 'We utilize a variety of modern technologies, including HTML, CSS, JavaScript, PHP, Python, and various frameworks like React, Angular, and Node.js to create your brand’s website.',
            },
            {
                question: 'How our website design Charlotte NC provides ongoing support after launch?',
                answer: 'After your website launch, our website development and marketing company provides ongoing support services like security updates and performance monitoring to keep your site up-to-date.',
            },
        ]
    },
    softwareDevelopment: {
        section: [
            {
                question: 'What types of custom software solutions do XCon offer?',
                answer: 'Our IT software development team provides a range of solutions, including custom web application and mobile apps, integrations with existing systems, and customized data management solutions.'
            },
            {
                question: 'How long does it take for healthcare custom software development?',
                answer: 'Development time varies depending on the complexity and scope of the project. After an initial custom software development consulting, we provide an estimated timeline.',
            },
            {
                question: 'How much does custom software development cost?',
                answer: 'The cost of custom software development depends on the complexity, features, and scope of the project. After discussing your requirements, we’ll provide an estimate according to your goals.',
            },
            {
                question: 'How does custom software development solutions benefit my business?',
                answer: 'Our software development process involves creating customized software solutions that can improve efficiency, enhance productivity, and help streamline operations.',
            },
        ]
    }
};

const FaqS = ({ serviceType = "webDevelopment" }) => {
    const [activeIndex, handleAccordion] = useAccordion(0);
    const faqItems = faqData[serviceType]?.section || [];

    return (
        <section className='faq-section bg-colorLinenRuffle'>
            {/* Section Spacer */}
            <div className='pb-10 xl:pb-[70px]'>
                <div className='global-container'>
                    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-1 py-14'>

                        {/* FAQ Right Block */}
                        <div
                            className='jos md:ml-10 lg:ml-20 xl:ml-32'
                            data-jos_animation='fade-left'
                        >
                            <div className="text-5xl pb-10 text-center font-bold">FAQ's</div>
                            <ul className='accordion pt-8'>
                                {faqItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                                            activeIndex === index ? 'active' : ''
                                        }`}
                                        onClick={() => handleAccordion(index)}
                                    >
                                        <div
                                            className='accordion-header flex items-center justify-between font-dmSans text-xl font-medium leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                                        >
                                            <p>{item.question}</p>
                                            <div className='accordion-icon'>
                                                <Image src='/assets/img_placeholder/plus.svg' width={24} height={24} alt='plus' />
                                            </div>
                                        </div>
                                        {activeIndex === index && (
                                            <div className='accordion-content text-[#2C2C2C]'>
                                                <p>{item.answer}</p>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* FAQ Right Block */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqS;
