import { FiArrowUpRight } from "react-icons/fi";
import img6 from "../../assets/img-6.jpg";
import img7 from "../../assets/img-7.jpg";

const FeaturedCollections = () => {
  return (
    <div className="max-w-[73rem] mx-auto mb-20 py-20 relative">
      {/* Heading Section */}
      <div className="mb-20">
        <h1 className="text-6xl font-semibold mb-4">Featured Collections</h1>
        <p className="max-w-3xl text-gray-600 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi
          cras augue egestas dictum nowu & habitasse. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Viverra morbi cras.
        </p>
      </div>

      {/* Collection Cards */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* T-Shirts (Left) */}
        <div className="flex-1 h-[600px] relative group">
          <img
            src={img6}
            alt="T-Shirts"
            className="w-[550px] h-[600px] object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 px-6 pb-8">
            <h2 className="text-2xl font-semibold text-black flex items-center gap-1">
              T-Shirts <FiArrowUpRight />
            </h2>
            <p className="border-t border-gray-400 mt-1 mb-1 w-full"></p>
          </div>
        </div>

        {/* Shirts (Right) */}
        <div className="relative border border-black self-center w-[450px]">
          <img
            src={img7}
            alt="Shirts"
            className="w-[450px] h-[450px] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 px-6 pb-4">
            <h2 className="text-2xl font-semibold pl-2 text-black flex items-center gap-1">
              Shirts <FiArrowUpRight />
            </h2>
            <p className="border-t border-gray-700 mt-1 mb-1 w-[80%]"></p>
          </div>
        </div>
      </div>

      {/* Divider (start preserved, right side pulled in 2rem) */}
      <div className="absolute left-1/2 transform -translate-x-[47%] w-[83.5rem] border-t border-black mt-24"></div>
    </div>
  );
};

export default FeaturedCollections;
