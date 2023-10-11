import React from "react";
import chat from "../assets/portfolio/chat.PNG";
import social from "../assets/portfolio/social.PNG";
import weather from "../assets/portfolio/Weather.PNG";
import spaceX from "../assets/portfolio/spaceX.PNG";
import Chat2 from "../assets/portfolio/Chat2.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Chat2,
      href1: "https://talk-a-tive-dp9w.onrender.com",
      href2: "https://github.com/Priyanshu0202/chatApp2.0",
    },
    {
      id: 1,
      src: chat,
      href1: "",
      href2: "https://github.com/Priyanshu0202/firebase-chataApp",
    },
    {
      id: 2,
      src: social,
      href1: "https://socialmedia-app-xi.vercel.app/",
      href2: "https://github.com/Priyanshu0202/Socialmedia-App",
    },
    {
      id: 3,
      src: weather,
      href1: "https://weather-forecast-b8d1d8.netlify.app/",
      href2: "https://github.com/Priyanshu0202/WeatherApp",
    },
    {
      id: 4,
      src: spaceX,
      href1: "https://spacex-clone-6e1798.netlify.app",
      href2: "https://github.com/Priyanshu0202/SpaceX-clone",
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
          {portfolios.map(({ id, src, href1, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href1}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href2}>Code</a>
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
