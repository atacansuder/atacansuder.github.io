import "./experience.css";
import { BsLink45Deg } from "react-icons/bs";

function Experience(props) {
  return (
    <div
      className={props.isLastElement ? "container_last" : "project_container"}
    >
      <h3 className="project_title">
        {props.data.position + " - " + props.data.title}
      </h3>
      <small className="technologies">{props.data.date}</small>
      <ul className="experience_tasks">
        {props.data.tasks.map((t) => {
          return <li key={t}>{t}</li>;
        })}
      </ul>
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

export default Experience;
