export default function NewMenu() {
  return (
    <div className="bg-[#f5e1cd] relative py-36">
        <img src="/images/Vector 16.png" alt="" className="imageBG_design absolute top-[20px]" />
        <div className="flex justify-between items-center mx-auto max-w-[95rem] h-2/3 relative z-10">
            <div className="">
                <h1 className="text-6xl text-[#966A4C] mb-10">NEW BREWS!!</h1>
                <a href="" className="bg-[#966A4C] tracking-wider text-white py-3 px-7 rounded-full" >
                    ORDER NOW
                </a>
            </div>
            <div className="flex gap-20">
                <div className="">
                    <div className="setbackground relative w-64 h-64 rounded-xl overflow-visible">
                        <img
                            src="/images/Coffees_PNG/8a73de76-11d4-4a5f-bbe3-fd91c2eeeb26.png"
                            alt="Caramel Frappe"
                            className="w-40 h-50 mx-auto transition-transform duration-500 hover:-translate-y-5 hover:scale-150 z-10 relative"
                        />
                    </div>
                    <div className="w-full text-center text-xl text-[#966A4C] py-2">
                        Caramel Frappe
                    </div>
                </div>

                <div className="">
                    <div className="setbackground relative w-64 h-64 rounded-xl overflow-visible">
                        <img
                            src="/images/Coffees_PNG/43825442-e992-42bc-adbc-baf3105ff3e8.png"
                            alt="Mocha Latte"
                            className="w-50 h-50 mx-auto transition-transform duration-500 hover:-translate-y-5 hover:scale-150 z-10 relative"
                        />
                    </div>
                    <div className="w-full text-center text-xl text-[#966A4C] py-2">
                        Mocha Latte
                    </div>
                </div>

                <div className="relative">
                    <div className="setbackground relative w-64 h-64 rounded-xl overflow-visible">
                        <img
                        src="/images/Coffees_PNG/39711e07-1b04-489b-9961-7b470320e8f8.png"
                        alt="Vanilla Iced Coffee"
                        className="w-50 h-50 mx-auto transition-transform duration-500 hover:-translate-y-5 hover:scale-150 z-10 relative"
                        />
                    </div>
                    <div className="w-full text-center text-xl text-[#966A4C] py-2">
                        Vanilla Iced Coffee
                    </div>
                </div>

            </div>
        </div>

      {/* Decorative image at bottom */}
      {/* <img src="/images/bean_border-1.png" alt="" className="absolute bottom-0 left-0 z-0" /> */}
    </div>
  );
}
