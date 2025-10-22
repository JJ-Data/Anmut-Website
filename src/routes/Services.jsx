import { PiProjectorScreenChart } from "react-icons/pi";
import { IoChatbubblesOutline, IoConstructSharp } from "react-icons/io5";
import { RiCustomerService2Line, RiEmotionHappyLine } from "react-icons/ri";
import { MdOutlineArchitecture } from "react-icons/md";
import { SiRenovatebot } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className=" flex relative z-10 items-center  overflow-hidden bg-cover bg-no-repeat bg-[url('https://www.mhwilliams.com/wp-content/uploads/2020/01/11.jpeg')] bg-gray-800 bg-blend-multiply shadow-lg">
        <div className="w-full h-full bg-gradient-to-t from-slate-800/90 to-slate-900/90 absolute z-200"></div>
        <div className="container mx-auto px-6 flex relative py-16  max-w-screen-xl z-30">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="sm:w-2/3 lg:w-2/5 flex flex-col justify-center relative z-20 "
          >
            <span className="w-20 h-2 bg-gray-300 mb-12"></span>
            <h1 className="uppercase text-4xl md:text-6xl  font-black  leading-none text-white">
              A{" "}
              <span className="text-[#FED835] text-4xl md:text-7xl">
                great dream
              </span>{" "}
              for you
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              We are a remarkable team turning dreams into reality, and our
              dedication forms the bedrock as we collaboratively create
              something extraordinary.
            </p>
            <div className="flex mt-8">
              <Link
                to="/"
                className="uppercase py-2 px-4 rounded-lg bg-[#FED835] border-2 border-transparent text-slate-800 text-md mr-4 hover:bg-amber-400"
              >
                Connect with us
              </Link>
              <Link
                to="/about"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#FED835] text-[#FED835] hover:bg-[#FED835] hover:text-slate-800 text-md"
              >
                Read more
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden md:flex justify-end items-center md:w-2/3 lg:w-3/5 relative md:ml-8 lg:ml-16"
          >
            <img
              src="/assets/Construction-PNG-Image.png"
              alt="imageSection1"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-slate-900 flex items-center overflow-hidden ">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 relative gap-3 md:gap-8 py-16 max-w-screen-xl text-white">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            id="section--1"
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 md:gap-7">
              <span className="w-12 h-1 bg-white"></span>
              <p className="capitalize">fact about us </p>
            </div>
            <h1 className="capitalize text-3xl md:text-5xl font-black mt-2 text-white">
              what we do
            </h1>
            <p className="text-justify mt-6 md:mt-8">
              An estate and property development company that specialize in
              creating exceptional and sustainable real estate projects that
              meets the need of a modern society. We utilize sustainable
              building practices and the latest technology to ensure our
              projects are energy-efficient, cost-effective, and completed on
              time and on budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-[#FED835] p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <IoConstructSharp size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">Consultancy</h6>
                  <p className="text-sm text-gray-400">
                    Expert and professional guidance to our clients in various
                    aspects of real estate. Such as market analysis, property
                    valuation, investment strategy
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-[#FED835] p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <RiEmotionHappyLine size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">Construction Services</h6>
                  <p className="text-gray-400 text-sm">
                    We build solid projects such as residential, industrial and
                    commercial properties.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-[#FED835] p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <PiProjectorScreenChart size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">Project Management</h6>
                  <p className="text-gray-400 text-sm">
                    Planning, organising and overseeing each project from
                    inception to completion.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-[#FED835] p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <FaConnectdevelop size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">Property Development</h6>
                  <p className="text-gray-400 text-sm">
                    Acquire, enhance and develop your property to increase
                    value.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-[#FED835] p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <IoChatbubblesOutline size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">Renovation</h6>
                  <p className="text-gray-400 text-sm">
                    Upgrade by remodelling existing structures to your taste
                    with the latest features, functionality or aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:flex justify-end items-center"
          >
            <img
              src="/assets/Daco_4142804.png"
              alt="imageSection2"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* our services section: what we are doing? */}
      <div
        className="flex items-center overflow-hidden bg-cover bg-no-repeat bg-[url('')] bg-gray-800 bg-blend-multiply shadow-lg relative "
        id="our--services"
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="hidden lg:block absolute bottom-0 right-0 w-2/5"
        >
          <img
            src="/assets/image-from-rawpixel-id-12064744-original.png"
            alt="imageSection3"
            className="w-full"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative gap-3 md:gap-8 py-16 max-w-screen-xl text-white">
          <div id="section--1" className="flex flex-col justify-center">
            <div className="flex items-center gap-3 md:gap-7">
              <span className="w-12 h-1 bg-white"></span>
              <p className="capitalize">Our Services </p>
            </div>
            <h1 className="capitalize text-3xl md:text-5xl font-black mt-2 text-white">
              You can trust us for
            </h1>
            <p className="mt-6 md:mt-8">
              We revolutionize communities through innovative construction,
              building solutions and collaborative partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-8 max-w-screen-sm gap-6 md:gap-8 lg:gap-10">
            {/* 1st service card */}
            <motion.Link
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              to="/contact"
              className="bg-slate-900 shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
            >
              <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
                <IoChatbubblesOutline size={45} />
              </div>
              <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
                <h6 className="font-semibold mb-3">Fast Operation</h6>
                <p className="text-gray-400 text-sm">
                  It is a long establish fact of hard workers
                </p>
              </div>
            </motion.Link>
            {/* 2nd service card */}
            <motion.Link
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              to="/contact"
              className="bg-slate-900 shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
            >
              <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
                <RiCustomerService2Line size={45} />
              </div>
              <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
                <h6 className="font-semibold mb-3">Consultation</h6>
                <p className="text-gray-400 text-sm">
                  It is a long establish fact of hard workers
                </p>
              </div>
            </motion.Link>
            {/* 3rd service card */}
            <motion.Link
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              to="/contact"
              className="bg-slate-900 shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
            >
              <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
                <SiRenovatebot size={45} />
              </div>
              <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
                <h6 className="font-semibold mb-3">Renovation</h6>
                <p className="text-gray-400 text-sm">
                  It is a long establish fact of hard workers
                </p>
              </div>
            </motion.Link>
            {/* 4th service card */}
            <motion.Link
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              to="/contact"
              className="bg-slate-900 shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
            >
              <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
                <MdOutlineArchitecture size={45} />
              </div>
              <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
                <h6 className="font-semibold mb-3">Architecture</h6>
                <p className="text-gray-400 text-sm">
                  It is a long establish fact of hard workers
                </p>
              </div>
            </motion.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
