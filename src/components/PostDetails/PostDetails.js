import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import NavBar from '../NavBar/NavBar';


const useStyles = makeStyles(() => 
    createStyles({
        detailsHeader: {
            display: 'flex', 
            justifyContent: 'center',
            color:"#4db6ac"
        },
        postDetails: {
            boxShadow: "0px 0px 5px black",
            borderRadius: "10px",
            padding: "10px"
        }
    })
)

const PostDetails = () => {
    const classes = useStyles()
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        loadData()
        loadComment()
    }, [id])
    const loadData = async () => {
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await fetchData.json();
        setPost(data);
    }
    const loadComment = async () => {
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        const data = await fetchData.json();
        setComment(data);
    }

    return (
        <>
            <NavBar />
            <Grid className={classes.detailsHeader}>
                <h1>post details here</h1>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={12} md={6} className={classes.postDetails}>
                    <h3>Title: {post.title}</h3>
                    <p>Details: {post.body}</p>
                </Grid>
            </Grid>
          <Grid>
            <h1 style={{marginLeft:"330px"}}>Comments:</h1>
            {
                comment.map(comment => <Comments comment={comment} key={comment.id} />)
            }
          </Grid>
        </>
    );
};

export default PostDetails;