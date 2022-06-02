import { history } from "../components/navbar";
// To be mapped to application history
import React from "react";
// Install from here https://www.npmjs.com/package/react-ga4
import ReactGA from "react-ga4";

interface GA4Props {}

interface GAState {}


function GA4(HocComponent: any) {
  return class extends React.Component<GA4Props, GAState> {
    unlisten: any;
    constructor(props: GA4Props) {
      super(props);
      ReactGA.initialize("G-4SY492WJHX");
      ReactGA.send("pageview");
    }
    componentDidMount() {
      this.unlisten = history.listen(() => {
        let locationVal = window.location.pathname;
        // console.log('page view triggered'+ locationVal);
        ReactGA.send({ hitType: "pageview", page: locationVal });
      });
    }

    componentWillUnmount() {
      this.unlisten();
    }

    render() {
      return (
        <React.Fragment>
          <HocComponent></HocComponent>
        </React.Fragment>
      );
    }
  };
}

export default GA4;
