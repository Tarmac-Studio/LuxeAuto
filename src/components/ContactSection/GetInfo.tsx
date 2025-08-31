import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const GetInfo = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 mb-12 sm:mb-20 lg:mb-32">
      <p className="max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gradient-bold mb-4 sm:mb-6 mt-10 sm:mt-16">
        We’d love to hear from you
      </p>

      <p className="max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed">
        Connect with Excellence. Get in touch with LuxeAutoChain and experience
        the epitome of luxury and innovation. Your dream car journey awaits –
        let's make it a reality together.
      </p>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left form */}
        <div className="flex-[2] max-w-2xl space-y-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex-1 p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
              <input
                type="number"
                placeholder="Ticket ID"
                min="0"
                step="1"
                className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
            <input
              type="text"
              placeholder="Message"
              className="w-full rounded-[10px] bg-[rgb(30,31,41)] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* <div className="max-w-xl ml-4">
          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712] mb-4">
            <div className="flex items-center gap-4 rounded-[10px] bg-[rgb(30,31,41)] px-3 py-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gradient-bold font-semibold">Email</p>
                <p className="text-white underline">hello@luxeauto.com.au</p>
              </div>
            </div>
          </div>

          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712] mb-4">
            <div className="flex items-center gap-4 rounded-[10px] bg-[rgb(30,31,41)] px-3 py-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gradient-bold font-semibold">Call us</p>
                <p className="text-white underline">02 8319 3210</p>
              </div>
            </div>
          </div>

          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
            <div className="flex items-center gap-4 rounded-[10px] bg-[rgb(30,31,41)] px-3 py-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                <FaMessage className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gradient-bold font-semibold">Text</p>
                <p className="text-white underline">0437 871 436</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Right contact info */}
        <div className="flex-[1] space-y-4">
          {/* Email */}
          <div className="p-[0.5px] rounded-[8px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
            <div className="flex w-full items-center gap-3 rounded-[8px] bg-[rgb(30,31,41)] px-3 py-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gradient-bold text-sm font-medium">Email</p>
                <p className="text-white text-sm underline">
                  hello@luxeauto.com.au
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="p-[0.5px] rounded-[8px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
            <div className="flex items-center gap-3 rounded-[8px] bg-[rgb(30,31,41)] px-3 py-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <FaPhone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gradient-bold text-sm font-medium">
                  Call us
                </p>
                <p className="text-white text-sm underline">02 8319 3210</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="p-[0.5px] rounded-[8px] bg-gradient-to-r from-[#B808F6] to-[#FF7712]">
            <div className="flex items-center gap-3 rounded-[8px] bg-[rgb(30,31,41)] px-3 py-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <FaMessage className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gradient-bold text-sm font-medium">Text</p>
                <p className="text-white text-sm underline">0437 871 436</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInfo;
