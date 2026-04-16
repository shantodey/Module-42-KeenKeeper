import { NavLink, Outlet } from 'react-router-dom';
import PrimaryButton from '../Component/PrimaryButton';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiClock1 } from 'react-icons/ci';

const Navbers = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Timeline</a></li>
                            <li><a>Stats</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
                <div className="navbar-end">
                    <NavLink className={({isActive})=>isActive? 'activeButton btn':'unactiveButton btn'} > <RiHome2Line/>Home</NavLink>
                    <NavLink className={({isActive})=>isActive? 'activeButton btn':'unactiveButton btn'}  to="/timeline"><CiClock1/>Timeline</NavLink>
                    <NavLink className={({isActive})=>isActive? 'activeButton btn':'unactiveButton btn'}  to='anylytics'><TfiStatsUp/>Stats</NavLink>
                </div>
            </div>
            
        </>
    );
};

export default Navbers;