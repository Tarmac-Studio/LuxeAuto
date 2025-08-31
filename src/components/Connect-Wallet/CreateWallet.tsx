const CreateWallet = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 mb-12 sm:mb-20 lg:mb-32">
      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gradient-bold mb-4 sm:mb-6 mt-10 sm:mt-16">
            Create New Wallet
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
            Connect with Excellence. Get in touch with LuxeAutoChain and
            experience the epitome of luxury and innovation. Your dream car
            journey awaits – let’s make it a reality together.
          </p>

          <div className="mt-6 space-y-5 max-w-md">
            <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
              <input
                type="text"
                placeholder="Message"
                className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#B808F6] to-[#FF7712] text-white font-medium hover:opacity-90 transition">
              Create Wallet
            </button>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gradient-bold mb-4 sm:mb-6 mt-10 sm:mt-16">
            Use Existing Wallet
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
            Already have a wallet? Connect it easily and continue your
            LuxeAutoChain journey without missing a step. Access your
            personalized dashboard and start experiencing luxury instantly.
          </p>
          {/* Example button */}
          <div className="mt-6">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#B808F6] to-[#FF7712] text-white font-medium hover:opacity-90 transition">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWallet;
