import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-10 h-full">
        <div className="w-full">
          <Image
            src="https://i.imgur.com/XuODa9Q.png"
            alt="Icon"
            layout="responsive"
          />
        </div>
        <h1 className="text-4xl font-semibold text-center">Tiktik</h1>
        <p className="text-center">
          Tiktik is A Network for Coders to share his projects as a video
        </p>
      </div>
    </>
  );
};

export default About;
