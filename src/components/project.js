import "./project.css";
import { BsLink45Deg } from "react-icons/bs";

function Project(props) {
  return (
    <div
      className={props.isLastElement ? "container_last" : "project_container"}
    >
      <h3 className="project_title">{props.data.title}</h3>
      <small className="technologies">
        {props.data.technologies.join(", ")}
      </small>
      {props.data.description.split("\n").map((t) => {
        return (
          <p className="description" key={t}>
            {t}
          </p>
        );
      })}
      {props.data.links.length !== 0
        ? props.data.links.map((link) => {
            return (
              <a className="link" href={link.link} key={link.label}>
                <BsLink45Deg />
                {link.label !== "" ? link.label : link.link}
              </a>
            );
          })
        : null}
    </div>
  );
}

export default Project;
