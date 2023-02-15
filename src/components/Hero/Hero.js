import React from 'react';
import './Hero.css';
import profileImage from '../Assets/Sarah.jpeg'


function Hero() {
    return (
        <section class="jumbotron">
            <h1 class="display-4 spacer">Sarah Ellis Web Developer</h1>
            <img src={profileImage} class="profile-image" alt="Sarah Ellis"></img>
        </section>
    )
}

export default Hero;