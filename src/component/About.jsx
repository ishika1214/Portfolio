import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:pb-8">
          <p
            className="text-4xl
                 font-bold inline border-b-2 border-rose-700"
          >
            About
          </p>
        </div>
        <p className=" mt-10 mb-20 text-sm  md:text-xl">
          I'm a passionate software engineer with a comprehensive understanding
          of full-stack development.Over the years, I've honed my skills to
          become proficient in both front-end and back-end technologies like ,
          allowing me to craft end-to-end solutions that drive innovation and
          meet the needs of users.I'm driven by a passion for creating impactful solutions that make a difference. Whether it's building web applications, optimizing performance, or tackling complex challenges, I'm always eager to embark on new adventures in the world of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
