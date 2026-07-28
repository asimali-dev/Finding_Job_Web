import React from "react";
import { Bookmark, MapPin, Briefcase, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const randomJobs = [1,2,3,4,5,6,7,8]

function LatestJobs() {
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

                    randomJobs.slice(0,4).map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Frontend Developer
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Google • 2 days ago
                                    </p>
                                </div>

                                <button className="p-2 rounded-full hover:bg-slate-100 transition">
                                    <Bookmark size={20} />
                                </button>
                            </div>

                            <p className="text-gray-600 text-sm mt-4 leading-6">
                                Join our team to build modern and responsive web applications
                                using React.js and Tailwind CSS.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-5">

                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <MapPin size={16} />
                                    Lahore
                                </div>

                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <Briefcase size={16} />
                                    Full Time
                                </div>

                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <DollarSign size={16} />
                                    PKR 120k
                                </div>

                            </div>

                            <div className="flex flex-wrap gap-2 mt-5">

                                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                                    React
                                </span>

                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                    Tailwind
                                </span>

                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                                    JavaScript
                                </span>

                            </div>

                            <div className="flex gap-3 mt-6">

                                <button className="flex-1 border border-gray-300 rounded-lg py-2 font-medium hover:bg-slate-100 transition cursor-pointer">
                                    Details
                                </button>

                                <button className="flex-1 bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition cursor-pointer">
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