import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
} from "react-icons/si";
import Lottie from "react-lottie";
import skill from "../../../assets/skill.json";

const MySkills = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  ];

  const library = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
  ];

  const technologies = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="text-cyan-800" />,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: skill,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="pt-24" >
        <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
          My <span className="text-primary">Skills</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
          <div>
            <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
            <div className="flex flex-wrap mb-4">
              {languages.map((lang) => (
                <div key={lang.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-1 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#2f3939] hover:bg-[#222a2a] mx-auto"
                    title={lang.title}
                  >
                    {lang.icon}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-cyan-500 text-xl font-semibold">
              Library & Frameworks:
            </h2>
            <div className="flex flex-wrap mb-4">
              {library.map((lib) => (
                <div key={lib.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-1 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#2f3939] hover:bg-[#222a2a] mx-auto"
                    title={lib.title}
                  >
                    {lib.icon}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-cyan-500 text-xl font-semibold">
              Tools & Technologies:
            </h2>
            <div className="flex flex-wrap mb-4">
              {technologies.map((tech) => (
                <div key={tech.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-1 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#2f3939] hover:bg-[#222a2a] mx-auto"
                    title={tech.title}
                  >
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Lottie options={defaultOptions} height={400} width={360} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
