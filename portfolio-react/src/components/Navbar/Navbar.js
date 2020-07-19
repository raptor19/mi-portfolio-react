import React from "react";
import "../Navbar/Navbar.css"

const Navbar = React.forwardRef((props, ref) => {
  return (
    <>
      <nav id="navbar" ref={ref}>
        <div className="nav-wrapper">
          <p className="brand">
            yago
            <strong>estévez</strong>
          </p>
          <a
            href="q"
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
