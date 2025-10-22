import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
function Card({ pic, headTitle, subTitle, tag, url }) {
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <a href="#">
          <img className="rounded-t-lg" src={pic} alt={headTitle} />
        </a>
        <div className="p-5">
          <span className="text-xs md:text-sm lg:text-md font-medium me-2 px-2.5 py-1 rounded bg-[#9E9E9E] text-white capitalize">
            {tag}
          </span>

          <h5 className="my-2.5 capitalize text-xl font-bold tracking-tight  text-white">
            {headTitle}
          </h5>

          <p className="mb-3 font-normal text-[#9E9E9E]">{subTitle}</p>
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#0E1217] rounded-lg bg-[#FED835] hover:bg-yellow-500"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

Card.propTypes = {
  pic: PropTypes.string,
  headTitle: PropTypes.string,
  subTitle: PropTypes.string,
  tag: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
