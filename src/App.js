import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import './App.css';
import './style/header.scss';
import './style/footer.scss';
import './style/home.scss';
import './style/contact.scss';
import './style/service.scss';
import './style/about.scss';

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/service" element={<Service/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
