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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayIndices = () => {
    const farleft = (current + images.length - 2) % images.length;
    const left = (current + images.length - 1) % images.length;
    const right = (current + 1) % images.length;
    const farright = (current + 2) % images.length;
    return [farleft, left, current, right, farright];
  };

  const displayIndices = getDisplayIndices();

  const positions = [
    "-translate-x-[240%]",
    "-translate-x-[120%]",
    "translate-x-0",
    "translate-x-[120%]",
    "translate-x-[240%]",
  ];

  const getImageClass = (index: number) => {
    switch (index) {
      case 0:
      case 4:
        return "opacity-10 scale-50 blur-sm";
      case 1:
      case 3:
        return "opacity-30 blur-[1px]";
      case 2:
        return "opacity-100 scale-100 z-10";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">

      <div className="relative w-full h-full flex items-center justify-center">
        {displayIndices.map((imageIndex, i) => (
          <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            alt={`Product ${imageIndex}`}
            className={`absolute transition-all duration-700 ease-in-out h-[60vh] aspect-[1] ${positions[i]} ${getImageClass(i)} ${
              i === 2 ? "" : ""
            }`}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </div>
    </div>
  );
}
