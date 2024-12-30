import React from "react";
import "../styles/general.css";
import "../styles/carouselSection.css";
import "../styles/whatIsCreativity.css"; 
import albertEinstein from "../assets/einstein.jpg"; 
import britishCouncil from "../assets/british-council.jpg"; 
import edwardDeBono from "../assets/edward.jpg"; 
import oxfordDictionary from "../assets/oxford.jpg"; 
import latinImage from "../assets/latin.jpg";

const WhatIsCreativity = () => {
  return (
    <section id="what-is-creativity" className="creativity-section">
      <div className="container">
        <div className="headline">
          <h1>The Origin of Creativity</h1>
          <h2>From Ancient Roots to Modern Insights</h2>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={latinImage} alt="Collage depicting the origin of creativity" className="collage-image"/>
          </div>
          <div className="text-container">
            <h3>
              <span className="highlight">Origin</span> and Historical Context
            </h3>
            <p>
              The term <strong>creativity</strong> stems from the Latin verb <em>creare</em>,
              meaning "to create" or "to bring forth." Historically, creativity was often associated with
              divine inspiration. In ancient Greece, art was seen as a form of imitation rather than
              creation. It wasn't until the Renaissance that the concept evolved, recognizing human
              potential to innovate and create beyond mere imitation.
            </p>
            <p>
              By the 19th century, the notion of creativity expanded beyond the arts, encompassing
              scientific innovation and problem-solving, reflecting a broader understanding of human
              ingenuity.
            </p>
          </div>
        </div>

        <h2 className="text-center mt-5 mb-4">Definitions of Creativity</h2>
        <div id="creativityCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-content">
                <img src={albertEinstein} alt="Albert Einstein" className="carousel-image" />
                <p className="carousel-text">
                  "Creativity is intelligence having fun." — Albert Einstein
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img src={britishCouncil} alt="British Council" className="carousel-image" />
                <p className="carousel-text">
                  "Creativity is the act of turning new and imaginative ideas into reality." — British Council
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img src={edwardDeBono} alt="Edward de Bono" className="carousel-image" />
                <p className="carousel-text">
                  "Creativity involves breaking out of established patterns to look at things in a different way."
                  — Edward de Bono
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img src={oxfordDictionary} alt="Oxford Dictionary" className="carousel-image" />
                <p className="carousel-text">
                  "The use of imagination or original ideas to create something." — Oxford Dictionary
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#creativityCarousel"
            data-bs-slide="prev"
            aria-label="Previous"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#creativityCarousel"
            data-bs-slide="next"
            aria-label="Next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default WhatIsCreativity;

