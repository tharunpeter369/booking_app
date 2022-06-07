import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels unlock instant saving of 10% or more
          from special tharun peter{" "}
        </p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  );
}

export default Header;
