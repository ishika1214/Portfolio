import React, { useEffect, useState } from "react";
import About from "./component/About.jsx";
import CaseStudy from "./component/CaseStudy.jsx";
import Collaboration from "./component/Collaboration.jsx";
import Contact from "./component/Contact.jsx";
import Experience from "./component/Experience.jsx";
import Home from "./component/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Portfolio from "./component/Portfolio.jsx";
import Skills from "./component/Skills.jsx";
import SocialLinks from "./component/SocialLinks.jsx";
import { enquiryTopics, projects } from "./data/portfolio";

// Case studies live at hash URLs (e.g. #/projects/task-manager) so they can be
// linked to directly and work with the browser back button on GitHub Pages.
const CASE_STUDY_PREFIX = "#/projects/";
const DEFAULT_TITLE = document.title;

const projectFromHash = () => {
  const { hash } = window.location;
  if (!hash.startsWith(CASE_STUDY_PREFIX)) return null;
  return projects.find((p) => p.id === hash.slice(CASE_STUDY_PREFIX.length)) || null;
};

function App() {
  const [selectedProject, setSelectedProject] = useState(projectFromHash);
  const [contactTopic, setContactTopic] = useState(enquiryTopics[0].label);

  useEffect(() => {
    const onHashChange = () => setSelectedProject(projectFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // When returning from a case study, restore the page title and scroll to the target section.
  useEffect(() => {
    if (selectedProject) return;
    document.title = DEFAULT_TITLE;
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [selectedProject]);

  if (selectedProject) {
    return (
      <CaseStudy
        project={selectedProject}
        onBack={() => {
          window.location.hash = "projects";
        }}
      />
    );
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-rose-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
        <About />
        <Experience />
        <Portfolio
          onSelectProject={(id) => {
            window.location.hash = `${CASE_STUDY_PREFIX.slice(1)}${id}`;
          }}
        />
        <Skills />
        <Collaboration onEnquire={() => setContactTopic(enquiryTopics[1].label)} />
        <Contact topic={contactTopic} onTopicChange={setContactTopic} />
      </main>
      <SocialLinks />
    </>
  );
}

export default App;
