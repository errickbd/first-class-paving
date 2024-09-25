import React from 'react';
// import { Link } from 'react-router-dom';
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
                    Mon-Fri 9am-5pm | Sat Closed | Sun Closed <br />
                    <span>Email:</span> <br /> firstclasspaving.lakecounty@yahoo.com <br />
                    <span>Phone:</span> <br /> (847) 815-2326
                    </p>
                </div>
                
                
                <div className='hero-banner-right'>
                    <h1>FIRST CLASS PAVING</h1>
                    <p>Let's start your project!</p>
                    <div className='hero-btns'>
                        <Button className='btns service-btn' buttonstyle='btn--outline' buttonSize='btn--large'>Get Quote</Button>
                    </div> 
                </div>
                <div className='hero-banner-badges'>
                <a className='badge' href="http://www.homeadvisor.com/rated.FirstClassPavingInc.131199286.html"><img alt="Rated & Reviewed HomeAdvisor Pro" src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=131199286&key=d4153a97517a3f81022f9a83b9944843" /></a>
                <a className='badge' href="http://www.homeadvisor.com/c.Paving.Lake_Bluff.IL.-12055.html#spid=131199286"><img alt="First Class Paving, Inc. is a HomeAdvisor Top Rated Pro" src="http://www.homeadvisor.com/images/sp-badges/toprated-solid-border.png?sp=131199286&key=d4153a97517a3f81022f9a83b9944843" /></a>
                <a className='badge' href="http://www.homeadvisor.com/c.Paving.Lake_Bluff.IL.-12055.html#spid=131199286"><img alt="First Class Paving, Inc. - HomeAdvisor Elite Service" src="http://www.homeadvisor.com/images/sp-badges/elite-solid-border.png?sp=131199286&key=d4153a97517a3f81022f9a83b9944843" /></a>
                </div>
            </div>
            <div className='home-section01'>
                <img src={Logo} className='home-logo' alt='First Class Paving Logo'/>
                <a className='badge-mobile' href="http://www.homeadvisor.com/rated.FirstClassPavingInc.131199286.html"><img alt="Rated & Reviewed HomeAdvisor Pro" src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=131199286&key=d4153a97517a3f81022f9a83b9944843" /></a>
                <a className='badge-mobile' href="http://www.homeadvisor.com/c.Paving.Lake_Bluff.IL.-12055.html#spid=131199286"><img alt="First Class Paving, Inc. is a HomeAdvisor Top Rated Pro" src="http://www.homeadvisor.com/images/sp-badges/toprated-solid-border.png?sp=131199286&key=d4153a97517a3f81022f9a83b9944843" /></a>
                <a className='badge-mobile' href="http://www.homeadvisor.com/c.Paving.Lake_Bluff.IL.-12055.html#spid=131199286"><img alt="First Class Paving, Inc. - HomeAdvisor Elite Service" src="http://www.homeadvisor.com/images/sp-badges/elite-solid-border.png?sp=131199286&key=d4153a97517a3f81022f9a83b9944843" /></a>
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
                        <p>"First Class..the name says it all. Quality work and worth every penny." <br />
                        -Ken B.
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