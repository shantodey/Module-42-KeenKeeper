import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TimeLine = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mb-6 '>
                    <h1 className='text-4xl md:text-5xl font-bold '>Timeline </h1>
                    <div className='flex items-center gap-4'>
                        <h1 className='font-medium text-[#244d3f] text-lg'> Total: 5</h1>
                        <button className=' btn btn-error h-8 w-10 p-2 btn-outline hover:text-white tooltip tooltip-bottom tooltip-error'>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default TimeLine;