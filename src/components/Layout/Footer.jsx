import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Divya chaudhary.</div>
      <div>
        <Link to={"https://t.me/divyajulychaudhary"} target="_blank">
          <FaTelegram />
        </Link>
        <Link to={"https://github.com/divya16chaudhary"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/divya-chaudhary-abc760766"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/divyachaudhary31?igsh=d2xpMWo4Z296NmM1"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
