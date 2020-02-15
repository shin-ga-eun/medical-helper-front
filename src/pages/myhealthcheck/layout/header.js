import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import useStyles from "../style/useStyles";

import React, { useState } from 'react';


const Header = () => {
  const classes = useStyles.bind();

  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Grid item xs={10}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              내 건강관리
            </Typography>
          </Grid>
          <Grid itme xs={1}>
            {/* <Link to="/login" color="in"> */}
              <Button color="inherit">로그인</Button>
            {/* </Link>    */}
            {/* <Link to="/login" color="in"> */}
            <Button color="inherit">로그아웃</Button>
            {/* </Link>    */}
          </Grid>
          <Grid itme xs={1}>
            <Link to="/signIn" color="inherit">
                <Button color="inherit">회원가입</Button>
              </Link>   
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
