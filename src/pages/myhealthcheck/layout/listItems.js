import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

import React, { Component } from 'react';

class listItems extends Component {
  render() {
    return (
      <div>
        <div>
    <Link to="/appointment">
      <ListItem button="true">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="진료예약" />
      </ListItem>
    </Link>

    <Link to="/appointmentcheck">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="진료예약확인" />
      </ListItem>
    </Link>

    <Link to="/checkdetail">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="진료내용" />
      </ListItem>
    </Link>

    <Link to="/myprofile">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="내 회원정보" />
      </ListItem>
    </Link>
  </div>
      </div>
    );
  }
}

export default listItems;
