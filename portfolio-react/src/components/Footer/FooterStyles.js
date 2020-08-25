import styled from "Styled-Components";

export const Footer = styled.footer`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: #fafafa;
  z-index: 0;
  .wrapper {
    display: flex;
    width: 100%;
    padding: 2rem;
    max-width: 1400px;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 649px) {
    flex-direction: column;
    h3 {
      padding-bottom: 0.8rem;
    }
  }
`;
