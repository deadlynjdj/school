export default function Home() {
  let menu = [
    { name: "Margherita Pizza", price: 12.99 },
    { name: "Caesar Salad", price: 8.99 },
    { name: "Spaghetti Bolognese", price: 14.99 },
    { name: "Chicken Parmesan", price: 16.99 },
    { name: "Vegetable Lasagna", price: 13.99 },
    { name: "Garlic Bread", price: 4.99 },
    { name: "Tiramisu", price: 6.99 },
    { name: "Panna Cotta", price: 6.99 },
    { name: "Espresso", price: 2.99 },
    { name: "House Red Wine", price: 7.99 },
  ];
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {(() => {
        const elements = [];
        for (let i = 0; i < menu.length; i++) {
          const item = menu[i];
          elements.push(
            <div key={i}>
              {item.name} {item.price}$
            </div>
          );
        }
        return elements;
      })()}
    </main>
  );
}
