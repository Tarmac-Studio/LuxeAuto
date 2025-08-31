import aboutHero from "../../assets/About-Us/about-luxeautos-bg.png";

const AboutSection: React.FC = () => {
  return (
    <div className="w-full overflow-hidden font-metropolis">
      <div className="relative w-full flex items-center justify-center min-h-[220px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[520px]">
        <img
          src={aboutHero}
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-5xl w-full text-center px-4 sm:px-6 md:px-10 lg:px-12 mt-10 sm:mt-16 md:mt-24">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient-bold font-extrabold leading-snug sm:leading-tight md:leading-snug max-w-4xl mx-auto drop-shadow-md">
            About LUXEAUTOS
          </h1>

          <p className="text-xs sm:text-sm md:text-lg lg:text-xl py-2 sm:py-3 md:py-4 text-gray-200 font-light max-w-2xl mx-auto px-2 sm:px-0">
            A high-end collection of the world’s finest automobiles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
