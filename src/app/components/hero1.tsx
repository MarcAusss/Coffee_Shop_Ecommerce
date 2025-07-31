export default function LandingPageHero() {
    return (
        <div className="max-w-[95rem] pt-36 mx-auto">
            <div className=" mb-20 relative z-20">
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
            <div className="flex justify-between relative z-20 ">
                <div className="w-1/4">
                    <h2 className="border-b-2 py-3 text-lg border-[#dac2b1]">
                        Open 8am – 1pm Monday-Friday
                    </h2>
                    <h2 className="border-b-2 py-3 text-lg border-[#dac2b1]">
                        Riosa St. Tabaco City, Albay
                    </h2>
                    <div className="flex w-full justify-between items-center mt-7 ">
                        <div className="border-2 border-[#dac2b1] rounded-full w-14 h-14"></div>
                        <div className="border-2 border-[#dac2b1] rounded-full w-14 h-14"></div>
                        <div className="border-2 border-[#dac2b1] rounded-full w-14 h-14"></div>
                        <div className="border-2 border-[#dac2b1] rounded-full w-14 h-14"></div>
                        <div className="border-2 border-[#dac2b1] rounded-full w-14 h-14"></div>
                    </div>
                </div>
                <div className="w-2/4 relative z-20">
                    <h1 className="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, rerum, illum aspernatur quasi autem quas amet expedita quod ad sint cupiditate non quis rem tempora fuga nostrum at quisquam necessitatibus exercitationem cum voluptatibus totam! Culpa, blanditiis nulla repellat magni ullam exercitationem magnam facilis, 
                    </h1>

                    <button className="bg-[#966A4C] text-lg py-3 px-8 text-white mt-5 rounded-xl">Discover &nbsp; &#8595;</button>
                </div>
                
            </div>
            <img src="/images/left.png" alt="" className="imageBG_design absolute left-0 top-0" />
            <img src="/images/right.png" alt="" className="imageBG_design2 absolute right-0 top-0" />
        </div>
    );
}