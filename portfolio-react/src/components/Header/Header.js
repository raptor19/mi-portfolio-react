import React from "react";
import "../Header/Header.css"


const Header = React.forwardRef((props,ref) => {
  return (
    <header id="welcome-section" ref={ref}>
      <div className="container">
        <h1>
          <span className="line">Almiron Cristian</span>
          <span className="line">
            <span>Desarrollador web</span>
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">mi portfolio</a>
          <a href="#about" className="cta">
            sobre mi
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;
