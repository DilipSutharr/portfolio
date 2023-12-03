import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div className="h-20 w-20 p-2 rounded-lg bg-white justify-center items-center">
            <img src={technology.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
