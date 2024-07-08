import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavComponent';
import Footer from '../components/FooterComponent';

function Contact() {
    return (
        <div>
            {/* Navigation Bar */}
            <Navbar></Navbar>
            
            <main className='flex flex-col justify-center max-w-5xl mx-auto p-2 gap-5'>
                {/* Hidden Section */}
                <section className='invisible' id='top'></section>
                
                {/* Section Contact */}
                <section>
                    <h2>Contact</h2>
                    
                    <hr />
                    
                    <p>
                        You can mail me at <a href="mailto:dylanschoop@gmail.com">dylanschoop@gmail.com</a> but you can also contact me through
                        <a target="_blank" href="https://www.linkedin.com/in/dylan-schoop-b5b753174/" rel="noopener noreferrer">LinkedIn</a> and
                        <a target="_blank" href="https://www.instagram.com/dylan_cmgt/" rel="noopener noreferrer">Instagram</a>.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Contact;
