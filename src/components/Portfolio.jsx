import React from 'react'
import SectionTitle from './SectionTitle';
import '../styles/portfolio.css';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PortfolioCard from './PortfolioCard-mui';
import { Box } from '@mui/material';


const Portfolio = () => {

    /* put the image in src/img/portfolio */
    const projects = {
        pomodoro: {
            id: 'pomodoro',
            img: 'pomodoro.png',
            alt: 'pomodoro app preview',
            name: 'Pomodoro',
            txt: '25/5 pomodoro clock created using react',
            links: [
                ['https://mehdibouaziz.github.io/pomodoro/','github-pages','fas fa-external-link-alt','Github Pages'],
                ['https://github.com/mehdibouaziz/pomodoro','github','fab fa-github', 'Github repository']
            ]
        },
        calculator: {
            id: 'calculator',
            img: 'calculator.png',
            name: 'Calculator',
            txt: 'Calculator created for FreeCodeCamp curriculum',
            links: [
                ['https://mehdibouaziz.github.io/calculator-react/','github-pages','fas fa-external-link-alt','Github Pages'],
                ['https://github.com/mehdibouaziz/calculator-react','github','fab fa-github', 'Github repository']
            ]
        },
        quoteMachine: {
            id: 'quoteMachine',
            img: 'quoteMachine.png',
            name: 'Random Quote Machine',
            txt: 'Random quote generator created for FreeCodeCamp curriculum',
            links: [
                ['https://mehdibouaziz.github.io/random-quote-machine/','github-pages','fas fa-external-link-alt','Github Pages'],
                ['https://github.com/mehdibouaziz/random-quote-machine','github','fab fa-github', 'Github repository']
            ]
        },
    }

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
                <PortfolioCard data={projects.pomodoro}/>
                <PortfolioCard data={projects.calculator}/>
                <PortfolioCard data={projects.quoteMachine}/>
            </div>
        </div>
    )
}

export default Portfolio
