import React from "react";

import { Container, Panel, Content } from "./styles";

import Recipe from "./../../components/Recipe";

import chef from "./../../assets/chef.png";
import burger from "./../../assets/burger.png";

function Home() {
  return (
    <Container>
      <Panel>
        <section>
          <h1>As melhores receitas</h1>
          <p>
            Aprenda a construir os melhores pratos com receitas criadas por
            profissionais do mundo inteiro.
          </p>
        </section>
        <img src={chef} alt="Chef" />
      </Panel>
      <Content>
        <header>
          <h1>Mais acessadas</h1>
        </header>
        <section>
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
          <Recipe img={burger} title="Triplo bacon burger" by="Jorge Relato" />
        </section>
      </Content>
    </Container>
  );
}

export default Home;
