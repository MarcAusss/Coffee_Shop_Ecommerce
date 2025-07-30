import Image from "next/image";
import NavigationBar from "./components/nav";
import LandingPageHero from "./components/hero1";
import ProductShowcase from "./components/productShowcase";
import NewMenu from "./components/newMenu";
import MessageSection from "./components/message";
import SpecialCoffee from "./components/Specials";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 w-full border-b-2 bg-white  border-gray-300 z-[500000]">
        <NavigationBar/>
      </div>

      <div className="mt-16">
        <LandingPageHero/>
      </div>

      <div className="mt-40 mb-20">
        <ProductShowcase/>
      </div>

      <div className="">
        <NewMenu/>
      </div>

      <div className="">
        <SpecialCoffee/>
      </div>

      <div className="h-20 mt-20 relative z-50">
        <MessageSection/>
      </div>
    </main>
  );
}
