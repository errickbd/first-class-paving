import React from "react";
import '../../App.css';
import './Gallery.css'
// import asphalt05 from '../../photos/asphalt05.jpeg'
// import asphalt06 from '../../photos/asphalt06.jpeg'
import ReactImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'
import axios from "axios";
import { useState } from "react";

export default function Gallery(){


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






    const images = [
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/275576288_105269535457715_6406111337843131216_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bJPy7YeEtkQQ7kNvgG1XCQr&_nc_ht=scontent-ord5-2.xx&oh=00_AYARuIO-zVy1YEvRUvI8qNvFxS_5MovRbVwxfgUIa0ijHg&oe=66591E7E",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/275576288_105269535457715_6406111337843131216_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bJPy7YeEtkQQ7kNvgG1XCQr&_nc_ht=scontent-ord5-2.xx&oh=00_AYARuIO-zVy1YEvRUvI8qNvFxS_5MovRbVwxfgUIa0ijHg&oe=66591E7E",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275591162_105269595457709_8212127706169768173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8fqpn-wEVtMQ7kNvgEC3dbi&_nc_ht=scontent-ord5-1.xx&oh=00_AYBVXMBgt_nl_7ZcBaFkuAsKcuvQP_NBburjtuW5ENbYpw&oe=66593E2D",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275591162_105269595457709_8212127706169768173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8fqpn-wEVtMQ7kNvgEC3dbi&_nc_ht=scontent-ord5-1.xx&oh=00_AYBVXMBgt_nl_7ZcBaFkuAsKcuvQP_NBburjtuW5ENbYpw&oe=66593E2D",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/275753343_105269642124371_3052058363336412280_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7Jl-dZtQqboQ7kNvgEujlBu&_nc_ht=scontent-ord5-2.xx&oh=00_AYBl7t33LoPTysALeaELe8jhn5DVMWtKGEjTbrgHTM_N7w&oe=66594038",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/275753343_105269642124371_3052058363336412280_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7Jl-dZtQqboQ7kNvgEujlBu&_nc_ht=scontent-ord5-2.xx&oh=00_AYBl7t33LoPTysALeaELe8jhn5DVMWtKGEjTbrgHTM_N7w&oe=66594038",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/275736024_105269678791034_5550294144262894549_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h5422oHRkTQQ7kNvgElFIo2&_nc_ht=scontent-ord5-2.xx&oh=00_AYDEFDXM2Mqdi-3Tj5-G9rm4RXvWOdufNWXm_aw_d6sjGQ&oe=66595B42",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/275736024_105269678791034_5550294144262894549_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h5422oHRkTQQ7kNvgElFIo2&_nc_ht=scontent-ord5-2.xx&oh=00_AYDEFDXM2Mqdi-3Tj5-G9rm4RXvWOdufNWXm_aw_d6sjGQ&oe=66595B42",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275592953_105269742124361_1539401938073774258_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JQD5_N6zE0MQ7kNvgEFWS1A&_nc_ht=scontent-ord5-1.xx&oh=00_AYBZPA2RvVpfJ-BkdaHTKRW3uiR396YJw5ubNOna4eZi1Q&oe=66595282",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275592953_105269742124361_1539401938073774258_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JQD5_N6zE0MQ7kNvgEFWS1A&_nc_ht=scontent-ord5-1.xx&oh=00_AYBZPA2RvVpfJ-BkdaHTKRW3uiR396YJw5ubNOna4eZi1Q&oe=66595282",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/279111916_123957960255539_7965553759885655360_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eaRR8kzrbEMQ7kNvgEmVvc8&_nc_ht=scontent-ord5-2.xx&oh=00_AYAkokUj29wt65zIIMJO_TuzYlB0GcGTEDo8mKN6TOmqPw&oe=66594A48",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/279111916_123957960255539_7965553759885655360_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eaRR8kzrbEMQ7kNvgEmVvc8&_nc_ht=scontent-ord5-2.xx&oh=00_AYAkokUj29wt65zIIMJO_TuzYlB0GcGTEDo8mKN6TOmqPw&oe=66594A48",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279715588_125805113404157_8154511024399521250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RCY8RpRjrZgQ7kNvgE0HJ2m&_nc_ht=scontent-ord5-1.xx&oh=00_AYBKSALH6lQKy-xfgj1wiXwxzUUDz3fS1_B9d_Rs4eNscA&oe=66594802",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279715588_125805113404157_8154511024399521250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RCY8RpRjrZgQ7kNvgE0HJ2m&_nc_ht=scontent-ord5-1.xx&oh=00_AYBKSALH6lQKy-xfgj1wiXwxzUUDz3fS1_B9d_Rs4eNscA&oe=66594802",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/280164722_125805223404146_6113703670760696690_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X-9j1yYUrl8Q7kNvgGytwNz&_nc_ht=scontent-ord5-2.xx&oh=00_AYBsJgi8Y5ze0ics_WKjN4fnIu92OzhAxPfrKIiZ4igRgg&oe=665942FE",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/280164722_125805223404146_6113703670760696690_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X-9j1yYUrl8Q7kNvgGytwNz&_nc_ht=scontent-ord5-2.xx&oh=00_AYBsJgi8Y5ze0ics_WKjN4fnIu92OzhAxPfrKIiZ4igRgg&oe=665942FE",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/280191135_125986366719365_7617015314410963332_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jGl_qYW7I0kQ7kNvgGujOTL&_nc_ht=scontent-ord5-2.xx&oh=00_AYARiN_kRU0obfUKtV69W7RwHdKBWm1IKLkN_UihasjuMw&oe=66594A99",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/280191135_125986366719365_7617015314410963332_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jGl_qYW7I0kQ7kNvgGujOTL&_nc_ht=scontent-ord5-2.xx&oh=00_AYARiN_kRU0obfUKtV69W7RwHdKBWm1IKLkN_UihasjuMw&oe=66594A99",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/280478229_126019766716025_3376661512389203129_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5wlbnaq_AysQ7kNvgGhbLwx&_nc_ht=scontent-ord5-2.xx&oh=00_AYBJZ3OBW2Vy43LD7zag9ERkXM9RycmFSEZd-YU1j24B9w&oe=66595FD2",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/280478229_126019766716025_3376661512389203129_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5wlbnaq_AysQ7kNvgGhbLwx&_nc_ht=scontent-ord5-2.xx&oh=00_AYBJZ3OBW2Vy43LD7zag9ERkXM9RycmFSEZd-YU1j24B9w&oe=66595FD2",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/280422502_126019820049353_4220277526796199542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g2nOGcCH-nYQ7kNvgEscXM7&_nc_ht=scontent-ord5-1.xx&oh=00_AYBcOZ-hCqM-knHKmtkotV2teD1y0Y4Rz08ncIyraRVVmg&oe=665971ED",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/280422502_126019820049353_4220277526796199542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g2nOGcCH-nYQ7kNvgEscXM7&_nc_ht=scontent-ord5-1.xx&oh=00_AYBcOZ-hCqM-knHKmtkotV2teD1y0Y4Rz08ncIyraRVVmg&oe=665971ED",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275664173_126794879971847_2446166792340834543_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-41XDSegXzYQ7kNvgHcGL6k&_nc_ht=scontent-ord5-1.xx&oh=00_AYAwnStPD584kJ0EFGBexW-iso3N4WR-yooEuruthtNBDA&oe=66594D71",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275664173_126794879971847_2446166792340834543_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-41XDSegXzYQ7kNvgHcGL6k&_nc_ht=scontent-ord5-1.xx&oh=00_AYAwnStPD584kJ0EFGBexW-iso3N4WR-yooEuruthtNBDA&oe=66594D71",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/289610002_136081195709882_9062935368970153783_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qBuMzbQuciQQ7kNvgHuJvTF&_nc_ht=scontent-ord5-1.xx&oh=00_AYDGupsQ1c_nelz4d5lNHp2XzOIyQjh6nD375qcjx_qSGQ&oe=665954F9",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/289610002_136081195709882_9062935368970153783_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qBuMzbQuciQQ7kNvgHuJvTF&_nc_ht=scontent-ord5-1.xx&oh=00_AYDGupsQ1c_nelz4d5lNHp2XzOIyQjh6nD375qcjx_qSGQ&oe=665954F9",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/294532727_112335484888306_5522536402762296853_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JFct-qB-gE4Q7kNvgEqwMuo&_nc_ht=scontent-ord5-2.xx&oh=00_AYAKIp42--i883KrmBWj6uHQuazCTFqdsv57vSL5HNAFBQ&oe=66595607",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/294532727_112335484888306_5522536402762296853_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JFct-qB-gE4Q7kNvgEqwMuo&_nc_ht=scontent-ord5-2.xx&oh=00_AYAKIp42--i883KrmBWj6uHQuazCTFqdsv57vSL5HNAFBQ&oe=66595607",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/295271774_112335508221637_6611112628386543653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YuL1vQ6z1AgQ7kNvgGINyy0&_nc_ht=scontent-ord5-2.xx&oh=00_AYCPbybz7zJqa9VXdSR9vSSroIqwaYJlJaFjFHAvJcdnxQ&oe=66594F0C",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/295271774_112335508221637_6611112628386543653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YuL1vQ6z1AgQ7kNvgGINyy0&_nc_ht=scontent-ord5-2.xx&oh=00_AYCPbybz7zJqa9VXdSR9vSSroIqwaYJlJaFjFHAvJcdnxQ&oe=66594F0C",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/296928811_115180774603777_7185674964150846459_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zAuz0wGipWoQ7kNvgHgE46Z&_nc_ht=scontent-ord5-2.xx&oh=00_AYDjQQYO5jkvOwp9kGP11j0la-M5SP6AMbHtH3_bT2Vjqg&oe=66595B1F",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/296928811_115180774603777_7185674964150846459_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zAuz0wGipWoQ7kNvgHgE46Z&_nc_ht=scontent-ord5-2.xx&oh=00_AYDjQQYO5jkvOwp9kGP11j0la-M5SP6AMbHtH3_bT2Vjqg&oe=66595B1F",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/296946768_115180824603772_8383969198377677076_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5JmVdwRIb8IQ7kNvgHblliX&_nc_ht=scontent-ord5-1.xx&oh=00_AYBD86h6OOp0zAYww6RAivi5qhdecVG2sRnevu22BiVdNg&oe=665947A1",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/296946768_115180824603772_8383969198377677076_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5JmVdwRIb8IQ7kNvgHblliX&_nc_ht=scontent-ord5-1.xx&oh=00_AYBD86h6OOp0zAYww6RAivi5qhdecVG2sRnevu22BiVdNg&oe=665947A1",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/296912811_115180861270435_3798929552520830204_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7a_H3nTjipYQ7kNvgFzODvr&_nc_ht=scontent-ord5-2.xx&oh=00_AYBy1WmayZRiOZxXoOeIbmQWIERHkRPykieDBHcGmpqztg&oe=66593C78",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/296912811_115180861270435_3798929552520830204_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7a_H3nTjipYQ7kNvgFzODvr&_nc_ht=scontent-ord5-2.xx&oh=00_AYBy1WmayZRiOZxXoOeIbmQWIERHkRPykieDBHcGmpqztg&oe=66593C78",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/297545399_115181537937034_9197479532020785807_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=klW_awBuj0oQ7kNvgH4ck28&_nc_ht=scontent-ord5-2.xx&oh=00_AYCsi5q-Jzi37nytdo1meCogGYxtMRlgHsXFlA9Ith3n0Q&oe=66595E7C",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/297545399_115181537937034_9197479532020785807_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=klW_awBuj0oQ7kNvgH4ck28&_nc_ht=scontent-ord5-2.xx&oh=00_AYCsi5q-Jzi37nytdo1meCogGYxtMRlgHsXFlA9Ith3n0Q&oe=66595E7C",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/297146296_115183144603540_2804556097864273121_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hp3XRctyZHsQ7kNvgEpoE_Z&_nc_ht=scontent-ord5-1.xx&oh=00_AYD11S2nQazv1mgdVDW5iMlU-BGGULwfBOIdV8Ewn1WbOQ&oe=665973DB",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/297146296_115183144603540_2804556097864273121_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hp3XRctyZHsQ7kNvgEpoE_Z&_nc_ht=scontent-ord5-1.xx&oh=00_AYD11S2nQazv1mgdVDW5iMlU-BGGULwfBOIdV8Ewn1WbOQ&oe=665973DB",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/296863582_115183177936870_4427814541023976080_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CmFXyvpUwZ4Q7kNvgHaOY0b&_nc_ht=scontent-ord5-1.xx&oh=00_AYAbB3uA9PehcC00fCMGD4F8ZaTTUXI7KpZU_AQBctw4xA&oe=66595DDA",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/296863582_115183177936870_4427814541023976080_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CmFXyvpUwZ4Q7kNvgHaOY0b&_nc_ht=scontent-ord5-1.xx&oh=00_AYAbB3uA9PehcC00fCMGD4F8ZaTTUXI7KpZU_AQBctw4xA&oe=66595DDA",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/297228212_115976504524204_4946900993027623816_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GFpDDoty1hsQ7kNvgGRQeSZ&_nc_ht=scontent-ord5-1.xx&oh=00_AYDblESaGUcI3e7JYK7sP4unO8Fo_sdjS9QDYl32SyB7tw&oe=66596C6B",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/297228212_115976504524204_4946900993027623816_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GFpDDoty1hsQ7kNvgGRQeSZ&_nc_ht=scontent-ord5-1.xx&oh=00_AYDblESaGUcI3e7JYK7sP4unO8Fo_sdjS9QDYl32SyB7tw&oe=66596C6B",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/345622552_164764683221292_3665793183779081016_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O5Wb-pdSSSYQ7kNvgFX4cGj&_nc_ht=scontent-ord5-2.xx&oh=00_AYBY8LXLZFnbRYy8kohXdmWgwol1mp92gQwQjRmWbCqYXw&oe=66595485",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/345622552_164764683221292_3665793183779081016_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O5Wb-pdSSSYQ7kNvgFX4cGj&_nc_ht=scontent-ord5-2.xx&oh=00_AYBY8LXLZFnbRYy8kohXdmWgwol1mp92gQwQjRmWbCqYXw&oe=66595485",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/346670530_1175955106431813_6430986105341245134_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q8WIXGVUCn8Q7kNvgH891uL&_nc_ht=scontent-ord5-1.xx&oh=00_AYBqjbObdN1qnvm07IOjshlH-MtlVGDhQoofb4ntZm9K4A&oe=66596613",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/346670530_1175955106431813_6430986105341245134_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q8WIXGVUCn8Q7kNvgH891uL&_nc_ht=scontent-ord5-1.xx&oh=00_AYBqjbObdN1qnvm07IOjshlH-MtlVGDhQoofb4ntZm9K4A&oe=66596613",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/346317863_604969368238149_1121787691770214976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sYWag39RqikQ7kNvgEjb9c_&_nc_ht=scontent-ord5-2.xx&oh=00_AYDo-GWDYi-BZ-vrwu-7_nTXmKm_CYc8Wi4mt1_EOtLJ0Q&oe=66596245",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/346317863_604969368238149_1121787691770214976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sYWag39RqikQ7kNvgEjb9c_&_nc_ht=scontent-ord5-2.xx&oh=00_AYDo-GWDYi-BZ-vrwu-7_nTXmKm_CYc8Wi4mt1_EOtLJ0Q&oe=66596245",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/345459299_253621270488655_9145679311287822077_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=F4U-Vl70KBoQ7kNvgFIGXM_&_nc_ht=scontent-ord5-2.xx&oh=00_AYD7tXfF8MiDglv4uUAteKCo9OHN_ExglsZgycIGBpcX-Q&oe=6659703C",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/345459299_253621270488655_9145679311287822077_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=F4U-Vl70KBoQ7kNvgFIGXM_&_nc_ht=scontent-ord5-2.xx&oh=00_AYD7tXfF8MiDglv4uUAteKCo9OHN_ExglsZgycIGBpcX-Q&oe=6659703C",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/346091247_627835408893405_2699067867322579147_n.jpg?stp=c0.92.358.358a_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QRwXLE6bxHgQ7kNvgFO-kbW&_nc_ht=scontent-ord5-2.xx&oh=00_AYCX-wvqVuu1es6MRmVqg8mQMam_G48uf6m2JnqitcOzqQ&oe=665946C5",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/346091247_627835408893405_2699067867322579147_n.jpg?stp=c0.92.358.358a_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QRwXLE6bxHgQ7kNvgFO-kbW&_nc_ht=scontent-ord5-2.xx&oh=00_AYCX-wvqVuu1es6MRmVqg8mQMam_G48uf6m2JnqitcOzqQ&oe=665946C5",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/347377214_591919579695636_3491278255720654313_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ez-nhDAStzsQ7kNvgEePSud&_nc_ht=scontent-ord5-2.xx&oh=00_AYBs_q2CEwm_3NDC8R2LgIkHMSekvLM1sMrGbU6BsANIOg&oe=66597187",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/347377214_591919579695636_3491278255720654313_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ez-nhDAStzsQ7kNvgEePSud&_nc_ht=scontent-ord5-2.xx&oh=00_AYBs_q2CEwm_3NDC8R2LgIkHMSekvLM1sMrGbU6BsANIOg&oe=66597187",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/348263450_788892836201498_6849260692090174034_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4C2Ntl0mK5UQ7kNvgH2pPY9&_nc_ht=scontent-ord5-2.xx&oh=00_AYCpv8jfs5NEyXhix3UsAyyVGB3qzHYJGYKxqt90c4w2Xg&oe=6659429B",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/348263450_788892836201498_6849260692090174034_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4C2Ntl0mK5UQ7kNvgH2pPY9&_nc_ht=scontent-ord5-2.xx&oh=00_AYCpv8jfs5NEyXhix3UsAyyVGB3qzHYJGYKxqt90c4w2Xg&oe=6659429B",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/431568948_401840615937790_4140296786667356141_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ap0NXJh8LLIQ7kNvgFtm1Lf&_nc_ht=scontent-ord5-2.xx&oh=00_AYA3wPcLAzsPovO47hD96NEELf1vWh2KXgq-svLzydZhMQ&oe=66595639",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/431568948_401840615937790_4140296786667356141_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ap0NXJh8LLIQ7kNvgFtm1Lf&_nc_ht=scontent-ord5-2.xx&oh=00_AYA3wPcLAzsPovO47hD96NEELf1vWh2KXgq-svLzydZhMQ&oe=66595639",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/432218450_401840649271120_607294142143203230_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Mnt3BKTDA6gQ7kNvgH0jnL2&_nc_ht=scontent-ord5-2.xx&oh=00_AYD9RLuwhZOps2jgppsygv9PgZxG4dnaVigmWZAhdeNY2A&oe=66594F47",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/432218450_401840649271120_607294142143203230_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Mnt3BKTDA6gQ7kNvgH0jnL2&_nc_ht=scontent-ord5-2.xx&oh=00_AYD9RLuwhZOps2jgppsygv9PgZxG4dnaVigmWZAhdeNY2A&oe=66594F47",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/444152972_447218801399971_3413540639214087952_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jrTnBAkLKCAQ7kNvgHn5Nsb&_nc_ht=scontent-ord5-2.xx&oh=00_AYDxz5Vdy6PmqTfUiFcELc4ckxJ4_j_R1H2_-hEORfkYyg&oe=6659516A",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/444152972_447218801399971_3413540639214087952_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jrTnBAkLKCAQ7kNvgHn5Nsb&_nc_ht=scontent-ord5-2.xx&oh=00_AYDxz5Vdy6PmqTfUiFcELc4ckxJ4_j_R1H2_-hEORfkYyg&oe=6659516A",
          },
          {
            original: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/441490638_447228194732365_5949638931352008231_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S0kr67pgiIkQ7kNvgEXtZgo&_nc_ht=scontent-ord5-2.xx&oh=00_AYDEcYhWuJJOMCEJAI0oN3l72fkjSltDTTyf8U6LImuzIA&oe=6659770F",
            thumbnail: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/441490638_447228194732365_5949638931352008231_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S0kr67pgiIkQ7kNvgEXtZgo&_nc_ht=scontent-ord5-2.xx&oh=00_AYDEcYhWuJJOMCEJAI0oN3l72fkjSltDTTyf8U6LImuzIA&oe=6659770F",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/444444180_447228188065699_6383573076784789435_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7l9ZURovV0Q7kNvgF7Mp-Q&_nc_ht=scontent-ord5-1.xx&oh=00_AYCQXTKQDGRuN6rnJmnZ8W1W3lu8YnSoZT7tiTS-2HdvwQ&oe=6659728C",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/444444180_447228188065699_6383573076784789435_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7l9ZURovV0Q7kNvgF7Mp-Q&_nc_ht=scontent-ord5-1.xx&oh=00_AYCQXTKQDGRuN6rnJmnZ8W1W3lu8YnSoZT7tiTS-2HdvwQ&oe=6659728C",
          },
          {
            original: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/442415162_447228208065697_7473085854260251658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5CCbB-LBD_EQ7kNvgFMVOIg&_nc_ht=scontent-ord5-1.xx&oh=00_AYBEsb4M_of3tNgQ4Yq5HnRL2kmatsQq5EpaF1QGY8sWZA&oe=66595EC0",
            thumbnail: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/442415162_447228208065697_7473085854260251658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5CCbB-LBD_EQ7kNvgFMVOIg&_nc_ht=scontent-ord5-1.xx&oh=00_AYBEsb4M_of3tNgQ4Yq5HnRL2kmatsQq5EpaF1QGY8sWZA&oe=66595EC0",
          }
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
                <div class="form-group-btn">
                    <button type="submit" class="form-btn">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}