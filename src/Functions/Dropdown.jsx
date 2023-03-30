import { Link } from "@reach/router";
import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function DropdownFunc(props) {
  const options = [
    <Link to="/indonesia">Indonesia</Link>,
    <Link to="/india">India</Link>,
    <Link to="/vietnam">Vietnam</Link>,
    <Link to="/Japan">Japan</Link>,
    <Link to="/Thailand">Thailand</Link>,
    <Link to="/UK">UK</Link>,
    <Link to="/United-states">United states</Link>,
    <Link to="/Singapore">Singapore</Link>,
    <Link to="/costa">Costa Rica</Link>,
    <Link to="/Europe">Europe</Link>,
    <Link to="/Malay">Malaysia</Link>,
    <Link to="/mexico">Mexico</Link>,
    <Link to="/Nepal">Nepal</Link>,
  ];

  const defaultOption = options[0];
  const { display } = props;
  return (
    <div>
      <Dropdown
        className={`drop-down${display === true ? "-yes" : ""}`}
        controlClassName="drop-down-style"
        menuClassName="drop-down-place-holder"
        onChange={defaultOption}
        options={options}
        value={defaultOption}
        placeholder="Filter by country"
      />
      {console.log(display)}
    </div>
  );
}

export default DropdownFunc;
