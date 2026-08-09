
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Building2,
  BriefcaseBusiness,
  ShieldCheck,
  Target,
  Rocket,
  CheckCircle2,
} from "lucide-react";

function About() {
  return (
    <div className="bg-white text-slate-800">

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl px-6 sm:px-10 lg:px-20 py-16 sm:py-20 text-center text-white shadow-xl">

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <BriefcaseBusiness size={17} />
              Modern Recruitment Platform
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-7">
              About NexHire
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl leading-8 text-blue-50">
              NexHire is a modern recruitment platform built to connect
              talented professionals with companies looking for the right
              people. We make job searching and hiring simple, secure,
              and efficient.
            </p>

            <div className="flex justify-center gap-4 mt-9 flex-wrap">

              <Link to="/jobs">
                <button className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-7 py-3.5 rounded-xl font-semibold transition cursor-pointer">
                  Explore Jobs
                  <ArrowRight size={19} />
                </button>
              </Link>

              <Link to="/signup">
                <button className="border border-white/70 hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition cursor-pointer">
                  Join NexHire
                </button>
              </Link>

            </div>

          </div>

        </div>
      </section>


      <section className="py-20 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>

            <p className="text-blue-600 font-semibold tracking-wide">
              WHO WE ARE
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Making Recruitment
              <span className="text-blue-600"> Easier</span>
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              Finding the right opportunity should not be complicated.
              NexHire brings job seekers and recruiters together through
              an easy-to-use platform where talent meets opportunity.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              From discovering jobs and creating professional profiles
              to managing applications and hiring candidates, NexHire
              provides everything needed for a smooth recruitment journey.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0" size={21} />
                <span>Simple and user-friendly experience</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0" size={21} />
                <span>Professional job and company profiles</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0" size={21} />
                <span>Secure authentication and applications</span>
              </div>

            </div>

          </div>


          <div className="grid sm:grid-cols-2 gap-5">

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 hover:shadow-lg transition">
              <Target className="text-blue-600" size={40} />

              <h3 className="text-xl font-bold text-slate-900 mt-5">
                Our Mission
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Connect talented professionals with companies where
                their skills can make a real impact.
              </p>
            </div>


            <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition">
              <Rocket className="text-blue-600" size={40} />

              <h3 className="text-xl font-bold text-slate-900 mt-5">
                Our Vision
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Build a smarter and more accessible future for
                recruitment through technology.
              </p>
            </div>


            <div className="sm:col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-7 sm:p-8">
              <h3 className="text-2xl font-bold">
                Talent Meets Opportunity
              </h3>

              <p className="text-blue-50 mt-3 leading-7 max-w-2xl">
                Whether you are searching for your first opportunity
                or building your next team, NexHire helps you move
                forward with confidence.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="py-20 sm:py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-600 font-semibold tracking-wide">
              OUR PLATFORM
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Everything You Need
            </h2>

            <p className="text-slate-600 mt-5 leading-7">
              NexHire provides useful tools for both job seekers and
              recruiters in one simple platform.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-14">

            <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition">
              <Users className="text-blue-600" size={40} />

              <h3 className="text-xl font-bold text-slate-900 mt-5">
                Job Seekers
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Discover opportunities that match your skills,
                experience, and career goals.
              </p>
            </div>


            <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition">
              <Building2 className="text-blue-600" size={40} />

              <h3 className="text-xl font-bold text-slate-900 mt-5">
                Companies
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Create company profiles and find talented
                professionals for your organization.
              </p>
            </div>


            <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition">
              <BriefcaseBusiness className="text-blue-600" size={40} />

              <h3 className="text-xl font-bold text-slate-900 mt-5">
                Career Growth
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Explore new opportunities and take the next step
                in your professional journey.
              </p>
            </div>


            <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition">
              <ShieldCheck className="text-blue-600" size={40} />

              <h3 className="text-xl font-bold text-slate-900 mt-5">
                Secure Platform
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Your account and application data are handled with
                security and privacy in mind.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-100 rounded-3xl py-14 sm:py-16">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                  5000+
                </h2>
                <p className="text-slate-600 mt-3">
                  Jobs Posted
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                  800+
                </h2>
                <p className="text-slate-600 mt-3">
                  Companies
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                  25000+
                </h2>
                <p className="text-slate-600 mt-3">
                  Professionals
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                  98%
                </h2>
                <p className="text-slate-600 mt-3">
                  Success Rate
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="py-20 sm:py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            <Rocket size={17} />
            Start Your Journey
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Ready to Build Your
            <span className="text-blue-600"> Future?</span>
          </h2>

          <p className="text-slate-600 mt-6 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
            Join professionals and companies using NexHire to
            discover opportunities, connect with talent, and build
            successful careers.
          </p>

          <div className="flex justify-center gap-4 mt-9 flex-wrap">

            <Link to="/jobs">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition cursor-pointer">
                Browse Jobs
              </button>
            </Link>

            <Link to="/signup">
              <button className="border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3.5 rounded-xl font-semibold transition cursor-pointer">
                Create Account
              </button>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;

