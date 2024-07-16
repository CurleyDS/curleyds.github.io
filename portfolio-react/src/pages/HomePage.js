import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from '../components/NavComponent';
import Footer from '../components/FooterComponent';
import Slides from '../components/SwiperComponent';
import prflpic from '../assets/profile.jpg';

function Home() {
    const { hash } = useLocation();

    const [languages, setLanguages] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [projects, setProjects] = useState([]);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const sectionId = hash.replace('#', '');
        const section = document.getElementById(sectionId);
        
        if (section != null) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    useEffect(() => {
        fetch('/data.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setLanguages(data.languages);
            setFrameworks(data.frameworks);
            setProjects(data.projects);
            setLoading(true);
        })
        .catch((error) => {
            setError(error);
            setLoading(true);
        });
    }, []);
    
    return (
        <div>
            {/* Navigation Bar */}
            <Navbar></Navbar>
            
            <main className='flex flex-col justify-center max-w-5xl mx-auto p-2 gap-5'>
                {/* Hidden Section */}
                <section id='top'>
                    {error && <p>Error: {error.message}</p>}
                </section>

                {/* Section About Me */}
                <section className='min-h-screen' id="aboutme">
                    <h2 className='p-4 text-2xl font-bold'>About Me</h2>
                    
                    <hr />
                    
                    <div className='flex flex-row'>
                        <div>
                            <p className='p-5'>
                                Hello! My name is Dylan Schoop and I'm from the Netherlands. I was born in
                                Eindhoven. I live in Zwijndrecht. I have a passion for games and entertainment.
                                My hobbies are going to the gym, playing games, watching shows, and expressing
                                myself through drawing, listening music and playing guitar.
                            </p>
                            <p className='p-5'>
                                I studied Software Development at Da Vinci College and am currently pursuing my
                                studies in Creative Media and Game Technologies (CMGT) at Hogeschool Rotterdam.
                            </p>
                            <p className='p-5'>
                                Whether I'm playing intriguing games, diving into a captivating show, or channeling
                                my imagination through simple drawings, I love to unleash my creativity on projects.
                                My goal is to channel this passion for gaming and creativity into a career in game
                                development or social media.
                            </p>
                        </div>
                        <div>
                            <img src={prflpic} alt="Portfolio" className='rounded-lg shadow-lg max-w-full h-auto' />
                        </div>
                    </div>
                </section>

                {/* Section Skills */}
                <section className='min-h-screen flex flex-col' id="skills">
                    <h2 className='p-4 text-2xl font-bold'>Skills</h2>
                    
                    <hr />
                    
                    <p className='p-5'>I'm skilled in the use of coding languages and/or frameworks:</p>
                    {loading ? (
                        <div className='flex-1'>
                            <Slides data={languages} />
                        </div>
                    ) : (
                        <p className='p-5'>Loading slides...</p>
                    )}
                    
                    <p className='p-5'>I have a little experience in working with other coding languages and/or frameworks as well:</p>
                    {loading ? (
                        <div className='flex-1'>
                            <Slides data={frameworks} />
                        </div>
                    ) : (
                        <p className='p-5'>Loading slides...</p>
                    )}
                </section>

                {/* Section Projects */}
                <section className='min-h-screen flex flex-col' id="projects">
                    <h2 className='p-4 text-2xl font-bold'>Projects</h2>
                    
                    <hr />
                    
                    <p className='p-5'>These are projects I've worked on:</p>
                    {loading ? (
                        <div className='flex-1'>
                            <Slides data={projects} />
                        </div>
                    ) : (
                        <p className='p-5'>Loading slides...</p>
                    )}
                    
                    {/* Slide menu met afbeelding van project. Link gaat naar project. Github icoon rechtsonder leidt naar Github Repository. */}
                </section>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Home;
