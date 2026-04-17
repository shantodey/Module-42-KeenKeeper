import React from 'react';
import NoResutls from '../../assets/No_results.png'
const Analytics = () => {
    return (
        <section className='my-10 max-w-278 mx-auto px-4 '>
            <h1 className='text-4xl md:text-5xl font-bold mb-8 '>Friendship Analytics </h1>
            <div className='rounded-2xl shadow p-8'>
                <h6 className='font-medium text-xl text-[#244D3F]'>By Interaction Type</h6>
                <img src={NoResutls} alt="" />
            </div>
        </section>
    );
};

export default Analytics;