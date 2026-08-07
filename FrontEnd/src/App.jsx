import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Profile from "./components/Profile.jsx"
import JobDescription from "./components/JobDescription.jsx";
import Scroll from "./components/ScrolToTop.jsx";
import { setAllJobs } from "@/redux/JobSlice";
import CompanyDescription from "./components/CompanyDescription.jsx";

import Dashboard from "./components/admin/Dashboard.jsx";
import CreateCompany from "./components/admin/CreateCompany.jsx";
// import CreateJob from "./components/admin/CreateJob.jsx";
import CreateJob from "./components/admin/CreateJob.jsx"
import AdminJobs from "./components/admin/Jobs.jsx"
import AdminCompanies from "./components/admin/Companies.jsx"
import AdminCompanyDes from "./components/admin/AdminCompanyDes.jsx"
import UpdateCompany from "./components/admin/UpdateCompany.jsx";
import { toast } from "sonner";
import AdminJobDes from "./components/admin/AdminJobDes.jsx";
import UpdateJob from "./components/admin/UpdateJob.jsx";

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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/job/get",
          {
            withCredentials: true,
          },
        );
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs))
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.error(error.response?.data?.message);

      }
    }
    fetchJobs();
  }, [])

  return (

    <>
      <Scroll />
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs/description/:id" element={<JobDescription />} />
        <Route path="/company/description/:id" element={<CompanyDescription/>}/>


        {/* admin routes */}

        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/company/create" element={<CreateCompany/>}/>
        <Route path="/admin/job/create/:id" element={<CreateJob/>}/>
        <Route path="/admin/jobs" element={<AdminJobs/>}/>
        <Route path="/admin/companies" element={<AdminCompanies/>}/>
        <Route path="/admin/company/detail/:id" element={<AdminCompanyDes/>}/>
        <Route path="/admin/company/edit/:id" element={<UpdateCompany/>}/>
        <Route path="/admin/job/detail/:id" element={<AdminJobDes/>}/>
        <Route path="/admin/job/edit/:id" element={<UpdateJob/>}/>



      </Routes>

      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;