import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  width: ${(props) => props.theme.sizes.width.container};
  margin: 30px auto;

  align-items: center;
  text-align: center;

  div {
    margin-left: 10.24rem;
    display: flex;

    h3 {
      font-size: 1.6rem;
      font-weight: 100;
      color: ${(props) => props.theme.colors.font};
      margin: 0 1.5rem;
    }
  }
`;
