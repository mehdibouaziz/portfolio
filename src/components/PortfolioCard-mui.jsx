import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const Links = (props) => {
    return (
        <Link target="_blank" href={props.url} rel="noreferrer" title={props.title} underline="none" >
            <IconButton aria-label={props.aria} sx={{padding: '6px'}}>
                {props.icon === 'external' && (<OpenInNewIcon />)}
                {props.icon === 'github' && (<GitHubIcon />)}
            </IconButton>
        </Link>
    )
};


const PortfolioCard = (props) => {
    let linkIcons = props.data.links.map((links) =>
        <Links url={links[0]} aria={links[1]} icon={links[2]} title={links[3]}/>
    );
   
    return (
        <Card key={'portfolio-card-' + props.data.id} sx={{
            width: 320,
            height: 340,
            backgroundColor: '#091522',
            '&:hover': {
                width: 325,
                height: 345,
            },
            transition: 'width 0.5s, height 0.5s'
            }}>

        <CardActionArea href={props.data.links[0][0]} target="_blank" rel="noreferrer">
            <CardMedia
                component="img"
                height="140"
                image={require("../img/portfolio/" + props.data.img)}
                alt={props.data.alt}
            />
            <CardContent sx={{
                height: '110px'
            }}
                
            >
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.txt}
                </Typography>
            </CardContent>
        </CardActionArea>

            <CardActions sx={{
                alignSelf: 'flex-end',
            }}>
                <Typography variant="body2" color="text.secondary" sx={{marginLeft: '5px', marginRight: '10px'}}>
                    See it on:
                </Typography>
                {linkIcons}
            </CardActions>
        </Card>

    )
}

export default PortfolioCard
