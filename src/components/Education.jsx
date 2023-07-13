import React from "react";
import { LinearProgress, Typography, styled } from "@mui/material";

const Education = () => {
  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-white text-center text-4xl mb-5">Education & Skills</h1>
      <div className="flex flex-col justify-start items-center sm:flex-row sm:justify-center sm:items-center sm:gap-16  sm:min-h-screen lg:gap-40 sm:ml-20">
        <div className="">
          <div className="flex flex-col justify-center items-center bg-gray-500 p-5 rounded-3xl mb-5 w-60 h-80 xl:w-96 xl:h-96">
            <div className="mt-8">
              <h1 className="text-orange-500 text-2xl font-bold">2019-2024</h1>
              <h1 className="text-white text-lg ">Btech CSE</h1>
              <h1 className="text-white text-lg">Graphic Era Hill University,Uttarakhand</h1>
              <br />
              <br />
            </div>

            <div>
              <h1 className="text-orange-500 text-2xl font-bold">2016-2018</h1>
              <h1 className="text-white text-lg">High School</h1>
              <h1 className="text-white text-lg">St. Pauls Sr. Sec School,Kathgodam</h1>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-500 p-5 rounded-3xl w-60 h-80 mb-5 xl:w-96 xl:h-96">
          <div className="">
            <h1 className="text-orange-500 text-2xl font-bold">Reactjs</h1>
            <br />
            <LinearProgress variant="determinate" value={90} />
          </div>
          <div className="">
            <h1 className="text-orange-500 text-2xl font-bold">TailwindCSS</h1>
            <br />
            <LinearProgress variant="determinate" value={90} />
          </div>
          <div className="">
            <h1 className="text-orange-500 text-2xl font-bold">Javascript</h1>
            <br />
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
