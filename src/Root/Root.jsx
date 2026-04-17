import { useState } from 'react';
import Navbers from './HomePage/Navbers';
import Footer from './HomePage/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    const [selectedActions, setSelectedActions] = useState([]);
    const handleAddAction = (actionObject) => {
        setSelectedActions((prev) => [actionObject, ...prev]);
    };

    return (
        <>
            <Navbers />
            <Outlet context={{ selectedActions, handleAddAction, setSelectedActions }} />
            <Footer />
        </>
    );
};

export default Root;