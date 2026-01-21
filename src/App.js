import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Home from "./component/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Portfolio from "./component/Portfolio.jsx";
import Skills from "./component/Skills.jsx";
import SocialLinks from "./component/SocialLinks.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-5rem)]">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
