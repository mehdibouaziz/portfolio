import React from 'react';
import '../styles/contact.css';
import SectionTitle from './SectionTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography, Box} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Contact = () => {

    return (
        <div className="contact__div" id="contact">
            <SectionTitle title="Contact" />

            <Grid container rowSpacing={2} columnSpacing={4}>
                <Grid item xs={12} md={8}>
                    <form
                    className=""
                    action="https://formspree.io/f/mwkyvrng"
                    method="POST"
                    >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}>
                        <TextField id="form-name" label="Full Name" placeholder="Enter full name" variant="outlined" fullWidth required />
                        </Grid>

                        <Grid item xs={12} sm={5}>
                        <TextField id="form-company" label="Company" placeholder="Enter your firm name" variant="outlined" fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="form-email" label="Email" placeholder="Enter your contact email" variant="outlined" fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField id="form-msg" label="Message" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            fullWidth
                            sx={{
                                backgroundImage: 'linear-gradient(70deg,rgb(255,35,60),rgb(255,166,0))',
                                color: '#011222',
                                '&:hover': {
                                    backgroundImage: 'linear-gradient(70deg,rgb(160,20,37),rgb(194,126,1))',
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
                    <Typography sx={{marginBottom:'5px'}}>Or find me on :</Typography>
                    <Box className="flex-col"
                        sx={{
                            flexDirection: {xs: 'row', md: 'column'} ,
                            gap: '10px',
                            flexWrap: 'wrap',
                            alignItems:{xs: 'center', md: 'flex-start'},
                            justifyContent:{xs: 'flex-start', md:'center'}
                        }}>
                    <Button variant="contained" startIcon={<GitHubIcon />} color="github">
                        Github
                    </Button>
                    <Button variant="contained" startIcon={<LinkedInIcon />} color="linkedin">
                        LinkedIn
                    </Button>
                    <Button variant="contained" startIcon={<i className="fab fa-free-code-camp"></i>} color="fcc">
                        FreeCodeCamp
                    </Button>

                    
                    </Box>
                </Grid>
            </Grid>

        </div>
    );
}

export default Contact;
