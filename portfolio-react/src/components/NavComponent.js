import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className='sticky flex justify-center'>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/')}
            >
                Home
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/')}
            >
                About
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/')}
            >
                Skills
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/')}
            >
                Projects
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/')}
            >
                Contact
            </button>
        </nav>
    );
}

export default Navbar;