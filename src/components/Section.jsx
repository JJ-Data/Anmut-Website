import { MdConstruction, MdRealEstateAgent } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Section() {
  return (
    <div className=" py-10 md:py-16 lg:py-20 px-16 md:px20 lg:px-28 bg-[#0E1217]">
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-18"
        >
          <span className="text-lg gap-2 font-bold inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-green-400 mb-2">
            <MdConstruction className="me-1.5" size={25} />
            Concept
          </span>
          <h2 className="text-gray-300 text-2xl font-extrabold mb-2">
            Our Vision
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            To pioneer a future where communities are revolutionized through our
            ground-breaking construction solutions
          </p>
          <Link
            to="/about"
            className=" text-[#FED835] hover:bg-amber-400 hover:text-slate-100 rounded-md px-4 py-1 font-medium text-lg inline-flex items-center gap-3"
          >
            Read More
            <LuChevronRight size={24} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-18"
        >
          <span className="text-lg font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2">
            <LuConstruction className="me-1.5" size={25} />
            Identity
          </span>
          <h2 className="text-gray-300 text-2xl font-extrabold mb-2">
            who we are
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            An estate and property development company that specialize in
            creating exceptional and sustainable real estate projects that meets
            the need of a modern society. We utilize sustainable building
            practices and the latest technology to ensure our projects are
            energy-efficient, cost-effective, and completed on time and on
            budget.
          </p>
          <Link
            to="/about"
            className=" text-[#FED835] hover:bg-amber-400 hover:text-slate-100 rounded-md px-4 py-1 font-medium text-lg inline-flex items-center gap-3"
          >
            Explore
            <LuChevronRight size={24} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-18"
        >
          <span className="text-lg gap-2 font-bold inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 text-red-400 mb-2">
            <MdRealEstateAgent className="me-1.5" size={25} />
            Work
          </span>
          <h2 className="text-gray-300 text-2xl font-extrabold mb-2">
            what we do
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            We revolutionize communities through innovative construction,
            building solutions and collaborative partnerships
          </p>

          <Link
            to="/about"
            className=" text-[#FED835] hover:bg-amber-400 hover:text-slate-100 rounded-md px-4 py-1 font-medium text-lg inline-flex items-center gap-3"
          >
            Read More
            <LuChevronRight size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Section;
