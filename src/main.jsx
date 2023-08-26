import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home.jsx';
import './Components/Calendar/Calendar.css';
import Bookings from './pages/Bookings.jsx';
import Contact from './pages/Contact.jsx';
import Presentation from './pages/Presentation.jsx';
import Pricing from './pages/Pricing.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/presentation" element={<Presentation />} />
            <Route exact path="/pricing" element={<Pricing />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
