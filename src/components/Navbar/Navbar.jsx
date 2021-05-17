import React, { useState } from "react";
import { navMenu } from "./data";
import "./Navbar.scss";
import { ReactComponent as FacebookI } from "assets/facebook.svg";
import { ReactComponent as InstagramI } from "assets/instagram.svg";
import { ReactComponent as TwitterI } from "assets/twitter.svg";
import { ReactComponent as LogoI } from "assets/Logo.svg";
import { ReactComponent as NavI } from "assets/square.svg";

const Navbar = () => {
  const [collapse, setCollpase] = useState(false);

  return (
    <nav id="navbar">
      <div className="logo">
        <LogoI />
      </div>
      <div className="nav-menu">
        <ul>
          {navMenu.map((item) => {
            return (
              <li key={item.text}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="nav-socials">
          <div className="lang">
            <p>ENG</p>
          </div>
          <div className="socials">
            <FacebookI />
            <InstagramI />
            <TwitterI />
          </div>
        </div>
      </div>
      <NavI onClick={() => setCollpase(!collapse)} />
      <div
        className="collapse-menu"
        style={{ marginTop: collapse ? "0" : "-200%" }}
      >
        <ul>
          <li>
            <button onClick={() => setCollpase(!collapse)}>X</button>
          </li>
          {navMenu.map((item, itemI) => {
            return (
              <li key={itemI}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
          <li>ENG</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
