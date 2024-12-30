import React, { useRef, useState } from "react";
import '../styles/general.css';
import '../styles/creativityLab.css';


const CreativityLab = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    context.beginPath();
    context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    context.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section id="creativity-lab" className="container py-5">
            <div className="page-separator"></div>

      <div className="headline">
          <h1>Creativity Lab</h1>
          <h2>Got a creative spark? Let your imagination flow on the canvas below.</h2>
        </div>
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        ></canvas>
        <div className="canvas-tools text-center mt-3">
          <button className="btn btn-primary me-2" onClick={clearCanvas}>
            Clear Canvas
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativityLab;
