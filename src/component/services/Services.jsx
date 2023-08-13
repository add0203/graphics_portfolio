import React from "react";
import "./Services.scss";
import soft1 from "../../assets/image/software1.png";
import soft2 from "../../assets/image/software2.png";
import soft3 from "../../assets/image/software3.png";
import service1 from "../../assets/image/visiting-card.png";
import service2 from "../../assets/image/advertising.png";
import service3 from "../../assets/image/drawing.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="upper">
        <img src={soft1} alt="" />
        <img src={soft2} alt="" />
        <img src={soft3} alt="" />
      </div>
      <div className="below">
        <div className="service">
          <div className="img">
            <img src={service1} alt="" />
          </div>
          <h3>Visiting Card</h3>
        </div>
        <div className="service">
          <div className="img">
            <img src={service2} alt="" />
          </div>
          <h3>Banner</h3>
        </div>
        <div className="service">
          <div className="img">
            <img src={service3} alt="" />
          </div>
          <h3>Logo design</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
