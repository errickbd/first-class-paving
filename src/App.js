import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./Components/Navbar.css";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes> 
    </Router>  
    </>
  );
}

export default App;
