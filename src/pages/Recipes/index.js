import React from "react";

import { Container } from "./styles";

import Recipe from "../../components/Recipe";
import datas from "./datas";

function Recipes() {
  return (
    <Container>
      {datas.map((data) => (
        <Recipe key={data.id} img={data.img} title={data.title} by={data.by} />
      ))}
    </Container>
  );
}

export default Recipes;
