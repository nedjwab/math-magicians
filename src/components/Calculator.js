import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  eventHandler=(e) => {
    const { value } = e.target;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, value));
  }

  render() {
    const { total, next, operation } = this.state;
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
      <div className="main-container">
        <div className="display-box" type="text" id="result" disabled>
          { result }
        </div>
        <div className="claculator-buttons">
          <button type="submit" value="AC" onClick={this.eventHandler}>AC</button>
          <button type="submit" value="+/-" onClick={this.eventHandler}>+/-</button>
          <button type="submit" value="%" onClick={this.eventHandler}>%</button>
          <button type="submit" value="÷" onClick={this.eventHandler}>/</button>
          <button type="submit" value="7" onClick={this.eventHandler}>7</button>
          <button type="submit" value="8" onClick={this.eventHandler}>8</button>
          <button type="submit" value="9" onClick={this.eventHandler}>9</button>
          <button type="submit" className="color" value="x" onClick={this.eventHandler}>*</button>
          <button type="submit" value="4" onClick={this.eventHandler}>4</button>
          <button type="submit" value="5" onClick={this.eventHandler}>5</button>
          <button type="submit" value="6" onClick={this.eventHandler}>6</button>
          <button type="submit" className="color" value="-" onClick={this.eventHandler}>-</button>
          <button type="submit" value="1" onClick={this.eventHandler}>1</button>
          <button type="submit" value="2" onClick={this.eventHandler}>2</button>
          <button type="submit" value="3" onClick={this.eventHandler}>3</button>
          <button type="submit" className="color" value="+" onClick={this.eventHandler}>+</button>
          <button type="submit" id="zero" value="0" onClick={this.eventHandler}>0</button>
          <button type="submit" value="." onClick={this.eventHandler}>.</button>
          <button type="submit" className="color" value="=" onClick={this.eventHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
