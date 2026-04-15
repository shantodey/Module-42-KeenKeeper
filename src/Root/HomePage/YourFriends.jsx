import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Component/Card';

const YourFriends = () => {
    const getDataForm =useLoaderData();
    console.log(getDataForm);
    
    return (
        <>
           <div className="container mx-auto">
             <h1>Your Friends</h1>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {getDataForm.map((info)=>
                        <Card info={info}/>
                    )}
                </div> */}
           </div>
        </>
    );
};

export default YourFriends;