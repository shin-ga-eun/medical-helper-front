import React, { Component } from "react";
import MapForm from "./MapForm";
import Axios from "axios";
import Search from "./Search";

class Map extends Component {
  render() {
    return (
      <div>
        <MapForm />
        <Search />
      </div>
    );
  }
}

export default Map;
