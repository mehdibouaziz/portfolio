import React from "react";
import "../styles/contact.css";
import SectionTitle from "./SectionTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography, Box, Link } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Box className="contact__div" id="contact" sx={{
        margin: {xs:'0 0 10vh 0',sm:'0 0 25vh 0'}
    }}>
      <SectionTitle title="Contact" />

      <Grid container rowSpacing={4} columnSpacing={6}>
        <Grid item xs={12} md={8}>
          <form
            className=""
            action="https://formspree.io/f/mwkyvrng"
            method="POST"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <TextField
                  id="form-name"
                  label="Full Name"
                  name="Full name"
                  placeholder="Enter full name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                <TextField
                  id="form-company"
                  label="Company"
                  name="Company"
                  placeholder="Enter firm name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="form-email"
                  label="Email"
                  type="email"
                  name="Email"
                  placeholder="Enter your contact email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="form-msg"
                  label="Message"
                  name="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  required
                  minRows={4}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  fullWidth
                  sx={{
                    backgroundImage:
                      "linear-gradient(70deg,rgb(255,35,60),rgb(255,166,0))",
                    color: "#011222",
                    opacity: 1,
                    transition: 'color 0s',
                    "&:hover": {
                      color: 'white',
                      opacity: 0.8,
                      // backgroundImage:
                      //   "linear-gradient(70deg,rgb(160,20,37),rgb(194,126,1))",
                    },
                  }}
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography sx={{ marginBottom: "5px" }}>Or find me on :</Typography>
          <Box
            className="flex-col"
            sx={{
              flexDirection: { xs: "row", md: "column" },
              gap: "10px",
              flexWrap: "wrap",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <Link
              target="_blank"
              href="https://github.com/mehdibouaziz"
              rel="noreferrer"
              title="github profile"
              underline="none"
              color="inherit"
            >
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{
                  backgroundColor: '#0d151d',
                  color: 'white',
                  '&:hover':{
                    backgroundColor: '#203447',
                  },
                }}
              >
                Github
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mehdi-bouaziz/"
              rel="noreferrer"
              title="linkedin profile"
              underline="none"
              color="inherit"
            >
              <Button
                variant="contained"
                startIcon={<LinkedInIcon />}
                sx={{
                  backgroundColor: '#007cce',
                  color: 'white',
                  '&:hover':{
                    backgroundColor: '#33adff',
                  },
                }}
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://www.freecodecamp.org/MehdiBouaziz"
              rel="noreferrer"
              title="freecodecamp profile"
              underline="none"
              color="inherit"
            >
              <Button
                variant="contained"
                startIcon={<i className="fab fa-free-code-camp"></i>}
                sx={{
                  backgroundColor: '#000',
                  color: 'white',
                  '&:hover':{
                    backgroundColor: '#222',
                  },
                }}
              >
                FreeCodeCamp
              </Button>
            </Link>
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
                  backgroundColor: '#067225',
                  color: 'white',
                  '&:hover':{
                    backgroundColor: '#089c33',
                  },
                }}
              >
                See my Resume
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
