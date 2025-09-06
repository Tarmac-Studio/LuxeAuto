import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div
        role="img"
        className="min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${assets.Background})` }}
      >
        <div className="max-w-5xl text-center z-10 relative px-4 sm:px-6 md:px-10">
          <div className="max-w-5xl w-full text-center z-10 relative px-4 sm:px-6 md:px-10">
            <p className="text-light uppercase text-xs  font-normal mb-2">
              INTRODUCING <span className="text-gradient-soft"> LUXE AUTO</span>
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-[52px] lg:text-[62px] text-gradient-bold font-black leading-snug sm:leading-tight md:leading-[72px]">
              Discover the Epitome of Luxury Cars.
            </h1>

            <p className="text-lg sm:text-xl md:text-[22px] md:py-8 py-3 text-light font-light">
              Explore our exquisite collection of the world's finest automobiles
            </p>

            {/* Button */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 md:gap-7 mt-6 w-full">
              <Link
                to="/"
                className="gradient-border uppercase cursor-pointer px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-4 md:text-lg lg:px-12 lg:py-4 lg:text-xl font-bold transition duration-300 text-center"
              >
                <span className="text-gradient-soft block">Explore Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
