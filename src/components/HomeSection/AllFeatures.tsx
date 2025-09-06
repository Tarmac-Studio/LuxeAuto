import React from "react";
import { Link } from "react-router-dom";
// import GTR from "../../assets/Home/Group 5.png";
import GTR from "../../assets/Home/FORD.png";
import partners from "../../assets/Home/Frame 24.png";
import luxuryCar from "../../assets/Home/pexels-helmy-zairy-15253379 1.png";

const AllFeatures: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20 py-16">
      {/* ========== GTR Section ========== */}
      <div className="gradient-cars-border">
        <div className="bg-[#091118] text-white w-full flex flex-col md:flex-row items-center justify-center gap-12 p-8 max-w-6xl mx-auto">
          {/* Left Side - Car Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={GTR}
              alt="Ford Mustang GTR"
              className="w-full object-cover"
            />
          </div>

          {/* Right Side - Car Details */}
          <div className="flex-1 max-w-xl space-y-6">
            {/* Price and Condition */}
            <div className="flex justify-between text-sm sm:text-base">
              <div>
                <p className="text-purple-400 uppercase">Starting Price</p>
                <p className="font-bold text-xl">$5,799.99</p>
              </div>
              <div className="text-right">
                <p className="text-red-400 uppercase">Condition</p>
                <p className="font-bold">NEW</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>

            {/* Car Name */}
            <div className="flex flex-col items-center text-center leading-tight">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                FORD
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mt-2">
                MUSTANG GTR
              </h1>
            </div>

            {/* Button */}
            <div className="flex flex-wrap items-center justify-center md:justify-center gap-3 sm:gap-5 md:gap-7 mt-6 w-full">
              <Link
                to="/"
                className="gradient-border uppercase cursor-pointer px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-4 md:text-lg lg:px-12 lg:py-4 lg:text-xl font-bold transition duration-300 text-center"
              >
                <span className="text-gradient-soft block">View Datails</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Partners Section ========== */}
      <div className="w-full flex justify-center mb-25">
        <img
          src={partners}
          alt="Our Partners"
          className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl object-contain"
        />
      </div>

      {/* ========== Luxury Car Section ========== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <div className="flex-1 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Sell Your Luxury Cars with{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              LUXEAUTO
            </span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-lg">
            Are you a luxury car dealer or an individual looking to showcase and
            sell exquisite automobiles on a platform that values craftsmanship
            and innovation? LuxeAutoChain welcomes passionate sellers who share
            our commitment to delivering the epitome of automotive excellence.
            Join our exclusive network and elevate the way you present and sell
            luxury cars.
          </p>
          {/* Button */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 md:gap-7 mt-6 w-full">
            <Link
              to="/"
              className="gradient-border uppercase cursor-pointer px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-4 md:text-lg lg:px-12 lg:py-4 lg:text-xl font-bold transition duration-300 text-center"
            >
              <span className="text-gradient-soft block">Get Started</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Image with tape effect */}
        <div className="flex-1 flex justify-center relative">
          {/* Polaroid frame */}
          <div className="bg-gray-200 p-4 rounded-sm rotate-3 shadow-lg relative">
            <img
              src={luxuryCar}
              alt="Luxury Car"
              className="w-full h-auto object-cover"
            />

            {/* Tape - top left */}
            <div className="absolute -top-4 -left-4 w-20 h-6 bg-yellow-600 rotate-[-20deg] opacity-80"></div>

            {/* Tape - bottom right */}
            <div className="absolute -bottom-4 -right-4 w-20 h-6 bg-yellow-600 rotate-[20deg] opacity-80"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFeatures;
