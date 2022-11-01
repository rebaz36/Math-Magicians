/* eslint-disable import/extensions */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './pages/Calculator/Calculator';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';
import NavBar from './component/Layout/NavBar';
import Footer from './component/Layout/Footer';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      <Footer />
    </Router>
  );
}
