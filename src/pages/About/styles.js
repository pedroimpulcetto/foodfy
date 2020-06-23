import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.theme.sizes.width.container};

  margin: auto;
`;

export const Content = styled.main`
  h1 {
    font-size: 2.4rem;
    color: #111111;
    font-weight: bold;
    margin: 20px 0;
  }

  p {
    font-size: 1.8rem;
    color: #444444;
    line-height: 28px;
    font-weight: 100;
    margin: 20px 0;
  }
`;
