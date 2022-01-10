import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
    return (
        <AppBar className="navbar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography variants="button" component="div" sx={{ flexGrow: 1, textAlign: 'left'}}>
                        MB
                    </Typography>
                    
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About Me</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Contact</Button>
                        
                    </Toolbar>
            </AppBar>
    )
}

export default Navbar
