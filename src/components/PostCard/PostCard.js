import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        margin: "1rem 2rem",  
    },
})

const PostCard = ({ post, handleReadMore }) => {
    const classes = useStyles();
    const [img, setImg] = useState("")
    const { title, id } = post;
    
    useEffect(() => {
        fetch("https://picsum.photos/200/100")
            .then(res => setImg(res.url))
    }, [id])

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="post photo"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {handleReadMore(id)}}>
                    Share
                </Button>
                <Button size="small" color="primary" onClick={() => {handleReadMore(id)}}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default PostCard;