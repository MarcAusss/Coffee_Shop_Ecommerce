"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const images = [
  {
    src: "/images/Coffees/Almond Frappe.webp",
    name: "Almond Frappe",
    desc: "Creamy almond delight in every sip.",
  },
  {
    src: "/images/Coffees/Caramel Frappe.webp",
    name: "Caramel Frappe",
    desc: "Rich caramel blended with ice-cold coffee.",
  },
  {
    src: "/images/Coffees/Coffee Banana Milkshake.webp",
    name: "Banana Milkshake",
    desc: "Sweet banana twist on a coffee base.",
  },
  {
    src: "/images/Coffees/Iced Coconut Latte.webp",
    name: "Coconut Latte",
    desc: "Tropical coconut meets bold espresso.",
  },


     

  {
    src: "/images/Coffees/Iced Caramel Latte Macchiato.webp",
    name: "Iced Caramel Latte",
    desc: "Layered caramel perfection.",
  },
  {
    src: "/images/Coffees/Mocha Frappe.webp",
    name: "Mocha Frappe",
    desc: "Chocolatey coffee blended with ice.",
  },
  {
    src: "/images/Coffees/Vietnamese Iced Coffee.webp",
    name: "Vietnamese Iced Coffee",
    desc: "Strong & sweet traditional brew.",
  },
  {
    src: "/images/Coffees/Iced Shaken Espresso.webp",
    name: "Shaken Espresso",
    desc: "Shaken to chill, bold to thrill.",
  },
];

const layout = [
  { index: 5, col: "col-span-2", row: "row-span-1" },
  { index: 4, col: "col-span-1", row: "row-span-2" },
  { index: 3, col: "col-span-1", row: "row-span-1" },
  { index: 2, col: "col-span-2", row: "row-span-1" },
  { index: 1, col: "col-span-1", row: "row-span-1" },
  { index: 0, col: "col-span-1", row: "row-span-2" },
  { index: 6, col: "col-span-1", row: "row-span-1" },
  { index: 7, col: "col-span-1", row: "row-span-2" },
  { index: 7, col: "col-span-1", row: "row-span-2" },
];

export default function SpecialCoffee() {
  const [showDetail, setShowDetail] = useState(false);
  const [dynamicIndex, setDynamicIndex] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => setShowDetail((prev) => !prev), 2000);
    return () => clearInterval(toggle);
  }, []);

  useEffect(() => {
    const rotate = setInterval(() => {
      setDynamicIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(rotate);
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-20 px-4 h-[60vh]">
      <div className="grid gap-3 p-2 h-full" style={{ gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(8, 1fr)", }}>
        <div className="flex items-center justify-center rounded-md bg-[#f5e1cd]"
          style={{
            gridColumn: "span 3",
            gridRow: "span 3",
          }}
        >
          <p>Salmon</p>
        </div>

        <div className="flex items-center justify-center rounded-md bg-[#f5e1cd]"
          style={{
            gridColumn: "span 3",
            gridRow: "span 3",
          }}
        >
          <p>Broccoli</p>
        </div>

        <div className="flex items-center justify-center rounded-md bg-[#f5e1cd]"
          style={{
            gridColumn: "span 2",
            gridRow: "span 8",
          }}
        >
          <p>Tamago</p>
        </div>

        <div className="flex items-center justify-center rounded-md"
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
          }}
        >
          <div className="text-center">
            <h1 className="text-2xl">4511 Café</h1>
            <p className="text-lg">Our Social Media</p>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-md bg-[#f5e1cd]"
          style={{
            gridColumn: "span 2",
            gridRow: "span 8",
          }}
        >
          <p>Edamame</p>
        </div>

        <div className="flex items-center justify-center rounded-md bg-[#f5e1cd]"
          style={{
            gridColumn: "span 2",
            gridRow: "span 6",
          }}
        >
          <p>Tomato</p>
        </div>
      </div>
    </div>
  );
}
