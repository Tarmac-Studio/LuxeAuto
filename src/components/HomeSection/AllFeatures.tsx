import React from "react";
import GTR from "../../assets/Home/Group 5.png";
import partners from "../../assets/Home/Frame 24.png";
import luxuryCar from "../../assets/Home/Group 1000002165.png";

const AllFeatures: React.FC = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center gap-12">
      <div className="w-full flex justify-center mb-20 mt-15">
        <img
          src={GTR}
          alt="GTR"
          className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl object-contain"
        />
      </div>

      <div className="w-full flex justify-center mb-25">
        <img
          src={partners}
          alt="Our Partners"
          className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl object-contain"
        />
      </div>

      <div className="w-full flex justify-center">
        <img
          src={luxuryCar}
          alt="Luxury Car"
          className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl object-contain"
        />
      </div>
    </div>
  );
};

export default AllFeatures;
