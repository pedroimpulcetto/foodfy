import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import logo from "./../../assets/logo.png";

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <Link to="/about">
          <h3>Sobre</h3>
        </Link>
        <Link to="/recipes">
          <h3>Receitas</h3>
        </Link>
      </div>
    </Container>
  );
}

export default Header;
