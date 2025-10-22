import { FaFacebook, FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";

function TeamCard({ avatar, name, job, quote, url }) {
  return (
    <div className="max-w-sm bg-[#0E1217] rounded-sm md:rounded-md lg:rounded-lg p-5 md:pt-8 lg:pt-8">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 md:w-48 md:h-48  rounded-full mx-auto object-cover mb-2"
          src={avatar}
          alt={name}
          width="384"
          height="512"
        />
        <h5 className="text-xl font-medium text-[#FED835]">{name}</h5>
        <span className="text-sm text-[#9E9E9E]">{job}</span>
        <h5 className="mt-3 text-sm text-[#9E9E9E]">{quote}</h5>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#FED835] px-4 py-2 text-center text-sm font-medium text-slate-800 hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-300 gap-1.5"
          >
            <span>
              <FaFacebook size={25} />
            </span>
            Add friend
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:text-slate-950 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 gap-1.5"
          >
            <span>
              <FaLinkedin size={25} />
            </span>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  quote: PropTypes.string,
  url: PropTypes.string,
};

export default TeamCard;
