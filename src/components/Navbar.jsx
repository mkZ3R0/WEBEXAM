import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 p-4">
            <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-24 w-54 mr-2" />
                <div className="md:hidden">
                    <button className="text-red-400" onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>

                <ul className="hidden md:flex space-x-4 items-center">
                    <li><a href="#" className='text-white text-2xl px-3 py-2 rounded hover:text-red-400 duration-300'>Home</a></li>
                    <li><a href="/favorites" className='text-white text-2xl px-3 py-2 rounded hover:text-red-400 duration-300'>Favorites</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <a href="#" className="block py-2 text-white hover:text-red-400 duration-300">Home</a>
                    <a href="/favorites" className="block py-2 text-white hover:text-red-400 duration-300">Favorites</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;