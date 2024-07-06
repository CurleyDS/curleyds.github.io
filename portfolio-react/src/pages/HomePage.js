import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavComponent';

function Home() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <Navbar></Navbar>
            
            <main className='max-w-lg mx-auto'>
                {/* Section About Me */}
                {/* Geef foto mee. */}
                <section id="aboutme">
                    <div>
                        <h2>About Me</h2>
                        <p>
                            Hello! My name is Dylan Schoop and I'm from the Netherlands. I was born in
                            Eindhoven. I live in Zwijndrecht. I have a passion for games and entertainment.
                            My hobbies are going to the gym, playing games, watching shows, and expressing
                            myself through drawing, listening music and playing guitar.
                        </p>
                        <p>
                            I studied Software Development at Da Vinci College and am currently pursuing my
                            studies in Creative Media and Game Technologies (CMGT) at Hogeschool Rotterdam.
                        </p>
                        <p>
                            Whether I'm playing intriguing games, diving into a captivating show, or channeling
                            my imagination through simple drawings, I love to unleash my creativity on projects.
                            My goal is to channel this passion for gaming and creativity into a career in game
                            development or social media.
                        </p>
                    </div>
                    <div>
                        {/* <image src={profile} alt="Portfolio Picture" /> */}
                    </div>
                </section>

                {/* Section Skills */}
                {/* Maak het visueler. */}
                <section id="skills">
                    <h2>Skills</h2>
                    <p>I'm skilled in the use of these coding languages and/or frameworks:</p>
                    {/* Toon lijst met logos van de programmeertalen en frameworks in plaats van */}
                    <ul>
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
                    <p>I have a little experience in working with these coding languages and/or frameworks:</p>
                    <ul>
                        <li>PixiJS</li>
                        <li>ExcaliburJS</li>
                        <li>Ren'Py</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                    </ul>
                </section>

                {/* Section Projects */}
                {/* Maak het visueler. */}
                <section id="projects">
                    <h2>Projects</h2>
                    <p>These are projects I've worked on:</p>
                    
                    {/* Slide menu met afbeelding van project. Link gaat naar project. Github icoon rechtsonder leidt naar Github Repository. */}
                    <h3>2021 t/m 2022:</h3>
                    <ul>
                        <li><button>Onepager</button></li>
                        <li><button>Pepperoni Party</button></li>
                    </ul>
                    
                    <h3>2022 t/m 2023:</h3>
                    <ul>
                        <li><button>Space Meteors</button></li>
                        <li><button>Factory Breakout</button></li>
                    </ul>
                    
                    <h3>2023 t/m 2024:</h3>
                    <ul>
                        <li><button>Young Choices</button></li>
                        <li><button>Weetjegezond</button> (Momenteel is dit project Private)</li>
                    </ul>
                </section>
            </main>

            {/* Footer */}
            {/* Iconen tonen in plaats van links. */}
            <footer>
                <ul>
                    <li><button>Instagram</button></li>
                    <li><button>LinkedIn</button></li>
                    <li><button>Github</button></li>
                </ul>
                <button>Back to top</button>
            </footer>
        </div>
    );
}

export default Home;
