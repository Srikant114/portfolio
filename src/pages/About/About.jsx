// src/pages/About/About.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { fetchProfile } from "../../redux/slices/profileSlice";

import "./About.css";
import "../../components/constant/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, Education, MySkills } from "../../components";


const About = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector((state) => state.profile);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfile());
    }
  }, [status, dispatch]);

   // ① Show a skeleton theme while loading
  if (status === "loading") {
    return (
      <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
        <div className="parent pt-16 my-16">
          <motion.div
            className="mb-10"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, type: "spring" } }}
          >
            <Skeleton height={24} width={200} className="mx-auto" />
            <Skeleton height={48} width={300} className="mx-auto mt-2" />
            <BottomLine />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Image placeholder */}
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1.25 } }}
            >
              <Skeleton circle height={280} width={280} className="mx-auto" />
            </motion.div>

            {/* Text placeholders */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.25 } }}
            >
              <Skeleton height={36} width={200} className="mx-auto md:mx-0" />
              <div className="my-4 text-center md:text-left">
                <Skeleton height={28} width={180} />
              </div>
              <Skeleton count={2} className="mb-4" />
              <Skeleton height={20} width="60%" className="mb-2" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 text-center md:text-left">
                <Skeleton height={20} width="50%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={20} width="50%" />
              </div>
              <div className="flex justify-center md:justify-start mt-6">
                <Skeleton height={44} width={160} />
              </div>
            </motion.div>
          </div>

          {/* Still show sections as placeholders */}
          <div className="mt-16">
            <Skeleton height={32} width={180} className="mb-4 mx-auto md:mx-0" />
            <Skeleton count={3} />
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  
  if (status === "failed")  return <p>Error: {error}</p>;
  if (!info) return null;

  return (
    <div className="parent pt-16 my-16">
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
        {/* Profile Image */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <img
            src={info?.profile?.profilePicture}
            alt={info?.profile?.name}
            title={info?.profile?.name}
            className="p-20 w-70 h-70 transform translate-y-[-12%]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <h1 className="text-4xl font-semibold mb-4 text-center sm:text-3xl md:text-left">
            {info?.profile?.name}
          </h1>

          <div className="my-8 text-center md:text-left">
            <TypeAnimation
              className="text-2xl text-primary font-bold"
              cursor={true}
              sequence={[
                "A Front-End Developer", 2000,
                "A MERN Stack Developer", 2000,
                "A Full Stack Developer", 2000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
          </div>

          <p className="text-neutral font-medium mb-4 text-center md:text-left">
            {info?.profile?.description}
          </p>
          <p className="text-neutral font-medium mb-6 text-center md:text-left">
            {info?.profile?.goal}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center md:text-left">
            <h2 className="font-medium">
              <span className="mr-2 text-primary">Name:</span>
              {info?.profile?.name}
            </h2>
            <h2 className="font-medium">
              <span className="mr-2 text-primary">Phone:</span>
              {info?.profile?.phone}
            </h2>
            <h2 className="font-medium">
              <span className="mr-2 text-primary">Email:</span>
              {info?.profile?.email}
            </h2>
            <h2 className="font-medium">
              <span className="mr-2 text-primary">Address:</span>
              {/* If you add address to your API, use info.address; otherwise leave static */}
              Sunabeda, Odisha, India
            </h2>

            <a href={info?.profile?.updatedCv} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center md:justify-start mt-4">
                <button className="primary-button flex items-center">
                  <span>My Resume</span>
                  <FaDownload className="ml-2" />
                </button>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <MySkills />
      <Education />
    </div>
  );
};

export default About;
