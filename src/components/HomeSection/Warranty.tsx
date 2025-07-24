import React from "react";
import { features } from "../../lib/homeLib";

const Warranty: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-4 2xl:px-30 py-10 flex flex-wrap justify-between items-start gap-y-8 text-light">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full sm:w-[48%] lg:w-[30%] text-center sm:text-left"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-full h-full object-contain mx-auto sm:mx-0"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-sm sm:text-base  sm:mt-1 mt-0">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-[15px] font-medium">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Warranty;
