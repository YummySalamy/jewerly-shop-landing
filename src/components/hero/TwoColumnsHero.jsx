import React, {useState, useEffect} from "react";
import "./assets/Hero.css";

const TwoColumnsHero = () => {
    return (
        <div className="two-columns-hero">
            <div className="left-column">
                <h1>Nueva colección</h1>
                <p>
                    Nuestra más reciente colección de joyería está disponible ahora.
                    Descubre los nuevos productos de la temporada y encuentra el regalo perfecto.
                </p>
                <button
                    className="cta"
                >Comprar ahora</button>
            </div>
            <div className="right-column">
                <img 
                    className="hero-image"
                    src="https://w0.peakpx.com/wallpaper/57/462/HD-wallpaper-models-model-earrings-girl-indian-jewelry-necklace-woman.jpg" 
                    alt="placeholder" 
                />
            </div>
        </div>
    );
}

export default TwoColumnsHero;