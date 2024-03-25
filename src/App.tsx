import React from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/bundle";
import Home from "./pages/Home/index";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div className="App min-h-screen bg-netflix-black font-poppins">
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/serials" element={<Serials />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
