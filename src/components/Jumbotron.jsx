import { Link } from "react-router-dom";

import { IoChevronDownOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";

function Jumbotron() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-gray-800 bg-blend-multiply shadow-lg">
      <div className="w-full h-full bg-gradient-to-b from-red-900"></div>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Creating exceptional and sustainable real estate projects
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          We specialize in developing properties that meet the needs of modern
          society.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-600 hover:bg-yellow-500"
          >
            Learn More
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
    </section>
  );
}

export default Jumbotron;
