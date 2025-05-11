import React from "react";
import img8 from "../../assets/img-8.jpg";
import img9 from "../../assets/img-9.jpg";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfafa] text-black font-sans">
      {/* Top Content */}
      <div className="flex flex-col mx-14 md:px-20 gap-10">
        {/* Heading */}
        <div className="ml-12">
          <h1 className="text-5xl font-bold leading-[1.2] tracking-tight w-[100%]">
            AhaZ was created to inspire you to be the best version <br />
            of yourself. Our goal is to bring you clothes that will <br />{" "}
            blanket you in quality, design, and comfort.
          </h1>
        </div>

        {/* Paragraphs */}
        <div className="flex w-[100%] flex-col md:flex-row gap-[112px] ml-12 mt-4">
          <p className="text-sm text-gray-700 w-[40%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            morbi cras augue egestas dictum habitasse. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Viverra morbi cras augue egestas
            dictum habitasse.
          </p>
          <p className="text-sm text-gray-700 w-[40%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            morbi cras augue egestas dictum habitasse. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Viverra morbi cras augue egestas
            dictum habitasse.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex h-full w-full md:flex-row flex-col gap-10 mt-10 ml-12">
          {/* Left Image */}
          <div className="w-[550px] h-[550px] border border-black">
            <img
              src={img9}
              alt="Model 1"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>

          {/* Right Image + Text */}
          <div className="w-[580px] h-[550px] flex flex-col justify-between">
            <div className="h-[380px] border border-black">
              <img
                src={img8}
                alt="Model 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 ml-6 w-[80%] h-[170px] text-sm text-gray-700">
              <p className="mb-4 mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                morbi cras augue egestas dictum habitasse. Lorem ipsum dolor sit
                amet solar
              </p>
              <button className="bg-black text-white mt-2 px-6 py-3 rounded-full text-sm font-medium w-fit">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-10 md:px-20 mt-24 mb-20">
        <div className="ml-[40px] mr-[40px] border-t border-black"></div>
      </div>
    </div>
  );
};

export default AboutUs;
