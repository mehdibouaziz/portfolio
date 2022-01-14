import React from 'react'
import '../styles/landing.css';
import { Typography } from '@mui/material';


const Landing = (props) => {
    return (
        <div className='landing__div'>
            <div className="landing__card">
                <Typography variant="subtitle1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: '0.8em',
                    color: 'white',
                    fontWeight: 100,
                    fontVariant: 'small-caps',
                    letterSpacing: '2px',
                    lineHeight: 4,
                }}>
                    HELLO, I'M
                </Typography>

                <Typography variant="h1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: '4em',
                    color: 'white',
                    fontWeight: 500,
                    letterSpacing: '3px',
                    lineHeight: 1.5
                }}>
                    {props.name}
                </Typography>

                <Typography variant="subtitle1" className='landing__name' sx={{
                    textAlign: 'center',
                    fontSize: '2em',
                    color: 'white',
                    fontWeight: 200,
                    letterSpacing: '-1px',
                    lineHeight: 1
                }}>
                    {props.title}
                </Typography>
                

            </div>
        </div>
    )
}

export default Landing