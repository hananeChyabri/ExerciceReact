import React from 'react';
import { useState } from "react";


function Calculatrice2() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);
  const operators = ['+', '-', '*', '/'];

  // Création d'une fonction qui va gérer la valeur de num 1
  const handleChange = (inputName,value) => {
   inputName === 'First number' ? setNum1(value): null;
   inputName === 'Second number' ? setNum2(value): null;
   inputName === 'Operator' ? setOperator(value): null;

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
      parseFloat(num2)=== 0 ?  result = "division par 0 impossible" :
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
        value={num1} onChange={(event)=>handleChange("First number",event.target.value)}

      />
      <select value={operator} onChange={(event)=>handleChange("Operator",event.target.value)}>
        {operators.map((op, index) => (
          <option key={index} value={op}>
            {op}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={num2} onChange={(event)=>handleChange("Second number",event.target.value)}
      />
      <button onClick={calculate}>=</button>
      <p>Résultat : {result}</p>
    </div>
  );

}

export default Calculatrice2;
