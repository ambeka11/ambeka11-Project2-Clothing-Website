import { GrFacebookOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#fcfcfc] text-black pt-14 pl-2">
      {/* Scrolling Instagram banner */}
      {/* <div className="relative overflow-hidden bg-black text-white text-2xl font-semibold">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-6">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              ● Follow us on Instagram
              <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-lg">
                ↗
              </div>
            </span>
          ))}
        </div>
      </div> */}

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 py-16">
        <div className="col-span-1 flex flex-col items-start text-center md:text-left">
          <h2 className="text-3xl font-signature italic mb-2">
            AhaZ<span className="text-lg">.</span>
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Lorem ipsum consectetur dolor elit.
          </p>
          <div className="flex gap-4">
            <div className="bg-white shadow-md rounded-full p-2">
              <GrFacebookOption />
            </div>
            <div className="bg-white shadow-md rounded-full p-2">
              <FaGithub />
            </div>
            <div className="bg-white shadow-md rounded-full p-2">
              <CiInstagram />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-sm text-gray-700">767 5th Street,</p>
          <p className="text-sm text-gray-700">21st Floor, New York, USA</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>About us</li>
            <li className="underline font-medium">Our Sports</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Privacy Policy</li>
            <li>Terms of Conditions</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-8">
        ©AhaZ 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
