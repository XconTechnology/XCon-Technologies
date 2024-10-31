import React from 'react';

const Growth = () => {
    return (
        <section className="bg-gray-800 py-12">
            {/* Title Section */}
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-5xl font-bold text-white">
                    Your Pathway to Improve Your  <span className="text-customGreen">Brand Presence</span>
                </h2>
                <p className="text-white mt-4 max-w-5xl mx-auto">
                    A website is one of the most important assets of your business to engage with users online. As a top web development company in US, we are committed to delivering the best solutions that empower your business to grow in the digital world.

                </p>
            </div>

            {/* Features Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700 ">
                    <h3 className="text-xl font-bold tracking-normal text-customGreen">Enhanced Brand Visibility</h3>
                    <p className=" mt-4">
                        Accelerate growth and expansion with improved visibility and user engagement.

                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold tracking-normal	 text-customGreen">Flexible Growth Solutions</h3>
                    <p className="mt-4">
                        A customer-friendly platform for startups as well as scaling enterprises.

                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold tracking-normal	 text-customGreen">Global Access</h3>
                    <p className="mt-4">
                        Attract more organic traffic, capture leads, and boost conversion rates.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold tracking-normal	 text-customGreen">Valuable User Insights</h3>
                    <p className="mt-4">
                        Gain insights into user behavior, meet their requirements, and convert prospects.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold tracking-normal	 text-customGreen">Effortless Selling Solutions</h3>
                    <p className="mt-4">
                        API-integrated, mobile-optimized e-commerce platforms for smooth transactions.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold tracking-normal	 text-customGreen">Highlight Your Successes</h3>
                    <p className="mt-4">
                        Showcase client projects and achievements through an impressive portfolio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Growth;
