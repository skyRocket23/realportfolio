import React from "react";
import { projects } from "../assets/projects";
import { MdOutlineWifiTethering } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";

const Projects = () => {
  return (
    <div className="min-h-screen w-screen bg-[rgb(15,14,22)] flex flex-wrap items-start justify-start">
      {projects.map((project) => {
        return (
          <div className="bg-[black] w-80 p-5 rounded-3xl mt-32 ml-32 flex flex-col border">
            <h1 className="text-[rgb(240,114,56)] text-4xl font-bold mb-5">
              {project.name}
            </h1>
            <div className="flex ml-5 mb-5">
              <a href={project.livelink} target="blank"><MdOutlineWifiTethering className="text-white text-4xl mr-12 hover:cursor-pointer hover:text-red-600"/></a>
              <a href={project.githublink} target="blank"><PiGithubLogoFill className="text-white text-4xl hover:cursor-pointer hover:text-red-600" /></a>
            </div>
            <img className="mb-5 text-center" src={project.image} alt="" />
            <h1 className="text-white text-2xl">{project.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
