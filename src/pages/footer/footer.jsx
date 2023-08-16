import React from "react";
import "./footer-mobile.css";
import "./footer-desktop.css";
import Logo from "../header/psiholog-logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer>
        <div className="footer-line"></div>
        <Link to="/" className="footer-logo-anchor">
            <img src={Logo} className="footer-logo" alt="logo" />
        </Link>
        <div className="footer-icons-container">
            <i className="fa-brands fa-instagram footer-icon"></i>
            <i className="fa-regular fa-envelope footer-icon"></i>
            <i className="fa-solid fa-mobile-screen footer-icon"></i>
        </div>
        <div className="footer-links-container">
            <div className="left-links-container">
                <Link to="/" className="left-link">Početna</Link>
                <Link to="/" className="left-link">Savjeti</Link>
                <Link to="/" className="left-link">O meni</Link>
                <Link to="/" className="left-link">Kontakt</Link>
            </div>
            <div className="right-links-container">
                <Link to="/" className="right-link">Početna</Link>
                <Link to="/" className="right-link">Savjeti</Link>
                <Link to="/" className="right-link">O meni</Link>
                <Link to="/" className="right-link">Kontakt</Link>
            </div>
        </div>
    </footer>
)

export default Footer;