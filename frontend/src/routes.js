import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPanel from './pages/StartPanel/StartPanel'; 
import NewsList from './features/news/NewsList'; 
import Contact from './features/contact/Contact'; 
import AboutUs from './features/aboutus/AboutUs';

function RoutingConfig() {
  return (
    <Routes>
      <Route path="/" element={<StartPanel />} /> 
      <Route path="/news" element={<NewsList />} /> 
      <Route path="/aboutus" element={<AboutUs />} /> 
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  );
}

export default RoutingConfig;
