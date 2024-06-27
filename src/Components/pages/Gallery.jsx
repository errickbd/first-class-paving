import React from "react";
import '../../App.css';
import './Gallery.css'
// import asphalt05 from '../../photos/asphalt05.jpeg'
// import asphalt06 from '../../photos/asphalt06.jpeg'
import ReactImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'
import axios from "axios";
import { useState, useRef } from "react";
import image01 from  "../../photos/gallery/01.jpeg"
import image02 from  "../../photos/gallery/02.jpeg"
import image03 from  "../../photos/gallery/03.jpeg"
import image04 from  "../../photos/gallery/04.jpeg"
import image05 from  "../../photos/gallery/05.jpeg"
import image06 from  "../../photos/gallery/06.jpg"
import image07 from  "../../photos/gallery/07.jpg"
import image08 from  "../../photos/gallery/08.jpg"
import image09 from  "../../photos/gallery/09.jpg"
import image10 from  "../../photos/gallery/10.jpg"
import image11 from  "../../photos/gallery/11.jpg"
import image12 from  "../../photos/gallery/12.jpg"
import image13 from  "../../photos/gallery/13.jpg"
import image14 from  "../../photos/gallery/14.jpg"
import image15 from  "../../photos/gallery/15.jpg"
import image16 from  "../../photos/gallery/16.jpeg"
import image17 from  "../../photos/gallery/17.jpeg"
import image18 from  "../../photos/gallery/18.jpeg"
import image19 from  "../../photos/gallery/19.jpeg"
import image20 from  "../../photos/gallery/20.jpg"
import image21 from  "../../photos/gallery/21.jpg"
import image22 from  "../../photos/gallery/22.jpg"
import image23 from  "../../photos/gallery/23.jpg"
import image24 from  "../../photos/gallery/24.jpg"
import image25 from  "../../photos/gallery/25.jpg"
import image26 from  "../../photos/gallery/26.jpg"
import image27 from  "../../photos/gallery/27.jpg"
import image28 from  "../../photos/gallery/28.jpg"
import image29 from  "../../photos/gallery/29.jpg"
import image30 from  "../../photos/gallery/30.jpg"
import image31 from  "../../photos/gallery/31.jpg"
import image32 from  "../../photos/gallery/32.jpg"
import image33 from  "../../photos/gallery/33.jpg"
import image34 from  "../../photos/gallery/34.jpg"
import image35 from  "../../photos/gallery/35.jpg"
import image36 from  "../../photos/gallery/36.jpg"
import image37 from  "../../photos/gallery/37.jpg"
import image38 from  "../../photos/gallery/38.jpg"
import image39 from  "../../photos/gallery/39.jpg"
import ReCAPTCHA from "react-google-recaptcha";



export default function Gallery(){


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






    const images = [
          // {
          //   original: image01,
          //   thumbnail: image01,
          // },
          // {
          //   original: image02,
          //   thumbnail: image02,
          // },
          {
            original: image03,
            thumbnail: image03,
          },
          {
            original: image04,
            thumbnail: image04,
          },
          {
            original: image05,
            thumbnail: image05,
          },
          {
            original: image06,
            thumbnail: image06,
          },
          {
            original: image07,
            thumbnail: image07,
          },
          {
            original: image08,
            thumbnail: image08,
          },
          {
            original: image09,
            thumbnail: image09,
          },
          {
            original: image10,
            thumbnail: image10,
          },
          {
            original: image11,
            thumbnail: image11,
          },
          {
            original: image12,
            thumbnail: image12,
          },
          {
            original: image13,
            thumbnail: image13,
          },
          {
            original: image14,
            thumbnail: image14,
          },
          {
            original: image15,
            thumbnail: image15,
          },
          {
            original: image16,
            thumbnail: image16,
          },
          {
            original: image17,
            thumbnail: image17,
          },
          {
            original: image18,
            thumbnail: image18,
          },
          {
            original: image19,
            thumbnail: image19,
          },
          {
            original: image20,
            thumbnail: image20,
          },
          {
            original: image21,
            thumbnail: image21,
          },
          {
            original: image22,
            thumbnail: image22,
          },
          {
            original: image23,
            thumbnail: image23,
          },
          {
            original: image24,
            thumbnail: image24,
          },
          {
            original: image25,
            thumbnail: image25,
          },
          {
            original: image26,
            thumbnail: image26,
          },
          {
            original: image27,
            thumbnail: image27,
          },
          {
            original: image28,
            thumbnail: image28,
          },
          {
            original: image29,
            thumbnail: image29,
          },
          {
            original: image30,
            thumbnail: image30,
          },
          {
            original: image31,
            thumbnail: image31,
          },
          {
            original: image32,
            thumbnail: image32,
          },
          {
            original: image33,
            thumbnail: image33,
          },
          {
            original: image34,
            thumbnail: image34,
          },
          {
            original: image35,
            thumbnail: image35,
          },
          {
            original: image36,
            thumbnail: image36,
          },
          {
            original: image37,
            thumbnail: image37,
          },
          {
            original: image38,
            thumbnail: image38,
          },
          {
            original: image39,
            thumbnail: image39,
          },
      ];


    return(
        <div className="gallery-page-container-gallery">
            <div className="about-section-container-gallery">
                <h2 className="gallery-title">Gallery</h2>
                <br />
                <div className="gallery-imgs">
                  <ReactImageGallery items={images} showIndex={true} showPlayButton={false} className='gallery-imgs' />
                </div>
                <p className="p-gallery"><span>Contact Us Today</span> <br /> <br/>
                Ready to enhance your property? Contact First Class Paving today to schedule a consultation. Our dedicated team is here to provide you with reliable, professional service and exceptional results. Experience the First Class Paving difference for yourself!
                </p>
            </div> 
            <div className="form-section-container-gallery">
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