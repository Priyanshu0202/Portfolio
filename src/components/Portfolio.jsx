import React from "react";
import chat from "../assets/portfolio/chat.PNG";
import social from "../assets/portfolio/social.PNG";
import weather from "../assets/portfolio/Weather.PNG";
import spaceX from "../assets/portfolio/spaceX.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chat,
      href: "https://firebase-chata-app.vercel.app/login",
    },
    {
      id: 2,
      src: social,
      href: "https://socialmedia-app-xi.vercel.app/",
    },
    {
      id: 3,
      src: weather,
      href: "https://weather-forecast-b8d1d8.netlify.app/",
    },
    {
      id: 4,
      src: spaceX,
      href: "https://spacex-clone-6e1798.netlify.app",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-20 pt-10 sm:pt-20  lg:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out Some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
