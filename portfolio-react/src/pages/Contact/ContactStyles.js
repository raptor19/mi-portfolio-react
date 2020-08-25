import styled from "styled-component";

export const Section = styled.section`
  background: #181d23
    url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/envelope.svg?sanitize=true)
    no-repeat right;
  clip-path: polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%);
  color: #fafafa;
  min-height: 100vh;
  width: 100%;
  padding: 5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: -100px 0 140px;
  z-index: 1;
  .container {
    width: 70%;
    max-width: 1200px;
    padding: 25vh 0;
    .heading-wrapper {
      display: flex;
      justify-content: space-between;
      .social a {
        color: #fafafa;
        :hover {
          color: #f300b4;
        }
      }
      .heading .title {
        font-size: 3rem;
        line-height: 2.4rem;
      }
      .heading .separator {
        background: #f300b4;
        width: 150px;
        height: 2px;
        margin: 1rem 0;
      }
      .heading .subtitle {
        font-size: 1.4rem;
      }
    }
  }
`;
