import React from "react";
import { LinearProgress, Typography, styled } from "@mui/material";

const Education = () => {
  return (
    <div className="flex h-screen w-screen bg-[rgb(1,1,0)] ">
      <div className="flex flex-col justify-center items-center text-white ml-48   ">
        <h1 className="text-white text-5xl mb-20">Education & Skills</h1>
        <div className="bg-[rgb(11,11,19)] w-96 h-96 rounded-xl p-5">
          <div>
            <h1 className="text-gray-400">2018-2020</h1>
            <h1 className="font-bold">Ph.D in Horriblensess</h1>
            <h1 className="text-gray-400">University Of Evil Doing</h1>
            <br />
            <br />
          </div>

          <div>
            <h1 className="text-gray-400">2018-2020</h1>
            <h1 className="font-bold">Ph.D in Horriblensess</h1>
            <h1 className="text-gray-400">University Of Evil Doing</h1>
            <br />
            <br />
          </div>

          <div>
            <h1 className="text-gray-400">2018-2020</h1>
            <h1 className="font-bold">Ph.D in Horriblensess</h1>
            <h1 className="text-gray-400">University Of Evil Doing</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[rgb(11,11,19)] h-96 w-96  rounded-xl ml-72 mt-64 justify-center items-center">
        <div className="m-5">
          <h1 className="text-orange-600 text-3xl ">Reactjs</h1>
          <br/>
          <LinearProgress variant="determinate" value={90} />
        </div>
        <div className="m-5">
          <h1 className="text-orange-600 text-3xl">TailwindCSS</h1>
          <br/>
          <LinearProgress variant="determinate" value={90} />
        </div>
        <div className="m-5">
          <h1 className="text-orange-600 text-3xl">Javascript</h1>
          <br/>
          <LinearProgress variant="determinate" value={80} />
        </div>
      </div>
    </div>
  );
};

export default Education;
