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
        recipeapp: {
            id: 'recipeApp',
            img: 'recipeapp.png',
            alt: 'recipe app preview',
            name: 'Recipe App',
            txt: 'Recipe catalog created with React for my own use. Includes a search engine, dark/light modes and a JSON generator to add new recipes to the catalog.',
            links: [
                ['https://mehdibouaziz.github.io/recipe-app/','github-pages','external','Github Pages'],
                ['https://github.com/mehdibouaziz/recipe-app','github','github', 'Github repository']
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
