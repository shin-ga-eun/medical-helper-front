import React from "react";
import Grid from "@material-ui/core/Grid";

import { Header, Body, Footer, ListItems } from "../pages/myhealthcheck/layout";
import { Container } from "@material-ui/core";
import AppointmentCheck from "./myhealthcheck/container/AppointmentCheck";

const AppointmentCheckPage = () => {
  return (
    <div>
      <Grid
        container
        item
        sm={6}
        direction="row"
        justify="space-between"
        alignItems="stretch"
        spacing={5}
      >
        <Grid item sm style={{ marginTop: 150 }}>
          <ListItems />
        </Grid>

        <Grid
          container
          item
          sm={9}
          direction="column"
          justify="space-between"
          alignItems="stretch"
          spacing={10}
        >
          <Grid item sm>
            <Header />
          </Grid>

          <Grid item sm>
            <AppointmentCheck />
          </Grid>

          <Grid
            item
            sm
            // style={{marginTop: 50}}
          >
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppointmentCheckPage;
