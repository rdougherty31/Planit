import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './reset.css';
import './App.css';
import Login from "./pages/login";
import SignUp from "./pages/signup";
import NoMatch from "./pages/nomatch";
import Feed from "./pages/feed";
import Landing from "./pages/landing";
import Profile from "./pages/profile";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/profile/:id" component={} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}