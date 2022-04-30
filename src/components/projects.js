import "./projects.css";
import Project from "./project";

import projects from "../data/projects_data";

function Projects() {
  return (
    <div className="projects__container" id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects_container">
        {projects.map((p, index) => {
          return (
            <Project
              data={p}
              key={index}
              isLastElement={projects.length - 1 === index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
