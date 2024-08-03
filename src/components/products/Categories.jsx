import React, { useState, useEffect } from "react";
import "./assets/Products.css";

const categories = [
    {
        name: "Anillos",
        image: "https://cindyalvarez.com.co/cdn/shop/files/3-2_814x_crop_center.webp?v=1708535869",
    },
    {
        name: "Collares",
        image: "https://cindyalvarez.com.co/cdn/shop/files/103_cd41145a-e158-4103-85b2-dc0a69897ea4_814x_crop_center.webp?v=1720628040",
    },
    {
        name: "Pulseras",
        image: "https://cindyalvarez.com.co/cdn/shop/files/5_7c1dfbf4-181a-45a0-aa30-eea6cacc213e_814x_crop_center.webp?v=1719676500",
    },
    {
        name: "Aretes",
        image: "https://cindyalvarez.com.co/cdn/shop/files/4_bf7e4e64-04b7-4abf-8fa6-41e4514ac526_814x_crop_center.webp?v=1708459343",
    },
];

const Categories = () => {
    return (
        <div className="categories">
            {categories.map((category, index) => (
                <div key={index} className="category">
                    <img src={category.image} alt="category_img" />
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Categories;