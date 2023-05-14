import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import Magenest from "../works/Magenest";
import Theinfitech from "../works/Theinfitech";

const Experience = () => {
  const [worksMagenest, setWorksMagenest] = useState(true);
  const [worksTheinfitech, setWorksTheinfitect] = useState(false);

  const handleMagenest = () => {
    setWorksMagenest(true);
    setWorksTheinfitect(false);
  };

  const handleTheinfitech = () => {
    setWorksMagenest(false);
    setWorksTheinfitect(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleMagenest}
            className={` ${
              worksMagenest
                ? "border-l-textGreen text-textGreen "
                : "border-l-textDark text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Magenest
          </li>
          <li
            onClick={handleTheinfitech}
            className={` ${
              worksTheinfitech
                ? "border-l-textGreen text-textGreen "
                : "border-l-textDark text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Theinfitech
          </li>
          {/* <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8">
            Apple
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8">
            Splash
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8">
            Amazon
          </li> */}
        </ul>
        {worksMagenest && <Magenest />}
        {worksTheinfitech && <Theinfitech />}
      </div>
    </section>
  );
};

export default Experience;
