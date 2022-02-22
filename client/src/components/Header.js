import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Header = () => {
  //todo: render a logo

  // todo: render a link to the two pages using navlink components

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <a href="https://www.privy.com/" target="_blank">
          <img style={{ height: "150px" }} src="/logo.png" />
        </a>
      </Grid>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <NavLink to="/contacts">
            <Typography
              gutterBottom
              variant="h5"
              color="common.white"
              component="div"
            >
              Contacts
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/textMessages">
            <Typography
              gutterBottom
              variant="h5"
              color="common.white"
              component="div"
            >
              Text Messages
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
