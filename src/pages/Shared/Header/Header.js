import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Name from '../../../assets/images/logoName/siteName.jpg';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(err => console.err(err))
    }
    const menuItems = <>
        <li className='ml-5'><Link to="/blogs" className='hover:bg-amber-300 rounded-lg text-xl'>Blogs</Link></li>
        {
            user ?
                <>
                    <li className='ml-5'><Link to="/dashboard" className='hover:bg-amber-300 rounded-lg text-xl'>Dashboard</Link></li>
                    <li className='ml-5'><button className=' btn-error text-white rounded-lg text-xl' onClick={handleSignOut}>logout</button></li>
                </>
                :
                <li className='ml-5'><Link to="/login" className=' btn-success text-white rounded-lg text-xl'>Login</Link></li>
        }
    </>
    return (
        <div className="container navbar mx-auto sticky top-0 z-20 bg-base-200 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content font-semibold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img className='w-[120px] rounded' src={Name} alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;