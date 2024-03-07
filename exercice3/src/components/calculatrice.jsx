import React from 'react';
import { useState } from "react";


function Calculatrice() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);
  const operators = ['+', '-', '*', '/'];

  // Création d'une fonction qui va gérer la valeur de num 1
  const handleNum1 = (event) => {
    setNum1(() => event.target.value)
  }

  // Création d'une fonction qui va gérer la valeur de num 1
  const handleNum2 = (event) => {
    setNum2(() => event.target.value)
  }


  const calculate = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = 0;
    }
    setResult(result);
  };

  return (
    <div>
      <input
        type="number"
        value={num1} onChange={handleNum1}

      />
      <select value={operator} onChange={(event) => setOperator(event.target.value)}>
        {operators.map((op, index) => (
          <option key={index} value={op}>
            {op}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={num2}
        onChange={handleNum2}
      />
      <button onClick={calculate}>=</button>
      <p>Résultat : {result}</p>
    </div>
  );

}

export default Calculatrice;
