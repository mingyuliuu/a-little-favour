import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Landing/LandingPage";
import HomePage from "./Home/HomePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
