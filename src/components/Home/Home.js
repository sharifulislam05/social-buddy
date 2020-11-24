import React from 'react';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';

const Home = () => {
    return (
        <main style={{backgroundColor: "#e3f2fd"}}>
            <NavBar />
            <Posts /> 
        </main>
    );
};

export default Home;