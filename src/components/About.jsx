import React from 'react'
import '../styles/about.css';
import { Typography, Avatar, Box, Link} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionTitle from './SectionTitle';
import Grid from '@mui/material/Grid';


function About() {
    const about__accordion = {
        width: '100%',
        backgroundColor: '#091522',
        color: 'white',
    };

    const sx_accordionTypo = {
        textAlign: 'left',
    };
    const sx_accordionIcons = {
        textAlign: 'center',
        letterSpacing: '5px'
    };
    const sx_bullets = {marginBottom:'10px', lineHeight: '1.6em'};


    return (
        <div className='about__div' id="about">
            <SectionTitle title="About Me" />

            <Box className='flex-row' sx={{
                gap: {xs:'20px', sm: '40px'},
                flexDirection: {xs: 'column', sm:'row'},
            }}>
                <Avatar
                    alt="Mehdi Bouaziz"
                    src="https://avatars.githubusercontent.com/u/31729703?v=4"
                    sx={{
                        height: '150px',
                        width: '150px',
                    }}/>

                <Box className='flex-col' sx={{
                    textAlign: 'left',
                    alignItems: 'flex-start',
                    width: {xs:'100%',sm:'60%'},
                    maxWidth: '650px',
                    gap: '5px'
                }}>
                    <Typography variant="body1">
                        Hi! I'm Mehdi, a Mechanical Engineer mgr. specialised in Project Management learning to become a Front-End Developer.
                    </Typography>
                    <Typography variant="body1">
                        I have a passion for design and puzzles. This is why I love coding, and developing websites.
                    </Typography>
                    <Typography variant="body1">
                        I completed the Front-End certifications on <Link href="https://www.freecodecamp.org/learn">freeCodeCamp</Link> and I am currently working towards the Data Visualisation and basic Back End and API certifications.
                    </Typography>
                    <Typography variant="body1">
                        When coding, I focus on delivering an polished user experience, fully responsive, thanks to clean code and design.
                    </Typography>
                </Box>
            </Box>

            <div style={{width: '100%', maxWidth:'700px', marginTop: '30px'}}>
                <Accordion sx={about__accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Techs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid container spacing={1}>

                            <Grid item xs={3}>
                                <Typography variant="body1" sx={sx_accordionIcons}>
                                    <i className="fab fa-html5 fa-2x"></i>
                                    <i className="fab fa-css3-alt fa-2x"></i>
                                    <i className="fab fa-js fa-2x"></i>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="body1" sx={sx_accordionTypo}>
                                    ES6  |  FreeCodeCamp certificates: Responsive Web Design + Javascript Algorithms and Data Structures
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant="body1" sx={sx_accordionIcons}>
                                    <i className="fab fa-react fa-2x"></i>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="body1" sx={sx_accordionTypo}>
                                    Basics of React (both class and function components) | React+Redux | Hooks
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant="body1" sx={sx_accordionIcons}>
                                    <i className="fab fa-bootstrap fa-2x"></i>
                                    <i className="fab fa-sass fa-2x"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 36 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#FFF"></path></svg>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="body1" sx={sx_accordionTypo}>
                                    Experience working with: Bootstrap | Sass | MaterialUI | jQuery | D3.js
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant="body1" sx={sx_accordionIcons}>
                                    <i className="fab fa-git fa-2x"></i>
                                    <i className="fab fa-github fa-2x"></i>
                                    <i className="fab fa-ubuntu fa-2x"></i>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="body1" sx={sx_accordionTypo}>
                                    Basic knowledge of git, github and bash (working on ubuntu 20.04)
                                </Typography>
                            </Grid>
                            
                        </Grid>

                    </AccordionDetails>
                </Accordion>

                <Accordion sx={about__accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Work Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6" sx={{fontSize:'1em'}}>
                            Workload Manager & Planning Engineer - Alstom (Chorzów PL) - 3 years
                        </Typography>
                        <Typography variant="body2" sx={sx_bullets}>
                            - Managed the project planning of 5-20 people teams<br />
                            - Supervised the workload of the department (100 people) in coordination with headquarters and collaborating sites<br />
                            - Implemented the department's KPI dashboard and regular performance reviews<br />
                            - Developped and improved Excel and VBA tools for the team's management
                        </Typography>
                        <Typography variant="h6" sx={{fontSize:'1em'}}>
                            Project Planning Engineer - Aptiskills (Lyon/Paris FR) - 9 months
                        </Typography>
                        <Typography variant="body2" sx={{...sx_bullets, marginBottom:'20px'}}>
                            - Established and supervised the schedule of a 15M€ / 18-months long project<br />
                            - Developped an issue tracking system with Excel VBA to monitor the project's completion and generate reports for the client<br />
                            - Supervised the day-to-day progress of the construction teams and 4 subcontractors on site
                        </Typography>

                        <Typography variant="body2">
                            Find out more about my work experience on <Link href="https://www.linkedin.com/in/mehdi-bouaziz/">Linkedin</Link>
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
                        <Typography variant="h6" sx={{fontSize:'1em'}}>
                            FreeCodeCamp + The Odin Project
                        </Typography>
                        <Typography variant="body2" sx={sx_bullets}>
                            - Responsive Web Design Certification: HTML, CSS, Accessibitily, Responsive web design<br />
                            - JS Algorithms and Data Structures: ES6. Regex, Algorithms<br />
                            - Front End Development Libraries: Bootstrap, jQuery, SASS, React, Redux<br />
                            - Data Visualisation: D3.js, JSON, AJAX<br />
                            - The Odin Project: As a complement to FCC for how to setup and development environment with ubuntu and git
                        </Typography>

                        <Typography variant="h6" sx={{fontSize:'1em'}}>
                            Mechanical and Industrial Master Engineer - Arts et Métiers Institute of Technology
                        </Typography>
                        <Typography variant="body2" sx={sx_bullets}>
                            - Mechanical engineering: CAD design, material science, manufacturing, lean management and PMP<br />
                            - Electrical engineering: mechatronics, basics of computer science (VBA, SQL) and electronics
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default About
