import React from "react";
import "./MainFooter.scss";
import fiatLogo from "assets/fiatLogo.png";
import { ReactComponent as FacebookIF } from "assets/facebook-footer.svg";
import { ReactComponent as TwitterIF } from "assets/twitter.svg";
import { ReactComponent as YoutubeIF } from "assets/youtube.svg";
import { ReactComponent as PinterestIF } from "assets/pinterest.svg";
import { ReactComponent as InstagramIF } from "assets/instagram.svg";
import { ReactComponent as ArrowRightIF } from "assets/arrow-right.svg";
import { ReactComponent as MailIF } from "assets/envelope.svg";
import { ReactComponent as PhoneIF } from "assets/phone-call.svg";

const MainFooter = () => {
  return (
    <footer id="main-footer">
      <div className="main-container">
        <div className="sub-container">
          <h1>The Museum</h1>
          <p>Via Sant Ottavio, 44 - 10126 Torino</p>
          <div className="main-partner">
            <img src={fiatLogo} alt="fiatLogo" />
            <div className="text">
              <p>Main</p>
              <p>Partner</p>
            </div>
          </div>
          <div className="footer-socials">
            <FacebookIF />
            <TwitterIF />
            <YoutubeIF />
            <PinterestIF />
            <InstagramIF />
          </div>
        </div>
        <div className="sub-container">
          <ul>
            <li>Stampa</li>
            <li>Statuto e codice etico</li>
            <li>Privacy</li>
          </ul>
          <p>
            <PhoneIF />
            011.0062713
          </p>
          <p>
            <MailIF />
            info@themuseum.it
          </p>
        </div>
        <div className="sub-container">
          <h3>Resta sempre aggiornato su mostre, workshop ed eventi</h3>
          <div className="form-container">
            <div className="send-form">
              <input type="email" placeholder="email" className="email-form" />
              <label className="terms">
                <input type="radio" checked="" name="radio" readOnly />
                Accetto i termini e condizioni
              </label>
            </div>
            <div className="newsletter">
              <span>Iscriviti alla newsletter</span>
              <ArrowRightIF />
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>2020 The Museum ®</p>
        <p>Publicis Sapient</p>
      </div>
    </footer>
  );
};
export default MainFooter;
