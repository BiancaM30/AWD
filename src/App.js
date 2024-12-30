import React, { useState, useCallback, useMemo } from "react";
import LandingPage from "./components/LandingPage";
import WhatIsCreativity from "./components/WhatIsCreativity";
import TypesOfCreativity from "./components/TypesOfCreativity";
import DerivativeForms from "./components/DerivativeForms";
import CreativityThroughYourEyes from "./components/CreativityThroughYourEyes";
import VoicesOfCreativity from "./components/VoicesOfCreativity";
import CreativityLab from "./components/CreativityLab";

const App = () => {
  const [activeSection, setActiveSection] = useState("landing-page");

  // Memoize the sections array to avoid unnecessary recreation
  const sections = useMemo(
    () => [
      "landing-page",
      "what-is-creativity",
      "derivative-forms",
      "types-of-creativity",
      "voices-of-creativity",
      "creativity-eyes",
      "creativity-lab",
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
    setActiveSection(currentSection);
  }, [sections]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <LandingPage />
      <div id="what-is-creativity">
        <WhatIsCreativity />
      </div>
      <div id="derivative-forms">
        <DerivativeForms />
      </div>
      <div id="types-of-creativity">
        <TypesOfCreativity />
      </div>
      <div id="voices-of-creativity">
        <VoicesOfCreativity />
      </div>
      <div id="creativity-eyes">
        <CreativityThroughYourEyes />
      </div>
      <div id="creativity-lab">
        <CreativityLab />
      </div>
      <div className="dots-navigation">
        {sections.map((section) => (
          <div
            key={section}
            className={`dot ${section === activeSection ? "active" : ""}`}
            onClick={() => {
              document.getElementById(section).scrollIntoView({ behavior: "smooth" });
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
