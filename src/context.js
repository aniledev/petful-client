import React from "react";

// use createContext to initialize context for use in application

export default React.createContext({
  // empty update functions
  adopters: [],
  error: null,
  dequeuePerson: () => {},
  // handleAdoptClick: () => {},
});
