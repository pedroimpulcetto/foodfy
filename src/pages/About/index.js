import React from "react";

import { Container, Content } from "./styles";
import datas from "./datas";

function About() {
  return (
    <Container>
      {datas.map((data) => (
        <Content key={data.id}>
          <h1>{data.title}</h1>
          {data.content.map((p) => (
            <p key={p.id}>{p.p}</p>
          ))}
        </Content>
      ))}
    </Container>
  );
}

export default About;
