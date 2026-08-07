
import { setAdminJobs } from "@/redux/JobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Jobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminJobs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/job/get/admin",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          console.log("chala");
          dispatch(setAdminJobs(res.data.job));
          console.log(res.data);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    };

    fetchAdminJobs();
  }, []);

  const { adminJobs } = useSelector((store) => store.job);

  return (
    <div className="min-h-screen bg-slate-100 mt-18 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                My Jobs
              </h1>

              <p className="text-slate-500 mt-2 text-sm sm:text-base leading-6">
                Manage all jobs posted by your companies.
              </p>
            </div>

            <Link
              to="/admin/companies"
              className="w-full sm:w-auto shrink-0"
            >
              <button className="w-full sm:w-auto min-h-[46px] bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition cursor-pointer">
                + Create New Job
              </button>
            </Link>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8">

          {adminJobs.map((job) => (
            <div
              key={job?._id}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-6 hover:shadow-md transition min-w-0 flex flex-col"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-800 break-words">
                    {job?.title}
                  </h2>

                  <p className="text-sm text-slate-500 mt-1 truncate">
                    {job?.company?.name}
                  </p>
                </div>

                <span className="shrink-0 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Active
                </span>

              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">

                <div className="bg-slate-50 rounded-xl p-3 sm:p-4 min-w-0">
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <h3 className="font-semibold text-sm sm:text-base mt-1 text-slate-700 break-words">
                    {job?.location}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 sm:p-4 min-w-0">
                  <p className="text-xs text-slate-500">
                    Salary
                  </p>

                  <h3 className="font-semibold text-sm sm:text-base mt-1 text-slate-700">
                    {job?.salary >= 1000
                      ? `${Math.floor(job.salary / 1000)}k`
                      : job?.salary}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 sm:p-4 min-w-0">
                  <p className="text-xs text-slate-500">
                    Applicants
                  </p>

                  <h3 className="font-semibold text-sm sm:text-base mt-1 text-slate-700">
                    {job?.applications?.length || 0}
                  </h3>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 sm:p-4 min-w-0">
                  <p className="text-xs text-slate-500">
                    Job Type
                  </p>

                  <h3 className="font-semibold text-sm sm:text-base mt-1 text-slate-700 capitalize break-words">
                    {job?.jobtype}
                  </h3>
                </div>

              </div>

              <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-1">

                <button
                  onClick={() => {
                    navigate(`/admin/job/detail/${job?._id}`);
                  }}
                  className="w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl transition cursor-pointer text-sm sm:text-base"
                >
                  View Details
                </button>

                <button
                  onClick={() => {
                    navigate(`/admin/job/edit/${job?._id}`);
                  }}
                  className="w-full min-h-[44px] border border-slate-300 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition cursor-pointer text-sm sm:text-base"
                >
                  Edit
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Jobs;

