import React from "react";
import "./Footer.scss";
import linkImg from "../../assets/image/linkedin.svg";
import twitterImg from "../../assets/image/twitter.svg";
import instaImg from "../../assets/image/instagram.svg";
import gitImg from "../../assets/image/github.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <a href="https://www.linkedin.com/in/anand-dhar-dwivedi-90662b248">
          <img src={linkImg} alt="" />
        </a>
        <a href="https://twitter.com/ananddhar7985">
          <img src={twitterImg} alt="" />
        </a>
        <a href="https://www.instagram.com/anand_aka_add/?hl=en">
          <img src={instaImg} alt="" />
        </a>
        <a href="https://github.com/add0203">
          <img src={gitImg} alt="" />
        </a>
      </div>
      <div className="bottom">
        Created with ❤️ by{" "}
        <a
          href="https://anand-dhar-dwivedi.vercel.app/"
          style={{ textDecoration: "none", color: "#313131" }}
        >
          Anand Dhar Dwivedi
        </a>{" "}
        - Copyright ©️ 2023
      </div>
    </div>
  );
};

export default Footer;
