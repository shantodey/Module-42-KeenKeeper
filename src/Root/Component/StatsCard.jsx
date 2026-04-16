import React from 'react';

const StatsCard = ({ number, label }) => {
    return (
        <div className="text-center p-8 bg-white shadow border border-white rounded-md
              transition-all duration-300 hover:border-[#244D3F] hover:-translate-y-1 hover:shadow-lg
              animate-fade-up
              animate-delay-100">
            <h2 className="text-4xl font-bold text-emerald-900 mb-2 group-hover:scale-110 transition-transform">
                {number}
            </h2>
            <p className="text-gray-500 text-sm font-medium">
                {label}
            </p>
        </div>
    );
};

export default StatsCard;