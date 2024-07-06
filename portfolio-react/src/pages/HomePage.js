import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavComponent';
import ProfilePic from '../assets/profile.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Home() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <Navbar></Navbar>
            
            <main className='flex flex-col justify-center max-w-5xl mx-auto p-2 gap-5'>
                {/* Section About Me */}
                {/* Geef foto mee. */}
                <section id="aboutme">
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
                {/* Maak het visueler. */}
                <section id="skills">
                    <h2 className='p-4 text-2xl font-bold'>Skills</h2>
                    <hr />
                    <p className='p-5'>I'm skilled in the use of these coding languages and/or frameworks:</p>
                    {/* Toon lijst met logos van de programmeertalen en frameworks in plaats van */}
                    <ul className='p-5'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>Vue.js</li>
                        <li>Laravel</li>
                        <li>TailwindCSS</li>
                    </ul>
                    <p className='p-5'>I have a little experience in working with these coding languages and/or frameworks:</p>
                    <ul className='p-5'>
                        <li>PixiJS</li>
                        <li>ExcaliburJS</li>
                        <li>Ren'Py</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                    </ul>
                </section>

                {/* Section Projects */}
                <section id="projects">
                    <h2 className='p-4 text-2xl font-bold'>Projects</h2>
                    <hr />
                    <p className='p-5'>These are projects I've worked on:</p>
                    
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className='p-5'>
                                {/* <img src={Project1Image} alt="Project 1" className='rounded-lg shadow-lg max-w-full h-auto' /> */}
                                <h3 className='p-4'>Onepager</h3>
                                <p>Project uit 2021 - 2022</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5'>
                                {/* <img src={Project1Image} alt="Project 1" className='rounded-lg shadow-lg max-w-full h-auto' /> */}
                                <h3 className='p-4'>Pepperoni Party</h3>
                                <p>Project uit 2021 - 2022</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5'>
                                {/* <img src={Project1Image} alt="Project 1" className='rounded-lg shadow-lg max-w-full h-auto' /> */}
                                <h3 className='p-4'>Space Meteors</h3>
                                <p>Project uit 2022 - 2023</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5'>
                                {/* <img src={Project1Image} alt="Project 1" className='rounded-lg shadow-lg max-w-full h-auto' /> */}
                                <h3 className='p-4'>Factory Breakout</h3>
                                <p>Project uit 2022 - 2023</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5'>
                                {/* <img src={Project1Image} alt="Project 1" className='rounded-lg shadow-lg max-w-full h-auto' /> */}
                                <h3 className='p-4'>Young Choices</h3>
                                <p>Project uit 2023 - 2024</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5'>
                                {/* <img src={Project1Image} alt="Project 1" className='rounded-lg shadow-lg max-w-full h-auto' /> */}
                                <h3 className='p-4'>Weetjegezond</h3>
                                <p>Project uit 2023 - 2024 (Momenteel is dit project Private)</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    
                    {/* Slide menu met afbeelding van project. Link gaat naar project. Github icoon rechtsonder leidt naar Github Repository. */}
                </section>
            </main>

            {/* Footer */}
            {/* Iconen tonen in plaats van links. */}
            <footer className='text-center py-12'>
                <ul className='flex justify-center p-0'>
                    <li className='m-2 rounded-2xl text-center px-2 py-5'>
                        <button>Instagram</button>
                    </li>
                    <li className='m-2 rounded-2xl text-center px-2 py-5'>
                        <button>LinkedIn</button>
                    </li>
                    <li className='m-2 rounded-2xl text-center px-2 py-5'>
                        <button>Github</button>
                    </li>
                </ul>
                <button>Back to top</button>
            </footer>
        </div>
    );
}

export default Home;
