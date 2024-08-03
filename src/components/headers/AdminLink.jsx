import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./assets/Headers.css";
const header_elements = [
    {
        name: "Cuenta",
        link: "/admin/login",
    }
];

const AdminLink = () => {
    
    return (
        <div className="admin-link">
            {header_elements.map((element, index) => (
                <a
                    key={index}
                    href={element.link}
                    className="admin-link-element"
                >
                    <FaUserCircle />
                    {element.name}
                </a>
            ))}
        </div>
    );
}

export default AdminLink;