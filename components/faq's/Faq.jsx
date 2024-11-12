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
    },
    appDevelopment: {
        section: [
            {
                question: 'What types of mobile applications do XCon develop?',
                answer: 'We specialize in developing cloud-based quantum app development, IOT app development, hybrid app development, cross-platform mobile applications, etc.',
            },
            {
                question: 'What technologies do we use for app development?',
                answer: 'Our software app development company utilizes a range of cutting-edge technologies, including React Native, Flutter, to create high-performing mobile apps.',
            },
            {
                question: 'What is your approach to app performance optimization?',
                answer: 'Our android app making company focuses on optimizing performance through code efficiency, resource management, and continuous testing to ensure fast load times.',
            },
            {
                question: 'How do we ensure the security of mobile applications?',
                answer: 'We implement advanced security measures, including encryption, secure APIs, and regular security audits, to protect user data and prevent threats.',
            },
        ]
    },
    digitalmarket: {
        section: [
            {
                question: 'What industries does our local digital marketing services specialize in?',
                answer: 'We have experience working with various industries, including e-commerce, healthcare, finance, real estate, technology, allowing us to customize our strategies to meet specific industry needs.',
            },
            {
                question: 'What digital marketing services does XCon offer?',
                answer: 'Our digital marketing agency provides lots of services, including SEO, social media marketing, content marketing, email marketing, PPC advertising, and web development.',
            },
            {
                question: 'How long does it take to see results from digital marketing?',
                answer:'Digital marketing is a long-term investment. While PPC can deliver immediate traffic, SEO and content marketing might take a few months to show significant, long-term results.',
            },
            {
                question: 'Can you help with content creation for my digital marketing campaigns?',
                answer: 'Yes, our digital marketing team specializes in creating high-quality, engaging content according to your audience. We produce blogs, social media posts, videos, infographics, etc.',
            },
        ]
    },
    videoEditing: {
        section: [
            {
                question: 'Can we create videos optimized for social media?',
                answer: 'Yes, we specialize in editing social media videos for platforms like Instagram, TikTok, YouTube, and more, ensuring they are optimized for engagement and platform-specific formats.',
            },
            {
                question: 'What types of videos do we specialize in editing?',
                answer: 'We specialize in a variety of video editing services, including corporate videos, promotional videos, social media content, event highlights, testimonials, and brand storytelling.',
            },
            {
                question: 'What video editing software do we use at XCon?',
                answer:'We use the top video editing software like Adobe Premiere Pro, Final Cut Pro, and After Effects to ensure high-quality and professional video output.',
            },
            {
                question: 'How do we handle revisions during the video editing process?',
                answer: 'Our process includes multiple review stages, where we collaborate closely with you, ensuring your feedback is implemented and that the final video is according to your expectations.',
            },
        ]
    },
    graphicDesign: {
        section: [
            {
                question: 'What types of graphic design services do XCon offer?',
                answer: 'We offer a diverse range of graphic design services, including brand identity, logo creation, UI/UX design, social media graphics, marketing materials, packaging design, and more.',
            },
            {
                question: 'How do you ensure the designs align with our brand identity?',
                answer: 'We start each project by understanding your target audience, and goals. Our designers work closely with you to ensure all visuals are according to your brand’s voice.',
            },
            {
                question: 'What is the turnaround time for a graphic design project?',
                answer:'Turnaround time depends on the complexity of your project. Small projects like social media graphics can take a few days, while larger projects might take a few weeks.',
            },
            {
                question: 'What sets XCon’s graphic design services apart from others?',
                answer: 'Our focus on customization, strategic creativity, and brand alignment sets us apart. We make sure that designs that not only look great but also achieve your brand’s goals.',
            },
        ]
    },
    uiUxDesign: {
        section: [
            {
                question: 'What types of businesses do we deal with for UI/UX design services?',
                answer: 'We work with a diverse range of businesses, from startups to established ones. Our designs are customized to make them beneficial for e-commerce, SaaS, finance, healthcare, etc.',
            },
            {
                question: 'What tools do you use for UI/UX design and prototyping?',
                answer: 'Our team uses industry-leading tools such as Adobe XD, Figma, Sketch, and InVision to create wireframes, prototypes, and final designs.',
            },
            {
                question: 'What is included in your UI/UX design services?',
                answer:'Our UI/UX design services cover everything from user research, wireframing, and prototyping to visual design and usability testing. We ensure each design goes well with your brand.',
            },
            {
                question: 'Can XCon help with both web and mobile UI/UX design?',
                answer: 'Yes, we specialize in creating seamless and modern UI/UX designs optimized for both web and mobile platforms, ensuring a consistent experience across devices.',
            },
        ]
    },
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
