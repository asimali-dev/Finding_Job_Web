import React, { useState } from "react";
import hero_img from "../assets/hero.png";
import { BriefcaseBusiness, Building2, Users, Award, Search } from "lucide-react";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Testimonials from "./Testimonials.jsx";
import { useDispatch } from "react-redux";
import { setSearchFilter } from "@/redux/JobSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");

  const searchHandler = () => {
    dispatch(setSearchFilter(search));
    navigate("/jobs");
  }

  return (
    <>
      <div className="relative w-full min-h-screen mt-18 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden pb-7">
        <div className="hidden lg:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero_img})` }}>
        </div>

        <div className="relative z-10 w-full lg:w-[50%] pt-20 lg:pt-32 px-6 lg:pl-16">
          <p className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold shadow">
            ✨ Find. Apply. Grow.
          </p>

          <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mt-8 text-[#0F172A]">
            Find Your <span className="text-blue-600">Next</span>
            <br />
            Opportunity
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            NexHire connects talented professionals with top companies.
            Discover opportunities that match your skills and career goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 text-xl">
            <button className="px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all cursor-pointer">
              Find Jobs
            </button>

            <button className="px-10 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all cursor-pointer">
              Post a Job
            </button>
          </div>
        </div>

        <div className="relative z-10 w-[90%] mx-auto mt-20 bg-white rounded-2xl shadow-xl px-5 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <BriefcaseBusiness className="text-blue-600 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">50K+</h2>
              <p className="text-gray-500 text-sm">Active Jobs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Building2 className="text-green-600 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">2K+</h2>
              <p className="text-gray-500 text-sm">Top Companies</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <Users className="text-orange-500 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-500 text-sm">Candidates Hired</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <Award className="text-purple-600 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">95%</h2>
              <p className="text-gray-500 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center my-12 text-center px-4">
        <div data-aos="zoom-in">
          <h1 className="text-4xl font-bold">
            Search, Apply & <br />
            Get Your <span className="text-[#1447E6]">Dream Job</span>
          </h1>

          <p className="mt-3.5 text-[18px] font-medium text-gray-500">
            Discover the right job, apply with confidence, and take the next step in your professional journey.
          </p>
        </div>

        <div className="w-full sm:w-[80%] lg:w-[50%] mt-6 flex">
          <input
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Find Your Job"
            value={search}
            className="flex-1 outline-none py-2.5 px-3 border-gray-500 border-2 rounded-l-full shadow-lg"
          />

          <button onClick={searchHandler} className="bg-[#1447E6] px-4 text-white rounded-r-full cursor-pointer hover:bg-blue-800">
            <Search />
          </button>
        </div>
      </div>

      <CategoryCarousel />
      <LatestJobs />
      <Testimonials />
    </>
  );
}

export default Home;