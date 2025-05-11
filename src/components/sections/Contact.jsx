import { FiArrowUpRight } from "react-icons/fi";
import contactImg from "../../assets/img-1.jpg";

const Contact = () => {
  return (
    <div className="w-full bg-white">
      {/* Main Grid */}
      <div className="flex flex-col lg:flex-row items-center px-14 lg:px-40 py-16 gap-4">
        {/* Left Section */}
        <div className="flex-1 ml-10 flex flex-col justify-center text-center lg:text-left">
          <h5 className="text-sm font-medium text-black mb-2 flex items-center justify-center lg:justify-start">
            <span className="text-black text-xl mr-2">•</span>Want some news
          </h5>
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-700 text-base mb-8 leading-relaxed max-w-[24rem] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            morbi cras augue egestas dictum habitasse. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <div className="border-b border-gray-400 flex items-center justify-center lg:justify-start max-w-xs mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow outline-none bg-transparent py-2 text-sm text-gray-800 placeholder-gray-500"
            />
            <FiArrowUpRight className="text-black text-xl" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={contactImg}
            alt="Contact"
            className="border w-[75%] border-black max-h-[540px] object-cover"
          />
        </div>
      </div>

      {/* Moving Banner with Arrow in Center */}
      <div className="w-full bg-black text-white text-[26px] font-semibold py-8 overflow-hidden relative">
        {/* Animated Text */}
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {Array(10).fill(
            <span key={Math.random()}>• Follow us on Instagram</span>
          )}
        </div>

        {/* Centered Arrow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <FiArrowUpRight className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
