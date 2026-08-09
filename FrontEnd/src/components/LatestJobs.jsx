import React from "react";
import { Bookmark, MapPin, Briefcase, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function LatestJobs() {
    const navigate = useNavigate();
    const { allJobs } = useSelector((store) => store.job)
    console.log("all jobs", allJobs)
    console.log("company", allJobs.company)
    return (
        <section className="w-full bg-slate-100 py-16 px-6 flex flex-col">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Latest Jobs & <span className="text-blue-600">Top Openings</span>
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Explore the latest job opportunities from top companies and find
                        the perfect role that matches your skills and career goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {

                        (allJobs.length == 0) ? (
                            <span className="text-[20px] font-medium text-slate-700">
                                Not Jobs Yet
                            </span>
                        )
                            : allJobs.slice(0, 4).map((job, index) => (
                                <div
                                    key={job._id}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 truncate">
                                                {job.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {job.company.name}
                                            </p>
                                        </div>

                                        <button className="p-2 rounded-full hover:bg-slate-100 transition">
                                            <Bookmark size={20} />
                                        </button>
                                    </div>

                                    <p className="text-gray-600 text-sm mt-4 leading-6 line-clamp-2">
                                        {job?.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-5">

                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <MapPin size={16} />
                                            {job.location}
                                        </div>

                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <Briefcase size={16} />
                                            {job.jobtype}
                                        </div>

                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <DollarSign size={16} />
                                            PKR {job.salary}
                                        </div>

                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {job.requirements.slice(0,3).map((skills, index) => (
                                            <span key={index} className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                                                {skills}
                                            </span>
                                        ))}


                                    </div>

                                    <div className="flex gap-3 mt-6">

                                        <button onClick={() => navigate(`/job/description/${job._id}`)} className="flex-1 border border-gray-300 rounded-lg py-2 font-medium hover:bg-slate-100 transition cursor-pointer">
                                            Details
                                        </button>

                                        <button onClick={()=> navigate(`/job/description/${job._id}`)} className="flex-1 bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition cursor-pointer">
                                            Apply
                                        </button>

                                    </div>
                                </div>
                            ))}

                </div>
            </div>
        </section>
    );
}

export default LatestJobs;