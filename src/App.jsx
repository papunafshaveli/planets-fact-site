import "./App.css";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import Header from "./components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="main-app-div">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:planet" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
