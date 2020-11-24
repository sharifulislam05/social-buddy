import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => 
    createStyles({
        comments: {
            boxShadow: "0px 0px 10px gray",
            marginTop: "20px",
            borderRadius: "10px",
        },
        email: {
            color: '#9e9e9e',
            lineHeight: '1px'
        }
    })
)

const Comments = ({comment}) => {
    const classes = useStyles()
    const {name , email, id, body} = comment;
    const [img, setImg] = useState({})

    useEffect(() => loadUserImg(), [id])
     const loadUserImg = async () => {
        try {
            const fetchData = await fetch(`https://randomuser.me/api/`)
            const data = await fetchData.json();
            setImg(data.results[0].picture);
        }
        catch(err){
            alert(err.message)
        }
    }
  
    return (
        <Grid container justify="center">
            <Grid item container  xs={12} md={6} className={classes.comments}>
                <Grid item xs={3} md={2}>
                    <img src={img.thumbnail} alt="not found" style={{borderRadius:"50%", margin:"20px"}} />
                </Grid>
                <Grid item xs={9} md={10}>
                    <h3>{name}</h3>
                    <p className={classes.email}>{email}</p>
                    <p>{body}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Comments;