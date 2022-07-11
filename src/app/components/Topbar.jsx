import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="d-flex text-white align-items-center" to="/">
          <img
            src="/assets/images/ghost.png"
            height="40px"
            width="40px"
            alt="logo"
          />
          <h4 className="m-0">
            <span className="pl-3 pr-2">|</span> Web Study
          </h4>
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
