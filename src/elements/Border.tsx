import arrow_down from "../assets/How-It-Works/arrow_down.png";

interface BorderProps {
  number: number | string;
  text: string;
  className?: string;
}

const Border = ({ number, text, className }: BorderProps) => {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div className="flex gap-2">
        {/* Number Box */}
        <div className="flex items-center justify-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px] h-9 sm:h-10 md:h-11 lg:h-12 border border-gray-400 rounded-md bg-gray-100 text-gray-900 font-medium">
          <span className="text-xs sm:text-sm md:text-base">{number}</span>
        </div>

        {/* Text Box */}
        <div className="flex-1 h-9 sm:h-10 md:h-11 lg:h-12 border border-gray-400 rounded-md bg-gray-100">
          <div className="h-full px-2 sm:px-3 md:px-4 flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-900">
            {text}
          </div>
        </div>

        {/* Button with Arrow */}
        <button
          type="button"
          className="flex items-center justify-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px] h-9 sm:h-10 md:h-11 lg:h-12 border border-gray-400 rounded-md bg-gray-100"
          aria-label="Toggle"
        >
          <img
            src={arrow_down}
            alt="arrow_down"
            className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default Border;

// import arrow_down from "../../assets/How-It-Works/arrow_down.png";

// const Border = () => {
//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <div className="flex gap-2">
//         <div
//           className="flex items-center justify-center min-w-[70px] px-3 h-11 sm:h-12
//              border border-gray-400 rounded-md bg-gray-100 text-gray-900 font-medium"
//         >
//           <span className="text-sm sm:text-base">1</span>
//         </div>

//         <div className="flex-1 h-11 sm:h-12 border border-gray-400 rounded-md bg-gray-100">
//           <div className="h-full px-4 flex items-center text-sm sm:text-base text-gray-900">
//             Explore our Curated Collection
//           </div>
//         </div>

//         <button
//           type="button"
//           className="flex items-center justify-center min-w-[42px] px-3 h-11 sm:h-12
//                  border border-gray-400 rounded-md bg-gray-100"
//           aria-label="Toggle"
//         >
//           <img
//             src={arrow_down}
//             alt="arrow_down"
//             className="w-12 h-12 object-contain"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Border;
