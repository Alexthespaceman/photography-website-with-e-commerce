import React, { Component } from "react";
import SlideContent from "../Components/AutoplayComponents/SlideContent";

class LandingScreen extends Component {
  render() {
    return (
      <div>
        <div className="landing-page">
          <SlideContent />
        </div>
        <div className="landing-page1"></div>
        <div className="landing-page2"></div>
        <div className="landing-page3"></div>
        <div className="landing-page4"></div>
      </div>
    );
  }
}

export default LandingScreen;
