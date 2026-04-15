import React, { use } from 'react';

import Card from '../Component/Card';



const YourFriends = ({getData}) => {
    const data=use(getData)
    console.log(data);
    
    return (
        <>
           <div className="container mx-auto pt-10">
             <h1>Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {data.map((info)=>
                        <Card info={info}/>
                    )}
                </div>
           </div>
        </>
    );
};

export default YourFriends;