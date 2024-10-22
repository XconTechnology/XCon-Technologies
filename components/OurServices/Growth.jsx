import React from 'react';

const Growth = () => {
    return (
        <section className="bg-gray-800 py-12">
            {/* Title Section */}
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-5xl font-bold text-white">
                    Your Gateway to <span className="text-customGreen">Multi-Dimensional Growth</span>
                </h2>
                <p className="text-white mt-4 max-w-5xl mx-auto">
                    A website is your business’s digital storefront for direct online user interactions.
                    An appealing and optimized website helps focalize marketing efforts, accelerate growth,
                    and outperform the competition. Our experienced website development company anchors you
                    there with excellence.
                </p>
            </div>

            {/* Features Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold text-customGreen">Bigger Brand & Credibility</h3>
                    <p className=" mt-4">
                        Fuel growth and expansion with better visibility and engagement.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold text-customGreen">Global Reach & Accessibility</h3>
                    <p className="mt-4">
                        More organic traffic, more leads, and more conversion.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold text-customGreen">Scales With You</h3>
                    <p className="mt-4">
                        A friendly customer-facing platform for start-ups and scale-ups.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold text-customGreen">Sell Easily</h3>
                    <p className="mt-4">
                        API-integrated, mobile-optimized e-commerce solutions sites.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold text-customGreen">User Insights & Analytics</h3>
                    <p className="mt-4">
                        Know user perceptions, meet expectations, & convert close misses.
                    </p>
                </div>
                <div className="bg-gray-700 p-10 text-center text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-700">
                    <h3 className="text-xl font-bold text-customGreen">Showcase Your Triumphs</h3>
                    <p className="mt-4">
                        Demonstrate project/client success through a diverse portfolio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Growth;
