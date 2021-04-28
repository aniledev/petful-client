import React, { Component } from "react";
import "../styles/adopt-view.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import AdoptInstructions from "../components/adopt/AdoptInstructions";
import AdoptQueue from "../components/adopt/AdoptQueue";
import AdoptSelection from "../components/adopt/AdoptSelection";

class AdoptView extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container-md adopt">
          <AdoptInstructions />
          <AdoptQueue />
          <AdoptSelection />
        </main>
        <Footer />
      </>
    );
  }
}

export default AdoptView;
