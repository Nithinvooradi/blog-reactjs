import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;
