import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useOutletContext } from 'react-router';
import NoResutls from '../../assets/No_results.png'
import Call from '../../assets/call.png'
import Text from '../../assets/text.png'
import Video from '../../assets/video.png'


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
                                <div
                                    key={item.id}
                                    className='flex items-center gap-4 border border-gray-100 rounded-lg p-5 bg-white shadow-sm'
                                >
                                    <div className="p-3 bg-gray-50 rounded-full text-2xl text-gray-600">
                                        {item.method === 'Call' && (
                                            <img src={Call} alt="Call" className="w-8 h-8 object-contain" />
                                        )}
                                        {item.method === 'Text' && (
                                            <img src={Text} alt="Text" className="w-8 h-8 object-contain" />
                                        )}
                                        {item.method === 'Video' && (
                                            <img src={Video} alt="Video" className="w-8 h-8 object-contain" />
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-gray-800 text-lg">
                                            <span className="font-bold text-teal-800">{item.method}</span> with {item.contactName}
                                        </p>
                                        <p className="text-sm text-gray-400 font-medium">{item.date}</p>
                                    </div>
                                </div>
                            ))
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default TimeLine;