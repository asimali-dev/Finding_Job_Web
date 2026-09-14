
import React, { useEffect } from "react";
import {
    Building2,
    BriefcaseBusiness,
    Users,
    Plus,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminJobs } from "@/redux/JobSlice";
import axios from "axios";
import { setcompanies } from "@/redux/CompanySlice";
import API from "../../API/axios"

function Dashboard() {
    const dispatch = useDispatch();

    const fetchAdminJobs = async () => {
        try {
            const res = await API.get(
                "/api/v1/job/get/admin",
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                dispatch(setAdminJobs(res.data.job));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCompanies = async () => {
        try {
            const res = await API.get(
                "/api/v1/company/get",
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                dispatch(setcompanies(res.data.companies));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAdminJobs();
        fetchCompanies();
    }, []);

    const { companies } = useSelector((store) => store.company);
    const { adminJobs } = useSelector((store) => store.job);
    const { user } = useSelector((store) => store.auth);

    console.log("user", user);

    const totalApplicants = adminJobs.reduce(
        (total, job) => total + (job.applications?.length || 0),
        0
    );

    return (
        <div className="min-h-screen bg-slate-100 mt-18 py-6 sm:py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 lg:p-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                        Welcome Back {user?.fullname} 👋
                    </h1>

                    <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-2xl leading-6">
                        Manage your companies, jobs and applicants from one place.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8">

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm sm:text-base text-slate-500">
                                    Companies
                                </p>

                                <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800">
                                    {companies.length || 0}
                                </h2>
                            </div>

                            <div className="shrink-0 bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">
                                <Building2
                                    className="text-blue-600"
                                    size={26}
                                />
                            </div>
                        </div>
                    </div>

 
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm sm:text-base text-slate-500">
                                    Jobs Posted
                                </p>

                                <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800">
                                    {adminJobs.length || 0}
                                </h2>
                            </div>

                            <div className="shrink-0 bg-green-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">
                                <BriefcaseBusiness
                                    className="text-green-600"
                                    size={26}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm sm:text-base text-slate-500">
                                    Applicants
                                </p>

                                <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-800">
                                    {totalApplicants}
                                </h2>
                            </div>

                            <div className="shrink-0 bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">
                                <Users
                                    className="text-purple-600"
                                    size={26}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 lg:p-7 mt-6 sm:mt-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
                        Quick Actions
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 mt-2 leading-6">
                        Create and manage your companies.
                    </p>

                    <Link
                        to="/admin/company/create"
                        className="mt-5 sm:mt-6 inline-flex w-full sm:w-auto"
                    >
                        <button
                            className="w-full sm:w-auto min-h-[46px] flex items-center justify-center gap-2
                            bg-blue-600 hover:bg-blue-700
                            text-white px-5 sm:px-6 py-2.5 sm:py-3
                            rounded-xl transition cursor-pointer"
                        >
                            <Plus size={18} />
                            Add Company
                        </button>
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 lg:p-7 mt-6 sm:mt-8">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                                Recent Jobs
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Your latest posted jobs.
                            </p>
                        </div>

                        <Link
                            to="/admin/jobs"
                            className="self-start sm:self-auto inline-flex items-center gap-2
                            text-blue-600 hover:text-blue-700
                            text-sm sm:text-base font-medium transition"
                        >
                            View All
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="mt-6">
                        {adminJobs.length === 0 ? (
                            <div className="flex flex-col items-center justify-center min-h-[220px] sm:min-h-[250px]
                                rounded-2xl border border-dashed border-slate-300
                                bg-slate-50 px-5 sm:px-8 py-10 text-center">

                                <h3 className="text-lg sm:text-xl font-semibold text-slate-700">
                                    No jobs posted yet
                                </h3>

                                <p className="mt-2 max-w-md text-sm sm:text-base text-slate-500 leading-6">
                                    You haven't posted any jobs yet. Create your first job to start receiving applications.
                                </p>

                                <Link
                                    to="/admin/companies"
                                    className="mt-5 inline-flex items-center justify-center
                                    min-h-[44px] rounded-xl
                                    bg-blue-600 hover:bg-blue-700
                                    px-5 sm:px-6 py-2.5
                                    text-sm sm:text-base font-medium text-white
                                    transition"
                                >
                                    Create New Job
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">

                                {adminJobs.map((job) => (
                                    <div
                                        key={job._id}
                                        className="w-full min-w-0 bg-slate-50 border border-slate-200
                                        rounded-2xl p-5 sm:p-6
                                        hover:shadow-md transition"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-lg sm:text-xl font-bold text-slate-800 truncate">
                                                    {job.title}
                                                </h3>

                                                <p className="text-sm text-slate-500 mt-1 truncate">
                                                    {job.company?.name}
                                                </p>
                                            </div>

                                            <span className="shrink-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                Active
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mt-5">
                                            <div className="bg-white rounded-xl p-3 min-w-0">
                                                <p className="text-xs text-slate-500">
                                                    Location
                                                </p>

                                                <p className="font-semibold text-sm mt-1 truncate text-slate-700">
                                                    {job.location}
                                                </p>
                                            </div>

                                            <div className="bg-white rounded-xl p-3 min-w-0">
                                                <p className="text-xs text-slate-500">
                                                    Salary
                                                </p>

                                                <p className="font-semibold text-sm mt-1 text-slate-700">
                                                    {job.salary >= 1000
                                                        ? `${Math.floor(job.salary / 1000)}k`
                                                        : job.salary}
                                                </p>
                                            </div>

                                            <div className="bg-white rounded-xl p-3 min-w-0">
                                                <p className="text-xs text-slate-500">
                                                    Applicants
                                                </p>

                                                <p className="font-semibold text-sm mt-1 text-slate-700">
                                                    {job.applications?.length || 0}
                                                </p>
                                            </div>

                                            <div className="bg-white rounded-xl p-3 min-w-0">
                                                <p className="text-xs text-slate-500">
                                                    Job Type
                                                </p>

                                                <p className="font-semibold text-sm mt-1 truncate text-slate-700 capitalize">
                                                    {job.jobtype}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
