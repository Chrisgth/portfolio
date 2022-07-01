import { useState, useEffect } from "react";
import menuIcon from "../images/menu.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="navlist">
        <a href=".skills">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
