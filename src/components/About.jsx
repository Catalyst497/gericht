import React from "react";

function About() {
  return (
    <div className="About-section relative mt-[15rem]">
      <div className="background ">
        <img src="/images/About-BG.png" alt="About-BG" />
      </div>
      <img
        src="/images/G.png"
        className="absolute z-[8] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] h-80"
        alt="G"
      />
      <div className="absolute inset-0 z-[9] flex justify-center items-center gap-16">
        <div className="text-end flex flex-col items-end">
          <div className="text-primary-color text-[2rem] font-comorant">About Us</div>
          <img src="/images/Spoon.png" className="w-[7%] " alt="" />
          <p className="py-6 max-w-[25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="py-2 px-6 text-[black] bg-primary-color hover:bg-[white] duration-300">
            Know more
          </button>
        </div>
        <img src="/images/Knife.png" className="h-[80%]" alt="Knife" />
        <div className="">
          <div className="text-primary-color text-[2rem] font-comorant">Our History</div>
          <img src="/images/Spoon.png" className="w-[7%] " alt="" />
          <p className="py-6 max-w-[25rem]">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className="py-2 px-6 text-[black] bg-primary-color hover:bg-[white] duration-300">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
