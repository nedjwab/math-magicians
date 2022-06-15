import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const eventHandler = (e) => {
    const { value } = e.target;
    setState(calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, value));
  };

  const { total, next, operation } = state;
  const result = (
    <p>
      {total}
      {' '}
      {operation}
      {' '}
      {next}
      {' '}
    </p>
  );
  return (
    <div className="claculaor-container">
      <div className="title">
        <h3>Let&apos;s do some math!</h3>
      </div>
      <div className="main-container">
        <div className="display-box" type="text" id="result" disabled>
          { result }
        </div>
        <div className="claculator-buttons">
          <button type="submit" value="AC" onClick={eventHandler}>AC</button>
          <button type="submit" value="+/-" onClick={eventHandler}>+/-</button>
          <button type="submit" value="%" onClick={eventHandler}>%</button>
          <button type="submit" className="color" value="÷" onClick={eventHandler}>/</button>
          <button type="submit" value="7" onClick={eventHandler}>7</button>
          <button type="submit" value="8" onClick={eventHandler}>8</button>
          <button type="submit" value="9" onClick={eventHandler}>9</button>
          <button type="submit" className="color" value="x" onClick={eventHandler}>*</button>
          <button type="submit" value="4" onClick={eventHandler}>4</button>
          <button type="submit" value="5" onClick={eventHandler}>5</button>
          <button type="submit" value="6" onClick={eventHandler}>6</button>
          <button type="submit" className="color" value="-" onClick={eventHandler}>-</button>
          <button type="submit" value="1" onClick={eventHandler}>1</button>
          <button type="submit" value="2" onClick={eventHandler}>2</button>
          <button type="submit" value="3" onClick={eventHandler}>3</button>
          <button type="submit" className="color" value="+" onClick={eventHandler}>+</button>
          <button type="submit" id="zero" value="0" onClick={eventHandler}>0</button>
          <button type="submit" value="." onClick={eventHandler}>.</button>
          <button type="submit" className="color" value="=" onClick={eventHandler}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
