import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import "./assets/Footers.css";

const MainFooter = () => {
    return (
        <div className="main-footer">
            <div className="footer-element">
                <h2>Información</h2>
                <p>Envíos</p>
                <p>Devoluciones</p>
                <p>Privacidad</p>
                <p>Términos y condiciones</p>
            </div>
            <div className="footer-element">
                <h2>Contacto</h2>
                <p>
                    <FaEnvelope /> 
                    <a href="mailto:ss@gmail.com"> ss@gmail.com</a>
                </p>
                <p>
                    <FaPhone /> 
                    <a href="tel:123456789"> 123456789</a>
                </p>
            </div>
            <div className="footer-element">
                <h2>Redes sociales</h2>
                <p>
                    <FaInstagram /> Instagram
                </p>
                <p>
                    <FaFacebook /> Facebook
                </p>
                <p>
                    <FaTwitter /> Twitter
                </p>
            </div>
        </div>
    );
}

export default MainFooter;