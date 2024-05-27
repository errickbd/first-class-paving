import React from "react";
import "./About.css"
import photo01 from '../../photos/driveway01.jpeg'
import { useState } from "react";
import axios from "axios";
import { EmailJSResponseStatus } from "@emailjs/browser";




export default function About(){
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


    return(
    <div className="about-page-container">
        <div className="about-section-container">
            <h2 className="h2-about">About <div className="hide-text">Us</div></h2>
            <br />
            <p className="p-about"><span>Welcome to First Class Paving!</span> <br /> <br/>
                At First Class Paving, we are dedicated to providing top-quality pavement solutions tailored to meet your specific needs. With years of experience in the industry, we take pride in our craftsmanship, attention to detail, and commitment to customer satisfaction.
                Our Story
                Founded in 2021, First Class Paving has quickly established itself as a leading provider of pavement services in the Chicagoland area and beyond. Our journey began with a simple goal: to deliver reliable, durable, and aesthetically pleasing pavement solutions to residential, commercial, and industrial clients.<br/><br/>
                <span>What Sets Us Apart</span><br/><br />
                <span className='span-details'>Expertise:</span> Our team consists of skilled professionals with extensive experience in pavement installation, repair, and maintenance.<br/>
                <span className='span-details'>Quality Materials:</span> We use only the highest quality materials and state-of-the-art equipment to ensure long-lasting results.<br/>
                <span className='span-details'>Custom Solutions:</span> Whether you need a new driveway, parking lot, or pavement repair, we tailor our services to meet your unique requirements.<br/>
                <span className='span-details'>Exceptional Service:</span> From the initial consultation to project completion, we prioritize clear communication, transparency, and professionalism.<br/><br/>
                <img src={photo01} alt="" width="400" height="300" /><br/><br/>
                {/* <span>Our Services</span><br/><br/>
                <span className='span-details'>Pavement Installation:</span> We specialize in the design and installation of asphalt, concrete, and interlocking pavement solutions.<br/>
                <span className='span-details'>Repair and Maintenance:</span> Our team is equipped to handle everything from minor cracks and potholes to complete pavement restoration projects.<br/>
                <span className='span-details'>Sealcoating and Resurfacing:</span> Protect your investment and enhance the appearance of your pavement with our sealcoating and resurfacing services.<br/>
                <span className='span-details'>Snow Removal:</span> Keep your property safe and accessible during the winter months with our efficient snow removal services.<br/><br/> */}
                <span>Get in Touch</span><br/><br />
                Ready to transform your property with premium pavement solutions? Contact us today to schedule a consultation and experience the First Class Paving difference.
            </p>
        </div>
        <div className="form-section-container">
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
                <div class="form-group-btn">
                    <button type="submit" class="form-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
)
}