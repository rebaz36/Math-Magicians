import React from 'react';
import CalculatorComponent from '../../component/Calculator/CalculatorComponent';
import './Calculator.css';

export default function Calculator() {
  return (
    <div className="Calculator">
      <div className="calculator-sidebar">
        <h1 className="side-bar-title">Lets do some Calculations</h1>
      </div>
      <div className="calculator-container"><CalculatorComponent /></div>
    </div>
  );
}
