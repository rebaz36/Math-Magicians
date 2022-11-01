/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ Children }) {
  return (
    <>
      <NavBar />
      {Children}
      Hello World
      <Footer />
    </>
  );
}
