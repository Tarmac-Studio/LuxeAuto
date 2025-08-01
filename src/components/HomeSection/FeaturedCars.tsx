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
      <div className="relative z-10 container max-w-6xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-6xl leading-18 font-black text-left text-light drop-shadow-2xl">
            <span className="gradient-underline">FEATURED</span> CARS
          </h1>
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
    </div>
  );
};

export default FeaturedCars;
