import React from 'react';

const Growth = ({ serviceType }) => {
    const serviceContent = {
        webDevelopment: {
            title: "Grow Your Brand with Exceptional Web Development",
            description: "As one of the top website development companies, we are dedicated to providing top-notch solutions that empower your business to grow and connect with customers through innovative Websites.",
            features: [
                { title: "Enhanced Brand Visibility", description: "Accelerate growth and expansion with improved visibility and user engagement." },
                { title: "Flexible Growth Solutions", description: "A customer-friendly platform for startups as well as scaling enterprises." },
                { title: "Global Access", description: "Attract more organic traffic, capture leads, and boost conversion rates." },
                { title: "Valuable User Insights", description: "Gain insights into user behavior, meet their requirements, and convert prospects." },
                { title: "Effortless Selling Solutions", description: "API-integrated, mobile-optimized e-commerce platforms for smooth transactions." },
                { title: "Highlight Your Successes", description: "Showcase client projects and achievements through an impressive portfolio." }
            ]
        },
        appDevelopment: {
            title: "Grow Your Brand with Exceptional App Solutions",
            description: "As one of the top mobile app development companies, we are dedicated to providing top-notch solutions that empower your business to grow and connect with customers through innovative mobile applications.",
            features: [
                { title: "Enhanced User Engagement", description: "Build a strong presence and expand your reach in the app market." },
                { title: "Flexible Growth Solutions", description: "Scalable solutions to grow with your app’s success." },
                { title: "Cross-Platform Support", description: "Engage users on multiple platforms with seamless integration." },
                { title: "User Analytics", description: "Monitor and analyze user behavior to improve app features." },
                { title: "Secure Transactions", description: "Implement secure payment and data protection solutions." },
                { title: "Highlight Your App’s Features", description: "Showcase app functionalities and user testimonials." }
            ]
        },
        softwareDevelopment: {
            title: "Grow Your Brand with  Custom Software Development",
            description: "As one of the top Custom Software development companies, we are dedicated to providing top-notch solutions that empower your business to grow and connect with customers through Custom software applications.",
            features: [
                { title: "Custom Solutions", description: "Get tailored software solutions for your unique business needs." },
                { title: "Scalability", description: "Solutions designed to grow as your business expands." },
                { title: "Global Reach", description: "Attract clients with software that meets international standards." },
                { title: "User-Focused Design", description: "Ensure ease of use and accessibility for all users." },
                { title: "Robust Security", description: "Top-notch security protocols to protect sensitive data." },
                { title: "Ongoing Support", description: "Dedicated support to keep your software up-to-date." }
            ]
        },
        digitalmarket: {
            title: "Achieve Success with our Digital Marketing Services",
            description: "In today’s competitive world, a strong online presence is vital for connecting with your audience. As a leading digital marketing agency in the US, our digital marketing for IT companies is dedicated to providing innovative solutions.",
            features: [
                { title: "Enhanced Online Visibility", description: "Drive traffic with targeted marketing campaigns and SEO." },
                { title: "Comprehensive Marketing Strategies", description: "End-to-end digital strategies for maximum reach." },
                { title: "Insightful Analytics", description: "Monitor performance and optimize for better results." },
                { title: "Brand Engagement", description: "Connect with audiences through compelling content." },
                { title: "Social Media Management", description: "Grow your social presence with expert management." },
                { title: "Effective Ad Campaigns", description: "Boost conversions with targeted advertising solutions." }
            ]
        },
        videoEditing: {
            title: "Stand Out with Amazing Video Content",
            description: "In the digital world, your video content speaks volumes. As a top video editing service provider, we create visually attractive videos that grow your brand, engage your audience, and drive results across all social media platforms with the best editing tool for videos.",
            features: [
                { title: "Professional Editing", description: "High-quality editing for a polished final product." },
                { title: "Engaging Visuals", description: "Create captivating videos to attract your target audience." },
                { title: "Custom Effects", description: "Add unique effects to make your content stand out." },
                { title: "Cross-Platform Compatibility", description: "Videos optimized for various social platforms." },
                { title: "Fast Turnaround", description: "Get your videos ready for launch in record time." },
                { title: "Highlight Your Successes", description: "Showcase your video portfolio and client testimonials." }
            ]
        },
        graphicDesign: {
            title: "Your Pathway to Elevate Your Brand Identity",
            description: "Graphic design is essential for creating a strong and memorable brand presence. As a leading marketing and design services, we are committed to delivering custom solutions that help your brand stand out.",
            features: [
                { title: "Enhanced Brand Visibility", description: "Elevate your brand's presence with visually impactful designs that capture attention and foster deeper audience engagement." },
                { title: "Flexible Design Solutions", description: "Our graphic design customer service caters to startups and established brands alike, providing adaptable design solutions." },
                { title: "Cross-Platform Consistency", description: "Deliver a cohesive brand message with consistent, high-quality visuals across various digital and print platforms." },
                { title: "Valuable Brand Insights", description: "Gain insights into design preferences and audience reactions, helping you customize visuals that resonate effectively." },
                { title: "Smooth & Creative Process", description: "Enjoy a seamless experience with a collaborative design process that ensures your vision is met at every step." },
                { title: "Showcase Your Success", description: "Display your brand’s milestones and success stories with visually compelling presentations and case studies." }
            ]
        },
        uiUxDesign: {
            title: "Grow Your Brand with our UI & UX Design Company",
            description: 'User experience is key to building lasting connections with your audience. Our expert team is dedicated to delivering innovative design solutions that empower your business to thrive in a competitive digital world.',
            features: [
                { title: "Enhanced User Engagement", description: 'Improve growth and customer loyalty by creating a seamless, intuitive user experience that keeps users engaged and coming back for more.' },
                { title: "Flexible Design Solutions", description: 'From startups to established enterprises, our UI/UX designs are flexible and scalable, adapting to your business’s evolving needs.' },
                { title: "Global Reach", description: 'Improve user accessibility and satisfaction with responsive, multi-device-friendly designs that cater to users around the world.' },
                { title: "Actionable User Insights", description: 'Leverage user behavior data to optimize your UI/UX and ensure your designs meet real user needs, enhancing overall satisfaction and conversion rates.' },
                { title: "Optimized User Journeys", description: 'Create seamless user flows and interactions that make navigating your digital platform easy and intuitive, improving user retention and satisfaction.' },
                { title: "Highlight Your Successes", description: 'Highlight your brand’s unique identity through exceptional UI/UX designs that reflect your values and leave a lasting impression on your audience.' }
            ]
        },
    };

    // Default content if serviceType is not found
    const content = serviceContent[serviceType] || {
        title: "Our Services",
        description: "Explore our range of services designed to help your business grow and succeed.",
        features: [
            { title: "Advanced Solutions", description: "Benefit from cutting-edge technology and tailored services." },
            { title: "Scalable Growth", description: "Services designed to expand as your business grows." },
            { title: "Global Reach", description: "Expand your brand’s reach with our expert solutions." }
        ]
    };

    return (
        <section className="bg-gray-800 py-12">
            {/* Title Section */}
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-5xl font-bold text-white">{content.title}</h2>
                <p className="text-white mt-4 max-w-5xl mx-auto">{content.description}</p>
            </div>

            {/* Features Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.features.map((feature, index) => (
                    <div key={index} className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                        <h3 className="text-xl font-bold tracking-normal text-customGreen">{feature.title}</h3>
                        <p className="mt-4">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Growth;
