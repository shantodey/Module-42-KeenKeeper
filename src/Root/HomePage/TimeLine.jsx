import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useOutletContext } from 'react-router';

const TimeLine = () => {
    const { selectedActions } = useOutletContext();

    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mb-6 '>
                    <h1 className='text-4xl md:text-5xl font-bold '>Timeline </h1>
                    <div className='flex items-center gap-4'>
                        <h1 className='font-medium text-[#244d3f] text-lg'> Total: {selectedActions.length}</h1>
                        <button className=' btn btn-error h-8 w-10 p-2 btn-outline hover:text-white tooltip tooltip-bottom tooltip-error'>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
                {selectedActions.length ? (
                    <div className='rounded-lg border border-gray-100 bg-white p-6 shadow-sm'>
                        <h2 className='text-xl font-semibold mb-4'>Recent Actions</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                            {selectedActions.map((action, index) => (
                                <div key={`${action}-${index}`} className='rounded-lg border border-gray-200 bg-slate-50 p-4 text-center'>
                                    {action}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className='text-sm text-gray-500'>No actions recorded yet. Go to a friend and add a quick check-in action.</p>
                )}
            </div>
        </section>
    );
};

export default TimeLine;