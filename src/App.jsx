import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./static/Header";
import Hero from "./components/block/Hero";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
