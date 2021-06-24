import { Link } from "@reach/router";
import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function DropdownFunc(props) {
  const options = [
    <Link to="all-photos/indo">Indonesia</Link>,
    <Link to="all-photos/india">India</Link>,
    <Link to="all-photos/vietnam">Vietnam</Link>,
    <Link to="all-photos/Japan">Japan</Link>,
    <Link to="all-photos/Thailand">Thailand</Link>,
    <Link to="all-photos/UK">UK</Link>,
    <Link to="all-photos/United-states">United states</Link>,
    <Link to="all-photos/Singapore">Singapore</Link>,
    <Link to="all-photos/Costa-Rica">Costa Rica</Link>,
    <Link to="all-photos/Europe">Europe</Link>,
    <Link to="all-photos/Malay">Malaysia</Link>,
    <Link to="all-photos/vietnam">Mexico</Link>,
    <Link to="all-photos/Nepal">Nepal</Link>,
  ];

  const defaultOption = options[0];

  return (
    <div>
      <Dropdown
        onChange={defaultOption}
        options={options}
        value={defaultOption}
        placeholder="Filter by country"
      />
    </div>
  );
}

export default DropdownFunc;
