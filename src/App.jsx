import React, { useRef } from 'react';
import Biography from "./components/Biography"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"
import Education from './components/Education';
import Projects from './components/Projects';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <div ref={homeRef}><Hero/></div>
        {/* <div ref={aboutRef}><Biography/></div> */}
        {/* <Education/> */}
        {/* <Projects/> */}
      </div>
    </div>
  )
}

export default App;
