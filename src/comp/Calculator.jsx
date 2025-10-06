import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);

  const inputNum = (num) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const inputOp = (nextOp) => {
    const inputValue = parseFloat(display);
    if (prev === null) {
      setPrev(inputValue);
    } else if (op) {
      const result = calculate(prev, inputValue, op);
      setDisplay(String(result));
      setPrev(result);
    }
    setOp(nextOp);
    setDisplay('0');
  };

  const calculate = (first, second, operation) => {
    switch (operation) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return first / second;
      default: return second;
    }
  };

  const equals = () => {
    const inputValue = parseFloat(display);
    if (prev !== null && op) {
      const result = calculate(prev, inputValue, op);
      setDisplay(String(result));
      setPrev(null);
      setOp(null);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
  };

  const btnStyle = {
    width: '60px',
    height: '60px',
    fontSize: '18px',
    margin: '2px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
      <h1>Calculator</h1>
      <div style={{ 
        background: '#000', 
        color: '#fff', 
        padding: '20px', 
        fontSize: '24px', 
        textAlign: 'right',
        marginBottom: '10px'
      }}>
        {display}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
        <button style={{...btnStyle, background: '#ff9500'}} onClick={clear}>C</button>
        <button style={{...btnStyle, background: '#a6a6a6'}} onClick={() => inputOp('/')}>/</button>
        <button style={{...btnStyle, background: '#a6a6a6'}} onClick={() => inputOp('*')}>*</button>
        <button style={{...btnStyle, background: '#a6a6a6'}} onClick={() => inputOp('-')}>-</button>
        
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('7')}>7</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('8')}>8</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('9')}>9</button>
        <button style={{...btnStyle, background: '#a6a6a6'}} onClick={() => inputOp('+')}>+</button>
        
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('4')}>4</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('5')}>5</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('6')}>6</button>
        <button style={{...btnStyle, background: '#ff9500', gridRow: 'span 2'}} onClick={equals}>=</button>
        
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('1')}>1</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('2')}>2</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('3')}>3</button>
        
        <button style={{...btnStyle, background: '#333', gridColumn: 'span 2'}} onClick={() => inputNum('0')}>0</button>
        <button style={{...btnStyle, background: '#333'}} onClick={() => inputNum('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;