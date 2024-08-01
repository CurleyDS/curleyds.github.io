import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
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
        <main className='flex flex-col justify-center max-w-5xl mx-auto p-2 gap-5'>
            {/* Hidden Section */}
            <section id='top'>
                {error && <p>Error: {error.message}</p>}
            </section>

            {/* Section About Me */}
            <section className='min-h-screen' id="aboutme">
                <h2 className='p-4 text-2xl font-bold'><FormattedMessage id='aboutTitle' defaultMessage="Over Mij" /></h2>
                
                <hr />
                
                <div className='flex flex-row'>
                    <div>
                        <p className='p-5'>
                            <FormattedMessage id='introduction' defaultMessage={`Hallo! Mijn naam is Dylan Schoop en ik kom uit Nederland. Ik ben geboren in
                                Eindhoven. Ik woon in Zwijndrecht. Ik heb een passie voor games en entertainment.
                                Mijn hobby's zijn naar de sportschool gaan, gamen, shows kijken en mezelf uiten
                                door te tekenen, naar muziek te luisteren en gitaar te spelen.

                                Ik heb Software Development gestudeerd aan het Da Vinci College en volg momenteel mijn
                                studies in Creative Media and Game Technologies (CMGT) aan de Hogeschool Rotterdam.

                                Of ik nu intrigerende spellen speel, me verdiep in een boeiende show of mijn
                                verbeelding kanaliseer door eenvoudige tekeningen, ik hou ervan mijn creativiteit te ontketenen in projecten.
                                Mijn doel is om deze passie voor gaming en creativiteit te kanaliseren in een carrière in game
                                ontwikkeling of sociale media.`} />
                        </p>
                    </div>
                    <div>
                        <img src={prflpic} alt="Portfolio" className='rounded-lg shadow-lg max-w-full h-auto' />
                    </div>
                </div>
            </section>

            {/* Section Skills */}
            <section className='min-h-screen flex flex-col' id="skills">
                <h2 className='p-4 text-2xl font-bold'><FormattedMessage id='skillsTitle' defaultMessage="Vaardigheden" /></h2>
                
                <hr />
                
                <p className='p-5'><FormattedMessage id='coding' defaultMessage="Ik ben vaardig in het gebruik van codeertalen en/of frameworks:" /></p>
                {loading ? (
                    <div className='flex-1'>
                        <Slides data={languages} />
                    </div>
                ) : (
                    <p className='p-5'>Loading slides...</p>
                )}
                
                <p className='p-5'><FormattedMessage id='frameworks' defaultMessage="Ik heb ook wat ervaring met andere codeertalen en/of frameworks:" /></p>
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
                <h2 className='p-4 text-2xl font-bold'><FormattedMessage id='projectsTitle' defaultMessage="Projecten" /></h2>
                
                <hr />
                
                <p className='p-5'><FormattedMessage id='projects' defaultMessage="Dit zijn projecten waar ik aan heb gewerkt:" /></p>
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
    );
}

export default Home;
