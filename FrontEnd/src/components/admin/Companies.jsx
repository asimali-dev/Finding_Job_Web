
import { setcompanies } from "@/redux/CompanySlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


function Companies() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        const fetch_companies = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/company/get",
                    {
                        withCredentials: true,
                    }
                );

                if (res.data.success) {
                    dispatch(setcompanies(res.data.companies));
                    console.log(res.data.companies);
                    toast.success(res.data.message);
                }
            } catch (error) {
                toast.error(error.response?.data?.message);
            }
        };

        fetch_companies();
    }, []);

    const { companies } = useSelector((store) => store.company);

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-16 sm:mt-20">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="min-w-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                            My Companies
                        </h1>

                        <p className="text-sm sm:text-base text-gray-500 mt-1">
                            Manage all your registered companies.
                        </p>
                    </div>

                    <button onClick={()=> navigate("/admin/company/create")} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition cursor-pointer whitespace-nowrap">
                        + Create Company
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                    {
                        companies.map((company) => (
                            <div
                                key={company?._id}
                                className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-slate-200 hover:shadow-lg transition flex flex-col min-h-[280px]"
                            >
                                <div className="min-w-0">
                                    <h2 className="text-lg sm:text-xl font-bold text-slate-800 truncate">
                                        {company?.name}
                                    </h2>

                                    <p className="text-sm sm:text-base text-gray-500 mt-2 truncate">
                                        {company?.location}, Pakistan
                                    </p>

                                    <p className="text-sm sm:text-base text-gray-600 mt-4 line-clamp-3 leading-6">
                                        {company?.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-auto pt-6">
                                    <a
                                        href={company?.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline text-sm truncate max-w-full sm:max-w-[55%]"
                                    >
                                        Visit Website
                                    </a>

                                    <Link
                                        to={`/admin/company/detail/${company._id}`}
                                        className="w-full sm:w-auto"
                                    >
                                        <button className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                                            View
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Companies;
