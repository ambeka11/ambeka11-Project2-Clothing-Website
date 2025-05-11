import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";
import img5 from "../../assets/img-5.jpg";
import { FaBagShopping } from "react-icons/fa6";

const NewIn = () => {
  return (
    <div className="w-full pt-8 pb-16">
      {/* Container aligned with HeroSection */}
      <div className="mx-14 md:px-20 font-sans text-black">
        {/* Heading & Filters aligned under social links */}
        <div className="flex flex-col md:flex-row md:items-start mt-10">
          {/* Left Title */}
          <div className="mb-6 md:mb-0 md:w-1/3 ml-[36px]">
            <h1 className="text-5xl font-semibold mb-4">New In</h1>
          </div>

          {/* Right Paragraph & Filters */}
          <div className="md:w-2/3">
            <p className="text-base text-gray-600 mb-4 md:ml-4 md:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              morbi cras augue egestas dictum habitasse.
            </p>
            <div className="flex gap-12 md:justify-start text-base font-semibold md:ml-4">
              <h3 className="cursor-pointer">Hoddies</h3>
              <h3 className="relative flex items-center gap-1">
                <span className="text-xl font-bold text-black">•</span>
                <span className="line-through text-black">Jeans & Shirts</span>
              </h3>
              <h3 className="cursor-pointer">T-Shirts</h3>
              <h3 className="cursor-pointer">Jackets</h3>
            </div>
          </div>
        </div>

        {/* Product Grid perfectly aligned with HeroSection images */}
        <div className="grid grid-cols-1 pl-[40px] md:grid-cols-3 gap-10 mt-14">
          {/* First Card */}
          <div className="border border-black flex flex-col justify-between h-[550px] p-4">
            <img
              src={img3}
              alt="AhaZ Shirt 1"
              className="w-full h-[450px] object-cover object-top mb-4"
            />
            <div className="flex justify-between text-sm font-medium">
              <p>AhaZ Shirts</p>
              <p>$199</p>
            </div>
          </div>

          {/* Center Card with Button */}
          <div className="relative h-[550px]">
            <img
              src={img4}
              alt="Model Shirt"
              className="w-full h-full object-cover object-top"
            />
            <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black rounded-full w-14 h-14 shadow-md bg-[#997652]">
              <FaBagShopping className="text-xl ml-[1.2rem] items-center" />
            </button>
          </div>

          {/* Third Card */}
          <div className="border border-black flex flex-col justify-between h-[550px] p-4">
            <img
              src={img5}
              alt="AhaZ Shirt 2"
              className="w-full h-[450px] object-cover mb-4"
            />
            <div className="flex justify-between text-sm font-medium">
              <p>AhaZ Shirts</p>
              <p>$199</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIn;
