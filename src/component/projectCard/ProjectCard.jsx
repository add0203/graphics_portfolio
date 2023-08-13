import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ img, link, projectName, detail }) => {
  return (
    <div className="project-card-container">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="img" />
      </a>
      <div className="desc">
        <h3>{projectName}</h3>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
