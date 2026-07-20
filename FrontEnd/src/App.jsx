import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
    </>
  );
}

export default App;