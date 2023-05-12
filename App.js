import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const handleClear = () => {
    setResult('');
  }

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult('Error');
    }
  }

  return (
    <div className="calculator">
      <div data-testid ="display"className="display">{result}</div>
      <div className="keys">
        <button data-testid ="clear" className="clear" onClick={handleClear}>AC</button>
        <button  data-testid ="button-(" name="(" onClick={handleClick}>(</button>
        <button data-testid ="button-) "name=")" onClick={handleClick}>)</button>
        <button data-testid= "button/"  name="/" onClick={handleClick}>/</button>

        <button data-testid ="button-7"  name="7" onClick={handleClick}>7</button>
        <button data-testid ="button-8"  name="8" onClick={handleClick}>8</button>
        <button data-testid ="button-9"  name="9" onClick={handleClick}>9</button>
        <button data-testid= "button*"  name="*" onClick={handleClick}>*</button>

        <button data-testid = "button-4" name="4" onClick={handleClick}>4</button>
        <button data-testid= "button-5"  name="5" onClick={handleClick}>5</button>
        <button data-testid ="button-6"  name="6" onClick={handleClick}>6</button>
        <button data-testid= "button-"   name="-" onClick={handleClick}>-</button>

        <button data-testid ="button-1"  name="1" onClick={handleClick}>1</button>
        <button data-testid ="button-2"  name="2" onClick={handleClick}>2</button>
        <button data-testid ="button-3"  name="3" onClick={handleClick}>3</button>
        <button data-testid= "button+" name="+" onClick={handleClick}>+</button>

        <button  data-testid ="button-0" className="zero" name="0" onClick={handleClick}>0</button>
        <button data-testid ="button."  name="." onClick={handleClick}>.</button>
        <button data-testid= "button="  className="calculate" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
