import React, { useState, useEffect } from "react";
import "./assets/Testimonials.css";

const example_testimonials = [
    {
        name: 'Elena Pérez',
        text: 'Me encanta la calidad de los productos, son muy bonitos y elegantes.',
        instagram: '@elenaperez',
    },
    {
        name: 'Carlos García',
        text: 'La atención al cliente es excelente, siempre están dispuestos a ayudar.',
        instagram: '@carlosgarcia',
    },
    {
        name: 'María López',
        text: 'Los productos llegaron en perfecto estado y en tiempo récord.',
        instagram: '@marialopez',
    },
    {
        name: 'Juan Martínez',
        text: 'La calidad de los productos es excelente, volveré a comprar.',
        instagram: '@juanmartinez',
    },
];

const TestimonialsSlide = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((active + 1) % example_testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [active]);

    return (
        <div className="testimonials-slide">
            <div className="testimonials-container">
                <div className="testimonials-text">
                    <p>{example_testimonials[active].text}</p>
                    <h3>{example_testimonials[active].name}</h3>
                    <p>{example_testimonials[active].instagram}</p>
                </div>
                <div className="testimonials-dots">
                    {example_testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={index === active ? "dot active" : "dot"}
                            onClick={() => setActive(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSlide;
