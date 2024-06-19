import React from "react";
import '../../App.css';
import '../../Components/pages/ConcreteServicePage.css'
import concrete07 from '../../photos/concrete07.jpeg'
import { useState } from "react";
import axios from "axios";

export default function ConcreteService(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        <div className="concrete-page-container">
            {/* <h2>Asphalt Paving Service</h2> */}
            <div className="about-section-container">
                <h2 className="h2-concrete">Concrete</h2>
                <img src={concrete07} alt="" width="400" height="270" /><br/><br/>
                <br />
                <p><span>Expert Concrete Solutions for Durable and Aesthetic Surfaces</span> <br /> <br/>
                At First Class Paving, we offer comprehensive concrete services designed to provide strong, durable, and visually appealing surfaces for a variety of applications. Whether you're looking to install a new concrete driveway, patio, walkway, or foundation, our experienced team delivers top-quality workmanship tailored to your specific needs.<br/><br/>
                    <span>Our Concrete Services</span><br/><br />
                    <span className='span-details'>Concrete Driveways<br/></span> Enhance the curb appeal and functionality of your property with a professionally installed concrete driveway. Our driveways are built to last, providing a smooth and durable surface for your vehicles.<br/><br/>
                    <span className='span-details'>Concrete Foundations<br/></span> A solid foundation is crucial for any construction project. Our team specializes in laying strong, stable concrete foundations that form the backbone of your structure.<br/><br/>
                    <span className='span-details'>Concrete Repair and Maintenance<br/></span> Keep your concrete surfaces in top condition with our repair and maintenance services. From fixing cracks and chips to resurfacing worn-out areas, we ensure your concrete remains in excellent shape.<br/><br/>
                    
                </p>
            
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
                <div class="form-group-btn">
                    <button type="submit" class="form-btn">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}