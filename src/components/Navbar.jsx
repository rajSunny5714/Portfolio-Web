import React from 'react'
import logo from "../assets/sunnyRajLogo.jpg";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 rounded-[20%]" src={logo} alt="logo" />
    </div>
    <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-2xl lg:mt-0">
        <a
          href="https://www.linkedin.com/in/sunny-raj-299401273/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-blue-400 transition duration-200">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rajSunny5714"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-gray-400 transition duration-200">
          <FaGithub />
        </a>
        <a
          href="https://x.com/sunnyraj_21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="hover:text-blue-500 transition duration-200">
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/mr.rj_sunny/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="hover:text-pink-400 transition duration-200">
          <FaInstagram />
        </a>
      </div>
    </nav>
};

export default Navbar;


