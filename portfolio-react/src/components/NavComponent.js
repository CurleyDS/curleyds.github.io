import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className='sticky w-full'>
            <div className='max-w-screen-xl flex items-center justify-between'>
                <button
                    className='font-normal hover:font-semibold text-base hover:text-lg w-full text-center p-5 hover:py-4 transition-all'
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
                <button
                    className='font-normal hover:font-semibold text-base hover:text-lg w-full text-center p-5 hover:py-4 transition-all'
                    onClick={() => navigate('/')}
                >
                    About
                </button>
                <button
                    className='font-normal hover:font-semibold text-base hover:text-lg w-full text-center p-5 hover:py-4 transition-all'
                    onClick={() => navigate('/')}
                >
                    Skills
                </button>
                <button
                    className='font-normal hover:font-semibold text-base hover:text-lg w-full text-center p-5 hover:py-4 transition-all'
                    onClick={() => navigate('/')}
                >
                    Projects
                </button>
                <button
                    className='font-normal hover:font-semibold text-base hover:text-lg w-full text-center p-5 hover:py-4 transition-all'
                    onClick={() => navigate('/')}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}

export default Navbar;