import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header = () => {
    
    const menuFull = [
        <li><NavLink to='/home'>Home</NavLink></li>,
        <li><NavLink to='/appointment'>Appointment</NavLink></li>,
        <li><NavLink to='/about'>About</NavLink></li>,
        <li><NavLink to='/review'>Review</NavLink></li>,
    ]
    return (
        <div className=' container mx-auto'>
            <div className="navbar bg-base-100 lg:my-3">
                <div className="navbar-start w-4/6">
                    <div className="drawer drawer-end lg:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content mr-4">
                            {/* Page content here */}
                            <label tabIndex={0} htmlFor="my-drawer-4" className=" p-5 lg:hidden drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="b h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-2/3 h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                {menuFull}
                            </ul>
                        </div>
                    </div>
                    <NavLink to='/'><img  className=' lg:w-[220px]' src={logo} alt="" /></NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-accent">
                        {menuFull}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;