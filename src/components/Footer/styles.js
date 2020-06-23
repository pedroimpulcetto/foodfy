import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 62px;
  background: ${(props) => props.theme.colors.footer};

  display: grid;
  justify-content: center;
  align-content: center;

  p {
    color: #999999;
    font-size: 1.4rem;
  }
`;
