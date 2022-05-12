import { Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';

import React from 'react';

const Footer = () => {
    const fontstyle = {
        fontSize: '0.7em',
        color: '#aaa',
    };
    const creditsstyle = {
        fontSize: '1.2em',
        color: '#fff',
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
      <Tooltip
        title={
            <React.Fragment>
                <Typography sx={creditsstyle}>Landing background:</Typography>
                <Link
                    sx={{fontSize: '1.1em'}}
                    href="https://www.freepik.com/vectors/abstract-network"
                    target="_blank"
                    rel="noreferrer"
                    title="background image source"
                    >Abstract network vector created by starline - www.freepik.com</Link>
            </React.Fragment>
        }
        placement="top"
        arrow
      >
        <Typography sx={fontstyle}>Credits: <i className="fa-solid fa-eye"></i></Typography>
      </Tooltip>
    </Box>
};

export default Footer;
