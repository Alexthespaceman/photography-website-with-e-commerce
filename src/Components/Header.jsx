import { Link } from "@reach/router";
import React from "react";

function Header(props) {
  return (
    <div className="header">
      <Link className="link" to="/">
        <div className="header-title">A.R.T. Photography</div>
      </Link>
      <div className="navigation">
        <ul className="list">
          <Link className="link" to="">
            <li className="list-child">Filter by country</li>
          </Link>
          <Link className="link" to="all-photos">
            <li className="list-child">All Photographs</li>
          </Link>
          <Link className="link" to="contact-page">
            <li className="list-child">Contact Alex</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
