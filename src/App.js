import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar";
import Signup from "./Components/pages/Signup";
import FormLogin from "./Components/pages/FormLogin";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashboard";
import ApplicationForm from "./Components/pages/ApplicationForm";
import Profile from "./Components/pages/Profile";
import Admin from "./Components/pages/admin";
import AdminDashboard from "./Components/pages/AdminDashboard";
import Edit from "./Components/pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/myhome" component={Dashboard} />
      <Route exact path="/application" component={ApplicationForm} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admindashboard" component={AdminDashboard} />
      <Route exact path="/:id/edit" component={Edit} />
    </BrowserRouter>
  );
}

export default App;
