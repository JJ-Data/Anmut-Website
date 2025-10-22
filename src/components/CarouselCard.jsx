import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CarouselCard({ avatar, name, job }) {
  return (
    <Link to="/team-member">
      {/* <figure className="md:flex rounded-xl p-8 md:p-0 bg-slate-800 "> */}
      <figure className=" rounded-xl p-8 md:p-0 bg-slate-800 ">
        <img
          // className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
          className="w-32 h-32 rounded-full mx-auto object-cover"
          src={avatar}
          alt={name}
          width="384"
          height="512"
        />
        {/* <div className="pt-6 md:p-8 text-center md:text-left space-y-4"> */}
        <div className="pt-6 md:p-8 text-center space-y-4">
          <figcaption className="font-medium">
            <div className="text-amber-300">{name}</div>
            <div className="text-slate-400">{job}</div>
          </figcaption>
        </div>
      </figure>
    </Link>
  );
}
CarouselCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  url: PropTypes.string,
};
export default CarouselCard;
