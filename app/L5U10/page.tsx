"use client";
import { useState } from "react";

// Define the restaurants and their details
const restaurants = [
  { name: "Italian Bistro", cuisine: "Italian", price: "$$", distance: 2 },
  { name: "Sushi World", cuisine: "Japanese", price: "$$$", distance: 5 },
  { name: "Burger Joint", cuisine: "American", price: "$", distance: 1 },
  {
    name: "Italian Bistro",
    cuisine: "Italian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Sushi World",
    cuisine: "Japanese",
    price: "$$$",
    distance: 5,
  },
  {
    name: "Burger Joint",
    cuisine: "American",
    price: "$",
    distance: 1,
  },
  {
    name: "Spice Garden",
    cuisine: "Indian",
    price: "$$",
    distance: 3,
  },
  {
    name: "Brasserie Francaise",
    cuisine: "French",
    price: "$$$$",
    distance: 4,
  },
  {
    name: "Taco Fiesta",
    cuisine: "Mexican",
    price: "$",
    distance: 2,
  },
  {
    name: "Noodle House",
    cuisine: "Chinese",
    price: "$$",
    distance: 6,
  },
  {
    name: "Steakhouse Grill",
    cuisine: "Steakhouse",
    price: "$$$",
    distance: 3,
  },
  {
    name: "Vegetarian Delight",
    cuisine: "Vegetarian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Seafood Shack",
    cuisine: "Seafood",
    price: "$$$",
    distance: 5,
  },
  {
    name: "Pizzeria Napoletana",
    cuisine: "Italian",
    price: "$$",
    distance: 1,
  },
  {
    name: "Fusion Bistro",
    cuisine: "Fusion",
    price: "$$$$",
    distance: 4,
  },
  {
    name: "Cafe Dolce",
    cuisine: "Cafe",
    price: "$",
    distance: 2,
  },
  {
    name: "Grill & Smokehouse",
    cuisine: "BBQ",
    price: "$$",
    distance: 3,
  },
  {
    name: "Taste of Greece",
    cuisine: "Greek",
    price: "$$",
    distance: 4,
  },
  {
    name: "Curry Palace",
    cuisine: "Indian",
    price: "$$",
    distance: 5,
  },
  {
    name: "Healthy Bowls",
    cuisine: "Healthy",
    price: "$$",
    distance: 2,
  },
  {
    name: "Dim Sum Delights",
    cuisine: "Chinese",
    price: "$$$",
    distance: 3,
  },
  {
    name: "Veggie Grill",
    cuisine: "Vegetarian",
    price: "$$",
    distance: 1,
  },
  {
    name: "Sushi Sake",
    cuisine: "Japanese",
    price: "$$$$",
    distance: 4,
  },
  {
    name: "Cafe Italiano",
    cuisine: "Italian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Spicy Noodles",
    cuisine: "Thai",
    price: "$$",
    distance: 3,
  },
  {
    name: "Kebab House",
    cuisine: "Mediterranean",
    price: "$",
    distance: 2,
  },
  {
    name: "Burrito Bros",
    cuisine: "Mexican",
    price: "$",
    distance: 1,
  },
  {
    name: "Pho Delicious",
    cuisine: "Vietnamese",
    price: "$$",
    distance: 4,
  },
  {
    name: "Steak & Ale",
    cuisine: "Steakhouse",
    price: "$$$",
    distance: 5,
  },
  {
    name: "Sushi Express",
    cuisine: "Japanese",
    price: "$$",
    distance: 2,
  },
  {
    name: "Pasta Perfection",
    cuisine: "Italian",
    price: "$$",
    distance: 3,
  },
  {
    name: "Tasty Thai",
    cuisine: "Thai",
    price: "$$",
    distance: 4,
  },
  {
    name: "Burger Palace",
    cuisine: "American",
    price: "$",
    distance: 2,
  },
  {
    name: "Tandoori Nights",
    cuisine: "Indian",
    price: "$$$",
    distance: 3,
  },
  {
    name: "Ramen Mania",
    cuisine: "Japanese",
    price: "$$",
    distance: 4,
  },
  {
    name: "Pizza Paradise",
    cuisine: "Italian",
    price: "$",
    distance: 1,
  },
  {
    name: "Veggie Vibes",
    cuisine: "Vegetarian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Taco Town",
    cuisine: "Mexican",
    price: "$",
    distance: 3,
  },
  {
    name: "Sushi Zen",
    cuisine: "Japanese",
    price: "$$$$",
    distance: 5,
  },
  {
    name: "Steakhouse Supreme",
    cuisine: "Steakhouse",
    price: "$$$$",
    distance: 4,
  },
  {
    name: "Falafel Factory",
    cuisine: "Mediterranean",
    price: "$",
    distance: 2,
  },
  {
    name: "Pad Thai Palace",
    cuisine: "Thai",
    price: "$$",
    distance: 3,
  },
  {
    name: "Burritos & Bowls",
    cuisine: "Mexican",
    price: "$$",
    distance: 2,
  },
  {
    name: "Pho Phenom",
    cuisine: "Vietnamese",
    price: "$$",
    distance: 4,
  },
  {
    name: "Gyro Grill",
    cuisine: "Greek",
    price: "$",
    distance: 1,
  },
  {
    name: "Sizzling Steakhouse",
    cuisine: "Steakhouse",
    price: "$$$",
    distance: 3,
  },
  {
    name: "Curry Cottage",
    cuisine: "Indian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Pasta Amore",
    cuisine: "Italian",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Pho Saigon",
    cuisine: "Vietnamese",
    price: "$$",
    distance: 3,
  },
  {
    name: "Sushi Samurai",
    cuisine: "Japanese",
    price: "$$$",
    distance: 5,
  },
  {
    name: "Taco Fiesta",
    cuisine: "Mexican",
    price: "$$",
    distance: 2,
  },
  {
    name: "Burger Bliss",
    cuisine: "American",
    price: "$",
    distance: 1,
  },
  {
    name: "Healthy Hut",
    cuisine: "Healthy",
    price: "$$",
    distance: 3,
  },
  {
    name: "Vegan Village",
    cuisine: "Vegetarian",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Sushi Boat",
    cuisine: "Japanese",
    price: "$$$$",
    distance: 5,
  },
  {
    name: "Pizza Palace",
    cuisine: "Italian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Thai Spice",
    cuisine: "Thai",
    price: "$$",
    distance: 3,
  },
  {
    name: "Grill Masters",
    cuisine: "American",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Bombay Bites",
    cuisine: "Indian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Sushi Rolls",
    cuisine: "Japanese",
    price: "$$",
    distance: 3,
  },
  {
    name: "Pasta Pronto",
    cuisine: "Italian",
    price: "$$",
    distance: 1,
  },
  {
    name: "Falafel Fiesta",
    cuisine: "Mediterranean",
    price: "$",
    distance: 2,
  },
  {
    name: "Burrito Bonanza",
    cuisine: "Mexican",
    price: "$$",
    distance: 3,
  },
  {
    name: "Pho Deluxe",
    cuisine: "Vietnamese",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Greek Grill",
    cuisine: "Greek",
    price: "$$",
    distance: 2,
  },
  {
    name: "Steak Sizzlers",
    cuisine: "Steakhouse",
    price: "$$$",
    distance: 3,
  },
  {
    name: "Curry Hut",
    cuisine: "Indian",
    price: "$",
    distance: 1,
  },
  {
    name: "Pasta Perfetto",
    cuisine: "Italian",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Pho Paradise",
    cuisine: "Vietnamese",
    price: "$$",
    distance: 3,
  },
  {
    name: "Sushi Shogun",
    cuisine: "Japanese",
    price: "$$$$",
    distance: 5,
  },
  {
    name: "Taco Treat",
    cuisine: "Mexican",
    price: "$",
    distance: 2,
  },
  {
    name: "Burger Bistro",
    cuisine: "American",
    price: "$$",
    distance: 3,
  },
  {
    name: "Green Gourmet",
    cuisine: "Healthy",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Vegan Vibes",
    cuisine: "Vegetarian",
    price: "$$",
    distance: 2,
  },
  {
    name: "Sushi Boat",
    cuisine: "Japanese",
    price: "$$$",
    distance: 5,
  },
  {
    name: "Pizza Palermo",
    cuisine: "Italian",
    price: "$$",
    distance: 1,
  },
  {
    name: "Thai Temptations",
    cuisine: "Thai",
    price: "$$$",
    distance: 3,
  },
  {
    name: "Grill Masters",
    cuisine: "American",
    price: "$$",
    distance: 2,
  },
  {
    name: "Bombay Bites",
    cuisine: "Indian",
    price: "$$$",
    distance: 4,
  },
  {
    name: "Sushi Rolls",
    cuisine: "Japanese",
    price: "$$",
    distance: 3,
  },
  {
    name: "Pasta Pronto",
    cuisine: "Italian",
    price: "$",
    distance: 1,
  },
  {
    name: "Falafel Fiesta",
    cuisine: "Mediterranean",
    price: "$$",
    distance: 2,
  },
  {
    name: "Burrito Bonanza",
    cuisine: "Mexican",
    price: "$",
    distance: 3,
  },
  {
    name: "Pho Deluxe",
    cuisine: "Vietnamese",
    price: "$$",
    distance: 4,
  },
  {
    name: "Greek Grill",
    cuisine: "Greek",
    price: "$$$",
    distance: 5,
  },
  // Add more restaurants as needed
];

