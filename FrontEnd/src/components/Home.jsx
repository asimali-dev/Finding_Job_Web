import React from "react";
import hero_img from "../assets/hero.png";
import {
  BriefcaseBusiness,
  Building2,
  Users,
  Award,
} from "lucide-react";

function Home() {
  return (
    <>
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-center mt-18"
      style={{
        backgroundImage: `url(${hero_img})`,
      }}
    >
      {/* Hero Content */}
      <div className="w-[50%] pt-32 pl-16">

        <p className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold shadow">
          ✨ Find. Apply. Grow.
        </p>

        <h1
          data-aos="fade-up"
          className="text-7xl font-bold leading-tight mt-8 text-[#0F172A]"
        >
          Find Your <span className="text-blue-600">Next</span> <br />
          Opportunity
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
          NexHire connects talented professionals with top companies.
          Discover opportunities that match your skills and career goals.
        </p>

        {/* Buttons */}

        <div className="flex gap-5 mt-10 text-xl">
          <button className="px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300 cursor-pointer">
            Find Jobs
          </button>

          <button className="px-10 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300 cursor-pointer">
            Post a Job
          </button>
        </div>
      </div>

      {/* Stats Section */}

      <div className="w-[90%] mx-auto mt-20 bg-white rounded-2xl shadow-xl px-8 py-6 flex justify-between items-center">

        {/* Card 1 */}

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <BriefcaseBusiness className="text-blue-600 w-8 h-8" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-gray-500 text-sm">Active Jobs</p>
          </div>
        </div>

        <div className="h-14 border-r border-gray-300"></div>

        {/* Card 2 */}

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Building2 className="text-green-600 w-8 h-8" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">2K+</h2>
            <p className="text-gray-500 text-sm">Top Companies</p>
          </div>
        </div>

        <div className="h-14 border-r border-gray-300"></div>

        {/* Card 3 */}

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <Users className="text-orange-500 w-8 h-8" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-gray-500 text-sm">Candidates Hired</p>
          </div>
        </div>

        <div className="h-14 border-r border-gray-300"></div>

        {/* Card 4 */}

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
    </>
  );
}

export default Home;