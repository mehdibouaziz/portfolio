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
  SiReact,
  SiNetlify,
  SiGit,
  SiGithub,
  SiUbuntu,
  SiApple,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiRedux,
  SiPhp,
  SiLaravel,

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
  const sx_bullets = { marginBottom: "15px", lineHeight: "1.6em" };

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
            Hello! I'm Mehdi, a Fullstack Software Developer with 3 years of experience. I also have a Master's Degree in Mechanical Engineering and previously worked as a Project Manager.
          </Typography>
          <Typography variant="body1">
            I enjoy both frontend and backend equally, and switch between them as needed. 
          </Typography>
          <Typography variant="body1">
            I like to investigate and solve problems, chat about software, ask questions, learn, grow, 
            brainstorm and cooperate to find better ways to provide the best service to users.
          </Typography>
          <Typography variant="body1">
            When coding, I focus on delivering a polished user experience with clean, maintainable and scalable code.
          </Typography>
        </Box>
      </Box>

      <div style={{ width: "100%", maxWidth: "700px", marginTop: "30px" }}>
        <Accordion sx={about__accordion} defaultExpanded>
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
                  <SiTypescript size="2em" style={sx_icons} />
                  <SiReact size="2em" style={sx_icons} />
                  <SiNextdotjs size="2em" style={sx_icons} />
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  My core frontend proficiency is modern <strong>Typescript</strong> and <strong>React</strong>
                  <br/>I have commercial experience in both a mix of legacy class based JS/React gradually updgraded to ES6/TS and a more modern <strong>Next.JS</strong> project
                </Typography>
              </Grid>

              <Grid item xs={3} sx={sx_gridicons}>
                <Typography variant="body1" sx={sx_accordionIcons}>
                  <SiRedux size="2em" style={sx_icons} />
                  <SiTailwindcss size="2em" style={sx_icons} />
                  <SiMui size="2em" style={sx_icons} />
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  I'm proficient with Redux and writing React Hooks, I did extensive work with MUI, and loved tailwind and shadcn.
                </Typography>
              </Grid>

              <Grid item xs={3} sx={sx_gridicons}>
                <Typography variant="body1" sx={sx_accordionIcons}>
                  <SiPhp size="2em" style={sx_icons} />
                  <SiLaravel size="2em" style={sx_icons} />
                </Typography>
              </Grid>
              <Grid item xs={9} sx={sx_gridtext}>
                <Typography variant="body1" sx={sx_accordionTypo}>
                  As for backend, I have extensive experience with php + Laravel. <br/>I maintained and optimized legacy code, expanded features, and wrote integration and unit tests.
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
              Fullstack Software Engineer - Hemmersbach - Current - 3 years
            </Typography>
            <Typography variant="body2" sx={{ ...sx_bullets, marginBottom: "40px" }}>
              - Maintain and expand the features of our in house project management tool used by 1000+ users, with a React frontend and Laravel backend.
              <br />
              - Developed from scratch and delivered an app to support HR and Finance in their recruitment process, in Next and Laravel.
              <br />
              - Regular L2 support shifts.
              <br />
              - I have been praised for my ability to quickly learn and adopt new technologies, my focus on quality, user satisfaction and cooperation with other teams, and my capacity to anticipate, identify and solve problems.
              <br />
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              Workload Manager & Planning Engineer - Alstom (Chorzów PL) - 3
              years
            </Typography>
            <Typography variant="body2" sx={sx_bullets}>
              - Managed the project planning of 5-20 people teams and the workload of the department (100+ people).
              <br />
              - Developed, improved, and maintained Excel and VBA tools
              for the team's management
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "1em" }}>
              Project Planning Engineer - Aptiskills (Lyon/Paris FR) - 9 months
            </Typography>
            <Typography
              variant="body2"
              sx={{ ...sx_bullets, marginBottom: "30px" }}
            >
              - Established and supervised the schedule and day-to-day operations of a 15M€ / 18-months
              long construction project, coordinating 4 subcontractors and up to 50+ people on site.
              <br />
              - Developed an issue tracking system with Excel VBA to monitor the
              project's completion and generate reports for the client.
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
              a development environment with ubuntu and git
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
