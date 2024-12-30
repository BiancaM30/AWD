import React from "react";
import '../styles/general.css';
import '../styles/myCreativity.css';
import colmar from "../assets/Colmar.jpg";
import eze from "../assets/Eze.jpg";
import flamingo from "../assets/flamingo.jpg";
import luvru from "../assets/Luvru.jpg";
import madrid from "../assets/Madrid.jpg";
import menton from "../assets/Menton.jpg";
import monalisa from "../assets/Monalisa.jpg";
import paris from "../assets/Parisjpg.jpg";
import roma from "../assets/Roma.jpg";
import strasbourg from "../assets/Strasbourg.jpg";

const CreativityThroughYourEyes = () => {
    return (
        <section className="fullscreen-section">
            <div className="page-separator"></div>
            <div className="testimonial-container">
                <h2 className="section-title">What Creativity Means to Me</h2>
                <p className="testimonial-text">
                    Travel is my greatest source of inspiration. Each destination tells a unique story through its architecture—humanity’s most distinct fingerprint. From the intricate details of historic cathedrals to the sleek lines of modern design, architecture reflects the creativity and culture of those who built it.
                </p>
                <p className="testimonial-text">
                    Art and culture are equally captivating. Visiting museums or simply wandering the streets of a new city allows me to discover unexpected beauty—whether it’s a hidden mural on a side alley or a local artisan’s craft. I like to capture these moments through photography, always seeking creative ways to frame a story through my lens. Every photograph becomes more than an image; it’s a memory, a perspective, and a reflection of how I see the world.
                </p>
            </div>

            <div className="carousel-container">
                <div id="travelCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={eze} className="carousel-image" alt="Eze" />
                        </div>
                        <div className="carousel-item">
                            <img src={flamingo} className="carousel-image" alt="Flamingo" />
                        </div>
                        <div className="carousel-item">
                            <img src={madrid} className="carousel-image" alt="Madrid" />
                        </div>
                        <div className="carousel-item">
                            <img src={menton} className="carousel-image" alt="Menton" />
                        </div>
                        <div className="carousel-item">
                            <img src={monalisa} className="carousel-image" alt="Mona Lisa" />
                        </div>
                        <div className="carousel-item">
                            <img src={paris} className="carousel-image" alt="Paris" />
                        </div>
                        <div className="carousel-item">
                            <img src={luvru} className="carousel-image" alt="Louvre" />
                        </div>
                        <div className="carousel-item">
                            <img src={roma} className="carousel-image" alt="Rome" />
                        </div>
                        <div className="carousel-item active">
                            <img src={colmar} className="carousel-image" alt="Colmar" />
                        </div>
                        <div className="carousel-item">
                            <img src={strasbourg} className="carousel-image" alt="Strasbourg" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#travelCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#travelCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CreativityThroughYourEyes;
