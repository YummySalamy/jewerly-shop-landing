import React, { useState, useEffect } from "react";
import TopBar from "../components/headers/TopBar";
import DropdownBar from "../components/headers/DropdownBar";
import CartButton from "../components/headers/CartButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import "./assets/Layouts.css";

const FullLayout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="full-layout">
            {isMobile ? (
                <>
                    <div className="top-bar">
                        <div className="menu-icon" onClick={toggleMenu}>{isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}</div>
                        {/* <CartButton /> */}
                    </div>
                    {isMenuOpen && <DropdownBar toggleMenu={toggleMenu} />}
                </>
            ) : (
                <TopBar />
            )}
            {children}
        </div>
    );
};

export default FullLayout;