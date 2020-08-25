import styled from "styled-components";
import { PrincipalColors } from "../../colors";

export const WelcomeSection = styled.header`
  background: linear-gradient(to bottom, #181d23 0%, #202736 80%);
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  z-index: 1;
  .buttons {
    display: flex;
    margin: 2rem 2rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    .primary {
      margin-right: 0.5rem;
    }
    .secondary {
      margin-left: 0.5rem;
    }
  }
`;

export const Titulo = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
  font-style: italic;
  color: #fafafa;
  line-height: 3rem;
`;

export const Subtitulo = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: normal;
  font-style: italic;
  color: #fafafa;
  line-height: 3rem;
`;

export const ButtonPrimary = styled.a`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #fafafa;
  color: #fafafa;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  &:hover :active {
    border: 1px solid #f300b4;
    transform: translateY(-2px);
    box-shadow: 0 10px 100px -20px ${PrincipalColors.one};
    background: transparent;
  }
  &:visited {
    background: ${PrincipalColors.one};
    border: 1px solid transparent;
    color: ${PrincipalColors.two};
    font-weight: bold;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)``;
