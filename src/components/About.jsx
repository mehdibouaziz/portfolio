import React from "react";
import "../styles/about.css";
import { Typography, Avatar, Box, Link, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionTitle from "./SectionTitle";
import Grid from "@mui/material/Grid";

import {
  SiReactrouter,
  SiRedux,
  SiReact,
  SiMaterialui,
  SiJquery,
  SiD3Dotjs,
  SiBootstrap,
  SiSass,
  SiNetlify,
  SiGit,
  SiGithub,
  SiUbuntu,
  SiApple,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiVercel,
  SiTypescript
} from "react-icons/si";

function About() {
  const about__accordion = {
    width: "100%",
    backgroundColor: "#091522",
    color: "white",
  };

  const sx_accordionTypo = {
    textAlign: "left",
  };
  const sx_accordionIcons = {
    textAlign: "center",
    letterSpacing: "5px",
  };
  const sx_bullets = { marginBottom: "10px", lineHeight: "1.6em" };

  const sx_icons = {
    verticalAlign: "baseline",
    marginRight: "5px",
  };
  const sx_gridicons = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  };
  const sx_gridtext = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <div className="about__div" id="about">
      <SectionTitle title="About Me" />

      <Box
        className="flex-row"
        sx={{
          gap: { xs: "20px", sm: "40px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Avatar
          alt="Mehdi Bouaziz"
          src="https://avatars.githubusercontent.com/u/31729703?v=4"
          sx={{
            height: "150px",
            width: "150px",
          }}
        />

        <Box
          className="flex-col"
          sx={{
            textAlign: "left",
            alignItems: "flex-start",
            width: { xs: "100%", sm: "60%" },
            maxWidth: "650px",
            gap: "5px",
          }}
        >
          <Typography variant="body1">
            Hello! I'm Mehdi, a Mechanical Engineer mgr. specialised in Project
            Management, now learning to become a Front-End Developer.
          </Typography>
          <Typography variant="body1">
            I am passionate about new technologies, science, design, and
            puzzles. This is why I love coding and developing websites!
          </Typography>
          <Typography variant="body1">
            I completed the Front-End certifications on{" "}
            <Link href="https://www.freecodecamp.org/learn">freeCodeCamp</Link>{" "}
            and I am currently working on applying my knowledge to create apps
            and learning about new libraries.
          </Typography>
          <Typography variant="body1">
            When coding, I focus on delivering a polished user experience thanks
            to clean code and responsive design.
          </Typography>
        </Box>
      </Box>

      <div style={{ width: "100%", maxWidth: "700px", marginTop: "30px" }}>
        <Accordion sx={about__accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Techs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={3} sx={sx_gridicons}>
                <Typography variant="body1" sx={sx_accordionIcons}>
                  <SiHtml5 size="2em" style={sx_icons} />
                  <SiCss3 size="2em" style={sx_icons} />
                  <SiJavascript size="2em" style={sx_icons} />
                  <SiTypescript size="2em" style={sx_icons} />
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  ES6 | FreeCodeCamp certificates: Responsive Web Design,
                  Javascript Algorithms and Data Structures, Front End Libraries
                  <br /> Fundamentals of TypeScript
                </Typography>
              </Grid>

              <Grid item xs={3} sx={sx_gridicons}>
                <Typography variant="body1" sx={sx_accordionIcons}>
                  <SiReact size="2em" style={sx_icons} />
                  <SiRedux size="2em" style={sx_icons} />
                  <SiReactrouter size="2em" style={sx_icons} />
                  
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  Modern React w/ Hooks | Redux | ReactRouter | 
                </Typography>
              </Grid>

              <Grid item xs={3} sx={sx_gridicons}>
                <Typography variant="body1" sx={sx_accordionIcons}>
                  <SiTailwindcss size="2em" style={sx_icons} />
                  <SiMaterialui size="2em" style={sx_icons} />
                  <SiBootstrap size="2em" style={sx_icons} />
                  <SiSass size="2em" style={sx_icons} />
                  <SiJquery size="2em" style={sx_icons} />
                  <SiD3Dotjs size="2em" style={sx_icons} />
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  Experience with: Tailwind | MaterialUI | Bootstrap | Sass | jQuery | D3.js
                </Typography>
              </Grid>

              <Grid item xs={3} sx={sx_gridicons}>
                <Typography variant="body1" sx={sx_accordionIcons}>
                  <SiGit size="2em" style={sx_icons} />
                  <SiGithub size="2em" style={sx_icons} />
                  <SiUbuntu size="2em" style={sx_icons} />
                  <SiApple size="2em" style={sx_icons} />
                  <SiNetlify size="2em" style={sx_icons} />
                  <SiVercel size="2em" style={sx_icons} />
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  Knowledge of git, github, Unix (working on ubuntu 22.04 or
                  MacOS), deployments on Netlify & Vercel
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
            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              Open Source contributions - Current
            </Typography>
            <Typography variant="body2" sx={sx_bullets}>
              - Contributing to freeCodeCamp's new 2022 curriculum: UI/UX tweaks on a Typescript codebase + Cypress tests.
              <br />
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              Workload Manager & Planning Engineer - Alstom (Chorzów PL) - 3
              years
            </Typography>
            <Typography variant="body2" sx={sx_bullets}>
              - Managed the project planning of 5-20 people teams
              <br />
              - Supervised the workload of the department (100+ people) in
              coordination with headquarters and collaborating sites
              <br />
              - Implemented the department's KPI dashboard and regular
              performance reviews
              <br />- Developed, improved, and maintained Excel and VBA tools
              for the team's management
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              Project Planning Engineer - Aptiskills (Lyon/Paris FR) - 9 months
            </Typography>
            <Typography
              variant="body2"
              sx={{ ...sx_bullets, marginBottom: "20px" }}
            >
              - Established and supervised the schedule of a 15M€ / 18-months
              long project
              <br />
              - Developed an issue tracking system with Excel VBA to monitor the
              project's completion and generate reports for the client
              <br />- Supervised the day-to-day progress of the construction
              teams and 4 subcontractors on site
            </Typography>

            <Typography variant="body2">
              Find out more about my work experience on{" "}
              <Link href="https://www.linkedin.com/in/mehdi-bouaziz/">
                Linkedin
              </Link>
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
            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              FreeCodeCamp + The Odin Project
            </Typography>
            <Typography variant="body2" sx={sx_bullets}>
              - Responsive Web Design Certification: HTML, CSS, Accessibitily,
              Responsive web design
              <br />
              - JS Algorithms and Data Structures: ES6. Regex, Algorithms
              <br />
              - Front End Development Libraries: Bootstrap, jQuery, SASS, React,
              Redux
              <br />
              - Data Visualisation: D3.js, JSON, AJAX
              <br />- The Odin Project: As a complement to FCC for how to setup
              and development environment with ubuntu and git
            </Typography>

            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              Mechanical and Industrial Master Engineer - Arts et Métiers
              Institute of Technology
            </Typography>
            <Typography variant="body2" sx={sx_bullets}>
              - Mechanical engineering: CAD design, material science,
              manufacturing, lean management and PMP
              <br />- Electrical engineering: mechatronics, basics of computer
              science (VBA, SQL) and electronics
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Box
          className="flex-row"
          sx={{
            marginTop: "20px",
          }}
        >
          <Link
            target="_blank"
            href="https://mehdibouaziz.github.io/resume/"
            rel="noreferrer"
            title="my resume"
            underline="none"
            color="inherit"
          >
            <Button
              variant="contained"
              startIcon={<i className="fa-solid fa-file-lines"></i>}
              sx={{
                padding: "8px 25px",
                backgroundColor: "#067225",
                color: "white",
                "&:hover": {
                  backgroundColor: "#089c33",
                },
              }}
            >
              See my Resume
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}

export default About;
