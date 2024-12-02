import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function List({ data = [], favorite = false }) {
    const [list, setList] = useState(null);
    const [currentKey, setCurrentKey] = useState(null);

    const toggleDetails = (key) => {
        console.log(key);
        // ask ChatGPT
        if (currentKey !== key) {
            const item = list[key];

            item.getElementById('itemDetails').classList.remove("hidden");
        } else {
            const item = list[currentKey];

            item.getElementById('itemDetails').classList.add("hidden");
        }
    };
    
    useEffect(() => {
        setList(document.getElementById('list'));
    }, []);
    
    return (
        <ul id='list'>
            {data.filter((item) => !favorite || item.favoritized).map((item, index) => (
                <li key={index}>
                    <span id='item' className='flex flex-row w-full items-center'>
                        <div className='flex flex-row flex-1' onClick={() => toggleDetails(index)}>
                            <div className='p-5'>
                                <img src={item.img} alt={item.title} className='object-scale-down h-32 w-64' />
                            </div>
                            <div className='flex flex-col p-5 justify-center text-left'>
                                <div className='flex items-center'>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className='flex items-center'>
                                    <h3>{item.desc}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            {item.github_link && <a href={item.github_link} target="_blank" rel="noopener noreferrer" title='Go to Github Project'>
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </a>}
                        </div>
                    </span>
                    <span id='itemDetails' className='flex items-start justify-center w-full min-h-screen hidden'>
                        <div className='flex flex-col'>
                            <div className='flex justify-center p-5'>
                                <img src={item.img} alt={item.title} className='object-scale-down h-64' />
                            </div>
                            <div className='flex flex-col p-5 text-left'>
                                <div className='flex items-center'>
                                    <h3 className='text-left'>{item.title}</h3>
                                </div>
                                <div className='flex items-center'>
                                    <h3 className='text-left'>{item.desc}</h3>
                                </div>
                            </div>
                        </div>
                    </span>
                </li>
            ))}
        </ul>
      );
};

export default List;
