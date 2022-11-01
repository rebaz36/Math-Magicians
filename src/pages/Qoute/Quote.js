import React, { useState } from 'react';
import GetQuotes from './QuoteData';
import './Quote.css';

export default function Quote() {
  const Quotes = new GetQuotes();
  const [Quote, setQuote] = useState(Quotes.getRandomQuote());

  const handleQuote = () => {
    setQuote(Quotes.getRandomQuote());
  };
  return (
    <div className="Quote-Container">
      <div className="Quote-content">
        <h1 className="Quote-Title">Quote of the Day</h1>
        <h2 className="Quote-Des">{Quote.quote}</h2>
        <div className="info-container">
          <p className="Quote-Author">{Quote.author}</p>
          <button className="Quote-btn" type="button" onClick={handleQuote}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
