import React from "react";
import '../../App.css';
import '../../Components/pages/SealcoatServicePage.css'
import { useState } from "react";
import axios from "axios";

export default function SealcoatService(){

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
        <div className="sealcoat-page-container">
            {/* <h2>Asphalt Paving Service</h2> */}
            <div className="about-section-container">
                <h2 className="h2-sealcoat">Sealcoat</h2>
                <br />
                <p><span>Protect and Enhance Your Pavement with Professional Sealcoating</span> <br /> <br/>
                At First Class Paving, we offer premium sealcoating services designed to protect and enhance the longevity of your asphalt surfaces. Sealcoating not only adds a layer of protection but also revitalizes the appearance of your pavement, making it look new and well-maintained.<br/><br/>
                    <span>Why Choose Our Sealcoating Services?</span><br/><br />
                    <span className='span-details'>Prolonged Pavement Life<br/></span> Sealcoating acts as a protective barrier against the elements, preventing damage from UV rays, water, oil, and other harmful substances. This extends the lifespan of your asphalt surfaces, saving you money on future repairs and replacements.<br/><br/>
                    <span className='span-details'>Enhanced Appearance<br/></span> Over time, asphalt can become faded and worn. Our sealcoating services restore the deep, rich black color of your pavement, significantly improving the curb appeal of your property.<br/><br/>
                    <span className='span-details'>Environmental Protection<br/></span> Sealcoating helps prevent harmful substances like oil and gas from penetrating the asphalt and contaminating the environment. Our environmentally friendly sealcoating solutions prioritize sustainability and safety.<br/><br/>
                    <span>Benefits of Regular Sealcoating</span><br/><br />
                    <span className='span-details'> Protection Against Weather Damage<br/></span> Shield your pavement from the damaging effects of sun, rain, snow, and ice.<br/><br/>
                    <span className='span-details'>Improved Aesthetics<br/></span> Keep your asphalt looking new and well-maintained with a fresh, black finish.<br/><br/>
                    <span className='span-details'>Increased Property Value<br/></span> Well-maintained pavement enhances the overall value and appearance of your property.<br/><br/>
                    <span className='span-details'>Preventative Maintenance<br/></span> Avoid costly repairs by addressing minor issues before they become major problems.<br/><br/>
                    <span>Contact Us Now</span><br/><br />
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