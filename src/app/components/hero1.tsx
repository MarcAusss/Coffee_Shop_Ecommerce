export default function LandingPageHero() {
    return (
        <div className="max-w-[95rem] mx-auto">
        <div className="py-20 mt-20">
            <h2 className="text-3xl ">
                <span className="tracking-widest">4511</span>
                Café
            </h2>
            <h1 className="text-[7rem] leading-none font-extrabold">
                <span className="">- </span>
                Kulture 
                <span className="text-[#966A4C]">&nbsp;Hub</span>
            </h1>
        </div>
        <div className="flex justify-between">
            <div className="w-1/4">
                <h2 className="border-b-2 py-3 text-lg border-gray-300">
                    Open 8am – 1pm Monday-Friday
                </h2>
                <h2 className="border-b-2 py-3 text-lg border-gray-300">
                    Riosa St. Tabaco City, Albay
                </h2>
                <div className="flex w-full justify-between items-center mt-7">
                    <div className="border-2 border-gray-300 rounded-full w-14 h-14"></div>
                    <div className="border-2 border-gray-300 rounded-full w-14 h-14"></div>
                    <div className="border-2 border-gray-300 rounded-full w-14 h-14"></div>
                    <div className="border-2 border-gray-300 rounded-full w-14 h-14"></div>
                    <div className="border-2 border-gray-300 rounded-full w-14 h-14"></div>
                </div>
            </div>
            <div className="w-2/4">
                <h1 className="text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, rerum, illum aspernatur quasi autem quas amet expedita quod ad sint cupiditate non quis rem tempora fuga nostrum at quisquam necessitatibus exercitationem cum voluptatibus totam! Culpa, blanditiis nulla repellat magni ullam exercitationem magnam facilis, 
                </h1>

                <button className="bg-[#966A4C] text-lg py-3 px-8 text-white mt-5 rounded-xl">Discover &nbsp; &#8595;</button>
            </div>
        </div>
        </div>
    );
}