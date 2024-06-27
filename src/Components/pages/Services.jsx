import React from "react";
import '../../App.css';
import './Services.css'
import asphalt02 from "../../photos/asphalt02.jpeg"
// import asphalt04 from "../../photos/asphalt04.jpeg"
// import concrete03 from '../../photos/concrete03.jpeg'
import { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function Services(){

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
        <div className="services-page-container">
            <div className="about-section-container-service">
                <h2 className="h2-service"><div className="hide-text">Our</div> Services</h2>
                <br />
                <p className="p-service"><span className="hide-text">What we offer!</span> <br /> <br/>
                <p className="hide-text">At First Class Paving, we offer a comprehensive range of top-quality paving and construction services designed to meet the diverse needs of our residential, commercial, and industrial clients. Our commitment to excellence and customer satisfaction sets us apart in the industry. Explore our key services below to see how we can transform your property.</p><br/><br/>
                    <span>Asphalt Paving</span><br/><br />
                    Our asphalt paving service is ideal for creating smooth, durable, and aesthetically pleasing surfaces. Whether you need a new driveway, parking lot, or road, our experienced team uses the highest quality materials and state-of-the-art equipment to ensure long-lasting results. From initial design to final installation, we handle every step of the process with precision and care.<br/><br/>
                    <img src={asphalt02} alt="" width="400" height="300" /><br/><br/>
                    <span>Concrete Services</span><br/><br/>
                    Our concrete services encompass a wide range of applications, including driveways, sidewalks, foundations, and decorative concrete work. We combine our extensive experience with the best materials to deliver strong, durable, and visually appealing concrete solutions. Whether you need a new installation or repairs and maintenance, we are dedicated to exceeding your expectations with our craftsmanship and attention to detail.<br/><br/>
                    <span>Sealcoating</span><br/><br />
                    Protect and enhance the appearance of your asphalt surfaces with our professional sealcoating services. Sealcoating acts as a barrier against weather, UV rays, and chemical spills, extending the lifespan of your pavement. Our expert team applies high-quality sealants to keep your surfaces looking new and performing at their best. Regular sealcoating is an investment that pays off by maintaining the integrity and beauty of your pavement.<br/><br/>
                    <span>... And More</span><br/><br />
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