import React, { useState } from 'react'; // ১. useState ইমপোর্ট করুন
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useOutletContext } from 'react-router';
import NoResutls from '../../assets/No_results.png'
import TimelineCard from '../Component/TimelineCard';

const TimeLine = () => {
    const { selectedActions, setSelectedActions } = useOutletContext();
    const [filter, setFilter] = useState('All');
    const filteredActions = filter === 'All' 
        ? selectedActions 
        : selectedActions.filter(item => item.method === filter);
    return (
        <section className="py-10">
            <div className='my-10 max-w-278 mx-auto px-4 '>
                <div className='flex items-center justify-between mb-6 '>
                    <h1 className='text-4xl font-bold mb-8'>Timeline</h1>
                    <div className='flex items-center gap-4'>
                        <h1 className='font-medium text-[#244d3f] text-lg'>Total: {filteredActions.length}</h1>
                        <button onClick={() => setSelectedActions([])} className='btn btn-error h-8 w-10 p-2 btn-outline hover:text-white'>
                            <RiDeleteBin2Line />
                        </button>
                    </div>
                </div>

                <select 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)} 
                    className="select bg-transparent border-[#244d3f] mb-6"
                >
                    <option className='bg-white' value="All">Filter timeline</option>
                    <option className='bg-white' value="Call">Call</option>
                    <option className='bg-white' value="Text">Text</option>
                    <option className='bg-white' value="Video">Video</option>
                </select>

                <div className='flex flex-col gap-4'>
                    {filteredActions.length === 0 ? (
                        <div className='flex flex-col items-center justify-center py-16 text-gray-400'>
                            <img src={NoResutls} alt="No data" />
                            <p className='mt-4'>No {filter !== 'All' ? filter : ''} history found!</p>
                        </div>
                    ) : (
                        filteredActions.map((item, index) => (
                            <TimelineCard key={index} item={item} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default TimeLine;