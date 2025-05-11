import { FaPlay } from "react-icons/fa";
import img10 from "../../assets/img-10.jpg";

const FreeShippingVid = () => {
  return (
    <div className="w-full mt-10">
      {/* Centered Image with Equal Side Margins */}
      <div className="relative mx-[120px] h-[600px] overflow-hidden border border-black">
        <img
          src={img10}
          alt="Video Thumbnail"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-md">
            <FaPlay className="text-black text-xl" />
          </div>
        </div>
      </div>

      {/* Seamless Moving Banner — no gap above, full width */}
      <div className="w-full bg-black text-white text-[26px] font-semibold py-8 overflow-hidden relative">
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {Array(10).fill(
            <>
              <span>• Free shipping</span>
              <span>• 3 years warranty</span>
              <span>• Secure payment</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeShippingVid;
