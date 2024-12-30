import React from "react";
import "../styles/general.css";
import "../styles/voicesOfCreativity.css";
import painterImg from "../assets/painter.jpg";
import doctorImg from "../assets/doctor.jpg";
import writerImg from "../assets/writer.jpg";
import dancerImg from "../assets/dancer.jpg";

const VoicesOfCreativity = () => {
  const testimonials = [
    {
      name: "Painter",
      quote: `
        Art has always been my sanctuary, my escape, and my voice. 
        With every brushstroke, I find a way to express emotions that words often fail to convey. 
        Painting, for me, is not just a profession; it’s a form of therapy, a journey inward.
        
        In my studio, the canvases tell countless stories. Some are vibrant and joyous, 
        while others are somber and reflective. This dynamic relationship between creation 
        and emotion keeps me grounded. To paint is to connect deeply with one’s humanity, 
        to translate fleeting moments into something eternal.
      `,
      image: painterImg,
      align: "left",
    },
    {
      name: "Doctor",
      quote: `
        To me, creativity in medicine is about finding innovative ways to save lives and improve the human experience. 
        Every diagnosis, procedure, and patient interaction is an opportunity to think outside the box. 
        Medicine is as much an art as it is a science, blending knowledge with intuition.
        
        Beyond the operating room, creativity manifests in empathy and communication. 
        Each patient is unique, and connecting with them requires understanding their stories and fears. 
        My journey as a doctor has taught me that creativity is the key to innovation, healing, and hope.
      `,
      image: doctorImg,
      align: "right",
    },
    {
      name: "Writer",
      quote: `
        Words are my palette, and stories are the art I create. Writing allows me to craft worlds where anything is possible. 
        Through my words, I aim to evoke emotions, challenge perspectives, and provide solace to readers who may find themselves reflected in my characters.
        
        The beauty of writing lies in its universality; it’s a medium that bridges cultures and time periods. 
        Each story I write teaches me something new about myself and the world around me. Writing is as much a discipline as it is an art.
      `,
      image: writerImg,
      align: "left",
    },
    {
      name: "Ballet Dancer",
      quote: `
        Dance is my silent language. It’s how I express my emotions, my struggles, and my triumphs without uttering a single word. 
        Each pirouette, leap, and plié carries a story that connects me with my audience.
        
        On stage, under the spotlight, I feel an overwhelming sense of freedom, as though I am soaring beyond the confines of the world. 
        Behind the elegance of a performance lies countless hours of dedication, practice, and pain. Ballet teaches resilience—how to embrace imperfections, push through discomfort, and strive for excellence.
      `,
      image: dancerImg,
      align: "right",
    },
  ];

  return (
    <section id="voices-of-creativity" className="container py-5">
      <div className="page-separator"></div>
      <div className="headline">
        <h1>Voices of Creativity</h1>
        <h2>
          What does creativity look like through the eyes of a painter, a doctor, a writer, or a dancer? 
          Step into the world of creativity and uncover how it fuels passion, innovation, and self-expression in ways you might never have imagined.
        </h2>
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial d-flex ${
              testimonial.align === "left" ? "flex-row" : "flex-row-reverse"
            } mb-5`}
            key={index}
          >
            <div className="image-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <div className="quote-container">
              <p>{testimonial.quote}</p>
              <p className="text-end">
                <strong>- {testimonial.name}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VoicesOfCreativity;
