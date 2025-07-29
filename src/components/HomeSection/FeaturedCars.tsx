import React from "react";
import { cars } from "../../lib/homeLib";

interface CarCardProps {
  subtitle: string;
  image: string;
  title: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, title, subtitle, price }) => (
  <div className="relative group">
    <div className="gradient-cars-border p-2">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-left">
        <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
        <p className="text-xs text-gradient-bold font-light">{subtitle}</p>
        <p className="text-white font-bold text-xl">{price}</p>
      </div>
    </div>
  </div>
);

const FeaturedCars: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-6xl font-black text-left text-light tracking-wider mb-4 drop-shadow-2xl">
            FEATURED CARS
          </h1>
          {/* <div className="w-32 h-1 bg-yellow-400 mx-auto"></div> */}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
