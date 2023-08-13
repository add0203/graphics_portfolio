import React from "react";
import { projects } from "../../data";
import ProjectCard from "../projectCard/ProjectCard";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work-container">
      <div className="heading">My Work</div>
      <div className="work-body">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            img={item.img}
            projectName={item.projectName}
            detail={item.detail}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
