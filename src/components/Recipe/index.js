import React from "react";

import { Container } from "./styles";

function Recipe({ img, title, by }) {
  return (
    <Container>
      <img src={img} alt="" />
      <main>
        <h1>{title}</h1>
        <h3>por {by}</h3>
      </main>
    </Container>
  );
}

export default Recipe;
