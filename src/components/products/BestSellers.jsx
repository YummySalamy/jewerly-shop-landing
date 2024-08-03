import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./assets/Products.css";

const best_sellers = [
    {
        name: "Anillo de compromiso",
        image: "https://cindyalvarez.com.co/cdn/shop/files/CA0212_375x_crop_center.jpg?v=1713629260",
    },
    {
        name: "Collar de perlas",
        image: "https://cindyalvarez.com.co/cdn/shop/files/CHO096_375x_crop_center.jpg?v=1697555483",
    },
    {
        name: "Pulsera de oro",
        image: "https://cindyalvarez.com.co/cdn/shop/files/CA0304_375x_crop_center.jpg?v=1711809440",
    },
    {
        name: "Aretes de diamantes",
        image: "https://cindyalvarez.com.co/cdn/shop/files/CHO156_2_375x_crop_center.webp?v=1708537992",
    },
    {
        name: "Anillo de plata",
        image: "https://www.jewelers.org/images/default-source/education/gemstones/rings.jpg?sfvrsn=2",
    },
    {
        name: "Collar de oro",
        image: "https://www.jewelers.org/images/default-source/education/gemstones/necklaces.jpg?sfvrsn=2",
    },
    {
        name: "Pulsera de plata",
        image: "https://www.jewelers.org/images/default-source/education/gemstones/bracelets.jpg?sfvrsn=2",
    },
    {
        name: "Aretes de oro",
        image: "https://www.jewelers.org/images/default-source/education/gemstones/earrings.jpg?sfvrsn=2",
    },
    {
        name: "Anillo de diamantes",
        image: "https://www.jewelers.org/images/default-source/education/gemstones/rings.jpg?sfvrsn=2",
    },
    {
        name: "Collar de plata",
        image: "https://www.jewelers.org/images/default-source/education/gemstones/necklaces.jpg?sfvrsn=2",
    },
];

const BestSellers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(best_sellers.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="best-sellers-container">
            <h1>Los más vendidos</h1>
            <p>Descubre los productos más populares de nuestra tienda</p>
            <div className="carousel">
                <button className="carousel-button prev" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
                <div className="best-sellers">
                    {best_sellers.map((product, index) => (
                        <div
                            key={index}
                            className="product"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <img src={product.image} alt="product_img" />
                            <h2>{product.name}</h2>
                        </div>
                    ))}
                </div>
                <button className="carousel-button next" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default BestSellers;