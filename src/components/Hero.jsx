import React,{useContext} from "react";
import { ContextProvider } from "../App";

function Hero() {
  const { isDesktop, setIsDesktop } = useContext(ContextProvider);
  return (
    <div className="flex relative pt-8">
      <div className=" cursor-pointer scroller absolute flex flex-col items-center -bottom-[10rem] md:-bottom-16 right-4 text-center">
        <img src="/images/scroll.png" alt="" />
        <div className="text-primary-color uppercase">Scroll</div>
      </div>
      <div className="flex mx-auto w-[90%] md:w-[85%] gap-32">
      {isDesktop && <div className="side-tags flex justify-center">
          <div className="flex flex-col gap-8 justify-center text-[white]">
            <div className="writing-mode-vertical">#Bar</div>
            <div className="writing-mode-vertical">#Gericht</div>
          </div>
        </div>}
        <div className="main-hero h-[100vh] flex-1 flex flex-col md:flex-row items-center gap-32">
          <div>
            <div className="font-comorant text-[1.25rem] text-[white]">Chase the new flavour</div>
            <img src="/images/Spoon.png" className="w-[10%] py-2" alt="Spoon" />
            <div className="font-comorant text-[3rem] text-primary-color font-bold capitalize">
              The key to fine dining
            </div>
            <p className="py-8">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </p>
            <button className="py-2 px-6 text-[black] bg-primary-color hover:bg-[white] duration-300">
              Explore Now
            </button>
          </div>
          <div>
            <img
              src="/images/Hero img.png"
              className="max-h-[100%]"
              alt="Hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
