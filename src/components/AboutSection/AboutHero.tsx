import aboutHero from "../../assets/About-Us/about-luxeautos-bg.png";

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
    </div>
  );
};

export default AboutSection;
