import React from "react";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

// Sweet

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
