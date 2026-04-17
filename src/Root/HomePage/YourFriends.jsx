import React, { use } from 'react';
import Card from '../Component/Card';

const YourFriends = ({getData}) => {
    const data=use(getData)

    
    return (
        <>
           <div className="container mx-auto pt-10">
             <h1 className='text-2xl font-semibold mb-4'>Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    {data.map((info)=>
                        <Card info={info} key={info.id}/>
                    )}
                </div>
           </div>
        </>
    );
};

export default YourFriends;