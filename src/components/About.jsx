import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Greetings! I'm Priyanshu Negi, currently in 3rd year, persuing my
          B.Tech Degree from Netaji Subhas University of Technology. A
          passionate and versatile full stack developer who thrives on turning
          complex ideas into functional and elegant digital solutions. With a
          deep love for both the front-end user experience and the back-end
          architecture, I bring a holistic approach to web development that
          ensures every aspect of a project is finely tuned. My journey into the
          world of full stack development began with a curiosity about how the
          digital world operates under the hood. From the foundations of HTML
          and CSS to the dynamic capabilities of JavaScript, I've honed my
          skills to create visually stunning and highly interactive front-end
          interfaces. But I didn't stop there—diving into server-side
          technologies like Node.js, Express, mongoDB, or firebase, I've built
          the backbone that powers these experiences. One of the most rewarding
          aspects of being a full stack developer is the ability to see a
          project through from concept to deployment. From designing the user
          interface to crafting the databases and APIs that make applications
          tick, I enjoy every step of the process. This comprehensive approach
          allows me to identify potential bottlenecks and synergies, resulting
          in smoother, more efficient applications.
        </p>

        <br />
        <p className="font-bold text-3xl pb-2">
          <span className="border-b-4 border-gray-500 pt-2">
            My experience in Web
          </span>
        </p>

        <p className="text-xl">
          I have been working in Web Development (MERN) for more than a year. I
          have experience in developing web application from frontend to backend
          but have an inclination towards frontend development. I have developed
          APIs and server side applications using Node.js, Express.js and
          mongoDB. Also, I have a strong grasp on React fundamentals and
          patterns. I have been working with React for more than a year and
          created many projects using the same. I have a sound knowledge of raw
          CSS and have experience working with TailwindCSS (used it in multiple
          projects).
        </p>
      </div>
    </div>
  );
};

export default About;
