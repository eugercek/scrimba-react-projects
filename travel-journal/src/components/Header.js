import React from "react";
import globe from "../images/globe.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={globe} alt="" />
      <h2>my travel journal.</h2>
    </header>
  );
}
