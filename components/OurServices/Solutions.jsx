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
    };

    const selectedContent = content[serviceType]; // Get the content based on serviceType

    return (
        <section id="solutions" className="py-20 bg-gray-100">
            <div className="container mx-auto max-w-xl px-4 text-center">
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
