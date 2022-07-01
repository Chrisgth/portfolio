import { useState, useEffect } from "react";

function Nav() {
  const anchorScroll = (e, target) => {
    e.preventDefault();
    document
      .getElementById(`${target}`)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="nav">
      <div className="navlist">
        <a
          href="#skills"
          onClick={(e) => {
            anchorScroll(e, "skills");
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            anchorScroll(e, "projects");
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            anchorScroll(e, "contact");
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
