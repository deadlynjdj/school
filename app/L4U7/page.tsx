"use client";
import { useState } from 'react';

// Define the food items and their prices
const menu = [
  { name: 'Steak', price: 25 },
  { name: 'Pizza', price: 15 },
  { name: 'Hamburger', price: 10 },
  { name: 'Salad', price: 7 },
];

export default function Home() {
  const [budget, setBudget] = useState(undefined);
  const [suggestion, setSuggestion] = useState('');

  const suggestFood = () => {
    // Loop through the menu
    for(const element of menu) {
      // If the budget is greater than or equal to the current food price
      if((budget ?? 0) >= element.price) {
        // Set the suggestion
        setSuggestion(`You should get a ${element.name} which costs $${element.price}`);
        return;
      }
    }
    // If no food item fits the budget
    setSuggestion('Your budget is too low for the available food items.');
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter your budget" className='text-black' />
      <button onClick={suggestFood}>Suggest Food</button>
      <p>{suggestion}</p>
    </main>
  )
}