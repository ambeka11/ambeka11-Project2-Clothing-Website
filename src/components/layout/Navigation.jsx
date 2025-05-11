import { FaSuitcase } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="relative px-28 tems-center justify-between">
      <nav className="text-black w-full flex justify-between items-center gap-2 pt-8 pb-4">
        <ul className="p-2 m-0 list-none flex gap-10">
          <li>
            <a
              href="/"
              className="text-inherit h-[100%] no-underline hover:font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              className="text-inherit no-underline h-[100%] hover:font-bold"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="text-inherit no-underline h-[100%] hover:font-bold"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-inherit no-underline h-[100%] hover:font-bold"
            >
              Blogs
            </a>
          </li>
        </ul>
        <div>
          <a href="/" className="text-inherit no-underline font-serif text-4xl">
            AhaZ .
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <FaSuitcase />
          <h2>Add to Cart(0)</h2>
        </div>
      </nav>

      {/* Line that spans just the nav content */}
      <div className="absolute left-0 right-0 mx-12 mt-3 h-[1px] bg-gray-400 opacity-20" />
    </div>
  );
};

export default Navigation;
