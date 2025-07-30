export default function SpecialCoffee() {
  return (
    <div className="my-20 max-w-[95rem] mx-auto">
      {/* Top Row */}
      <div className="grid grid-cols-4 gap-4 items-center mb-8">
        <img src="/images/Coffees/Almond Frappe.webp" alt="Coffee 1" className="w-full h-auto col-span-1" />

        <div className="col-span-2 text-center">
          <h2 className="text-2xl font-bold mb-2">Our Special Coffee</h2>
          <p className="text-gray-600">
            Experience the rich aroma and bold flavor of our finest blend, crafted for true coffee lovers.
          </p>
        </div>

        <img src="/images/Coffees/Iced Vanilla Latte.webp" alt="Coffee 2" className="w-full h-auto col-span-1" />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-4 gap-4">
        <img src="/images/Coffees/Caramel Frappe.webp" alt="Coffee 3" className="w-full h-auto" />
        <img src="/images/Coffees/Iced Coconut Latte.webp" alt="Coffee 4" className="w-full h-auto" />
        <img src="/images/Coffees/Mocha Frappe.webp" alt="Coffee 5" className="w-full h-auto" />
        <img src="/images/Coffees/Vietnamese Iced Coffee.webp" alt="Coffee 6" className="w-full h-auto" />
      </div>
    </div>
  );
}
