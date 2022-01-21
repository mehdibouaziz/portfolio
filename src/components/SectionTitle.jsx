import React from 'react';
import { Typography } from '@mui/material';



const SectionTitle = (props) => {
    return (
        <div className='app__section-title-border' id={props.id}>
                <Typography className="app__section-title" variant="h2" sx={{
                    marginBottom: '40px',
                    textAlign: 'center',
                }}>
                    {props.title}
                </Typography>
        </div>
    )
}

export default SectionTitle
