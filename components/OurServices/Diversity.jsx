import React from 'react';

const Diversity = () => {
    const domains = [
        { icon: '🛒', label: 'eCommerce' },
        { icon: '💰', label: 'Fintech' },
        { icon: '❤️', label: 'Healthcare' },
        { icon: '🎓', label: 'Education' },
        { icon: '💬', label: 'Social Networking' },
        { icon: '🏨', label: 'Hospitality' },
        { icon: '🎵', label: 'Entertainment' },
        { icon: '🏛️', label: 'Government' },
        { icon: '🏘️', label: 'Real Estate' },
        { icon: '💼', label: 'Business' },
        { icon: '🚚', label: 'Logistics' },
        { icon: '💻', label: 'Tech & IT' },
        { icon: '❤️‍🩹', label: 'Non-Profit' },
        { icon: '🚗', label: 'Automotive' },
        { icon: '✈️', label: 'Travel & Tourism' }
    ];

    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-center text-5xl font-bold mb-12">
                Our Domain <span className="text-customGreen">Diversity</span>
            </h2>
            <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {domains.map((domain, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center border border-gray-200 p-6 rounded-lg shadow-lg"
                    >
                        <div className="text-5xl mb-4">{domain.icon}</div>
                        <p className="text-lg font-semibold">{domain.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Diversity;
