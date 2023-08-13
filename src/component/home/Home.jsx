import React from "react";
import "./Home.scss";
import homeImg from "../../assets/image/home-img.png";
import Services from "../services/Services";
import Work from "../work/Work";
import Review from "../reviews/Review";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="left">
          <div className="intro">
            <div className="heading">
              <h3>Graphics Design | UI/UX</h3>
            </div>
            <div className="my-name">
              <h1>Hello, I am Anand...</h1>
            </div>
            <div className="desc">
              Newbie crafting freelance<br></br>Graphics.
            </div>
          </div>
        </div>
        <div className="right">
          <img src={homeImg} alt="" />
        </div>
      </div>
      <Services />
      <Work />
      <Review />
      <Contact />
    </>
  );
};

export default Home;
