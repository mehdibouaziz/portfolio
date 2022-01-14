import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PortfolioCard = (props) => {

    return (
        <Card sx={{ width: 320, height: 300, backgroundColor: '#091522'}}>
        <CardMedia
            component="img"
            height="140"
            image={props.data.img}
            alt="green iguana"
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>

    )
}

export default PortfolioCard
