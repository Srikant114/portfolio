import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
import { Link } from "react-router-dom";

// ① import your thunk
import { fetchProfile } from "../../../redux/slices/profileSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const { info, status, error } = useSelector(state => state.profile);

  // ② fetch profile on mount if needed
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfile());
    }
  }, [status, dispatch]);

   // 🔄 Third‐party skeleton while loading
  if (status === "loading") {
    return (
      <SkeletonTheme
        baseColor="#1f2937"      /* dark gray background */
        highlightColor="#374151" /* slightly lighter gray */
      >
        <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between p-6">
          <div className="w-full lg:w-1/2 space-y-4">
            <Skeleton height={24} width={120} />
            <Skeleton height={48} width={240} />
            <Skeleton height={32} width={200} />
            <Skeleton count={3} />
            <div className="flex space-x-4">
              <Skeleton height={40} width={140} />
              <Skeleton height={40} width={120} />
            </div>
          </div>
          <Skeleton height={360} width="45%" borderRadius={8} />
        </div>
      </SkeletonTheme>
    );
  }

  if (status === "failed") return <p>Error loading profile: {error}</p>;
  if (!info) return null;

  console.log({info})
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#999] text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
          Hello I,am
        </h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-80%] sm:translate-y-[-0%]">
        {/* /* Make Dynamic as Name /* */}
          {/* Srikant Sahu  */}
          {info?.profile?.name}
        </h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
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
        <p className="text-[#999] max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
         {/* /* Make Dynamic as Description /* */}
          {/* I am a MERN stack developer, committed to build high-quality web
          applications that meet the needs of my clients. React.js, MongoDB,
          Express.js, and Node.js to create scalable and robust web
          applications. */}
          {info?.profile?.description}
        </p>
        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
        {/* /* Make Dynamic as UploadUpdatedResume /* */}
          <a 
          // href="https://drive.google.com/file/d/1OcBIbkevdIpzLZEgk8ylgCRLCkuD9cMk/view?usp=sharing" 
         href = {info?.profile?.updatedCv}
          target="blank">
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <lottie-player
          src="https://lottie.host/3f21ff9f-6b44-4477-924d-1b23a8edf1c2/zIMBIBoqme.json"
          style={{ width: "90%", height: "90%" }}
          loop
          autoplay
        ></lottie-player>
      </motion.div>
    </div>
  );
};

export default Banner;

