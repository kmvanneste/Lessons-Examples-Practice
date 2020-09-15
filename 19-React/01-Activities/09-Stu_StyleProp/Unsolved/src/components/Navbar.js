import React from "react";

const styles = {
  navbar: {
    background: "#6a1b9a",
    height: "60px"
  },
  
  navbarA: {
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    margin: "5px",
    lineHeight: "3"
  }
};

const {navbar, navbarA} = styles;

function Navbar() {
  return (
    <nav style={navbar} >
      <a style={navbarA} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;