function Home() {
  const [cuisine, setCuisine] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState(undefined);
  const [recommendation, setRecommendation] = useState("");

  const recommendRestaurant = () => {
    // Loop through the restaurants
    for (const restaurant of restaurants) {
      // If the restaurant matches the user's preferences
      if (
        restaurant.cuisine === cuisine &&
        restaurant.price === price &&
        restaurant.distance <= (distance ?? 0) // Fix: Add nullish coalescing operator to provide a default value for 'distance'
      ) {
        // Set the recommendation
        setRecommendation(
          `You should try ${restaurant.name} which is a ${restaurant.cuisine} restaurant.`
        );
        return;
      }
    }
    // If no restaurant matches the user's preferences
    setRecommendation("No restaurants found that match your preferences.");
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="text-black"
      >
        <option value="">Select preferred cuisine</option>
        {restaurants.map((restaurant, index) => (
          <option key={index} value={restaurant.cuisine}>
            {restaurant.cuisine}
          </option>
        ))}
      </select>
      <input
        className="text-black"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter preferred price range ($, $$, $$$)"
      />
      <input
        className="text-black"
        type="number"
        value={distance}
        //@ts-ignore
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Enter maximum distance (in miles)"
      />
      <button onClick={recommendRestaurant}>Recommend Restaurant</button>
      <p>{recommendation}</p>
    </main>
  );
}

export default Home;
