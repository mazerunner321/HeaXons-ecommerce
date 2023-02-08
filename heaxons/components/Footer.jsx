import React from "react";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 @Heaxons All Rights Reserved </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineGithub />
      </p>
    </div>
  );
};

export default Footer;
