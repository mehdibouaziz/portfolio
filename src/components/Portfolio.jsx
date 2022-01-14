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
            name: 'Pomodoro',
            img: 'pomodoro.png',
            txt: '25/5 pomodoro clock created using react'
        },
        calculator: {
            id: 'calculator',
            name: 'Calculator',
            img: 'calculator.png',
            txt: 'Calculator create for FreeCodeCamp curriculum'
        },
    }

    return (
        <div className="portfolio__div">
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
