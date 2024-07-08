import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavComponent';
import Footer from '../components/FooterComponent';
import Slides from '../components/SwiperComponent';
import ProfilePic from '../assets/profile.jpg';

import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import javascript from '../assets/javascript.jpg'
import php from '../assets/php.jpg'
import mysql from '../assets/mysql.jpg'
import bootstrap from '../assets/bootstrap.jpg'
import vuejs from '../assets/vuejs.jpg'
import laravel from '../assets/laravel.jpg'
import tailwindcss from '../assets/tailwindcss.jpg'
import pixijs from '../assets/pixijs.jpg'
import excaliburjs from '../assets/excaliburjs.jpg'
import renpy from '../assets/renpy.jpg'
import expressjs from '../assets/expressjs.jpg'
import reactjs from '../assets/reactjs.jpg'
import onepager from '../assets/onepager.jpg'
import pepperoniparty from '../assets/pepperoniparty.jpg'
import spacemeteors from '../assets/spacemeteors.jpg'
import factorybreakout from '../assets/factorybreakout.jpg'
import youngchoices from '../assets/youngchoices.jpg'
import weetjegezond from '../assets/weetjegezond.jpg'

function Home() {
    const [languages, setLanguages] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const data1 = [
            {
                img: html,
                title: "HTML",
                desc: null,
                link: null
            },
            {
                img: css,
                title: "CSS",
                desc: null,
                link: null
            },
            {
                img: javascript,
                title: "JavaScript",
                desc: null,
                link: null
            },
            {
                img: php,
                title: "PHP",
                desc: null,
                link: null
            },
            {
                img: mysql,
                title: "MySQL",
                desc: null,
                link: null
            },
            {
                img: bootstrap,
                title: "Bootstrap",
                desc: null,
                link: null
            },
            {
                img: vuejs,
                title: "Vue.js",
                desc: null,
                link: null
            },
            {
                img: laravel,
                title: "Laravel",
                desc: null,
                link: null
            },
            {
                img: tailwindcss,
                title: "TailwindCSS",
                desc: null,
                link: null
            }
        ];
        setLanguages(data1);
        
        const data2 = [
            {
                img: pixijs,
                title: "PixiJS",
                desc: null,
                link: null
            },
            {
                img: excaliburjs,
                title: "ExcaliburJS",
                desc: null,
                link: null
            },
            {
                img: renpy,
                title: "Ren'Py",
                desc: null,
                link: null
            },
            {
                img: expressjs,
                title: "Express.js",
                desc: null,
                link: null
            },
            {
                img: reactjs,
                title: "React.js",
                desc: null,
                link: null
            }
        ];
        setFrameworks(data2);
        
        const data3 = [
            {
                img: onepager,
                title: "Onepager",
                desc: "Project uit 2021 - 2022",
                link: "https://github.com/CurleyDS/onepager"
            },
            {
                img: pepperoniparty,
                title: "Pepperoni Party",
                desc: "Project uit 2021 - 2022",
                link: "https://github.com/CurleyDS/CLE4"
            },
            {
                img: spacemeteors,
                title: "Space Meteors",
                desc: "Project uit 2022 - 2023",
                link: "https://github.com/CurleyDS/PRG04-2022-2023"
            },
            {
                img: factorybreakout,
                title: "Factory Breakout",
                desc: "Project uit 2022 - 2023",
                link: "https://github.com/CurleyDS/CLE4-2023"
            },
            {
                img: youngchoices,
                title: "Young Choices",
                desc: "Project uit 2023 - 2024",
                link: "https://cmgt.hr.nl/projecten/young-choices"
            },
            {
                img: weetjegezond,
                title: "Weetjegezond",
                desc: "Project uit 2023 - 2024 (Momenteel is dit project Private)",
                link: "https://weetjegezond.vercel.app/"
            }
        ];
        setProjects(data3);
    }, []);
    
    return (
        <div>
            {/* Navigation Bar */}
            <Navbar></Navbar>
            
            <main className='flex flex-col justify-center max-w-5xl mx-auto p-2 gap-5'>
                {/* Hidden Section */}
                <section className='invisible' id='top'></section>

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
                            <img src={ProfilePic} alt="Portfolio" className='rounded-lg shadow-lg max-w-full h-auto' />
                        </div>
                    </div>
                </section>

                {/* Section Skills */}
                <section className='min-h-screen' id="skills">
                    <h2 className='p-4 text-2xl font-bold'>Skills</h2>
                    
                    <hr />
                    
                    <p className='p-5'>I'm skilled in the use of coding languages and/or frameworks:</p>
                    <Slides data={languages} />
                    
                    <p className='p-5'>I have a little experience in working with other coding languages and/or frameworks as well:</p>
                    <Slides data={frameworks} />
                </section>

                {/* Section Projects */}
                <section className='min-h-screen' id="projects">
                    <h2 className='p-4 text-2xl font-bold'>Projects</h2>
                    
                    <hr />
                    
                    <p className='p-5'>These are projects I've worked on:</p>
                    <Slides data={projects} />
                    
                    {/* Slide menu met afbeelding van project. Link gaat naar project. Github icoon rechtsonder leidt naar Github Repository. */}
                </section>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Home;
