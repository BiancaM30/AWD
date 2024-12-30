import React from "react";
import '../styles/general.css';
import '../styles/landingPage.css';
import '../styles/dotsNavigation.css';
import backgroundImage from "../assets/landing_page.jpg"; 

const LandingPage = () => {
  const scrollToSection = () => {
    const section = document.getElementById("what-is-creativity");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="landing-page"
      className="landing-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="content-wrapper">
        <h1 className="main-title">
          What Does <span className="highlight">Creativity</span> Mean to You?
        </h1>
        <p className="main-subtitle">
          Discover how creativity shapes the world, one idea at a time.
        </p>
        <button className="btn-explore" onClick={scrollToSection}>
          Start Your Journey
        </button>
      </div>

      <div className="moving-bar">
        <div className="responses">
          <span>Creativity is turning imagination into reality. — Artist</span>
          <span>It’s finding beauty in everyday moments. — Photographer</span>
          <span>To me, it’s expressing emotions without words. — Dancer</span>
          <span>Creativity is innovation that drives the future. — Entrepreneur</span>
          <span>It’s the art of crafting elegant solutions to complex challenges. — Programmer</span>
          <span>It’s seeing the extraordinary in the ordinary. — Writer</span>
          <span>Creativity is designing the world we want to live in. — Architect</span>
          <span>It’s connecting dots no one else sees. — Thinker</span>
          <span>Creativity is courage and curiosity combined. — Child</span>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
