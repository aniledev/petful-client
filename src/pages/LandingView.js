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
      <>
        <Navbar />
        <main class="container-md">
          <LandingTitle />
          <LandingSubtitle />
          <LandingInstructions />
          <LandingForm />
        </main>
        <Footer />
      </>
    );
  }
}

export default LandingView;
