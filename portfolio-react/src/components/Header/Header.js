import React from "react";
import { Titulo, Subtitulo, WelcomeSection } from "./HeaderStyles";
//import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
//import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Header = React.forwardRef((props, ref) => {
  return (
    <WelcomeSection ref={ref}>
      <Grid direction="column" justify="center" alignItems="center">
        <Titulo>Almiron Cristian</Titulo>
        <Subtitulo>Desarrollador web</Subtitulo>
        <Button className="primary" variant="contained" href="#projects">
          mi portfolio
        </Button>

        <Button
          className="secondary"
          variant="contained"
          color="primary"
          href="#about"
        >
          sobre mi
        </Button>
      </Grid>
    </WelcomeSection>
  );
});

export default Header;
