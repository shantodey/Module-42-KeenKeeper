import { useState } from 'react';
import Navbers from './HomePage/Navbers';
import Footer from './HomePage/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    const [selectedActions, setSelectedActions] = useState([]);

    const handleAddAction = (action) => {
        setSelectedActions((prev) => [...prev, action]);
    };

    return (
        <>
            <Navbers />
            <Outlet context={{ selectedActions, handleAddAction }} />
            <Footer />

        </>
    );
};

export default Root;