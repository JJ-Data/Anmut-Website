import { GoChevronRight } from "react-icons/go";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div
        id="informational-banner"
        tabIndex="-1"
        className="lg:px-32 z-50 flex flex-col justify-between w-full p-4 md:flex-row bg-slate-800"
      >
        <div className="mb-4 md:mb-0 md:me-4">
          <h2 className="mb-1 text-2xl font-semibold text-[#9E9E9E] dark:text-white">
            Discover Our Amazing Property Selection
          </h2>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Experience sustainable living in our modern properties
          </p>
        </div>
        <div className="flex items-center gap-8 py-8 md:py-0 ">
          <Link
            to="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-800 rounded-lg bg-[#FED835] hover:bg-yellow-400"
          >
            Discover More
            <GoChevronRight />
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 gap-3"
          >
            Contact Us
            <IoChevronDownOutline />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
