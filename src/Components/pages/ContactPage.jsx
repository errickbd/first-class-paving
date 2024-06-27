import React from "react";
import '../../App.css';
import '../../Components/pages/ContactPage.css'
import { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    const recaptchaRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // captcha //
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();

        // emailjs //
        const serviceId = 'service_xjskkcc';
        const templateId = 'template_q476q4s';
        const publicKey = 'NqrEEfI3SYZf_NIS6';



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
                "g-recaptcha-response": token, // Add the reCAPTCHA token to your parameters
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







    return(
        <div className="contact-page-container">
            {/* <h2>Asphalt Paving Service</h2> */}
            <div className="about-section-container-contact">
                <h2 className="h2-contact">Contact</h2>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <iframe 
                    className='contact-map'
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.765205566529!2d-88.17711682327474!3d42.32620643723872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f77e7c024b13f%3A0x90f5d30ad045b233!2sFirst%20Class%20Paving%20Inc.!5e0!3m2!1sen!2sus!4v1716753186579!5m2!1sen!2sus" 
                    width="800" 
                    height="650" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
            <div className="location-text">
                <p><span>Location</span> <br /> 
                11 N Skokie Hwy Ste. 111B,<br />
                Lake Bluff, IL 60044<br />
                United States
                    
                </p>
            </div>
            </div>
            <div className="form-section-container-contact">
                <h2 className="h2-form">Contact Us Below</h2>
                <form onSubmit={handleSubmit}>
            <div class="form-group">
                    <label for="exampleFormControlInput1">Full Name: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="input-box" id="exampleFormControlInput1" placeholder="John Doe"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="input-box" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Phone: </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="input-box" id="exampleFormControlInput1" placeholder="847-815-2326"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Address: </label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" class="input-box" id="exampleFormControlInput1" placeholder="123 Lane St"/>
                </div>
                <div class="form-group-description">
                    <label for="exampleFormControlTextarea1">How can we help? </label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-description" id="form-description" rows="60"></textarea>
                </div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Ld2QgIqAAAAAEsxYXtnhFaAcsF_ugjO_vMi3XDN"
                />
                <div class="form-group-btn">
                    <button type="submit" class="form-btn">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}