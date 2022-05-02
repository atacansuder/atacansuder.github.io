import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Experiences from "./components/experiences";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <About id="about" />
      <Experiences id="experience" />
      <Projects id="projects" />
    </div>
  );
}

export default App;
