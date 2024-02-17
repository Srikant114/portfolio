import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Projects from "../../Data/Projects";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState(Projects);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && projects.length > 3) {
      setProjects(projects.slice(0, 3));
    }
  }, [inView, animation, location, projects]);

  const filterItem = (category) => {
    const filtered = Projects.filter((item) => item.category === category);
    setProjects(filtered);
    if (filtered.length > 3 && location.pathname === "/") {
      setProjects(filtered.slice(0, 3));
    }
  };

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="parent py-12">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Some of my recent projects
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>{" "}
            </h1>
            <BottomLine />
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div className="mt-6 mb-2 flex items-center justify-center flex-wrap">
          <button
              className={`btn btn-sm bg-primary border-2 border-primary text-[#3e3e3e] hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "all" && "active-btn"}`}
              onClick={() => {
                setActiveBtn("all");
                location.pathname === "/"
                  ? setProjects(Projects.slice(0, 3))
                  : setProjects(Projects);
              }}
            >
              All
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-[#3e3e3e] hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "webapps" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("webapps");
                filterItem("webapps");
              }}
            >
              Web Apps
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-[#3e3e3e] hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "reactjs" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("reactjs");
                filterItem("reactjs");
              }}
            >
              React Js
            </button>
            <button
            className={`btn btn-sm bg-primary border-2 border-primary text-[#3e3e3e] hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${
              activeBtn === "ui/ux" && "active-btn"
            }`}
            onClick={() => {
              setActiveBtn("ui/ux");
              filterItem("ui/ux");
            }}
          >
            UI/UX
          </button>
          </div>

          {/* Project Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((Project) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={Project.id}
                className="item-container rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500"
                style={{ backgroundColor: "#1c2323" }}
              >
                <div className="item h-full">
                  <img
                    className="rounded-lg h-full w-full"
                    src={Project.mainImage}
                    alt={Project.title || "Item Image"}
                  />
                  <div className="overlay">
                    <h3 className="text-2xl text-[#1c2323] font-semibold">
                      {Project.title}
                    </h3>
                    <Link
                      to={`/project/${Project.id}`}
                      className="mt-3 inline-block"
                    >
                      <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-[#3e3e3e] hover:text-primary hover:border-primary duration-500">
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <Link
              to="/project"
              className="text-xl hover:text-primary duration-300"
            >
              <button className="primary-button">
                <span>See All</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
