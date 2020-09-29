import React, { useState } from 'react';
import "./navbar.scss";
import { Link } from 'react-scroll';
import Menu from "../../images/menu.svg";
import Close from "../../images/close.svg";


const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    const Links = () => {
        return (
            <>
                <Link className="nav-link" activeClass="active" to="portfolio" spy={true} smooth={true} duration={800}  onClick={() => setShowDropdown(false)}>
                    Portfolio
                </Link>
                <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} duration={800} offset={150} onClick={() => setShowDropdown(false)}>
                    Contact Me
                </Link>
            </>
        )
    }
    return (
        <div>
            <nav className="navbar">
                <Links className="horizontal"/>
                <img onClick={toggleDropdown} src={showDropdown ? Close : Menu}alt=""/>
            </nav>
            {showDropdown &&
                <div className="dropdown">
                <Links />
                <div className="fill"></div>
            </div>
            }
        </div>
        
    )
}

export default NavBar;