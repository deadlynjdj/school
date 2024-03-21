"use client";
import { SetStateAction, useState } from 'react';

export default function Home() {
  const [sales, setSales] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInput(event.target.value);
  }

  const handleAddSale = () => {
    setSales([...sales, parseFloat(input)]);
    setInput('');
  }

  const calculateCommission = (totalSales) => {
    const basePay = 500;
    let commissionRate = 0.05;

    if (totalSales >= 20000) {
      commissionRate = 0.08;
    }

    const commission = totalSales * commissionRate;
    const totalPay = basePay + commission;

    return { totalPay, commission };
  }

  const totalSales = sales.reduce((a, b) => a + b, 0);
  const payInfo = calculateCommission(totalSales);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <input className="text-black" type="number" value={input} onChange={handleInputChange} />
      <button onClick={handleAddSale}>Add Sale</button>
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>Sale: ${sale}</li>
        ))}
      </ul>
      <p>Total Sales: ${totalSales.toFixed(2)}</p>
      <p>Commission: ${payInfo.commission.toFixed(2)}</p>
      <p>Total Pay: ${payInfo.totalPay.toFixed(2)}</p>
    </main>
  )
}