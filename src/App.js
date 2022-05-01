import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <About id="about" />
      <Projects id="projects" />
    </div>
  );
}

export default App;
