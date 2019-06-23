import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-nav">
        <span className="nav-item navbar-brand">Clicky Game</span>
        <span className="nav-item nav-link">Guess</span>
        <span className="nav-item nav-link">Score: </span>
      </div>
    </nav>
  );
};

export default Navbar;
