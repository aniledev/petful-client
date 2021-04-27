import React, { Component } from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

class AboutView extends Component {
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
            <div className="subtitle text-center">
              <p>
                In this project, I created a FIFO (First In First Out) pet
                adoption service for adopting dogs and cats.
              </p>
              <p>
                This full stack application has a custom built RESTful API using
                Express and allows for CRUD actions. It is powered by a queue
                data structure and JavaScript.
              </p>
              <p>
                The front end is deployed with Vercel while the backend is
                hosted with Heroku.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default AboutView;
