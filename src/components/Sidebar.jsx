import React,{useRef} from 'react';
import { IoHome } from 'react-icons/io5';
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa';

const Sidebar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  return (
    <div className="fixed left-0 top-0 h-screen bg-[rgb(13,12,21)] w-20 flex flex-col items-center ">
      <div>
        <h1 className="text-white font-bold p-3 bg-orange-500 w-20 h-20 text-5xl">V</h1>
      </div>
      <ul className="mt-12">
        <li><IoHome onClick={() => scrollToSection(homeRef)} className="text-white text-4xl m-5 hover:text-orange-400 hover:cursor-pointer" /></li>
        <hr className="my-2" />
        <li><CgFileDocument onClick={() => scrollToSection(aboutRef)} className="text-white text-4xl m-5 hover:text-orange-400 hover:cursor-pointer" /></li>
        <hr className="my-2" />
        <li><AiOutlineFundProjectionScreen onClick={() => scrollToSection(projectsRef)} className="text-white text-4xl m-5 hover:text-orange-400 hover:cursor-pointer" /></li>
        <hr className="my-2" />
        <li><FaBlog onClick={() => scrollToSection(blogRef)} className="text-white text-4xl m-5 hover:text-orange-400 hover:cursor-pointer" /></li>
      </ul>
    </div>
  );
};

export default Sidebar;
