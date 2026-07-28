import React from "react";
import { Building2, MapPin, Globe } from "lucide-react";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Google",
      location: "Lahore",
      website: "www.google.com",
      jobs: 24,
      description:
        "Join one of the world's leading technology companies and build products used by millions.",
    },
    {
      id: 2,
      name: "Microsoft",
      location: "Islamabad",
      website: "www.microsoft.com",
      jobs: 18,
      description:
        "Create innovative software solutions and grow your career with Microsoft.",
    },
    {
      id: 3,
      name: "Arbisoft",
      location: "Lahore",
      website: "www.arbisoft.com",
      jobs: 15,
      description:
        "Work on modern web applications with talented software engineers.",
    },
    {
      id: 4,
      name: "Systems Limited",
      location: "Karachi",
      website: "www.systemsltd.com",
      jobs: 12,
      description:
        "Pakistan's leading IT company with exciting career opportunities.",
    },
    {
      id: 5,
      name: "Devsinc",
      location: "Lahore",
      website: "www.devsinc.com",
      jobs: 10,
      description:
        "Build scalable applications and collaborate with global clients.",
    },
    {
      id: 6,
      name: "10Pearls",
      location: "Islamabad",
      website: "www.10pearls.com",
      jobs: 20,
      description:
        "Deliver world-class digital products using modern technologies.",
    },
  ];

  return (
    <section className="bg-slate-100 min-h-screen py-16 mt-18">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Explore <span className="text-blue-600">Top Companies</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover leading companies hiring talented professionals and find
            your next career opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
            >

              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                <Building2 className="text-blue-600" size={30} />
              </div>

              <h2 className="text-2xl font-bold mt-5">
                {company.name}
              </h2>

              <p className="text-gray-500 mt-3 leading-6">
                {company.description}
              </p>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{company.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Globe size={18} />
                  <span>{company.website}</span>
                </div>

              </div>
              <div className="flex justify-between items-center mt-8">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {company.jobs} Open Jobs
                </span>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  View Jobs
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Companies;