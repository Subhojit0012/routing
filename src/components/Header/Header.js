import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-route">
      <Link to="/">#Home</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
