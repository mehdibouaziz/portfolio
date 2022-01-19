import React from 'react'
import SectionTitle from './SectionTitle';
import '../styles/portfolio.css';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PortfolioCard from './PortfolioCard-mui';


const Portfolio = () => {
    const portfolio__toggle = {
        backgroundColor: '#02213f',
        color: 'white',
        border: 'solid 1px #4d7caa'
    };

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
                ['https://mehdibouaziz.github.io/react-calculator/','github-pages','fas fa-external-link-alt','Github Pages']
            ]
        },
    }

    return (
        <div className="portfolio__div" id="portfolio">
            <div>
            <SectionTitle title="Portfolio" />
            </div>
            <div className="portfolio__filters-div">
                <ToggleButtonGroup>
                    <ToggleButton value="react" aria-label="react">
                        React
                    </ToggleButton>
                    <ToggleButton value="jquery" aria-label="jquery">
                        jQuery
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className='portfolio__card-container'>
                <PortfolioCard data={projects.pomodoro}/>
                <PortfolioCard data={projects.calculator}/>

            </div>
        </div>
    )
}

export default Portfolio
