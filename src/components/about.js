import "./about.css";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

function About() {
  return (
    <section className="about_container" id="about">
      <div className="banner">
        <h1 className="name_header">Atacan Süder</h1>
        <h3 className="profession_header">Frontend Developer</h3>
        <br />
        <ul className="socials">
          <li>
            <a className="social_link" href="https://github.com/atacansuder">
              <BsGithub size={24} />
            </a>
          </li>
          <li>
            <a
              className="social_link"
              href={"https://www.linkedin.com/in/atacan-s%C3%BCder-1088b81b8/"}
            >
              <BsLinkedin size={24} />
            </a>
          </li>
          <li>
            <a className="social_link" href={"mailto: atacansuderr@gmail.com"}>
              <BsEnvelopeFill size={24} />
            </a>
          </li>
        </ul>
        <div className="info" id="about">
          <p className="me_info">
            I am a software developer currently working at mgm technology partners as a frontend developer. I always wanted to study a computer related field and
            become a game developer thanks to my love for video games. However, my interests shifted towards frontend development during my studies after working about usability and seeing that frontend development presents rather different challenges to developers such as creating user friendly interfaces, which actually seems easier than it is.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
