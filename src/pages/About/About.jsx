import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

import "./About.css";
import "../../components/constant/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, Education, MySkills } from "../../components";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div>
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Me</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://res.cloudinary.com/dkysfzs5s/image/upload/v1706642665/srikantPortfolio/me/srikant.png"
              alt="Srikant Sahu"
              title="Srikant Sahu"
              className="p-20 w-70 h-70 transform translate-y-[-12%]"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Srikant Sahu
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Front-End Developer",
                  2000,
                  "A MERN Stack Developer",
                  2000,
                  "A Full Stack Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              As a MERN stack developer, I am committed to building high-quality
              web applications that meet the needs of my clients. I specialize
              in using React.js, Next js, Typescript, MongoDB, Express.js, and
              Node.js to create scalable and robust web applications.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name :</span>Srikant Sahu
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone :</span>+91-700 835
                6307
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email :</span>
                srikantsahu114@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address :</span>Puri,
                Odisha, India
              </h2>
              <a
                href="https://drive.google.com/file/d/1RbIE-g7Nsj_kvOkOy3EQQIW7SlusRXt3/view?usp=sharing"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <MySkills />
      <Education />
    </div>
  );
};

export default About;
