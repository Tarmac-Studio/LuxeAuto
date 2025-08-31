import hiwHero from "../../assets/How-It-Works/about-luxeautos-bg.png";
import cryptoImage from "../../assets/How-It-Works/Crypto-14.png";

const HiwSection: React.FC = () => {
  return (
    <div className="relative w-full font-metropolis bg-none ">
      <div className="relative mt-15 w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={hiwHero}
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto h-full px-4 sm:px-6 md:px-10">
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0 min-w-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gradient-bold mb-4 truncate">
              How LUXEAUTOS works
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-relaxed text-light font-light break-words">
              Discover the seamless and innovative process that sets LuxeAuto
              apart. From browsing our curated collection to finalizing a secure
              blockchain-backed transaction, our platform is designed to
              redefine the luxury car buying and selling experience.
            </p>
          </div>

          <div className="hidden md:block flex-shrink-0 ml-6">
            <img
              src={cryptoImage}
              alt="Crypto"
              className="w-[200px] md:w-[260px] lg:w-[320px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiwSection;
