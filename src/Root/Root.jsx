import Navbers from './HomePage/Navbers';
import Footer from './HomePage/Footer';
import { Outlet } from 'react-router';

const Root = () => {

    return (
        <>
            <Navbers />
            <Outlet />
            <Footer />

        </>
    );
};

export default Root;