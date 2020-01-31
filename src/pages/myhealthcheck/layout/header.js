import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import useStyles from "../style/useStyles";

import React, { useState } from "react";

// class header extends Component {
//   state ={
//     open: true,
//     setOpen: true,
//   }

//   handleDrawerOpen = () => {
//     this.setState({
//       setOpen: true,
//     });
//   };
//   handleDrawerClose = () => {
//     this.setState({
//       setOpen: false,
//     });  };
//   // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   render() {
//     const classes = useStyles.bind();
//     const {open, setOpen} = this.state;
//     const {handleDrawerOpen, handleDrawerClose} = this;

//     return (
//         <div className={classes.root}>
//           <CssBaseline />
//           <AppBar
//             position="absolute"
//             className={clsx(classes.appBar, open && classes.appBarShift)}
//           >
//           <Toolbar className={classes.toolbar}>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               // onClick={handleDrawerOpen}
//               className={clsx(
//                 classes.menuButton,
//                 open && classes.menuButtonHidden
//               )}
//             >
//               {/* <MenuIcon /> */}
//             </IconButton>
//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               className={classes.title}
//             >
//               내 건강관리
//             </Typography>
//             <IconButton color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//           </Toolbar>
//         </AppBar>

//         <Drawer
//           variant="permanent"
//           classes={{
//             paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
//           }}
//           open={open}
//         >
//           <div className={classes.toolbarIcon}>
//             <IconButton onClick={handleDrawerClose}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </div>
//           <Divider />
//           <Divider />
//       </Drawer>

//       </div>
//     );
//   }
// }

// export default header;

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
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            내 건강관리
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
