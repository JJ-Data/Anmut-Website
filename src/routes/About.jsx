import { RxValue } from "react-icons/rx";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineArchitecture } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiRenovatebot } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-slate-800">
      <header
        className="bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-gray-800 bg-blend-multiply shadow-lg relative"
        data-carousel-item
      >
        <div className="w-full h-full bg-gradient-to-t from-[#0E1217]/50 absolute z-0"></div>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32 z-30">
          <h2 className="text-md md:text-lg lg:text-xl font-bold tracking-wider uppercase text-white">
            about us
          </h2>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter  text-white md:text-5xl lg:text-6xl">
            Tranforming{" "}
            <span className="text-yellow-200 underline decoration-double decoration-[#FED835] leading-normal">
              {" "}
              Dreams
            </span>{" "}
            into Concrete
            <span className="text-yellow-200 underline decoration-double decoration-[#FED835] leading-normal">
              {" "}
              Realities!
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We specialize in estate development and construction projects that
            redefine urban living. Our passion for excellence and a commitment
            to innovation have propelled us to the forefront of the industry. We
            believe in revolutionizing communities through innovative
            construction, building solutions, and collaborative partnerships. By
            utilizing sustainable building practices and the latest technology,
            we ensure our projects are energy-efficient, cost-effective, and
            completed on time and on budget.
          </p>
        </div>
      </header>

      <section className="bg-slate-800 text-white px-5 py-8 md:py-12">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-10">
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0">
            <img
              className=" max-w-full h-full object-cover"
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StoryImage"
            />
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide underline">
              who we are
            </h1>

            <p className="mt-5 leading-normal">
              An estate and property development company that specialises in
              creating exceptional and sustainable real estate projects that
              meets the need of a modern society
            </p>
            <p className="mt-3 leading-normal">
              We utilize sustainable building practices and the latest
              technology to ensure our projects are energy-efficient,
              cost-effective, and completed on time and on budget.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#0E1217] text-white px-5 py-8 md:py-12">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-10">
          <div className="flex flex-col justify-center items-start ">
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide underline">
              Our Vision
            </h1>
            <p className="mt-5 leading-normal">
              To pioneer a future where communities are revolutionized through
              our ground-breaking construction solutions
            </p>
            {/* <p className="mt-3 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p> */}
          </div>
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0">
            <img
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StoryImage"
              className=" max-w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-800 text-white px-5 py-8 md:py-12">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-10">
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0">
            <img
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="missionImage"
              className=" max-w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide underline">
              Our Mission
            </h1>
            <p className="mt-5 leading-normal">
              To revolutionize communities through innovative construction,
              building solutions, and collaborative partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* core values section */}

      <div className="container mx-auto px-6 relative gap-3 md:gap-8 py-16 max-w-screen-xl text-white border-t-[#FED835] border-t-2">
        <div id="section--1" className="flex flex-col justify-center">
          <div className="flex items-center gap-3 md:gap-7">
            <span className="w-12 h-1 bg-white"></span>
            {/* <p className="capitalize">Our Services </p> */}
          </div>
          <h1 className="capitalize text-3xl md:text-5xl font-black mt-2 text-white">
            core values
          </h1>
          <p className="mt-6 md:mt-8">
            We revolutionize communities through our excense and innovative
            values for construction, building solutions and collaborative
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 md:mt-8 max-w-screen-sm lg:max-w-full gap-6 md:gap-8 lg:gap-10">
          {/* 1st service card */}
          <motion.Link
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            to="/contact"
            className="bg-[#0E1217] shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
          >
            <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
              <IoChatbubblesOutline size={45} />
            </div>
            <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
              <h6 className="font-semibold mb-3">Q</h6>
              <p className="text-gray-400 text-sm">Quality</p>
            </div>
          </motion.Link>
          {/* 2nd service card */}
          <motion.Link
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            to="/contact"
            className="bg-[#0E1217] shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
          >
            <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
              <RiCustomerService2Line size={45} />
            </div>
            <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
              <h6 className="font-semibold mb-3">I</h6>
              <p className="text-gray-400 text-sm">Integrity</p>
            </div>
          </motion.Link>
          {/* 3rd service card */}
          <motion.Link
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            to="/contact"
            className="bg-[#0E1217] shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
          >
            <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
              <SiRenovatebot size={45} />
            </div>
            <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
              <h6 className="font-semibold mb-3">I</h6>
              <p className="text-gray-400 text-sm">Innovation</p>
            </div>
          </motion.Link>
          {/* 4th service card */}
          <motion.Link
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            to="/contact"
            className="bg-[#0E1217] shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
          >
            <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
              <MdOutlineArchitecture size={45} />
            </div>
            <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
              <h6 className="font-semibold mb-3">S</h6>
              <p className="text-gray-400 text-sm">Sustainability</p>
            </div>
          </motion.Link>
          {/* 5th service card */}
          <motion.Link
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            to="/contact"
            className="bg-[#0E1217] shadow-md p-2 md:p-4 mr-3 flex flex-col justify-center items-start hover:shadow-lg hover:bg-slate-950 hover:scale-[1.02]"
          >
            <div className="border-2 bottom-2 border-[#FED835] p-3 text-3xl">
              <RxValue size={45} />
            </div>
            <div className="mt-3 md:mt-6 border-l-2 border-l-[#FED835] pl-4">
              <h6 className="font-semibold mb-3">E</h6>
              <p className="text-gray-400 text-sm">Excellence</p>
            </div>
          </motion.Link>
        </div>
      </div>
    </div>
  );
}

export default About;
