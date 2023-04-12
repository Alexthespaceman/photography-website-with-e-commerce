import { Link } from "@reach/router";
import React from "react";
import "react-dropdown/style.css";
import { BiCircle } from "react-icons/bi";
import { IoBasket } from "react-icons/io5";
import DropdownFunc from "../Functions/Dropdown";

function Header(props) {
  const style = { color: "white", fontSize: "1em" };
  let display = false;

  function changeBool(bool) {
    return bool = true;
  }

  return (
    <header className="header">
      <div className="basket">
        <Link className="link" to="basket-page">
          <IoBasket className="basket-btn"></IoBasket>
          {props.number > 0 ? (
            <div>
              <p className="number1">{props.number} </p>
              <BiCircle className="circle" style={style}>
                {" "}
              </BiCircle>
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>
      <Link className="link" to="/">
        <div className="header-title">A.R.T Photography</div>
      </Link>
      <h2 className="header-title1">Alexander Richard Tristram</h2>

      <nav className="navigation">
        <ul className="list">
          {/* <button
            className="list-child"
            onClick={() => {changeBool(display) 
            }}
            >
            {console.log(display)} 
            Filter photos by country:
          </button> */}
          <DropdownFunc />
          <Link className="link" to="all-photos">
            <li className="list-child">All Photographs</li>
          </Link>
          <Link className="link" to="contact-page">
            <li className="list-child">Contact Alex</li>
          </Link>
          <Link className="link" to="basket-page">
            <li className="list-child">purchase here</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
