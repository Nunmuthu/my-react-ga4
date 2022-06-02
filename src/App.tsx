import "./App.css";
import * as React from 'react';

import Navbar from "./components/navbar";
import ReactGA from "react-ga4";
import { Router, useLocation  } from "react-router-dom";
import { useEffect } from "react";
import { createBrowserHistory } from 'history';
import GA4 from "./GA/ga4";

const { API_URL } = process.env;
export const history = createBrowserHistory({ basename: API_URL });

function usePageViews() {
  let location2 = useLocation();

  useEffect(() => {
    console.log('page view triggered');
    let locationVal = window.location.pathname;
    ReactGA.send({ hitType: "pageview", page: locationVal });
  }, [location2]);
}

function App() {
  // usePageViews();
  return (
    <div className="App">
      {/* <Router history={history}> */}
        <Navbar />
      {/* </Router> */}
    </div>
  );
}

export default GA4(App);
