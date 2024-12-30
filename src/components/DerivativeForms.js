import React, { useState } from "react";
import "../styles/general.css";
import "../styles/derivativeForms.css";
import collageImage from "../assets/hand.jpg";

const DerivativeForms = () => {
  const [selectedWord, setSelectedWord] = useState("Create");

  const wordDetails = {
    Create: {
      title: "Create",
      narrative: `
        Every great endeavor begins with the act of creation. To create is to take an idea, fragile as a whisper, and give it life. 
        It's in the sketch of a groundbreaking invention, the first sentence of a novel, or the initial brushstroke on a canvas. 
        Creation is the courage to start.
      `,
      definition: "To bring something into existence.",
      example: "Imagine crafting a melody that moves millions or building an app that simplifies lives."
    },
    Creative: {
      title: "Creative",
      narrative: `
        Being creative is more than just making things; it’s a mindset. It's seeing possibilities where others see limits, 
        finding beauty in the mundane, and solving challenges with ingenuity. Creativity shapes how we approach the world and leaves room for wonder.
      `,
      definition: "Relating to or involving the imagination.",
      example: "Picture a marketing team turning a simple product into a cultural phenomenon, or an architect designing a space that feels like home."
    },
    Creator: {
      title: "Creator",
      narrative: `
        Behind every innovation, there is a creator—a person who transforms inspiration into reality. Creators are storytellers, inventors, and visionaries. 
        They imagine what could be and take bold steps to make it happen, leaving their mark on the world.
      `,
      definition: "One who creates.",
      example: "Think of a YouTuber crafting videos that educate or entertain, or a developer coding the next big thing in tech."
    },
    Creation: {
      title: "Creation",
      narrative: `
        Creation is the culmination of effort and imagination—the final form of an idea brought to life. From awe-inspiring landmarks to heartfelt works of art, 
        creations are the legacies that outlive their creators, inspiring generations to come.
      `,
      definition: "The act of creating or what is created.",
      example: "The Eiffel Tower stands not just as a structure but as a testament to human ingenuity and the power of imagination."
    }
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  return (
    <section id="derivative-forms" className="container py-5">
      <div className="page-separator"></div>

      <div className="headline">
        <h1>The Power of Words</h1>
        <h2>
        To create, to be creative, to become the creator of a creation.
        </h2>
      </div>
      <div className="d-flex flex-wrap align-items-start">
        <div className="col-md-6">
          <div className="d-flex justify-content-start flex-wrap mb-4">
            {Object.keys(wordDetails).map((word) => (
              <button
                key={word}
                className={`word-button m-2 ${selectedWord === word ? "active" : ""}`}
                onClick={() => handleWordClick(word)}
              >
                {word}
              </button>
            ))}
          </div>
          <div className="word-details p-4 rounded shadow-sm">
            <h3>{wordDetails[selectedWord].title}</h3>
            <p><strong></strong> {wordDetails[selectedWord].narrative}</p>
            <p><strong>Definition:</strong> {wordDetails[selectedWord].definition}</p>
            <p><strong>Example:</strong> {wordDetails[selectedWord].example}</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={collageImage} alt="Creativity Collage" className="img-fluid rounded smaller-image" />
        </div>
      </div>
    <div className="page-separator"></div>
    </section>
  );
};

export default DerivativeForms;
