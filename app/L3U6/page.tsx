"use client"
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [primes, setPrimes] = useState<number[]>([]);

  // Helper function to check if a number is prime
  const isPrime = (num: number) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const num = parseInt(input);
    if(isNaN(num)) {
      alert('Please enter a valid number');
      return;
    }

    const newPrimes = [];
    for(let i = 2; i <= num; i++) {
      if(isPrime(i)) {
        newPrimes.push(i);
      }
    }
    setPrimes(newPrimes);
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <input className="text-black" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Find primes</button>
      </form>
      <div>
        <p>Prime numbers up to {input}:</p>
        <p>Total primes: {primes.length}</p>
        <p>{primes.join(', ')}</p>
      </div>
    </main>
  )
}