import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IoCloseOutline, IoMenu } from "react-icons/io5";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smallScreenMenuOperation = () => {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth;
    if (screenWidth < 675) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  return (
    <nav className="bg-[#0E1217] shadow-lg sticky z-[200]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center justify-center  rtl:space-x-reverse"
        >
          <img src="/assets/logo-main.png" className=" h-14" alt="anmut-logo" />
          {/* <span className="self-center text-xl md:text-2xl lg:text-3xl  tracking-widest font-bold whitespace-nowrap dark:text-white">
            ANMUT
          </span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/contact">
            <button
              type="button"
              className="text-slate-800 bg-[#FED835] hover:bg-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden "
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={handleClick}
          >
            {isMenuOpen ? (
              <IoCloseOutline size={35} color=" rgb(248 113 113)" />
            ) : (
              <IoMenu size={35} color="rgb(251 191 36)" />
            )}
          </button>
        </div>
        <div
          className={
            isMenuOpen
              ? `items-center justify-between block w-full md:hidden md:w-auto
        md:order-1 transition duration-250`
              : `items-center justify-between hidden w-full md:flex md:w-auto
        md:order-1 transition duration-250`
          }
          id="navbar-cta "
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <NavLink
                to="/"
                onClick={smallScreenMenuOperation}
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-[#FED835] hover:text-gray-400"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={smallScreenMenuOperation}
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-[#FED835] hover:text-gray-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={smallScreenMenuOperation}
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-[#FED835] hover:text-gray-400"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team-member"
                onClick={smallScreenMenuOperation}
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-[#FED835] hover:text-gray-400"
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={smallScreenMenuOperation}
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-[#FED835] hover:text-gray-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
