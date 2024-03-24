import React from "react";
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../FCPLogo.jpg'

function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-subscription-link-container">
                <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our emailing list to receive our best offers!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder="Enter Email" className="footer-input"/>
                        <Button buttonstyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Navigation</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/quote'>Quote Request</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link target='_blank' to='https://www.instagram.com/'>Instagram</Link>
                        <Link target='_blank' to='https://www.facebook.com/'>Facebook</Link>
                        <Link target='_blank' to='https://www.youtube.com/'>YouTube</Link>
                    </div>
                </div>
            </div>
            </div>
            
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <img src={Logo} className='logo' alt='First Class Paving Logo'/>
                        </Link>
                    </div>
                    <small className="website-rights">First Class Paving © 2024</small>
                    <div className="social-icons">
                        <Link to='https://www.instagram.com/' className="social-icon-link instagram" target='_blank' aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to='https://www.facebook.com/' className="social-icon-link facebook" target='_blank' aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to='https://www.youtube.com/' className="social-icon-link youtube" target='_blank' aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer 