import React from "react";

// use createContext to initialize context for use in application

export default React.createContext({
  name: {
    value: "",
    changed: false,
  },
  adopters: [],
  cats: [],
  dogs: [],
  adopterError: null,
  catError: null,
  dogError: null,
  dequeuePerson: () => {},
  dequeueCat: () => {},
  dequeueDog: () => {},
  handleGetCats: () => {},
  handleGetDogs: () => {},
  handleOnChange: () => {},
  // handleAdoptClick: () => {},
});
