import React from "react";

import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

import { logo } from "../assets";
import "./social.css";
import urls from "../constants/urls";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex flex-row w-full mb-10 pt-3 justify-end social">
        <div>
          <a href={urls.twitter} target="_blank">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href={urls.github} target="_blank">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href={urls.linkedin} target="_blank">
            <BsLinkedin />
          </a>
        </div>
      </nav>

      <h1 className="head_text">
        Simplify your reading with <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          GPT-4 summarization
        </span>
      </h1>
      <h2 className="desc">
        Get quick and accurate summaries of any text or webpage with our tool
        <br /> Say goodbye to information overload and hello to streamlined
        content
      </h2>
    </header>
  );
};

export default Header;
