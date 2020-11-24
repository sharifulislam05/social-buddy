import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';

const Posts = () => {
    const [post, setPost] = useState([]);
    let history = useHistory();

    useEffect(() => loadData(), [])
    const loadData = async() =>  {
        try {
            const fetchUrl = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await fetchUrl.json()
            setPost(data)
        }
        catch (err) {
            alert(err.message)
        }
    }
   const handleReadMore = (postId) => {
       history.push(`/post/${postId}`)
   }
    return (
        <article>
             <h1 style={{ marginTop: "40px", textAlign: "center" }}>All Blog Posts</h1>
            <Grid item container >
                {
                    post.map(post => 
                        <Grid item md={4} xs={12} >
                           <PostCard post={post} key={post.id} handleReadMore={handleReadMore} />
                        </Grid>
                    )
                }
            </Grid>
        </article>
    );
};

export default Posts;