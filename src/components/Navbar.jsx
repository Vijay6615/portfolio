"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="navBar">

      {/* 🔥 LOGO IMAGE */}
      <h2 className="brand">
        <a href="#home">
          <img
            src="/logo-png.png"          // <-- apna file name yahan
            alt="Logo"
            className="logoImg"
          />
        </a>
      </h2>

      <nav>
        <ul className={`menu ${open ? "showMenu" : ""}`}>
          <li><a onClick={closeMenu} href="#about">About</a></li>
          <li><a onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>

          {/* MOBILE BUTTONS */}
          <li className="mobileOnly">
            <button className="themeBtn" onClick={toggleTheme}>
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>

          <li className="mobileOnly">
            <a onClick={closeMenu} href="#contact" className="hireBtn">
              Hire Me
            </a>
          </li>
        </ul>
      </nav>

      <div className="rightBtns">
        <button className="themeBtn desktopOnly" onClick={toggleTheme}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <a href="#contact" className="hireBtn desktopOnly">
          Hire Me
        </a>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
