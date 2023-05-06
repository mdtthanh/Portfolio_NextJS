/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { faq, playmusic, tcdbook } from "../../public/assets";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/mdtthanh/TCD_BookShop"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={tcdbook}
                  alt="TCD book"
                />
              </div>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">TCD Book Store</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                This is a website copyright by my team. Website have using same
                every website E-commerce
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>PHP</li>
                <li>JQuery</li>
                <li>MySQL</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/mdtthanh/TCD_BookShop"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/mdtthanh/TCD_BookShop"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/mdtthanh/TCD_BookShop"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/mdtthanh/TCD_BookShop"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={faq}
                  alt="FAQ"
                />
              </div>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">FAQ Forum</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                This is a forum website where people can learn Japanese easily
                to communicate with each other. Websites that use
                <span className="text-textGreen"> microservices</span> to build
                APIs
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Laravel</li>
                <li>NestJS</li>
                <li>Java Spring</li>
                <li>ReactJS</li>
                <li>Tailwind</li>
                <li>PostgreSQL</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/orgs/Web-programming-IT4552/repositories"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/orgs/Web-programming-IT4552/repositories"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/orgs/Web-programming-IT4552/repositories"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://mdtthanh.github.io/PlayMusic"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={playmusic}
                  alt="Play music"
                />
              </div>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Play Music</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                It's a website that listens to music similar to Zingmp3. You can
                listen to music and read books after hard work.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/mdtthanh/PlayMusic"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/mdtthanh/PlayMusic"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/mdtthanh/PlayMusic"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
