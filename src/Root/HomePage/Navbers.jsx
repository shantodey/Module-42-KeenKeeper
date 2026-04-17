import { NavLink, Outlet } from 'react-router-dom';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiClock1 } from 'react-icons/ci';
import { FiAlignLeft } from 'react-icons/fi';
const Navbers = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FiAlignLeft/>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/timeline">Timeline</NavLink></li>
                            <li><NavLink to="/anylytics">Stats</NavLink></li>
                        </ul>
                    </div>
                    <NavLink className='text-xl font-semibold' to="/">KeenKeeper</NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'activeButton btn' : 'unactiveButton btn'}>
                        <RiHome2Line />Home
                    </NavLink>
                    <NavLink to="/timeline" className={({ isActive }) => isActive ? 'activeButton btn' : 'unactiveButton btn'}>
                        <CiClock1 />Timeline
                    </NavLink>
                    <NavLink to="/anylytics" className={({ isActive }) => isActive ? 'activeButton btn' : 'unactiveButton btn'}>
                        <TfiStatsUp />Stats
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbers;