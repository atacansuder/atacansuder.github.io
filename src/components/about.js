import "./about.css";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

function About() {
  return (
    <section className="about_container" id="about">
      <div className="banner">
        <h1 className="name_header">Atacan Süder</h1>
        <h3 className="profession_header">Computer Science Student</h3>
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
            <a className="social_link" href={"mailto: s6aasued@uni-bonn.de"}>
              <BsEnvelopeFill size={24} />
            </a>
          </li>
        </ul>
        <div className="info" id="about">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHps7mVYcYLSw/profile-displayphoto-shrink_800_800/0/1634231764580?e=1656547200&v=beta&t=un05gW83Pfy34HNFnmQjOZkdxB8-GSbSmk09JePiugs"
            height={100}
            width={100}
            className="me"
          />
          <p className="me_info">
            I am a computer science student currently studying at the University
            of Bonn. I always wanted to study a computer related field and
            become a game developer thanks to my love for video games. However,
            lately my interests shifted towards web and mobile app development.
            I am currently working at Coreva Scientific as an IT Assistant.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
