import React from "react";
import "./header-mobile.css";
import "./header-desktop.css";
import Logo from "./psiholog-logo.png";
import { Link } from "react-router-dom";

const pages = {
    title1: 'Početna',
    title2: 'Savjeti',
    title3: 'O meni',
    title4: 'Kontakt'
}

const Header = () => {
    const [transformValue, setTransformValue] = React.useState(false);

    var expand = () => {
        if (transformValue === false) {
            setTransformValue(true);
        } else {
            setTransformValue(false);
        }
    }

    return (
        <header>
            <div className="navbar">
                <Link to="/" className="header-logo-anchor">
                    <img src={Logo} className="header-logo" alt="logo" />
                </Link>
                <div className="links-trigger" onClick={() => expand()} >
                    <div className="trigger-line" style={transformValue === false ? {} : { transform: 'rotate(45deg)' }}></div>
                    <div className="trigger-line" style={transformValue === false ? {} : { display: 'none' }}></div>
                    <div className="trigger-line" style={transformValue === false ? {} : { transform: 'rotate(135deg)', marginTop: '-40px' }}></div>
                </div>
                <nav className="links-container" style={transformValue === false ? { right: '-500px' } : {}}>
                    <Link to="/" className="nav-link nav-link1">{pages.title1}</Link>
                    <Link to="/" className="nav-link">{pages.title2}</Link>
                    <Link to="/" className="nav-link">{pages.title3}</Link>
                    <Link to="/" className="nav-link">{pages.title4}</Link>
                </nav>
            </div>
            <div className="navbar-shadow" style={transformValue === false ? { opacity: '0', zIndex: '-1' } : { opacity: '.7', zIndex: '1' }}></div>
        </header>
    );
};

export default Header;
