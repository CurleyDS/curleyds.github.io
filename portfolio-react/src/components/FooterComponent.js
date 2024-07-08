import React from 'react';

function Navbar() {
    const scrollToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className='text-center py-12'>
            {/* Iconen tonen in plaats van links. */}
            <ul className='flex justify-center p-0'>
                <li className='m-2 rounded-2xl text-center px-2 py-5'>
                    <a target="_blank" href="https://www.instagram.com/dylan_cmgt/" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className='m-2 rounded-2xl text-center px-2 py-5'>
                    <a target="_blank" href="https://www.linkedin.com/in/dylan-schoop-b5b753174/" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className='m-2 rounded-2xl text-center px-2 py-5'>
                    <a target="_blank" href="https://www.github.com/curleyds" rel="noopener noreferrer">Github</a>
                </li>
            </ul>
            <button onClick={() => scrollToSection('top')}>Back to top</button>
        </footer>
    );
}

export default Navbar;