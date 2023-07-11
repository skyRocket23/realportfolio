import React from 'react'

const Hero = () => {
  return (
    <div className="bg-black w-screen h-screen">
        <div className="flex">
            <h1 className="text-white hover:text-orange-500 hover:cursor-pointer ml-40 my-4">7819098982</h1>
            <h1 className="text-white hover:text-orange-500 hover:cursor-pointer ml-8 my-4">vbelwal73@gmail.com</h1>
        </div>

        <div className="mt-[200px]">
            <h1 className="text-white text-xl ml-40">Hello, My name is</h1>
            <h1 className="text-white text-7xl ml-40 mt-5">Vijay Belwal</h1>
            <h1 className="text-orange-500 text-4xl ml-40 mt-5">React Developer</h1>
            <p className="text-yellow-50 text-opacity-50 ml-40 mt-5">I design and develop services for customers of all sizes,<br/> 
            specializing in creating stylish, modern websites, 
            web services <br/> and online stores.</p>
            <button className="bg-white  rounded-lg w-48 p-3 font-bold hover:bg-black hover:text-white hover:border ml-40 mt-5">Download CV</button>
        </div>
    </div>
  )
}

export default Hero