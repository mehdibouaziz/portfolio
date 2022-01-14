import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../img/brand-red.png';

import useScrollTrigger from '@mui/material/useScrollTrigger';




const Navbar = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    return (
        <AppBar 
            className="navbar"
            position="fixed"
            elevation ={(trigger ? 4 : 0)}
            sx={{backgroundColor: (trigger ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)'), transition: 'background-color 0.5s'}}
            >
                <Toolbar>
                    <img src={Brand} alt="Brand" style={{
                        height: '25px',
                        marginLeft: '10vw',
                        marginRight: '20px'
                    }}></img>

                    <Typography variants="button" component="div" sx={{
                        flexGrow: 1,
                        textAlign: 'left',
                        fontSize: '1.5em',
                        }}>
                        MB
                    </Typography>
                    
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Me</Button>
                    <Button color="inherit">Portfolio</Button>
                    <Button color="inherit" sx={{
                        marginRight: '10vw',
                        border: 'solid 1px white',
                        borderRadius: 0,
                        }}>Contact</Button>

                    </Toolbar>
            </AppBar>
    )
}

export default Navbar
