import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

function Pages() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route />
    </Routes>
    // </BrowserRouter>
  );
}

export default Pages;
