import React, { useState } from "react";
import logo from "../Navigation/logo.svg";
import "./NavigationBar.css";
function NavigationBar() {
  const [display, setDisplay] = useState("light");

  const toggleDisplay = () => {
    if (display === "light") {
      setDisplay("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setDisplay("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div className="navigation">
      <div className="navigation-left">
        <img src={logo} alt="" />
        <span>Docusaurus</span>
        <ul className="nav-list">
          <li>
            <a href="/" style={{ color: "green" }}>
              Docs
            </a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Showcase</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
        </ul>
      </div>
      <div className="navigation-right">
        <select name="version" value="2.2.0" className="dropdown">
          <option value="2.2.0">2.2.0</option>
          <option value="2.1.0">2.1.0</option>
          <option value="2.0.1">2.0.1</option>
        </select>
        <select name="langague" value="english" className="dropdown">
          <option value="english">English</option>
          <option value="brasil">Brasil</option>
          <option value="hindi">Hindi</option>
        </select>
        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        <i
          className="fa fa-moon-o fa-lg"
          aria-hidden="true"
          onClick={toggleDisplay}
        ></i>
        <input type="text" placeholder="Seach" />
      </div>
    </div>
  );
}

export default NavigationBar;
