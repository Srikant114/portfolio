import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#2f3939" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a href="/" className="inline-block mx-2">
            <FaGithub className="text-2xl text-neutral hover:text-[#fff]" />
          </a>
          <a href="/" className="inline-block mx-2">
            <FaLinkedin className="text-2xl text-neutral hover:text-[#0077b5]" />
          </a>
          <a href="/" className="inline-block mx-2">
            <FaTwitter className="text-2xl text-neutral hover:text-[#1da1f2]" />
          </a>
          <a href="/" className="inline-block mx-2">
            <FaInstagram className="text-2xl text-neutral hover:text-[#c13584]" />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center mb-6 flex-wrap">
          <a
            href="https://medium.com/@srikantsahu114"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mx-6 text-neutral hover:text-white"
          >
            Medium
          </a>
          <a
            href="https://dribbble.com/srikant114"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mx-6 text-neutral hover:text-white"
          >
            Dribble
          </a>
          <a
            href="https://dev.to/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mx-6 text-neutral hover:text-white"
          >
            Dev.Io
          </a>
          <a
            href="https://drive.google.com/file/d/1RbIE-g7Nsj_kvOkOy3EQQIW7SlusRXt3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mx-6 text-neutral hover:text-white"
          >
            Resume
          </a>
        </div>
        <div className="w-full h-[2px] bg-gray-600" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by
            <a
              href="https://www.linkedin.com/in/srikantsahu114/"
              className="text-primary hover:underline"
              target="blank"
            >
              Srikant Sahu
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
