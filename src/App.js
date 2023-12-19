import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../src/components/main"
import Footer from "../src/components/footer"
import Nav from "../src/components/navbar"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
