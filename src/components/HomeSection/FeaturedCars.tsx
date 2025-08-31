import React from "react";
import rightCrypto from "../../assets/Home/Crypto-15.png";
import { cars } from "../../lib/homeLib";

interface CarCardProps {
  subtitle: string;
  image: string;
  title: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, title, subtitle, price }) => (
  <div className="relative group">
    <div className="gradient-cars-border p-2 rounded-xl">
      {/* Image wrapper */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text content */}
      <div className="p-4 text-left flex flex-col">
        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm text-gradient-bold font-light mb-2 break-words">
          {subtitle}
        </p>
        <p className="text-white font-bold text-sm sm:text-base md:text-lg mt-auto">
          {price}
        </p>
      </div>
    </div>
  </div>
);

const FeaturedCars: React.FC = () => {
  return (
    <div className="min-h-screen inset-0 relative overflow-hidden">
      {/* Right Crypto Image */}
      <div className="absolute top-0 right-0 z-10 hidden md:block">
        <img
          src={rightCrypto}
          alt="Crypto Design"
          className="w-[12rem] sm:w-[18rem] md:w-[26rem] lg:w-[34rem] xl:w-[42rem] 2xl:w-[52rem] object-contain"
        />
      </div>

      {/* Space Background */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      /> */}

      {/* Animated Stars */}
      {/* <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div> */}

      {/* Galaxy/Nebula Effect */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 opacity-80">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 py-22">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-left text-light tracking-wider mb-4 drop-shadow-2xl">
            FEATURED CARS
          </h1>

          {/* Responsive underline */}
          <div className="h-1 bg-gradient-bold w-20 sm:w-28 md:w-36 lg:w-48 2xl:w-64 rounded-full"></div>
        </div>

        {/* <div className="w-full flex justify-end mb-12 pr-6 sm:pr-10 md:pr-16 lg:pr-20">
          <img
            src={rightCrypto}
            alt="Crypto Design"
            className="w-80 sm:w-64 small screens: 16rem md:w-80 medium screens: 20rem lg:w-[28rem] large screens: custom 28rem xl:w-[32rem] extra large screens: custom 32rem object-contain"
          />
        </div> */}

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              image={car.image}
              subtitle={car.subtitle}
              title={car.title}
              price={car.price}
            />
          ))}
        </div>
      </div>

      {/* Additional Space Elements */}
      {/* <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30">
        <div
          className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-400 blur-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="absolute top-1/2 left-10 w-32 h-32 opacity-40">
        <div
          className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div> */}
    </div>
  );
};

export default FeaturedCars;
