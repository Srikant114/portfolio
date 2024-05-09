import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  RiMenu3Fill,
  RiCloseFill,
} from "react-icons/ri";

import { AiFillProject } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaHome, FaDownload, FaInfoCircle, FaPenSquare  } from "react-icons/fa";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn } from "../../constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <FaInfoCircle /> },
    { title: "Project", link: "/project", icon: <AiFillProject /> },
    { title: "Contact", link: "/contact", icon: <IoMdContact /> },
    { title: "Blog", link: "/blog", icon: <FaPenSquare /> },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#00b0ff",
    };
  };

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`visible ${show && "nav-hidden"} shadow-lg bg-[#2F3939] 
     z-50`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-Protest">Srikant Sahu</h1>
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  className="text-white hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
            <a href="https://drive.google.com/file/d/1OcBIbkevdIpzLZEgk8ylgCRLCkuD9cMk/view?usp=sharing" className="inline-block ml-4" target="blank">
              <PrimaryBtn>
                <span>Resume</span>
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>
            </a>
          </ul>
          <div className="block lg:hidden">
            <button className="btn btn-ghost text-white" onClick={toggleDrawer}>
              <RiMenu3Fill/>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#2f3939" }}
              className="flex flex-col justify-between pb-4"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <RiCloseFill
                    className="cursor-pointer hover:text-primary text-xl duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                  ></RiCloseFill>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center text-white hover:text-primary duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="text-center m-4">
                  <a href="https://drive.google.com/file/d/1OcBIbkevdIpzLZEgk8ylgCRLCkuD9cMk/view?usp=sharing" className="inline-block w-full" target="blank">
                    <PrimaryBtn className="primary-button w-full text-white">
                      <span>Resume</span>
                      <span>
                        <FaDownload />
                      </span>
                    </PrimaryBtn>
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-[#E2DFD2]">
                  &copy; Copyright 2024, Srikant Sahu. <br /> All Rights Reserved
                </p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
