import React from "react";
import SocialLinks from "../SocialLinks";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <p>© {new Date().getFullYear()} Almiron Cristian.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
