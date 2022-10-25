/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">0</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button type="button" className="calculator-key key-clear">AC</button>
              <button type="button" className="calculator-key key-sign">±</button>
              <button type="button" className="calculator-key key-percent">%</button>
            </div>
            <div className="digit-keys">
              <button type="button" className="calculator-key key-7">7</button>
              <button type="button" className="calculator-key key-8">8</button>
              <button type="button" className="calculator-key key-9">9</button>

              <button type="button" className="calculator-key key-4">4</button>
              <button type="button" className="calculator-key key-5">5</button>
              <button type="button" className="calculator-key key-6">6</button>

              <button type="button" className="calculator-key key-1">1</button>
              <button type="button" className="calculator-key key-2">2</button>
              <button type="button" className="calculator-key key-3">3</button>

              <button type="button" className="calculator-key key-0">0</button>
              <button type="button" className="calculator-key key-dot">●</button>

            </div>
          </div>
          <div className="operator-keys">
            <button type="button" className="calculator-key key-divide orange-key">÷</button>
            <button type="button" className="calculator-key key-multiply orange-key">×</button>
            <button type="button" className="calculator-key key-subtract orange-key">−</button>
            <button type="button" className="calculator-key key-add orange-key">+</button>
            <button type="button" className="calculator-key key-equals orange-key">=</button>
          </div>
        </div>

      </div>
    );
  }
}
