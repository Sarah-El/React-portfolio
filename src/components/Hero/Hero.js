import React from 'react';
import './Hero.css';
import profileImage from '../Assets/Sarah.jpeg'


function Hero() {
    return (
        <section className="jumbotron">
            <h1 className="display-4 spacer">Sarah Ellis Web Developer</h1>
            <img src={profileImage} className="profile-image" alt="Sarah Ellis"></img>
        </section>
    )
}

export default Hero;