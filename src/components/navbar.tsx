import React from "react";
import { Router, Switch as Routes, Route, Link, Switch  } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Users from "./users";
import ReactGA from "react-ga4";
import { createBrowserHistory } from 'history';

const  API_URL  = '';
export const history = createBrowserHistory({ basename: API_URL });

interface NavbarProps {}

interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {


  render() {
    return (
      <Router history={history}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about"><About /></Route>

            <Route path="/users"><Users /></Route>

            <Route path="/"><Home /></Route>

            <Route path="/login"><Login /></Route>

            <Route path="/signup"><Signup /></Route>
          </Switch>
        </div>
       </Router>
    );
  }
}

export default Navbar;
