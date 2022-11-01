import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './pages/Calculator/Calculator';
import Home from './pages/Home/Home';
import Qoute from './pages/Qoute/Qoute';
// import Layout from './component/Layout/Layout';
import NavBar from './component/Layout/NavBar';
import Footer from './component/Layout/Footer';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Qoute />} />
      </Routes>
      <Footer />
    </Router>
  );
}
