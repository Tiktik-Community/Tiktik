import React from "react";
import Image from "next/image";

import icon from "/favicon.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-10 h-full">
        <div className="w-full">
          <Image src={icon} alt="Icon" layout="responsive" />
        </div>
        <h1 className="text-4xl font-semibold">Tiktik</h1>
        <p className="text-center">
          Tiktik is A Network for Coders to share his projects as a video
        </p>
      </div>
    </>
  );
};

export default About;
