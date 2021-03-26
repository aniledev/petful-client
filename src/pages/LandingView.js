import React, { Component } from "react";
import "../styles/landing-view.css";
import Navbar from "../components/navigation/Navbar";
import LandingTitle from "../components/landing/LandingTitle";
import LandingSubtitle from "../components/landing/LandingSubtitle";
import LandingInstructions from "../components/landing/LandingInstructions";
import LandingForm from "../components/landing/LandingForm";
import Footer from "../components/navigation/Footer";

class LandingView extends Component {
  render() {
    return (
      <div className="background pb-lg-5">
        <Navbar />
        <main className="container-md landing">
          <LandingTitle />
          <LandingSubtitle />
          <LandingInstructions />
          <LandingForm history={this.props.history} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default LandingView;
