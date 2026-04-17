import React from 'react';
import Call from '../../assets/call.png'
import Text from '../../assets/text.png'
import Video from '../../assets/video.png'
const TimelineCard = ({item}) => {
    return (
        <div
            key={item.id}
            className='flex items-center gap-4 border border-gray-100 rounded-lg p-5 bg-white shadow-sm'>
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
    );
};

export default TimelineCard;