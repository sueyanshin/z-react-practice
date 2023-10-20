import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Detail from "./components/Detail";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
