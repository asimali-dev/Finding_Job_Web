
import React from "react";
import {
    Building2,
    MapPin,
    BriefcaseBusiness,
    Users,
    Wallet,
    CalendarDays,
    Pencil,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setSingleJob } from "@/redux/JobSlice";
import { toast } from "sonner";

function AdminJobDes() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const { singleJob } = useSelector((store) => store.job);

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/api/v1/job/get/${id}`,
                    {
                        withCredentials: true,
                    }
                );

                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                toast.error(error.response?.data?.message);
            }
        };

        fetchSingleJob();
    }, [id, dispatch]);

    return (
        <div className="min-h-screen bg-slate-100 py-20 sm:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 lg:p-8">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                        <div className="min-w-0">
                            <div className="flex items-start sm:items-center gap-3 flex-wrap">

                                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 break-words">
                                    {singleJob?.title}
                                </h1>

                                <span className="shrink-0 bg-green-100 text-green-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                    Active
                                </span>

                            </div>

                            <p className="text-slate-500 mt-3 text-sm sm:text-base">
                                {singleJob?.company?.name}
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                navigate(`/admin/job/edit/${singleJob?._id}`);
                            }}
                            className="w-full lg:w-auto shrink-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-xl transition cursor-pointer"
                        >
                            <Pencil size={18} />
                            Edit Job
                        </button>

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-8">

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-5 sm:mb-6">
                            Job Information
                        </h2>

                        <div className="space-y-5">

                            <div className="flex items-start gap-4">
                                <Building2
                                    className="text-blue-600 shrink-0 mt-1"
                                    size={22}
                                />

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Company
                                    </p>

                                    <h3 className="font-semibold text-slate-800 break-words">
                                        {singleJob?.company?.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin
                                    className="text-red-500 shrink-0 mt-1"
                                    size={22}
                                />

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Location
                                    </p>

                                    <h3 className="font-semibold text-slate-800 break-words">
                                        {singleJob?.location}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <BriefcaseBusiness
                                    className="text-green-600 shrink-0 mt-1"
                                    size={22}
                                />

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Job Type
                                    </p>

                                    <h3 className="font-semibold text-slate-800 capitalize">
                                        {singleJob?.jobtype}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Wallet
                                    className="text-yellow-600 shrink-0 mt-1"
                                    size={22}
                                />

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Salary
                                    </p>

                                    <h3 className="font-semibold text-slate-800">
                                        {singleJob?.salary
                                            ? `${singleJob.salary.toLocaleString()} PKR`
                                            : "N/A"}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Users
                                    className="text-purple-600 shrink-0 mt-1"
                                    size={22}
                                />

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Applicants
                                    </p>

                                    <h3 className="font-semibold text-slate-800">
                                        {singleJob?.applications?.length || 0}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CalendarDays
                                    className="text-slate-600 shrink-0 mt-1"
                                    size={22}
                                />

                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">
                                        Posted On
                                    </p>

                                    <h3 className="font-semibold text-slate-800">
                                        {singleJob?.createdAt
                                            ? new Date(singleJob.createdAt).toLocaleDateString()
                                            : "N/A"}
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">

                        <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-5 sm:mb-6">
                            Requirements
                        </h2>

                        <div className="flex flex-wrap gap-2.5 sm:gap-3">

                            {singleJob?.requirements?.map((item, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>
                    </div>

                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mt-6 sm:mt-8">

                    <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-5">
                        Job Description
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-7 sm:leading-8 break-words">
                        {singleJob?.description}
                    </p>

                </div>

                <div className="mt-6 sm:mt-8 flex justify-stretch sm:justify-end">

                    <button
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl transition cursor-pointer"
                    >
                        View Applicants
                    </button>

                </div>

            </div>
        </div>
    );
}

export default AdminJobDes;

