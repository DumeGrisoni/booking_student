import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home.jsx';
import Bookings from './pages/Bookings.jsx';
import Contact from './pages/Contact.jsx';
import Presentation from './pages/Presentation.jsx';
import Pricing from './pages/Pricing.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
