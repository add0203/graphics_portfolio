import React from "react";
import "./ReviewCard.scss";
import Star from "../star/Star";

const ProjectCard = ({ img, head, subHead, starCount }) => {
  return (
    <div className="review-card-container">
      <h3>{head}</h3>
      <div className="user">
        <img src={img} alt="" />
        <div className="desc">
          <Star />
          <p>{subHead}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
