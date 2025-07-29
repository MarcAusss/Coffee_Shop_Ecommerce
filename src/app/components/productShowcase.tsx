"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/Coffees/Almond Frappe.webp",
  "/images/Coffees/Caramel Frappe.webp",
  "/images/Coffees/Coffee Banana Milkshake.webp",
  "/images/Coffees/Coffee Slushie.webp",
  "/images/Coffees/Coffee Smoothie.webp",
  "/images/Coffees/dalgona coffee.webp",
  "/images/Coffees/Iced Caramel Latte Macchiato.webp",
  "/images/Coffees/Iced Coconut Latte.webp",
  "/images/Coffees/Iced Shaken Espresso.webp",
  "/images/Coffees/Iced Vanilla Latte.webp",
  "/images/Coffees/Mocha Frappe.webp",
  "/images/Coffees/Mocha Iced Coffee.webp",
  "/images/Coffees/Mocha Iced Latte.webp",
  "/images/Coffees/Sparkling Iced Coffee.webp",
  "/images/Coffees/Vietnamese Iced Coffee.webp",
];


export default function ProductShowcase() {
  const [current, setCurrent] = useState(1); // Start at middle

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayIndices = () => {
    const left = (current + images.length - 1) % images.length;
    const right = (current + 1) % images.length;
    return [left, current, right];
  };

  const displayIndices = getDisplayIndices();

  return (
    <div className=" overflow-x-hidden">
    <div className="w-[150%] flex justify-center items-center">
      <div className="flex w-full items-center gap-6"
      style={{
        transform: "translateX(-12vw)",
      }}>
        {displayIndices.map((index, i) => (
          <motion.img
            key={index}
            src={images[index]}
            alt={`Product ${index}`}
            className={`h-[60vh] aspect-[3/4] w-[40vw] object-cover ${
              i === 1
                ? "grayscale-1 opacity-100 z-10 rounded-xl"
                : "grayscale opacity-40"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
