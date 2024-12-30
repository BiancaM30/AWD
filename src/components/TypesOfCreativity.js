import React from "react";
import "../styles/general.css";
import "../styles/typesOfCreativity.css";
import brainImage from "../assets/landing_page.jpg";

const creativityTypes = [
  {
    title: "Deliberate and Cognitive",
    description:
      "This type of creativity relies on deliberate thought and existing knowledge, often seen in inventors like Thomas Edison. It involves methodical research, experimentation, and refinement.",
  },
  {
    title: "Deliberate and Emotional",
    description:
      "This creativity comes from emotional introspection, often leading to insights during reflection. It involves time spent thinking deeply about personal experiences or challenges.",
  },
  {
    title: "Spontaneous and Cognitive",
    description:
      "This type arises when the subconscious mind combines knowledge to create new ideas. It often happens during unrelated activities, like Newton's discovery of gravity.",
  },
  {
    title: "Spontaneous and Emotional",
    description:
      "Highly emotional and spontaneous creativity, often linked to art or music. It feels like an epiphany and can produce deeply impactful works.",
  },
];

const TypesOfCreativity = () => {
  return (
    <section
      id="types-of-creativity"
      style={{
        backgroundImage: `url(${brainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "50px 0",
      }}
    >
      <div className="container text-center">
        <header className="mb-5">
          <h1>Discovering Creativity</h1>
          <p>
            A journey through the neuroscience of creativity, inspired by the
            groundbreaking work of Arne Dietrich. In this pioneering book, Dietrich explores the neurobiological basis of creativity, demystifying the "right-brain" theory and presenting creativity as a whole-brain phenomenon.
          </p>
        </header>

        <h2 className="mb-4">The Types of Creativity</h2>
        <div className="row justify-content-center">
          {creativityTypes.map((type, index) => (
            <div key={index} className="col-md-5 m-2">
              <div className="creativity-card p-4">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfCreativity;
