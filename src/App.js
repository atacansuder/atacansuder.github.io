import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
