import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  margin: 10px 0;

  &:hover {
    opacity: 0.5;
  }

  img {
    border-radius: 15px;
    margin-bottom: 20px;

    width: 300px;
    height: 140px;
  }

  main {
    display: grid;

    h1 {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.font};
      font-weight: 600;
    }

    h3 {
      font-size: 1.4rem;
      color: #777777;
    }
  }
`;
