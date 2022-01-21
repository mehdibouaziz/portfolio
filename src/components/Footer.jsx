import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    const fontstyle = {
        fontSize: '0.7em',
        color: '#aaa',

    };

  return <Box className="flex-row" sx={{
      width:'100%',
      backgroundColor:'#000',
      marginBottom: 0,
      gap: '20px',
      padding: '6px 0 2px 0',
  }}>
      <Typography sx={fontstyle}>{'\u00A9'} Copyright 2022</Typography>
      <Typography sx={fontstyle}>Built with ☕ by Mehdi Bouaziz</Typography>
    </Box>
};

export default Footer;
