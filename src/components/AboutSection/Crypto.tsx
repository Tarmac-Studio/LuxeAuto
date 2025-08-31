import React from "react";
import cryptoImage from "../../assets/About-Us/Crypto-11.png";
import carHero from "../../assets/About-Us/Group 9.png";
import luxeAutosValue from "../../assets/About-Us/Frame 33.png";
import valueBg_Img from "../../assets/About-Us/Group 17.png";
import journey_Img from "../../assets/About-Us/Group 1000002164.png";
import explore_Img from "../../assets/About-Us/Frame 6.png";

const Crypto: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden text-light">
      <div className="relative w-full flex items-start justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <img
          src={cryptoImage}
          alt="Crypto"
          className="absolute left-0 w-full sm:w-[500px] md:w-[650px] lg:w-[870px] max-w-none top-[-300px] sm:top-[-240px] md:top-[-310px] lg:top-[-410px]"
        />

        <p className="absolute top-[20px] sm:top-[40px] md:top-[60px] left-0 w-full px-4 sm:px-8 md:px-[80px] lg:px-[120px] text-xs sm:text-sm md:text-base lg:text-[18px] text-light font-light leading-relaxed text-left">
          At LuxeAutoChain, we redefine the automotive experience by seamlessly
          integrating the world of luxury cars with cutting-edge blockchain
          technology. Our passion for excellence drives us to curate an
          unparalleled collection of the finest automobiles, ensuring that every
          vehicle in our inventory is a testament to both opulence and
          performance.
        </p>
      </div>

      {/* === OUR MISSION SECTION === */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16 mt-16 sm:mt-20 md:mt-28">
        <div className="max-w-xl text-left">
          <p className="uppercase text-[10px] sm:text-xs tracking-widest text-primary mb-2">
            Elevating Expectations. Redefining Luxury
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gradient-bold mb-4">
            OUR MISSION
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed text-light">
            At the core of LuxeAuto is a mission to exceed expectations and
            redefine the essence of luxury in the automotive industry. We
            believe that the journey to acquiring a luxury car should be as
            exceptional as the vehicles themselves.
          </p>
        </div>

        <div className="mt-6 lg:mt-0">
          <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-[200px] sm:h-[260px] md:h-[340px] lg:h-[420px]">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md"
              src={carHero}
              alt="Luxury SUV"
            />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-20 sm:mt-28 md:mt-32">
        <img
          src={valueBg_Img}
          alt="Value Background"
          className="w-[1000px] sm:w-[1600px] md:w-[1800px] lg:w-[1000px] object-contain"
        />

        <img
          src={luxeAutosValue}
          alt="Luxe Autos Value"
          className="absolute w-[1000px] sm:w-[1600px] md:w-[1800px] lg:w-[1000px] object-contain z-10 opacity-50"
        />
      </div>

      <div className="relative flex items-center justify-center mt-10 mb-10 px-4">
        <img
          src={journey_Img}
          alt="Journey"
          className="w-full sm:w-[90%] md:w-[80%] lg:w-auto"
        />
      </div>

      <div className="flex items-center justify-center mb-12 px-4">
        <img
          src={explore_Img}
          alt="Explore"
          className="w-full sm:w-[90%] md:w-[80%] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Crypto;
