import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const Links = (props) => {
    return (
        <Link target="_blank" href={props.url} rel="noreferrer" title={props.title} underline="none">
            <IconButton aria-label={props.aria} size="">
                <i className={props.icon +" fa-sm"}></i>
            </IconButton>
        </Link>
    )
};


const PortfolioCard = (props) => {
    let linkIcons = props.data.links.map((links) =>
        <Links url={links[0]} aria={links[1]} icon={links[2]} title={links[3]}/>
    );
   
    return (
        <Card sx={{
            width: 320,
            height: 320,
            backgroundColor: '#091522',
            '&:hover': {
                width: 330,
                height: 330,
            },
            transition: 'width 0.5s, height 0.5s'
            }}>

            <CardMedia
                component="img"
                height="140"
                image={require("../img/portfolio/" + props.data.img)}
                alt={props.data.alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.txt}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="body2" color="text.secondary" sx={{marginLeft: '5px', marginRight: '10px'}}>
                    See it on:
                </Typography>
                {linkIcons}
            </CardActions>
        </Card>

    )
}

export default PortfolioCard
