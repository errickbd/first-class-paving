import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Logo from '../FCPLogo.jpg'
import videoBg from '../videos/construction01.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={videoBg} autoPlay loop muted />
            <div className='hero-banner'>
                <div className='hero-banner-left'>
                    <p><span>Hours:</span> <br />
                    Mon-Fri 8am-6pm | Sat 8am-12pm | Sun Appt. Only <br />
                    <span>Email:</span> youremail@gmail.com <br />
                    <span>Phone:</span> 123.456.7890
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
            <div className='home-section01'>
               <img src={Logo} className='home-logo' alt='First Class Paving Logo'/>
               <div className='home-info'>
                    <div className='about-gist'>
                        <h1><span>First Class Guarantee</span></h1>
                        <p>We are a company based in the Chicagoland area, and we offer you some of the best work seen within the area. Give us a ring for repairs, sealcoating, crack filling, and grading. We work with residential, as well as, commercial clients.  </p>
                    </div>
                    <div className='services-gist'>
                        <h1><span>What We Offer</span></h1>
                        <p>We offer paving, concrete, crack fillings, grading. Contact for inquiries.  </p>
                    </div>
                    <div className='testimonials-gist'>
                        <h1><span>Our Client Says</span></h1>
                        <p>"Best company in the area. 10/10 Recommended" <br />
                        -John Doe
                        </p>
                    </div>   
               </div>
            </div>
            <div className='home-section-services'>
                

                
            </div>

         </div>
            
            
            
            
            
            
        
        
    )
}



export default HeroSection