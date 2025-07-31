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
    <div className="max-w-6xl mx-auto my-20 px-4">
      <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-4 h-[80vh]">
        {layout.map(({ index, col, row }, i) => {
          const image = images[index % images.length];

          if (i === 4) {
            return (
              <div key={`detail-${i}`} className={clsx( "relative overflow-hidden", col, row, "rounded-xl bg-[#fff4e1]")}>
                <AnimatePresence mode="wait">
                  {showDetail ? (
                    <motion.div key="details" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.6 }} className="w-full h-full bg-[#faebd7] p-4 flex flex-col justify-center rounded-xl">
                      <h3 className="text-lg font-bold">{image.name}</h3>
                      <p className="text-sm mt-2 text-gray-700">{image.desc}</p>
                    </motion.div>
                  ) : (
                    <motion.img  key="image" src={image.src} alt={image.name} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.6 }} className="w-full h-full object-cover rounded-xl" />
                  )}
                </AnimatePresence>
              </div>
            );
          }

          if (i === 2) {
            return (
              <div key={`rotating-${i}`} className={clsx(col, row)}>
                <motion.img
                  key={dynamicIndex}
                  src={images[dynamicIndex].src}
                  alt="Rotating Coffee"
                  className="w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            );
          }

          return (
            <div key={`default-${i}`} className={clsx(col, row)}>
              <img src={image.src} alt={image.name} className="w-full h-full object-cover rounded-xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
