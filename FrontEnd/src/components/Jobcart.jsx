import React from 'react'
import { Bookmark, MapPin, Briefcase, DollarSign } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function Jobcart({allJobs}) {
    const navigate = useNavigate();
    return (
        <div
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 truncate">
                        {allJobs?.title}

                    </h3>

                    <p className="text-sm text-gray-500 font-medium ">
                        {allJobs?.company?.name} • 2 days ago
                    </p>
                </div>

                <button className="p-2 rounded-full hover:bg-slate-100 transition">
                    <Bookmark size={20} />
                </button>
            </div>

            <p className="text-gray-600 text-sm mt-4 leading-6 line-clamp-2">
                {allJobs?.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-5">

                <div className="flex items-center gap-1 text-sm text-gray-600 ">
                    <MapPin size={16} />
                    {allJobs?.location}
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Briefcase size={16} />
                    {allJobs?.jobtype}
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <a href="">PKR {allJobs?.salary}</a>
                </div>

            </div>

            <div className="flex flex-wrap gap-2 mt-5">
                {
                    allJobs?.requirements.map((skill, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                            {skill}
                        </span>

                    ))
                }

            </div>

            <div className="flex gap-3 mt-6">

                <button onClick={() => navigate(`description/${allJobs._id}`)} className="flex-1 border border-gray-300 rounded-lg py-2 font-medium hover:bg-slate-100 transition cursor-pointer">
                    Details
                </button>

                <button className="flex-1 bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition cursor-pointer">
                    Apply
                </button>

            </div>
        </div>
    )
}

export default Jobcart