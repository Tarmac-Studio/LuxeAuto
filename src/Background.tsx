// Background.tsx
import React from "react";
import { assets } from "./assets/asset";

const Background: React.FC = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-3]"
        style={{ backgroundImage: `url(${assets.Back})` }}
      />
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-2] pointer-events-none"
        style={{ backgroundImage: `url(${assets.Effect})` }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]" />
    </>
  );
};

export default Background;
