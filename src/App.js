import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import Home from "./pages/Home.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import MyCV from "./pages/MyCV";
import DBIntroduction from "./pages/DBIntroduction";
import DBFrequentCharts from "./pages/DBFrequentCharts";
import DBIACharts from "./pages/DBIACharts";
import DBGenerateNewData from "./pages/DBGenerateNewData";
import DBViewRawData from "./pages/DBViewRawData";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  InitializeData,
  useServerSide,
  getFullData,
  GenerateNewData,
} from "./components/logical/ServerSide";

// funciones que se importan del virtual-server
function App() {
  return (
    <div>
      {
          <div className="App">
            <Router>  
            <Header />
              <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/AboutMe" element={<AboutMe />} />
              <Route exact path="/Introduction" element={<DBIntroduction />} />
              <Route exact path="/FrequentCharts" element={<DBFrequentCharts />} /> 
              <Route exact path="/IACharts" element={<DBIACharts />} />
              <Route exact path="/GenerateNewData" element={<DBGenerateNewData />} />
              <Route exact path="/ViewRawData" element={<DBViewRawData />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route element={<NotFound />} />
            </Routes>
            <Footer />
            </Router>
          </div>
      }
    </div>
  );
}

export default App;
