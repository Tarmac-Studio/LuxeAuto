import React from "react";
import cryptoImage from "../../assets/About-Us/Crypto-11.png";
import carHero from "../../assets/About-Us/Group 9.png";
import luxeAutosValue from "../../assets/About-Us/Frame 33.png";
import valueBg_Img from "../../assets/About-Us/Group 17.png";
import journey_Img from "../../assets/About-Us/Group 1000002164.png";
import explore_Img from "../../assets/About-Us/Frame 6.png";

const Crypto: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black text-light">
      <div className="relative w-full h-[900px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex items-start justify-center">
        <p className="mt-9 absolute tracking-widest top-[40px] sm:top-[50px] md:top-[60px] left-0 w-full px-6 sm:px-10 md:px-[100px] lg:px-[120px] text-sm sm:text-base md:text-lg lg:text-[18px] text-light font-light leading-relaxed text-left">
          At LuxeAutoChain, we redefine the automotive experience by seamlessly
          integrating the world of luxury cars with cutting-edge blockchain
          technology. Our passion for excellence drives us to curate an
          unparalleled collection of the finest automobiles, ensuring that every
          vehicle in our inventory is a testament to both opulence and
          performance.
        </p>
        <div className="relative">
          <img
            src={cryptoImage}
            alt="Crypto"
            className="w-[600px] sm:w-[700px] md:w-[800px] lg:w-[870px] max-w-none relative left-[-100px] sm:left-[-180px] md:left-[-220px] lg:left-[-240px] top-[-500px] sm:top-[-360px] md:top-[-410px] lg:top-[-445px]"
          />
        </div>
      </div>

      {/* OUR MISSION Section */}
      <div className="flex pb-[50px] z-10 sm:-mt-[140px] md:-mt-[180px] lg:-mt-[200px] lg:flex-row items-center justify-center px-6 sm:px-10 gap-8 lg:gap-16 mb-8">
        <div className="max-w-xl text-left">
          <p className="uppercase text-xs tracking-widest text-primary mb-2">
            Elevating Expectations. Redefining Luxury
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient-bold mb-4">
            OUR MISSION
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-light">
            At the core of LuxeAuto is a mission to exceed expectations and
            redefine the essence of luxury in the automotive industry. We
            believe that the journey to acquiring a luxury car should be as
            exceptional as the vehicles themselves.
          </p>
        </div>

        <div className="-mt-15 md:-mt-12 lg:-mt-14">
          <div className="relative w-[500px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-[50px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
            <img
              className="absolute inset-0 object-cover"
              src={carHero}
              alt="Luxury SUV"
            />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-30">
        <img
          src={valueBg_Img}
          alt="Value Background"
          className="w-[1000px] sm:w-[2400px] md:w-[2000px] lg:w-[1000px] object-contain"
        />

        <img
          src={luxeAutosValue}
          alt="Luxe Autos Value"
          className="absolute w-[1000px] sm:w-[2400px] md:w-[2000px] lg:w-[1000px] object-contain object-contain z-10 opacity-50"
        />
      </div>
      <div className="relative flex items-center justify-center mb-10">
        <img src={journey_Img} alt="Journey" />
      </div>
      <div className="flex items-center justify-center mb-15">
        <img src={explore_Img} alt="Explore" />
      </div>
    </div>
  );
};

export default Crypto;
