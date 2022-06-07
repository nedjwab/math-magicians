import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="main-container">
        <input className="display-box" type="text" id="result" placeholder="0" disabled />
        <div className="claculator-buttons">
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button type="submit" className="color">/</button>
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit" className="color">*</button>
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button type="submit" className="color">-</button>
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit" className="color">+</button>
          <button type="submit" id="zero">0</button>
          <button type="submit">.</button>
          <button type="submit" className="color">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
