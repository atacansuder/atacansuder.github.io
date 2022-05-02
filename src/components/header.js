import { HashLink } from "react-router-hash-link";
import "./header.css";

function Header() {
  return (
    <header className="header_container">
      <nav className="nav">
        <HashLink className="router_link" to="#home">
          <span className="link">Home</span>
        </HashLink>
        <HashLink className="router_link" to="#about">
          <span className="link">About</span>
        </HashLink>
        <HashLink className="router_link" to="#experience">
          <span className="link">Experience</span>
        </HashLink>
        <HashLink className="router_link" to="#projects">
          <span className="link">Projects</span>
        </HashLink>
      </nav>
    </header>
  );
}

export default Header;
