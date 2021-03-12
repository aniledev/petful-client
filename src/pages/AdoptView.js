import React, { Component } from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

class AdoptView extends Component {
  render() {
    return (
      <>
        <Navbar />

        <main class="container-md">
          <div class="text-center mt-5 mb-3">
            <h2>
              When it's your turn in the queue, just adopt the next cat or dog
              in line!
            </h2>
          </div>
          <div class="text-center adoption-queue mb-5">
            <p>
              Next in line: Tyanna, Terana, Aisah, Treasure, Travis, Jocelyn
            </p>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md text-center">
                <div>
                  <h3>Cats</h3>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-2 my-auto">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm caret"
                      >
                        <i class="fas fa-caret-left"></i>
                      </button>
                    </div>
                    <div class="col-8">
                      <img
                        src="https://images.unsplash.com/photo-1598463166261-357c23778812?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                        alt="A smiling golden-brown golden retriever listening to music"
                      />
                    </div>
                    <div class="col-2 my-auto">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm caret"
                      >
                        <i class="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <p>Name: Steve French</p>
                  <p>Sex: Female</p>
                  <p>Age: 2</p>
                  <p>Breed: Bengal</p>
                  <p>Story: Thrown on the street</p>
                </div>
                <div class="mb-5">
                  <button type="button" class="btn">
                    Adopt Cat!
                  </button>
                </div>
              </div>
              <div class="col-md text-center">
                <div>
                  <h3>Dogs</h3>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-2 my-auto">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm caret"
                      >
                        <i class="fas fa-caret-left"></i>
                      </button>
                    </div>
                    <div class="col-8">
                      <img
                        src="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="A smiling golden-brown golden retriever listening to
                  music"
                      />
                    </div>
                    <div class="col-2 my-auto">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm caret"
                      >
                        <i class="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <p>Name: Zim</p>
                  <p>Sex: Male</p>
                  <p>Age: 3</p>
                  <p>Breed: Golden Retriever</p>
                  <p>Story: Owner passed away</p>
                </div>
                <div class="mb-5">
                  <button type="button" class="btn">
                    Adopt Cat!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default AdoptView;
