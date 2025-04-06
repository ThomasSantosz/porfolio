import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import "/src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import translations from "../translations";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    const pathWithoutLang = location.pathname.replace(/^\/(en|pt)/, "");
    navigate(`/${newLang}${pathWithoutLang}`);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isVisible ? "visible" : "hidden"} ${isTop ? "top" : ""}`}>
      <nav>
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
          <li><Link to={`/${language}`} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{translations[language].home}</Link></li>
          <li><Link to={`/${language}/who-we-are`} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{translations[language].whoWeAre}</Link></li>
          <li><Link to={`/${language}/what-we-believe`} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{translations[language].whatWeBelieve}</Link></li>
          <li><Link to={`/${language}/what-we-do`} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{translations[language].whatWeDo}</Link></li>
          <li><Link to={`/${language}/contact-us`} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{translations[language].contactUs}</Link></li>
        </ul>

        <div className="right-bar">
          <div
            className="language-dropdown-container"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <div className="language">
              <FontAwesomeIcon icon={faGlobe} />
              &nbsp;{language.toUpperCase()}&nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </div>

            <div className={`dropdown-menu ${langDropdownOpen ? "fade-in" : "fade-out"}`}>
              <div className="dropdown-left">
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("pt")}>Português</button>
              </div>
            </div>
          </div>

          <div className="links">
            <ul>
              <li><a href="https://www.linkedin.com/in/thomas-santos-ramos-063683304/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://github.com/ThomasSantosz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.instagram.com/santos7sz__/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="https://x.com/__santos7sz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;