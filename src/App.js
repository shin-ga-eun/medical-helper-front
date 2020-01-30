import React from "react";
import { Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import EmrSearchPage from "./pages/EmrSearchPage";
import MyHealthCheckPage from "./pages/MyHealthCheckPage";
import AppointmentPage from "./pages/AppointmentPage";
import AppointmentCheckPage from "./pages/AppointmentCheckPage";
import CheckdetailPage from "./pages/CheckdetailPage";
import MyProfilePage from "./pages/MyProfilePage";

function App() {
  return (
    <div className="App">
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/main" component={MainPage} />
      <Route path="/emrsearch" component={EmrSearchPage} />
      <Route path="/myhealthcheck" component={AppointmentPage} />
      <Route path="/appointment" component={AppointmentPage} />
      <Route path="/appointmentcheck" component={AppointmentCheckPage} />
      <Route path="/checkdetail" component={CheckdetailPage} />
      <Route path="/myprofile" component={MyProfilePage} />
    </div>
  );
}

export default App;
