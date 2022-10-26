/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    // const result = calculate(this.state, e.target.textContent);
    // this.setState(result);
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator">

      <div className="calculator-display">{ state.next || state.total }</div>
      <div className="calculator-keypad">

        <div className="input-keys">

          <div className="function-keys">

            <button onClick={handleClick} type="button" className="calculator-key key-clear">AC</button>
            <button onClick={handleClick} type="button" className="calculator-key key-sign">±</button>
            <button onClick={handleClick} type="button" className="calculator-key key-percent">%</button>

          </div>

          <div className="digit-keys">

            <button onClick={handleClick} type="button" className="calculator-key key-7">7</button>
            <button onClick={handleClick} type="button" className="calculator-key key-8">8</button>
            <button onClick={handleClick} type="button" className="calculator-key key-9">9</button>

            <button onClick={handleClick} type="button" className="calculator-key key-4">4</button>
            <button onClick={handleClick} type="button" className="calculator-key key-5">5</button>
            <button onClick={handleClick} type="button" className="calculator-key key-6">6</button>

            <button onClick={handleClick} type="button" className="calculator-key key-1">1</button>
            <button onClick={handleClick} type="button" className="calculator-key key-2">2</button>
            <button onClick={handleClick} type="button" className="calculator-key key-3">3</button>

            <button onClick={handleClick} type="button" className="calculator-key key-0">0</button>
            <button onClick={handleClick} type="button" className="calculator-key key-dot">.</button>

          </div>

        </div>

        <div className="operator-keys">

          <button onClick={handleClick} type="button" className="calculator-key key-divide orange-key">÷</button>
          <button onClick={handleClick} type="button" className="calculator-key key-multiply orange-key">x</button>
          <button onClick={handleClick} type="button" className="calculator-key key-subtract orange-key">-</button>
          <button onClick={handleClick} type="button" className="calculator-key key-add orange-key">+</button>
          <button onClick={handleClick} type="button" className="calculator-key key-equals orange-key">=</button>

        </div>
      </div>
    </div>
  );
}
