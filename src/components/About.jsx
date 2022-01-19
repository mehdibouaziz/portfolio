import React from 'react'
import '../styles/about.css';
import { Typography, Avatar} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionTitle from './SectionTitle';


function About() {
    const about__accordion = {
        width: '100%',
        backgroundColor: '#091522',
        color: 'white',
    };


    return (
        <div className='about__div' id="about">
            <SectionTitle title="About Me" />

            <div className='flex-row' style={{
                gap: '40px'
            }}>
                <Avatar
                    alt="Mehdi Bouaziz"
                    src="https://avatars.githubusercontent.com/u/31729703?v=4"
                    sx={{
                        height: '150px',
                        width: '150px',
                    }}/>

                <div className='flex-col' style={{
                    textAlign: 'left',
                    alignItems: 'flex-start',
                    width: '55%',
                    maxWidth: '650px',
                    gap: '5px'
                }}>
                    <Typography variant="body1">
                        Hi! I'm Mehdi, a Mechanical Engineer mgr. specialised in Project Management learning to become a Front-End Developer.
                    </Typography>
                    <Typography variant="body1">
                        I have a passion for design and puzzles. This is why I love coding, and developping websites.
                    </Typography>
                    <Typography variant="body1">
                        I'm currently working towards a Front-End certification on @freeCodeCamp.
                    </Typography>
                    <Typography variant="body1">
                        When coding, I focus on delivering an enjoyable user experience, fully responsive, thanks to clean code and polished design.
                    </Typography>
                </div>
            </div>

            <div style={{width: '80%', maxWidth:'700px', marginTop: '30px'}}>
                <Accordion sx={about__accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Techs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{textAlign: 'center', letterSpacing: '5px'}}>
                            <i className="fab fa-html5 fa-3x"></i>
                            <i class="fab fa-css3-alt fa-3x"></i>
                            <i class="fab fa-js fa-3x"></i>
                            <i class="fab fa-react fa-3x"></i>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={about__accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            HTML, CSS
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={about__accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default About
