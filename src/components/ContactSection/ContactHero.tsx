import contactHero from "../../assets/Contact-Us/Group 1.png";

const ContactHero: React.FC = () => {
  return (
    <div className="w-full overflow-hidden font-metropolis">
      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center h-[180px] sm:h-[280px] md:h-[380px] lg:h-[500px]">
        <img
          src={contactHero}
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="max-w-5xl w-full text-center z-10 relative px-3 sm:px-6 md:px-10 mt-6 sm:mt-12 md:mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-gradient-bold font-black leading-tight sm:leading-[48px] md:leading-[60px] max-w-4xl w-full">
            CONTACT US
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
