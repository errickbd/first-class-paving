import React from "react";
import '../../App.css';
import '../../Components/pages/AsphaltPServicePage.css'
// import asphalt05 from '../../photos/asphalt05.jpeg'
import asphalt06 from '../../photos/asphalt06.jpeg'
import axios from "axios";
import { useState } from "react";

export default function AsphaltService(){

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
        <div className="asphalt-page-container">
            {/* <h2>Asphalt Paving Service</h2> */}
            <div className="about-section-container">
                <h2 className="h2-asphalt">Asphalt Paving</h2>
                <img src={asphalt06} alt="" width="700" height="500" /><br/><br/>
                <br />
                <p><span>Transforming Your Property with Expert Asphalt Paving</span> <br /> <br/>
                At First Class Paving, we specialize in providing top-tier asphalt paving services designed to meet the diverse needs of our clients. Whether you're looking to install a new asphalt driveway, parking lot, or walkway, our skilled team is here to deliver exceptional results that stand the test of time.<br/><br/>
                    <span>Why Choose Our Asphalt Paving Services?</span><br/><br />
                    <span className='span-details'>Durability and Longevity<br/></span> Our asphalt paving solutions are built to last. Using only the highest quality materials and advanced paving techniques, we ensure that your pavement remains durable, smooth, and visually appealing for years to come.<br/><br/>
                    <span className='span-details'>Cost-Effective Solutions<br/></span> Asphalt paving is not only durable but also cost-effective. It requires less maintenance over time compared to other paving materials, making it an economical choice for both residential and commercial projects.<br/><br/>
                    <span className='span-details'>Quick Installation<br/></span> We understand the importance of time and efficiency. Our experienced team works diligently to complete your asphalt paving project promptly without compromising on quality, ensuring minimal disruption to your daily routine or business operations.<br/><br/>
                    <span className='span-details'>Customizable Options<br /></span> Every property is unique, and so are its paving needs. We offer customizable asphalt paving solutions tailored to your specific requirements, whether it's a small residential driveway or a large commercial parking lot.<br/><br/>
                    <span className='span-details'>Eco-Friendly Practices<br /></span> At First Class Paving, we are committed to environmentally friendly practices. Asphalt is a recyclable material, and we make every effort to minimize waste and promote sustainability in our paving projects.<br/><br/>
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