"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const coffees = [
  { name: "Almond Frappe", image: "/images/Coffees/Almond Frappe.webp" },
  { name: "Caramel Frappe", image: "/images/Coffees/Caramel Frappe.webp" },
  { name: "Coffee Banana Milkshake", image: "/images/Coffees/Coffee Banana Milkshake.webp" },
  { name: "Coffee Slushie", image: "/images/Coffees/Coffee Slushie.webp" },
  { name: "Coffee Smoothie", image: "/images/Coffees/Coffee Smoothie.webp" },
  { name: "Dalgona Coffee", image: "/images/Coffees/dalgona coffee.webp" },
  { name: "Iced Caramel Latte Macchiato", image: "/images/Coffees/Iced Caramel Latte Macchiato.webp" },
  { name: "Iced Coconut Latte", image: "/images/Coffees/Iced Coconut Latte.webp" },
  { name: "Iced Shaken Espresso", image: "/images/Coffees/Iced Shaken Espresso.webp" },
  { name: "Iced Vanilla Latte", image: "/images/Coffees/Iced Vanilla Latte.webp" },
  { name: "Mocha Frappe", image: "/images/Coffees/Mocha Frappe.webp" },
  { name: "Mocha Iced Coffee", image: "/images/Coffees/Mocha Iced Coffee.webp" },
  { name: "Mocha Iced Latte", image: "/images/Coffees/Mocha Iced Latte.webp" },
  { name: "Sparkling Iced Coffee", image: "/images/Coffees/Sparkling Iced Coffee.webp" },
  { name: "Vietnamese Iced Coffee", image: "/images/Coffees/Vietnamese Iced Coffee.webp" },
];

export default function CoffeeMenu() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const handlePrev = () => {
    setStartIndex((prev) =>
      Math.max(prev - visibleCount, 0)
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, coffees.length - visibleCount)
    );
  };

  const visibleCoffees = coffees.slice(startIndex, startIndex + visibleCount);

  return (
    <div className=" py-10 px-4 md:px-12 lg:px-24 ">
        <div className="flex justify-between items-center mb-6 lg:max-w-[95vw] mx-auto">
            <h1 className="text-6xl text-[#966A4C]">Our Coffee Menu</h1>
            <div className="flex gap-3">
                <button onClick={handlePrev} className="p-2 bg-white border rounded-full shadow hover:bg-[#e2d6ca] transition" disabled={startIndex === 0} >
                    <ChevronLeft />
                </button>
                <button onClick={handleNext} className="p-2 bg-white border rounded-full shadow hover:bg-[#e2d6ca] transition" disabled={startIndex + visibleCount >= coffees.length} >
                    <ChevronRight />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-500">
            {visibleCoffees.map((coffee, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-105" >
                <img src={coffee.image} alt={coffee.name} className="w-full h-[20rem] object-cover"/>
                <div className="p-4">
                    <h3 className="text-md font-semibold text-[#5a4032]">{coffee.name}</h3>
                    <p className="text-sm text-gray-500">Delicious and refreshing!</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}
