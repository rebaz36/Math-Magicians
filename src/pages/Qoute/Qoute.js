import React, { useState } from 'react';
import GetQoutes from './QouteData';
import './Qpute.css';

export default function Qoute() {
  const qoutes = new GetQoutes();
  const [qoute, setQoute] = useState(qoutes.getRandomQoute());

  const handleQoute = () => {
    setQoute(qoutes.getRandomQoute());
  };
  return (
    <div className="Qoute-Container">
      <div className="Qoute-content">
        <h1 className="Qoute-Title">Qoute of the Day</h1>
        <h2 className="Qoute-Des">{qoute.quote}</h2>
        <div className="info-container">
          <p className="Qoute-Author">{qoute.author}</p>
          <button className="Qoute-btn" type="button" onClick={handleQoute}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
