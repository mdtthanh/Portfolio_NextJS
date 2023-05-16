import * as React from "react";
import { useState } from "react";
const categories = [
  "All",
  "React Js",
  "Redux",
  "Ui Design",
  "User Experience",
  "Development Tools",
  "Productivity",
];
export interface ICategoryProps {}
export default function Category(props: ICategoryProps) {
  const [category, setCategory] = useState("All");
  return (
    <article className="py-16">
      <div className="relative mx-32 flex flex-col justify-between lg:mx-14 md:mx-12 xsm:mx-4">
        <h1 className="md-w-full mb-8 block w-max text-4xl font-semibold capitalize leading-tight tracking-wide text-textPurple md:text-center xs:text-3xl ">
          #{category}
        </h1>
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex flex-wrap items-center justify-start md:justify-center">
            {categories.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <button
                className={`border-solid p-2 px-3 border-purpleDark placeholder:capitalize mr-6 mb-4 lg:mr-6 md:mb-2 md:mr-2 rounded font-medium  bg-purple-100 hover:bg-white hover:bg-transparent border 
              ${
                category === item
                  ? "pointer-events-none bg-textPurple text-white"
                  : "text-textPurple"
              } 
              `}
                value={item}
                onClick={() => {
                  setCategory(item);
                }}
              >
                <h2>{item}</h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
