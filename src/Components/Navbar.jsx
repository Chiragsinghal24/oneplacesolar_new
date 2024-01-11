import React from 'react'
import { Link } from "react-router-dom"

const MenuItems = () => {
    return (
        <>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/'>Home</Link></li>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/about'>About Us</Link></li>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/service'>Services</Link></li>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/designs'>Design Samples</Link></li>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/careers'>Careers</Link></li>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/contact'>Contact Us</Link></li>
            <li className="text-white text-lg hover:shadow-sm hover:shadow-yellow-300"><Link to='/client'>Client Login</Link></li>
        </>
    )
}

const Navbar = () => {
    return (
        <nav className="navbar bg-black shadow-xl z-50 fixed top-0 w-screen">
            <div>
                {/* img source=https://imgur.com/BrFcmOh.png */}
                <Link to='/' className="rounded-md"><img src={'https://imgur.com/c2b6qvA.png'} className="min-w-[200px]" alt="Company" /></Link>
            </div>
            <div className="navbar-center md:navbar-center hidden lg:flex w-[150vh]">
                <ul className="menu menu-horizontal ml-auto">
                    <MenuItems />
                </ul>
            </div>
            <div className="navbar-end ml-auto">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-custom-color rounded-box w-52">
                        <MenuItems />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar