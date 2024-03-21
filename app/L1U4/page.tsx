"use client";
import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(num1: number, num2: number, operation: Operation): number | string {
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'subtract') {
    return num1 - num2;
  } else if (operation === 'multiply') {
    return num1 * num2;
  } else if (operation === 'divide') {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 'Error: Division by zero is not allowed';
    }
  } else {
    return 'Error: Invalid operation';
  }
}

export default function Home() {
  const [num1, setNum1] = useState(undefined);
  const [num2, setNum2] = useState(undefined);
  const [operation, setOperation] = useState<Operation>('add');
  const [result, setResult] = useState<number | string>(0);

  const handleCalculate = () => {
    setResult(calculate(num1, num2, operation));
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <input className="text-black" type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input className="text-black" type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <select className="text-black" value={operation} onChange={(e) => setOperation(e.target.value as Operation)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </main>
  );
}