import React, { useState, useEffect } from "react";
import "./assets/Headers.css";
const header_elements = [
    {
        name: "Principal",
        link: "/",
    },
    {
        name: "Productos",
        link: "/products",
    },
    {
        name: "Nuevo",
        link: "/products/new",
    },
    {
        name: "Acerca de",
        link: "/about",
    },
    {
        name: "Contacto",
        link: "/contact",
    },
];

const BasicHeader = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const path = window.location.pathname;
        const index = header_elements.findIndex((element) => element.link === path);
        setActive(index);
    }, []);

    return (
        <div className="basic-header">
            {header_elements.map((element, index) => (
                <a
                    key={index}
                    // href={element.link}
                    className={index === active ? "header-element active" : "header-element"}
                    onClick={() => setActive(index)}
                >
                    {element.name}
                </a>
            ))}
        </div>
    );
}

export default BasicHeader;
