import React from 'react';
import StatsCard from '../Component/StatsCard';

const Stats = () => {
    return (
        <div className=" container mx-auto pt-10">
            <div className='grid grid-cols-4'>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
            </div>
        </div>
    );
};

export default Stats;