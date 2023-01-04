import React from 'react'
import SectionTitle from './SectionTitle';
import '../styles/portfolio.css';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PortfolioCard from './PortfolioCard-mui';
import { Box } from '@mui/material';


const Portfolio = () => {

    /* put the image in src/img/portfolio */
    /* the first link in the array will be used as the main card action href */
    const projects = {
        recipeApp: {
            id: 'recipeApp',
            img: 'recipeapp.png',
            alt: 'recipe app preview',
            name: 'Recipe App',
            txt: 'WIP: Recipe catalog created with React, Tailwind, DaisyUI, and Firebase. Fully responsive UI, users can authenticate to add and modify recipes. See GH readme for WIP features.',
            links: [
                ['https://am-recipes.vercel.app/','vercel','external','Vercel'],
                ['https://github.com/mehdibouaziz/recipe-app','github','github', 'Github repository']
            ]
        },
        supportDesk: {
            id: 'supportDesk',
            img: 'supportDesk.png',
            alt: 'support desk preview',
            name: 'Support Desk',
            txt: 'Fullstack MERN App: Users can register and authenticate to create and manage support tickets. Deployed to render.',
            links: [
                ['https://support-desk-epj7.onrender.com/','render','external','Render'],
                ['https://github.com/mehdibouaziz/support-desk','github','github', 'Github repository']
            ]
        },
        wordle: {
            id: 'wordle',
            img: 'wordle.png',
            alt: 'wordle app preview',
            name: 'Wordle Clone',
            txt: 'Worlde clone created using React and Redux. Play with the word of the day or a random word. Can be played in English and French.',
            links: [
                ['https://mehdibouaziz.github.io/wordle-clone/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/wordle-clone','github','github', 'Github repository']
            ]
        },
        houseMarketplace: {
            id: 'houseMarketplace',
            img: 'houseMarketplace.png',
            alt: 'house marketplace preview',
            name: 'House Marketplace',
            txt: 'House Marketplace app developed for a Udemy course. Includes user authentication and database with firebase, image hosting with firestore. A logged user can manage its profile and own listings.',
            links: [
                ['https://house-marketplace-eight-gamma.vercel.app/','vercel','external','Vercel'],
                ['https://github.com/mehdibouaziz/house-marketplace','github','github', 'Github repository']
            ]
        },
        githubFinder: {
            id: 'githubFinder',
            img: 'githubFinder.png',
            alt: 'github finder preview',
            name: 'Github Finder',
            txt: 'Github finder app developed for a Udemy course. Uses the Github API to search for users and display their profile, stats, and repos.',
            links: [
                ['https://github-finder-jade-xi.vercel.app/','vercel','external','Vercel'],
                ['https://github.com/mehdibouaziz/github-finder','github','github', 'Github repository']
            ]
        },
        plantsapp: {
            id: 'plantsApp',
            img: 'plantsapp.png',
            alt: 'plants care app preview',
            name: 'Plants Care App',
            txt: 'House plant catalog and care tips app created by cloning my Recipe App and reusing its components.',
            links: [
                ['https://mehdibouaziz.github.io/plants-app/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/plants-app','github','github', 'Github repository']
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
        quoteMachine: {
            id: 'quoteMachine',
            img: 'quoteMachine.png',
            name: 'Random Quote Machine',
            txt: 'Random quote generator created for FreeCodeCamp curriculum. The quotes are provided by the Quotable API, with a fallback library of quotes in case of a fetch error.',
            links: [
                ['https://mehdibouaziz.github.io/random-quote-machine/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/random-quote-machine','github','github', 'Github repository']
            ]
        },
    };

    const projectsKeys = Object.keys(projects)
    const portfolioCards = projectsKeys.map(item => {return (<PortfolioCard data={projects[item]}/>)});

    return (
        <div className="portfolio__div" id="portfolio">
            <div>
            <SectionTitle title="Portfolio" />
            </div>
            <Box className="portfolio__filters-div" sx={{display:'none'}}>
                <ToggleButtonGroup>
                    <ToggleButton value="react" aria-label="react">
                        React
                    </ToggleButton>
                    <ToggleButton value="jquery" aria-label="jquery">
                        jQuery
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <div className='portfolio__card-container'>
                {portfolioCards}
            </div>
        </div>
    )
}

export default Portfolio
