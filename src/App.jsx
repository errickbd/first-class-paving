import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./Components/Navbar.css";
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Services from './Components/pages/Services';
import Gallery from './Components/pages/Gallery';
import Quote from './Components/pages/Quote';
import AsphaltService from './Components/pages/AsphaltPServicePage.jsx'
import ConcreteService from './Components/pages/ConcreteServicePage.jsx';
import SealcoatService from './Components/pages/SealcoatServicePage.jsx';
import ContactPage from './Components/pages/ContactPage.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/gallery' exact element={<Gallery/>} />
        <Route path='/quote' exact element={<Quote/>} />
        <Route path='/asphalt_paving' exact element={<AsphaltService/>} />
        <Route path='/concrete' exact element={<ConcreteService/>} />
        <Route path='/sealcoat' exact element={<SealcoatService/>} />
        <Route path='/contact' exact element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </Router>  
    </>
  );
}

export default App;
