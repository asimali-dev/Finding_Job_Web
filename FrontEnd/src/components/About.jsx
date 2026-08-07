import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/vedio.mp4";
import {
  ArrowRight,
  Users,
  Building2,
  BriefcaseBusiness,
  ShieldCheck,
  Target,
  Rocket,
} from "lucide-react";

function About() {
  return (
    <div className="w-full bg-white mt-18">

      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">
            About <span className="text-yellow-300">NexHire</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-gray-200">
            NexHire is a modern recruitment platform built to connect talented
            professionals with trusted companies. Whether you're looking for
            your dream job or searching for the perfect candidate, NexHire
            makes hiring simple, secure, and efficient.
          </p>

          <Link to="/jobs">
            <button className="mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-100 transition cursor-pointer">
              Explore Jobs
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Our <span className="text-blue-600">Story</span>
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Finding the right job shouldn't be difficult. NexHire was created
              with one simple goal: to help talented people connect with
              companies that value their skills.
            </p>

            <p className="text-gray-600 mt-5 leading-8">
              Our platform provides a seamless hiring experience with verified
              companies, smart job discovery, secure authentication, and a
              user-friendly interface designed for both recruiters and job
              seekers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-slate-100 rounded-2xl p-8">
              <Target className="text-blue-600" size={42} />
              <h3 className="text-2xl font-semibold mt-5">Mission</h3>
              <p className="text-gray-600 mt-3">
                Connect professionals with trusted companies worldwide.
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8">
              <Rocket className="text-blue-600" size={42} />
              <h3 className="text-2xl font-semibold mt-5">Vision</h3>
              <p className="text-gray-600 mt-3">
                Build the future of recruitment through innovation and
                technology.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Choose <span className="text-blue-600">NexHire?</span>
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Everything you need to find opportunities and hire top talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Users className="text-blue-600" size={42} />
              <h3 className="text-xl font-semibold mt-5">Job Seekers</h3>
              <p className="text-gray-600 mt-3">
                Find jobs that match your skills and experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Building2 className="text-blue-600" size={42} />
              <h3 className="text-xl font-semibold mt-5">Companies</h3>
              <p className="text-gray-600 mt-3">
                Hire skilled professionals with confidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <BriefcaseBusiness className="text-blue-600" size={42} />
              <h3 className="text-xl font-semibold mt-5">Career Growth</h3>
              <p className="text-gray-600 mt-3">
                Unlock opportunities that accelerate your career.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <ShieldCheck className="text-blue-600" size={42} />
              <h3 className="text-xl font-semibold mt-5">Secure Platform</h3>
              <p className="text-gray-600 mt-3">
                Safe authentication and trusted company profiles.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Experience <span className="text-blue-600">NexHire</span>
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
              Watch how NexHire transforms the hiring journey from searching
              for opportunities to landing your dream career.
            </p>
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 hidden md:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[650px] object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>

        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-blue-600">5000+</h2>
              <p className="text-gray-600 mt-3">Jobs Posted</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600">800+</h2>
              <p className="text-gray-600 mt-3">Companies</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600">25000+</h2>
              <p className="text-gray-600 mt-3">Professionals</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600">98%</h2>
              <p className="text-gray-600 mt-3">Success Rate</p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Build Your <span className="text-blue-600">Future?</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Join thousands of professionals and companies already using
            NexHire to discover opportunities and build successful careers.
          </p>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">

            <Link to="/jobs">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition cursor-pointer">
                Browse Jobs
              </button>
            </Link>

            <Link to="/signup">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl transition cursor-pointer">
                Join NexHire
              </button>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;