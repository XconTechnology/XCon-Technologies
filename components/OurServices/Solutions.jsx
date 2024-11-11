import React from 'react';

const Solutions = ({ serviceType }) => {
    // Define dynamic content based on the service type
    const content = {
        webDevelopment: {
            title: 'Why Choose XCon for Custom Website Development?',
            description: '',
            features: [
                {
                    number: '01',
                    title: 'Security Measures',
                    description: 'Implement secure data handling, encryption, and ongoing monitoring to safeguard both websites and users from potential threats.',
                },
                {
                    number: '02',
                    title: 'Enhanced Performance',
                    description: 'Utilize streamlined coding practices and performance enhancements to create a fast, user-friendly, and dependable website.',
                },
                {
                    number: '03',
                    title: 'Flexible Architecture',
                    description: 'Develop customized, adaptable web architectures that accommodate your business growth and changing requirements.',
                },
            ],
        },
        softwareDevelopment: {
            title: 'Why Choose XCon for Custom Software Product Development?',
            description: 'XCon provides end-to-end software development services and customized solutions that boost efficiency. From enterprise applications to specialized integrations, our custom software development services USA deliver dependable, scalable, and secure products.',
            features: [
                {
                    number: '01',
                    title: 'Customized Solutions',
                    description: 'Our programming developer designs and develops software uniquely customized according to your business processes, boosting smooth integration and productivity.',
                },
                {
                    number: '02',
                    title: 'Advanced Security',
                    description: 'Our computer software developers implement top-tier security practices, including data encryption and multi-layered defenses, to protect sensitive information.',
                },
                {
                    number: '03',
                    title: 'Scalable Architecture',
                    description: 'Our custom software integration is built with a modular, scalable architecture, allowing your systems to evolve and adapt smoothly as your business grows.',
                },
            ],
        },
        appDevelopment: {
            title: 'Why Choose XCon for App Development Solutions?',
            description: 'XCon being one of the best app building companies provides comprehensive app development services for your business. Our custom android app development company focuses on scalability and performance.',
            features: [
                {
                    number: '01',
                    title: 'Efficiency Boost',
                    description: 'Our iOS and android app development are engineered for optimal performance, delivering fast, smooth, and responsive user experiences on any platform.',
                },
                {
                    number: '02',
                    title: 'Secure Apps',
                    description: 'We prioritize security by implementing advanced strategies to protect user data and guard against potential threats or issues.',
                },
                {
                    number: '03',
                    title: 'Scalable Architecture',
                    description: 'Our best app making company designs flexible and scalable architectures that make it easy to add new features and adapt as your app grows.',
                },
            ],
        },
        digitalmarket: {
            title: 'Why Choose XCon for Digital Marketing Agency Services?',
            description: 'XCon provides comprehensive digital marketing services. From SEO to social media marketing, our strategies including healthcare digital marketing make sure you achieve your business aims.',
            features: [
                {
                    number: '01',
                    title: 'Customized Strategies',
                    description: 'Our digital marketing for startups understands that every business is unique. We use customized digital marketing strategies that guarantee impactful results in your industry.',
                },
                {
                    number: '02',
                    title: 'Data-Driven Approach',
                    description: 'Our power digital marketing strategies are built on analytics and industry insights, allowing us to optimize every campaign for maximum effectiveness so you see real value.',
                },
                {
                    number: '03',
                    title: 'Content Marketing',
                    description: 'With our digital marketing strategist skilled in SEO, social media, PPC, and more, our digital marketing software brings years of experience to every project using the latest trends.',
                },
            ],
        },
        videoEditing: {
            title: 'Why Choose US for Video Editing Services?',
            description: 'At XCon Technologies, we believe every frame counts. Whether you’re looking to enhance brand messaging, create engaging social media content, or produce cinematic masterpieces, we provide personalized video editing solutions. Choose us for superior quality and a collaborative approach to video editing.',
            features: [
                {
                    number: '01',
                    title: 'Best Editing Techniques',
                    description: 'Use cutting-edge editing methods to create seamless transitions, expert color grading, and dynamic effects, enhancing the visual impact and flow of your videos.',
                },
                {
                    number: '02',
                    title: 'Customized Storytelling',
                    description: 'Build the best narratives that capture your brand’s essence and values, ensuring each video resonates with your audience and aligns with your marketing objectives.',
                },
                {
                    number: '03',
                    title: 'High-Quality Results',
                    description: 'Produce high-quality videos optimized for multiple platforms (web, social media, and mobile), ensuring an exceptional viewing experience for your target audience.',
                },
            ],
        },
        graphicDesign: {
            title: 'Why Choose XCon for Creative Graphic Design Services',
            description: 'At XCon, we provide innovative graphic design solutions. From logo design and branding to UI/UX and marketing materials, our graphic design company services create custom visuals that effectively captivate your audience.',
            features: [
                {
                    number: '01',
                    title: 'Brand Design',
                    description: 'Our experienced designers ensure every project is completed with precision, creativity, and a deep understanding of your business requirements.',
                },
                {
                    number: '02',
                    title: 'Captivating Designs',
                    description: 'Our graphic design services online offer comprehensive design services that grow your brand. We manage the entire process, ensuring quality across all design elements.',
                },
                {
                    number: '03',
                    title: 'Focus & Attention',
                    description: 'We don’t just create visuals; we pay huge attention to designs. Our approach is driven by the goal of strengthening brand recognition through creative design.',
                },
            ],
        },
        uiUxDesign: {
            title: 'Why Choose XCon for Creative UI UX Services?',
            description: 'At XCon, we create intuitive and innovative UI/UX designs that not only look great but also work seamlessly for your users. We focus on building user-friendly interfaces that make every interaction meaningful and impactful.',
            features: [
                {
                    number: '01',
                    title: 'User-Centered Design',
                    description: 'Conduct in-depth user research to understand user needs, behaviors, and pain points, ensuring designs are user-centered and effective.',
                },
                {
                    number: '02',
                    title: 'Multi-Device Experience',
                    description: 'Our innovative UI UX design services ensure your users enjoy a consistent, smooth experience across various devices, improving accessibility and retention.',
                },
                {
                    number: '03',
                    title: 'Collaborative Design',
                    description: 'We work closely with you throughout the design process, gathering continuous feedback to ensure the final product meets your objectives and expectations.x`x',
                },
            ],
        },




    };

    const selectedContent = content[serviceType]; // Get the content based on serviceType
    return (
        <section id="solutions" className="py-20 bg-gray-100">
            <div className="container mx-auto max-w-8xl px-4 text-center">
                <h2 className="text-5xl font-bold text-[#273447] leading-tight">
                    {' '}
                    <span className="">{selectedContent.title}</span>
                </h2>
                <p className="mt-4 text-lg text-[#273447] max-w-2xl mx-auto">
                    {selectedContent.description}
                </p>

                {/* Feature Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-16">
                    {selectedContent.features.map((feature, index) => (
                        <div className="text-center mb-6" key={index}>
                            <div className="flex shadow-md p-6 justify-center items-center w-20 h-20 bg-white rounded-full mx-auto">
                                <span className="text-3xl font-bold text-customGreen">{feature.number}</span>
                            </div>
                            <h3 className="text-2xl tracking-normal	 font-bold mt-6 text-[#273447]">
                                {feature.title.split(' ').map((word, i) => (
                                    <span key={i}>
                                        {word} {" "}
                                    </span>
                                ))}
                            </h3>
                            <p className="mt-4 text-md text-[#273447] px-4">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
