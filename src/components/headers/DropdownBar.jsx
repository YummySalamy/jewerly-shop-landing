import React, {useState, useEffect} from "react";
import "./assets/Headers.css";

const elements = [
    {
        name: "Inicio",
        link: "/",
    },
    {
        name: "Productos",
        link: "/products",
    },
    {
        name: "Contacto",
        link: "/contact",
    },
    {
        name: "Acerca de",
        link: "/about",
    },
    {
        name: "Admin",
        link: "/admin/login",
    },
];

const DropdownBar = ({ toggleMenu }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const path = window.location.pathname;
        const index = elements.findIndex((element) => element.link === path);
        setActive(index);
    }, []);

    return (
        <div className="dropdown-bar">
            {elements.map((element, index) => (
                <div 
                    key={index}
                    className={index === active ? "dropdown-element active" : "dropdown-element"} 
                    onClick={() => setActive(index)}
                >
                    {element.name}
                </div>
            ))}
        </div>
    );
};

export default DropdownBar;
