import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function UpdateJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [input, setinput] = useState({
    title: "",
    company: "",
    location: "",
    jobtype: "",
    salary: "",
    position: "",
    requirements: "",
    description: "",
  });

  const changeEventHandler = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `https://finding-job-web.vercel.app/api/v1/job/get/${id}`,
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          const job = res.data.job;

          setinput({
            title: job.title,
            company: job.company?._id,
            location: job.location,
            jobtype: job.jobtype,
            salary: job.salary,
            position: job.position,
            requirements: job.requirements.join(", "),
            description: job.description,
          });
        }
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    };

    fetchSingleJob();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://finding-job-web.vercel.app/api/v1/job/update/${id}`,
        input,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate(`/admin/job/detail/${id}`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-20 px-4">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="border-b px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Update Job
          </h1>

          <p className="text-slate-500 mt-2">
            Update the information of your job posting.
          </p>
        </div>

        <form onSubmit={submitHandler} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">
                Job Title
              </label>

              <input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Job Type
              </label>

              <select
                name="jobtype"
                value={input.jobtype}
                onChange={changeEventHandler}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="internship">Internship</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Salary
              </label>

              <input
                type="number"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Positions
              </label>

              <input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Requirements
              </label>

              <input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              rows={7}
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={() => navigate("/admin/jobs")}
              className="border border-slate-300 px-8 py-3 rounded-xl hover:bg-slate-100 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition cursor-pointer"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateJob;