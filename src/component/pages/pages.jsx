import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/header/header";
const pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </>
  );
};

export default pages;
