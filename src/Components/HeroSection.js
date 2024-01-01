import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='videos/construction01.mp4' autoPlay loop muted />
            <h1>First Class Paving</h1>
            <p>Contact us now to start your project!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>View Services</Button>
            </div>
        </div>
        
    )
}

export default HeroSection