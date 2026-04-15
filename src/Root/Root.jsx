import React from 'react';
import Navbers from './HomePage/Navbers';
import Hero from './HomePage/Hero';
import Stats from './HomePage/Stats';
import Footer from './HomePage/Footer';

const Root = () => {
    return (
        <>
            <Navbers />
            <Hero />
            <Stats/>
            <Footer/>
        </>
    );
};

export default Root;