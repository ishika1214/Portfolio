import React, { useState } from "react";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Home from "./component/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Portfolio from "./component/Portfolio.jsx";
import Skills from "./component/Skills.jsx";
import SocialLinks from "./component/SocialLinks.jsx";
import AestheticNotes from "./component/AestheticNotes.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject === 'aesthetic-notes') {
    return <AestheticNotes onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-5rem)]">
        <Home />
        <About />
        <Portfolio onSelectProject={setSelectedProject} />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
