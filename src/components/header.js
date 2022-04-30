import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header_container">
      <nav className="nav">
        <Link className="router_link" to="#home">
          <span className="link">Home</span>
        </Link>
        <Link className="router_link" to="#about">
          <span className="link">About</span>
        </Link>
        <Link className="router_link" to="#projects">
          <span className="link">Projects</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
