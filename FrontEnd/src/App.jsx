import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import Footer from "../src/components/Footer.jsx"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";
import Jobs from "./components/Jobs.jsx";
import Companies from "./components/Companies.jsx";
import About from "./components/About.jsx";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const getProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/user/profile",
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (

    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/about" element={<About/>}/>



      </Routes>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;