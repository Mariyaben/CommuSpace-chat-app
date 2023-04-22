import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import { Passmail } from "./components/Passmail";
import Createcommunitypage from "./components/Createcommunityminipage";
import Createcommunityminipage from "./components/Createcommunityminipage";
import Signinsignup from "./components/Signinsignup";
import Joincommunity from "./components/Joincommunity";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

import backgroundImage from "./components/77.jpg";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
    setTimeout(() => setShowWelcome(false), 1500); // Hide the message after 3 seconds
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passmail" element={<Passmail />} />
        <Route path="/createcommunityminipage" element={<Createcommunityminipage />} />
        <Route path="/joincommunity" element={<Joincommunity />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {showWelcome && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${"./components/77.jpg"})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            textAlign: "center",
            padding: "290rem",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1 style={{ fontFamily: "  cursive", fontSize: "5.5rem" }}><span>C</span>OMMU
                        <span>S</span>PACE</h1>

        
        </div>
      )}
    </>
  );
}

export default App;
