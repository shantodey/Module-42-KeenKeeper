import React from 'react';
import Navbers from './HomePage/Navbers';
import Hero from './HomePage/Hero';
import Stats from './HomePage/Stats';
import Footer from './HomePage/Footer';
import YourFriends from './HomePage/YourFriends';

const Root = () => {
    return (
        <>
            <Navbers />
            <Hero />
            <Stats/>
            <YourFriends/>
            <Footer/>
        </>
    );
};

export default Root;