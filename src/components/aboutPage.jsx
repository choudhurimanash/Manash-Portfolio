import React from "react";

function AboutPage() {
  return (
    <div
      name="about"
      className="w-full h-screen   bg-gradient-to-b from-yellow-800 to-pink-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline  border-b-4 border-pink-300">
            About Me
          </p>
        </div>
        <p className="md:text-[20px] sm:text-[13px] mt-10 text-center">
          Hello, My name is{" "}
          <span className="text-black font-bold">
            Manash Choudhuri
          </span>{" "}
          and I introduce myself as an intermediate{" "}
          <span className="text-black font-bold">
            web developer
          </span>{" "}
          and avid{" "}
          <span className="text-black font-bold">
            ML/DL
          </span>{" "}
          enthusiast. As a newcomer, I seize every opportunity to learn and
          grow. This exciting journey into web development and ML/DL allows me
          to showcase my creativity and delve into new technologies. My ultimate
          goal is to merge technical skills, a love for design, and a hunger for
          knowledge to create websites that offer seamless user experiences and
          develop ML/DL models with real-world applications. Apart from this,
          I'm passionate about sharing my knowledge about technologies.
        </p>
        <br />
        <p className="md:text-[20px] sm:text-[13px] text-center">
          In my downtime, I find comfort in the world of movies and enjoy
          experimenting with culinary creations.
        </p>
        <br />
        <p className="md:text-[20px] sm:text-[13px] text-center">
          Thank you for taking a moment to learn a bit about me. Please feel
          free to explore my portfolio and join me in shaping the digital
          landscape with a blend of creativity, functionality, and a dedication
          to education.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
