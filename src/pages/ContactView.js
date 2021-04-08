import React, { Component } from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

class ContactView extends Component {
  render() {
    return (
      <div className="background pb-lg-5">
        <Navbar />
        <main className="container-md landing">
          <div className="d-flex justify-content-center mt-5 mb-5">
            <h1 className="text-center landing-heading display-4">
              Thanks for visiting the First Come First Served Pet Adoption
              website.
            </h1>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <p className="subtitle text-center">
              <p>Nice of you to stop by!</p>
              <p>
                My name's Elina, and I'm the creator behind this website. If you
                want to get more technical, I go by <strong>aniledev</strong> on
                GitHub. If you would like to see the source code, check it out
                over there or just browse other project repositories of mine.
              </p>
              <p>
                In case you're wondering (or hiring), I'm currently looking for
                full-time roles as a Software Developer willing to gain
                experience on the front end, back end, or both. Let's not stay
                strangers.
              </p>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ContactView;
