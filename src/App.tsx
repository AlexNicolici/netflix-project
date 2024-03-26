import React from "react";

import Home from "./pages/Home/index";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./helpers/ScrollToTop";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import MyList from "./pages/MyList";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";

function App() {
  return (
    <Provider store={store}>
      <div className="App min-h-screen bg-netflix-black font-poppins">
        <Navbar />

        <ScrollToTop />

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/serials" element={<Serials />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/my-list" element={<MyList />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
