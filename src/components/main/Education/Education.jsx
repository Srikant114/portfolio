import React from "react";
import Lottie from "react-lottie";
import education from "../../../assets/educationjson.json";

const Education = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: education,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <Lottie options={defaultOptions} height="70%" width="90%" className="mx-auto lg:mr-auto" />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* MERN Stack Developer */}
          <div className=" p-6 bg-[#2f3939] bg-opacity-90 backdrop-blur-lg rounded-lg inline-block  shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-left mb-4 ">
              <h3 className="text-2xl  font-semibold text-primary">
                MERN Stack Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have sucessfully Completed <b>MERN Stack Developer</b> at
              Jspider, Bangalore.
            </p>
          </div>

          {/* Graduation */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#2f3939]  bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4 ">
              <h3 className="text-2xl  font-semibold text-primary">
                B.Tech in Mechanical Engg
              </h3>
              <p className="text-sm text-neutral font-semibold">2019 - 2022</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have sucessfully passed Btech in Mechanical Engineering from
              Gandhi Acadamy of Technology & Engineering with a CGPA of
              <b>8.9</b>
            </p>
          </div>

          {/* Diploma */}
          <div className=" p-6 bg-[#2f3939]  bg-opacity-90 backdrop-blur-lg rounded-lg inline-block  shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-left mb-4 ">
              <h3 className="text-2xl font-semibold text-primary">
                Diploma in Mechanical Engg
              </h3>
              <p className="text-sm text-neutral font-semibold">2013-2016</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have sucessfully passed Diploma in Mechanical engineering from
              Siddhartha Institute of Engineering & Technology with<b> 75%</b>
            </p>
          </div>

          {/* 10th */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#2f3939]  bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">10th</h3>
              <p className="text-sm text-neutral font-semibold">2013</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have sucessfully passed my 10th from Sunabeda Public School
              (ICSE) with
              <b> 64%</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
