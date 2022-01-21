import React from 'react'
import '../styles/landing.css';
import { Typography } from '@mui/material';


const Landing = (props) => {
    return (
        <div className='landing__div' id="landing">
            <div className="landing__card">
                <Typography variant="subtitle1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: '0.8em',
                    color: 'white',
                    fontWeight: 300,
                    fontVariant: 'small-caps',
                    letterSpacing: '2px',
                    lineHeight: 2,
                }}>
                    HELLO, I'M
                </Typography>

                <Typography variant="h1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: {xs:'5em', sm:'6em'},
                    color: 'white',
                    fontWeight: 400,
                    letterSpacing: {xs:'4px', sm:'-13px'},
                    lineHeight: 1.2,
                    fontFamily: "'Roboto', sans-serif",
                }}>
                    {props.name}
                </Typography>

                <Typography variant="subtitle1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: '2em',
                    color: 'white',
                    fontWeight: 300,
                    letterSpacing: '-1px',
                    lineHeight: 1
                }}>
                    {props.title}
                </Typography>

                <Typography variant="subtitle1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: '0.8em',
                    color: 'white',
                    fontWeight: 300,
                    fontVariant: 'small-caps',
                    letterSpacing: '2px',
                    lineHeight: 3,
                }}>
                    SELF TAUGHT
                </Typography>
                

            </div>
        </div>
    )
}

export default Landing
