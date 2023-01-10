import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1>testometrika</h1>
      </div>
      <img
        className="user-img"
        src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"
        alt="user-logo"
      />
    </div>
  );
}

export default Navbar;
