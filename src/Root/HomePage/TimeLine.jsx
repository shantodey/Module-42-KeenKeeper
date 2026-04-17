import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useOutletContext } from 'react-router';
import NoResutls from '../../assets/No_results.png'
import TimelineCard from '../Component/TimelineCard';



const TimeLine = () => {
    const { selectedActions, setSelectedActions } = useOutletContext();
    return (
        <section className="py-10">
            <div className='my-10 max-w-278 mx-auto px-4 '>
                <div className='flex items-center justify-between mb-6 '>
                    <h1 className='text-4xl font-bold mb-8'>Timeline</h1>
                    <div className='flex items-center gap-4'>
                        <h1 className='font-medium text-[#244d3f] text-lg'>Total:{selectedActions.length}</h1>
                        <button onClick={() => setSelectedActions([])} className=' btn btn-error h-8 w-10 p-2 btn-outline hover:text-white tooltip tooltip-bottom tooltip-error'>
                            <RiDeleteBin2Line />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>

                    {
                        selectedActions.length === 0 ? (
                            <div className='flex flex-col items-center justify-center py-16 text-gray-400'>
                                <img src={NoResutls} alt="" />
                            </div>
                        ) : (
                            selectedActions.map((item) => (
                                <TimelineCard item={item}/>
                            ))
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default TimeLine;