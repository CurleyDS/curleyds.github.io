import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const scrollToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

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
                onClick={() => scrollToSection('aboutme')}
            >
                About
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => scrollToSection('skills')}
            >
                Skills
            </button>
            <button
                className='font-normal text-base w-full text-center p-5 hover:font-semibold hover:text-lg hover:py-4 transition-all'
                onClick={() => scrollToSection('projects')}
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