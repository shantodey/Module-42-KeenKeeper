import React from 'react';
import StatsCard from '../Component/StatsCard';

const Stats = () => {
    return (
        <div className="container mx-auto px-4 pt-10">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                <StatsCard number="12" label="Total Friends" />
                <StatsCard number="3" label="On Track" />
                <StatsCard number="6" label="Need Attention" />
                <StatsCard number="12" label="Interactions This Month" />
            </div>
        </div>
    );
};

export default Stats;