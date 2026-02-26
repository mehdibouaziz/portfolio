import React from 'react'
import SectionTitle from './SectionTitle';
import '../styles/portfolio.css';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PortfolioCard from './PortfolioCard-mui';
import { Box, Typography } from '@mui/material';


const Portfolio = () => {

    /* put the image in src/img/portfolio */
    /* the first link in the array will be used as the main card action href */
    const projects = {
        recipeApp: {
            id: 'sdc',
            img: 'sdc.png',
            alt: 'sdc app',
            name: 'SDC',
            txt: 'The project management tool I contributed to for 3 years at Hemmersbach. Technologies used: React, TypeScript, laravel, php.',
            links: [
                ['https://www.hemmersbach.com/sdc','sdc','external','SDC']
            ]
        },
    };


    const hobby = {
        recipeApp: {
            id: 'recipeApp',
            img: 'recipeapp.png',
            alt: 'recipe app preview',
            name: 'Recipe App',
            txt: 'Recipe catalog that I actually use all the time for cooking. Created with React, Tailwind, DaisyUI, and Firebase.',
            links: [
                ['https://am-recipes.vercel.app/','vercel','external','Vercel'],
                ['https://github.com/mehdibouaziz/recipe-app','github','github', 'Github repository']
            ]
        },
        wordle: {
            id: 'wordle',
            img: 'wordle.png',
            alt: 'wordle app preview',
            name: 'Wordle Clone',
            txt: 'Worlde clone created using React and Redux. Play with the word of the day or a random word. Can be played both in English and French.',
            links: [
                ['https://mehdibouaziz.github.io/wordle-clone/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/wordle-clone','github','github', 'Github repository']
            ]
        },
        supportDesk: {
            id: 'supportDesk',
            img: 'supportDesk.png',
            alt: 'support desk preview',
            name: 'Support Desk',
            txt: 'Fullstack MERN App: Users can register and authenticate to create and manage support tickets. Deployed to render, give it a few seconds to mount :)',
            links: [
                ['https://support-desk-epj7.onrender.com/','render','external','Render'],
                ['https://github.com/mehdibouaziz/support-desk','github','github', 'Github repository']
            ]
        },
        pomodoro: {
            id: 'pomodoro',
            img: 'pomodoro.png',
            alt: 'pomodoro app preview',
            name: 'Pomodoro',
            txt: '25/5 pomodoro clock created using React. Session and break duration can be set, remaining time in the session is vizualised with a color coded animated border.',
            links: [
                ['https://mehdibouaziz.github.io/pomodoro/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/pomodoro','github','github', 'Github repository']
            ]
        },
        calculator: {
            id: 'calculator',
            img: 'calculator.png',
            name: 'Calculator',
            txt: 'Calculator created for the FreeCodeCamp curriculum.',
            links: [
                ['https://mehdibouaziz.github.io/calculator-react/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/calculator-react','github','github', 'Github repository']
            ]
        },
    };

    const proKeys = Object.keys(projects);
    const hobbyKeys = Object.keys(hobby);

    const portfolioCards = proKeys.map(key => {return (<PortfolioCard key={projects[key].id} data={projects[key]}/>)});
    const hobbyCards = hobbyKeys.map(key => {return (<PortfolioCard key={hobby[key].id} data={hobby[key]}/>)});

    return (
        <div className="portfolio__div" id="portfolio">
            <div>
            <SectionTitle title="Portfolio" />
            </div>

            <Typography variant="h5" sx={{
                paddingBottom: '3px',
                borderBottom: '1px solid white',
                margin: '0 0 16px 0',
                width: '120px',
                textAlign: 'center',
            }}>Pro</Typography>

            <div className='portfolio__card-container'>
                {portfolioCards}
            </div>

            <Typography variant="h5" sx={{
                paddingBottom: '3px',
                borderBottom: '1px solid white',
                margin: '32px 0 16px 0',
                width: '120px',
                textAlign: 'center',
            }}>Hobby</Typography>
            <div className='portfolio__card-container'>
                {hobbyCards}
            </div>
        </div>
    )
}

export default Portfolio
