import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar";
import Signup from "./Components/pages/Signup";
import FormLogin from "./Components/pages/FormLogin";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashboard";
import ApplicationForm from "./Components/pages/ApplicationForm";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/myhome" component={Dashboard} />
      <Route exact path="/application" component={ApplicationForm} />
    </BrowserRouter>
  );
}

export default App;
