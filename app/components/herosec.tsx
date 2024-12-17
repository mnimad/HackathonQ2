import React from 'react';

const HeroSec = () => {
  return (
    <section className="relative bg-[#f3f2f8]">
      {/* Container */}
      <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <p className={` text-[#FB2E86] m-0 font-bold `}>
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <a
            href="#"
            className={` bg-[#FB2E86] text-[#ECF0F1] border-2 border-[#FB2E86] tracking-[0.020em] font-normal cursor-pointer flex items-center justify-center w-[163px] h-[50px] text-[17px] leading-[19.92px] text-left`}
            >
            Shop Now
          </a>
        </div>

        {/* Right Content (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/Herosection/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png" 
              alt="Furniture Chair"
              className="max-w-full lg:max-w-lg rounded-md"
            />
            {/* 50% off badge */}
            <div className="absolute top-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              50% off
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
