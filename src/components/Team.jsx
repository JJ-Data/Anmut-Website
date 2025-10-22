import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { teamMembers } from "../utils/data";
import { useState } from "react";
import CarouselCard from "./CarouselCard";

function Team() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = teamMembers[index];

  const prevTestHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(teamMembers.length - 1);
    }
  };

  const nextTestHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= teamMembers.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="bg-slate-800 flex flex-col justify-center items-center py-3 md:py-6 lg:py-10">
      <div className="container md:max-w-screen-md ">
        <CarouselCard
          avatar={avatar}
          name={name}
          job={job}
          quote={quote}
          index={index}
        />
        {/* {teamMembers.map((item) => (
          <CarouselCard
            key={item.id}
            avatar={avatar}
            job={job}
            quote={quote}
            name={name}
          />
        ))} */}

        <div className="gap-x-4 md:gap-x-6 lg:gap-x-12 w-fit mx-auto mb-0 flex justify-center items-center">
          <button className="bg-transparent cursor-pointer">
            <IoIosArrowDropleftCircle
              onClick={prevTestHandler}
              size={45}
              className="text-[#FED835]"
            />
          </button>
          <button className="bg-transparent cursor-pointer">
            <IoIosArrowDroprightCircle
              onClick={nextTestHandler}
              size={45}
              className="text-[#FED835]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Team;
