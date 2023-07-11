import React from "react";


const Biography = () => {
  return (
    <div className="flex h-screen w-screen bg-[rgb(15,14,22)] justify-between items-start">
      <div className="ml-40">
        <h1>left</h1>
      </div>

      <div>
        <h1 className="mt-32 text-white text-4xl font-bold m-5">Biography</h1>
        <p className="text-gray-300 text-lg m-5">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I <br /> code and create web elements for
          amazing people around the world. I like work with new
          <br /> people. New people new Experiences.
          <br />
          <br/>
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I code
          <br /> and create web elements for amazing people around the world. I
          like work with new people.
          <br /> New people new Experiences.
        </p>

        <div className="flex m-5 mt-9">
            <div className="mr-64">
                <p className="text-white">Name &nbsp;:&nbsp; <span className="text-gray-300">Vijay Belwal</span></p>
                <p className="text-white">Birthday &nbsp;:&nbsp; <span className="text-gray-300">23rd December,1999</span></p>
                <p className="text-white" >Age&nbsp;:&nbsp;24 <span className="text-gray-300">24 Years</span></p>
                <p className="text-white" >Address&nbsp;:&nbsp;<span className="text-gray-300">Haldwani,Uttrakhand</span></p>
            </div>

            <div>
                <p className="text-white" >Phone&nbsp;:&nbsp;<span className="text-gray-300">7819098982</span></p>
                <p className="text-white" >Email&nbsp;:&nbsp;<span className="text-gray-300">vbelwal73@gmail.com</span></p>
                <p className="text-white" >Linkedin&nbsp;:&nbsp;<span className="text-gray-300">VijayBelwal</span></p>
                <p className="text-white" >Github&nbsp;:&nbsp;<span className="text-gray-300"></span>skyRocket23</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
