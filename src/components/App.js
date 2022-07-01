import Contact from "./Contact.js";
import Introduction from "./Introduction.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
