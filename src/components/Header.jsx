import "./Header.css";
import darkIcon from "../assets/dark.svg";
import lightIcon from "../assets/light.svg";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav>
      <div className="logo">
        <h1>
          Sushmitha<span>.</span>
        </h1>
      </div>

      <div className="nav-links">
        <ul id="list" className={`menuList ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Certifications</a>
          </li>
          <li>
            <div id="mode" onClick={toggleDarkMode}>
              <img src={isDarkMode ? lightIcon : darkIcon} alt="toggle mode" />
            </div>
          </li>
        </ul>
      </div>

      <div id="contact-btn">
        <button>Contact</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "bar-active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "bar-active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "bar-active" : ""}`}></span>
      </div>
    </nav>
  );
}

export default Header;
