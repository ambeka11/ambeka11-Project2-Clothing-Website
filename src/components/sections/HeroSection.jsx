import { IoMdArrowDown } from "react-icons/io";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfafa] text-black font-sans flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row mx-14 md:px-20 pt-24 gap-10 items-stretch">
        {/* Left Text Block */}
        <div className="md:w-1/3 ml-12 mt-12 flex flex-col justify-between">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-[1.2] tracking-wide">
              Elegance is <br />
              good taste, <br />
              plus a dash <br />
              of daring.
            </h1>

            <button className="bg-black text-white px-5 py-5 rounded-full text-[12px] font-medium w-fit">
              Now – Shop Now – Shop
            </button>
          </div>

          {/* Arrow aligned to bottom, matching center height */}
          <div className="flex items-end h-full mt-10">
            <IoMdArrowDown className="text-3xl ml-12 animate-bounce" />
          </div>
        </div>

        {/* Center Image with Text */}
        <div className="w-1/3 h-[650px] flex flex-col justify-between">
          <div className="h-[500px] border border-black">
            <img
              src={img1}
              alt="Model Shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-6 pr-2 text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            morbi cras augue egestas dictum habitasse.
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/3 flex flex-col justify-between h-[650px] ">
          <div className="flex-1 h-[600px] border border-black">
            <img
              src={img2}
              alt="Full Outfit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-10 md:px-20 mt-20 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 ml-24 border-t mt-3 border-black"></div>
          <div className="flex items-center mx-4 gap-16 px-8 text-sm font-semibold text-gray-700">
            <p>
              <span className="font-bold text-xl pr-1">•</span>facebook
            </p>
            <p>
              <span className="font-bold text-xl pr-1">•</span>instagram
            </p>
            <p>
              <span className="font-bold text-xl pr-1">•</span>twitter
            </p>
          </div>
          <div className="flex-1 ml-8 mr-14 border-t mt-3 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
