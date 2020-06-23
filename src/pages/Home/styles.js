import styled from "styled-components";

export const Container = styled.main`
  width: ${(props) => props.theme.sizes.width.container};
  background: ${(props) => props.theme.colors.background};
  margin: auto;
`;

export const Panel = styled.div`
  display: flex;

  position: relative;

  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 366px;
  border-radius: 30px;

  align-items: center;

  section {
    display: grid;

    width: 31.6rem;

    margin: 6rem;

    h1 {
      font-size: 3.1rem;
      color: ${(props) => props.theme.colors.font};
      font-weight: bold;
    }

    p {
      opacity: 0.7;
      font-size: 1.8rem;
      color: #000000;
      line-height: 2.8rem;
    }
  }

  img {
    position: absolute;
    bottom: 0;
    right: 10rem;
  }
`;

export const Content = styled.section`
  display: grid;

  header {
    margin-top: 5rem;

    h1 {
      font-size: 2.4rem;
      color: ${(props) => props.theme.colors.font};
      font-weight: bold;
      margin-bottom: 20px;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;
