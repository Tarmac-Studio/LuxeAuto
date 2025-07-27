import aboutHero from "../assets/About-Us/about-luxeautos-bg.png";
import cryptoImage from "../assets/About-Us/Crypto-11.png";

const AboutSection: React.FC = () => {
  return (
    <div className="w-full overflow-hidden font-metropolis">
      {/* Hero Section */}
      <div
        className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="max-w-5xl w-full text-center z-10 relative px-4 sm:px-6 md:px-10 mt-10 sm:mt-16 md:mt-24">
          <h1 className="text-4xl sm:text-5xl md:text-[48px] lg:text-[60px] text-gradient-bold font-black leading-tight sm:leading-[56px] md:leading-[64px] max-w-4xl w-full">
            About LUXEAUTOS
          </h1>

          <p className="text-base sm:text-lg md:text-[18px] py-3 sm:py-4 text-light font-light">
            A high-end collections of the world’s finest automobiles.
          </p>
        </div>
      </div>

      {/* Crypto Image Overlap Section */}
      <div className="relative w-full h-[700px] sm:h-[900px] md:h-[1100px] lg:h-[1300px] overflow-hidden flex items-center justify-center">
        <img
          src={cryptoImage}
          alt="Crypto"
          className="w-[870px] max-w-none relative left-[-240px] top-[-445px]"
        />
        {/* <p>
          At LuxeAutoChain, we redefine the automotive experience by seamlessly
          integrating the world of luxury cars with cutting-edge blockchain
          technology. Our passion for excellence drives us to curate an
          unparalleled collection of the finest automobiles, ensuring that every
          vehicle in our inventory is a testament to both opulence and
          performance.
        </p> */}
      </div>
    </div>
  );
};

export default AboutSection;
