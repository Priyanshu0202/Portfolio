import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl mt-5 pt-10 md:text-5xl font-bold md:mt-0">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 text-lg max-w-lg">
            I have a year of experience building and designing software.
            Currently, I love to work on Web applications using technologies
            like React, Tailwind, Next JS Node JS MongoDb and Git commands.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="ml-10 lg:pt-20">
          <img
            src={HeroImage}
            alt="my portfolio"
            className="rounded-full mx-auto w-64 mb-20 sm:w-80 md:w-85 lg:w-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
