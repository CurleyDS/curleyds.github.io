import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        const element = document.getElementById(route);
        
        if (element != null) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(route);
        }
    };

    return (
        <nav className='bg-white sticky top-0 z-10 flex justify-center'>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigateTo('/')}
            >
                Home
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigateTo('aboutme')}
            >
                About
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigateTo('skills')}
            >
                Skills
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => navigateTo('projects')}
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