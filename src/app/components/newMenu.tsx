export default function NewMenu() {
  return (
    <div className="relative overflow-visible">
      <div className="relative z-10 py-12 ">
        <div className="flex justify-between items-center mx-auto max-w-[95rem] h-2/3 relative z-10">
            <div className="">
                <h1 className="text-6xl text-[#966A4C] mb-10">New to Menu</h1>
                <a href="" className="bg-[#966A4C] tracking-wider text-white py-3 px-7 rounded-full" >
                    ORDER NOW
                </a>
            </div>
            <div className="flex gap-20">
                <div className="">
                    <div className="setbackground relative w-64 h-64 rounded-xl overflow-visible">
                        <img src="/images/Coffees_PNG/1.png" alt="Caramel Frappe" className="w-40 h-50 mx-auto transition-transform duration-500 hover:-translate-y-5 hover:scale-150 z-10 relative"/>
                    </div>
                    <div className="w-full text-center text-xl text-[#966A4C] py-2">
                        <h1 className="">
                            Caramel Frappe
                        </h1>
                    </div>
                </div>

                <div className="">
                    <div className="setbackground relative w-64 h-64 rounded-xl overflow-visible">
                        <img src="/images/Coffees_PNG/2.png" alt="Mocha Latte" className="w-50 h-50 mx-auto transition-transform duration-500 hover:-translate-y-5 hover:scale-150 z-10 relative"/>
                    </div>
                    <div className="w-full text-center text-xl text-[#966A4C] py-2">
                        <h1 className="">
                            Mocha Latte
                        </h1>
                    </div>
                </div>

                <div className="relative">
                    <div className="setbackground relative w-64 h-64 rounded-xl overflow-visible">
                        <img src="/images/Coffees_PNG/3.png" alt="Vanilla Iced Coffee" className="w-50 h-50 mx-auto transition-transform duration-500 hover:-translate-y-5 hover:scale-150 z-10 relative" />
                    </div>
                    <div className="w-full text-center text-xl text-[#966A4C] py-2">
                        <h1 className="">
                            Vanilla Iced Coffee
                        </h1>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}
