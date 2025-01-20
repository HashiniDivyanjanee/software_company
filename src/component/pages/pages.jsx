import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/header/header";
import Home from "../home/Home";
const pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
};

export default pages;
