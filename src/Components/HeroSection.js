import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='videos/construction01.mp4' autoPlay loop muted />
            <div className='hero-banner'>
                <div className='hero-banner-left'>
                    <p>Mon-Fri 8am-6pm | Sat 8am-12pm | Sun Appt. Only <br />
                    Email: youremail@gmail.com <br />
                    Phone: 123.456.7890
                    </p>
                </div>
                
                <div className='hero-banner-right'>
                    <h1>FIRST CLASS PAVING</h1>
                    <p>Let's start your project!</p>
                    <div className='hero-btns'>
                        <Button className='btns' buttonstyle='btn--outline' buttonSize='btn--large'>View Services</Button>
                    </div> 
                </div>
            </div>
            
            
            
            
            
        </div>
        
    )
}



export default HeroSection