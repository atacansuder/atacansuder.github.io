import "./experiences.css";
import Experience from "./experience";

import experiences from "../data/experiences_data";

function Experiences() {
  return (
    <div className="projects__container" id="experience">
      <h1 className="title">Experience</h1>
      <div className="projects_container">
        {experiences.map((e, index) => {
          return (
            <Experience
              data={e}
              key={index}
              isLastElement={experiences.length - 1 === index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
