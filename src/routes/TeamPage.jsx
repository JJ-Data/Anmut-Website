// import { useState } from "react";

import TeamCard from "../components/TeamCard";
import { teamMembers } from "../utils/data";

export default function TeamPage() {
  return (
    <div className=" bg-slate-800 py-5 ">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl text-slate-100 pb-5 md:pb-8 lg:pb-12">
        Meet our Team
      </h1>
      <div className="w-full mx-auto flex justify-center items-center">
        <div className="px-3 md:px-8 lg:px-32 md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 md:pb-8 lg:pb-12 gap-4 md:gap-8 gap-y-4 md:gap-y-10">
          {teamMembers.map((item) => (
            <TeamCard
              key={item.name}
              name={item.name}
              quote={item.quote}
              job={item.job}
              avatar={item.avatar}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
