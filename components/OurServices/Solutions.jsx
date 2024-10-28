import React from 'react';

const Solutions = ({ serviceType }) => {
    // Define dynamic content based on the service type
    const content = {
        webDevelopment: {
            title: 'Web Development Solutions',
            description: 'XCon, a full-scale web development company, has all the elements to build dynamic and progressive web products. From customer-facing websites and internal management portals to e-commerce stores, we ensure excellence in every project with high-end development and systematic project management.',
            features: [
                {
                    number: '01',
                    title: 'Optimized Performance',
                    description: 'Use efficient coding and performance optimization for a quick, friendly, and reliable website. Speed up operations and offer responsive browsing to users.',
                },
                {
                    number: '02',
                    title: 'Robust Security',
                    description: 'Integrate secure data handling, encryption, and continuous monitoring to protect websites and users against threats. Maintain 100% integrity.',
                },
                {
                    number: '03',
                    title: 'Scalable Architecture',
                    description: 'Design custom, flexible web architectures to support business growth and evolving needs. Get an adaptive, expandable product that’s future-ready.',
                },
            ],
        },
        softwareDevelopment: {
            title: 'Software Development Solutions',
            description: 'XCon offers comprehensive software development services to create tailored solutions that drive efficiency and innovation. From enterprise software to custom integrations, we deliver reliable, scalable, and secure products that match your unique business needs.',
            features: [
                {
                    number: '01',
                    title: 'Customized Solutions',
                    description: 'Design and develop software tailored to your specific business processes, ensuring seamless integration and enhanced productivity across all departments.',
                },
                {
                    number: '02',
                    title: 'Advanced Security',
                    description: 'Employ industry-standard security practices, including data encryption and multi-layered protection, to safeguard sensitive information and prevent data breaches.',
                },
                {
                    number: '03',
                    title: 'Scalable Architecture',
                    description: 'Develop software with a scalable, modular architecture, allowing your system to grow and adapt to new demands as your business expands.',
                },
            ],
        },
        appDevelopment: {
            title: 'App Development Solutions',
            description: 'XCon provides end-to-end app development services that bring innovation and efficiency to your business. From feature-rich mobile apps to enterprise-level solutions, we ensure scalability and user-centric design.',
            features: [
                {
                    number: '01',
                    title: 'High-Performance Apps',
                    description: 'Develop apps with optimized performance for smooth, fast, and responsive user experiences. Ensure your app runs efficiently on all platforms.',
                },
                {
                    number: '02',
                    title: 'Secure App Environments',
                    description: 'Implement advanced security measures to protect user data and prevent malicious attacks. We follow the latest encryption and security protocols.',
                },
                {
                    number: '03',
                    title: 'Future-Proof Architecture',
                    description: 'Build scalable, flexible architectures that allow easy feature addition and smooth expansion as your app grows and evolves with your business.',
                },
            ],
        },
        digitalmarket: {
            title: 'Digital Marketing Solutions',
            description: 'XCon offers comprehensive digital marketing services designed to elevate your online presence and drive measurable results. From SEO to social media marketing, we tailor strategies to fit your unique business needs.',
            features: [
                {
                    number: '01',
                    title: 'Search Engine Optimization (SEO)',
                    description: 'Enhance your website’s visibility on search engines, driving organic traffic and improving your site’s ranking with proven SEO strategies.',
                },
                {
                    number: '02',
                    title: 'Social Media Marketing',
                    description: 'Engage your audience across social media platforms with targeted campaigns that build brand awareness and foster community engagement.',
                },
                {
                    number: '03',
                    title: 'Content Marketing',
                    description: 'Create valuable, relevant content that attracts and retains your target audience, establishing your brand as an authority in your industry.',
                },
            ],
        },
        videoEditing: {
            title: 'Video Editing Solutions',
            description: 'XCon’s video editing services transform raw footage into polished, engaging content that captures attention and conveys your brand message effectively. From promotional videos to cinematic storytelling, our team brings creativity and technical expertise to every project.',
            features: [
                {
                    number: '01',
                    title: 'Professional Editing Techniques',
                    description: 'Utilize advanced editing techniques to produce smooth transitions, color grading, and effects that enhance the visual appeal of your videos.',
                },
                {
                    number: '02',
                    title: 'Customized Storytelling',
                    description: 'Craft narratives that reflect your brand’s vision and values, ensuring each video tells a compelling story aligned with your marketing goals.',
                },
                {
                    number: '03',
                    title: 'High-Quality Output',
                    description: 'Deliver videos in high-definition formats optimized for various platforms, including web, social media, and mobile, ensuring the best viewer experience.',
                },
            ],
        },
        graphicDesign: {
            title: 'Graphic Design Solutions',
            description: 'XCon specializes in creating impactful graphic design solutions that enhance brand visibility and engagement. From branding and marketing materials to UI/UX design, we deliver visually stunning graphics tailored to your business needs.',
            features: [
                {
                    number: '01',
                    title: 'Brand Design',
                    description: 'Develop cohesive brand identities through logo design, color palettes, and typography that resonate with your target audience and establish a strong market presence.',
                },
                {
                    number: '02',
                    title: 'UI/UX Design',
                    description: 'Create intuitive and user-friendly interfaces that enhance user experiences across digital platforms, ensuring seamless interaction and engagement.',
                },
                {
                    number: '03',
                    title: 'Marketing Materials',
                    description: 'Design visually compelling marketing materials, including brochures, posters, and social media graphics, to effectively communicate your brand message and attract customers.',
                },
            ],
        },
        uiUxDesign: {
            title: 'UI/UX Design Solutions',
            description: 'XCon offers comprehensive UI/UX design services that focus on creating user-friendly and engaging interfaces for digital products. Our design approach combines creativity and usability to ensure optimal user experiences across all platforms.',
            features: [
                {
                    number: '01',
                    title: 'User Research',
                    description: 'Conduct in-depth user research to understand user needs, behaviors, and pain points, ensuring designs are user-centered and effective.',
                },
                {
                    number: '02',
                    title: 'Wireframing & Prototyping',
                    description: 'Create wireframes and interactive prototypes that visualize the user journey, allowing for early feedback and iteration before development.',
                },
                {
                    number: '03',
                    title: 'Visual Design',
                    description: 'Develop aesthetically pleasing visual designs that align with your brand identity and enhance the overall user experience.',
                },
            ],
        },




    };

    const selectedContent = content[serviceType]; // Get the content based on serviceType

    return (
        <section id="solutions" className="py-20 bg-gray-100">
            <div className="container mx-auto max-w-8xl px-4 text-center">
                <h2 className="text-5xl font-bold text-[#273447] leading-tight">
                    Purpose-Built{' '}
                    <span className="text-customGreen">{selectedContent.title}</span><br />
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
                            <h3 className="text-4xl font-bold mt-6 text-[#273447]">
                                {feature.title.split(' ').map((word, i) => (
                                    <span key={i}>
                                        {word} <br />
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
