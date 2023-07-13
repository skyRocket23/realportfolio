import React from 'react'

const Hero = () => {
  return (
    <div className="bg-black min-h-screen">
        <div className="mb-5 ml-5 sm:ml-32 sm:flex sm:gap-8">
            <h1 className="text-white hover:text-orange-500 hover:cursor-pointer sm:text-lg">7819098982</h1>
            <h1 className="text-white hover:text-orange-500 hover:cursor-pointer sm:text-lg">vbelwal73@gmail.com</h1>
        </div>

        <div className="flex flex-col justify-center  m-5  h-[500px] sm:ml-32 lg:h-[600px]">
            <h1 className="text-white text-2xl mt-5 sm:text-3xl">Hello, My name is</h1>
            <h1 className="text-white text-4xl mt-5 sm:text-5xl xl:text-7xl">Vijay Belwal</h1>
            <h1 className="text-orange-500 text-3xl mt-5 sm:text-4xl">React Developer</h1>
            <p className="text-gray-400 mt-5 sm:text-lg ">I design and develop services for customers of all sizes,<br/> 
            specializing in creating stylish, modern websites, 
            web services <br/> and online stores.</p>
            <button className="bg-white rounded-lg w-48 p-3 font-bold hover:bg-black hover:text-white hover:border mt-5">Download CV</button>
        </div>
    </div>
  )
}

export default Hero