import React from "react";

function Hero() {
  return (
    <div className="flex">
      <div className="side-tags flex justify-center">
        <div className="flex gap-8 justify-center">
          <div>#Bar</div>
          <div>#Gericht</div>
        </div>
      </div>
      <div className="main-hero flex-1"></div>
    </div>
  );
}

export default Hero;
