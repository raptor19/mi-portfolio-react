import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ListItems from "../ListItems";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "transparent !important",
    position: "absolute",
    boxShadow: "none",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => {
    console.log(open);
    setOpen(true);
  };

  const closeDrawer = () => {
    console.log(open);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
        <Drawer anchor="right" open={open} onClose={closeDrawer}>
          <ListItems close={closeDrawer} />
        </Drawer>
      </AppBar>
    </div>
  );
};

export default Menu;
