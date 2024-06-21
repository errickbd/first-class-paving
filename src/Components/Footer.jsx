import React from "react";
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../FCPLogo.jpg'
import { useState } from "react";
import axios from "axios";

function Footer(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        // emailjs //
        const serviceId = 'service_d8p4fal';
        const templateId = 'template_wfglo78';
        const publicKey = 'gvYriDN2IKVG1l7b2';



        const data = {
            service_id:serviceId,
            template_id:templateId,
            user_id:publicKey,
            template_params:{
                from_name:name,
                client_email:email,
                to_name:'First Class Paving',
                client_phone:phone,
                client_address:address,
                message: message,
            }
        }

        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(response.data)
            setName('');
            setEmail('');
            setAddress('');
            setPhone('');
            setMessage('');
        }
        catch(error){
            console.error(error);
        }
    }






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
                    <form onSubmit={handleSubmit}>
                        {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder="Enter Email" className="footer-input"/> */}
                        <Button type='submit' buttonstyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2 className="h2-footer">Navigation</h2>
                        <Link to='/first-class-paving'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/quote'>Quote Request</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items footer-link-items2">
                        <h2 className="h2-footer">Social Media</h2>
                        <Link target='_blank' to='https://www.instagram.com/firstclasspaving/?igsh=aHkxYjI4eTM3YjNv'>Instagram</Link>
                        <Link target='_blank' to='https://www.facebook.com/FCP.lakecountyil/?_rdr'>Facebook</Link>
                        <Link target='_blank' to='https://www.youtube.com/'>YouTube</Link>
                    </div>
                </div>
            </div>
            </div>
            
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/first-class-paving' className="social-logo">
                            <img src={Logo} className='logo' alt='First Class Paving Logo'/>
                        </Link>
                    </div>
                    <small className="website-rights">First Class Paving © 2024</small>
                    <div className="social-icons">
                        <Link to='https://www.instagram.com/firstclasspaving/?igsh=aHkxYjI4eTM3YjNv' className="social-icon-link instagram" target='_blank' aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to='https://www.facebook.com/FCP.lakecountyil/?_rdr' className="social-icon-link facebook" target='_blank' aria-label="Facebook">
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