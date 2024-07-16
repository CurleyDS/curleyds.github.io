import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className='bg-white sticky top-0 z-10 flex justify-center'>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/')}
            >
                Home
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/#aboutme')}
            >
                About
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/#skills')}
            >
                Skills
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/#projects')}
            >
                Projects
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigate('/contact')}
            >
                Contact
            </button>
        </nav>
    );
}

export default Navbar;