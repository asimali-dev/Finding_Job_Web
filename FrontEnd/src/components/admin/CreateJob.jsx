import { setcompanies } from "@/redux/CompanySlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";


function CreateJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { companies } = useSelector((store) => store.company)
  useEffect(() => {
    const fetchCompanies = async () => {
      if (companies.length > 0) return;

      try {
        const res = await axios.get(
          "https://finding-job-web.vercel.app/api/v1/company/get",
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

    fetchCompanies();
  }, [companies, dispatch]);
  const [input, setinput] = useState({
    title: "",
    company: "",
    location: "",
    jobtype: "",
    salary: "",
    position: "",
    requirements: "",
    description: ""
  })
  const changeEventListener = (e) => {
    setinput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: input.title,
      description: input.description,
      company: input.company,
      location: input.location,
      jobtype: input.jobtype,
      salary: input.salary,
      position: input.position,
      requirements: input.requirements,
    }
    try {
      const res = await axios.post(
        "https://finding-job-web.vercel.app/api/v1/job/create",
        data,
        {
          withCredentials: true,
        }
      )
      if(res.data.success){
        toast.success(res.data.message);
        console.log(res.data);
        navigate("/admin/jobs")
      }

    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error.response?.data);
    }

  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 mt-20">
        <div className="border-b px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Create New Job
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the details below to publish a new job opening.
          </p>
        </div>

        <form className="p-8" onSubmit={submitHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventListener}
                placeholder="Frontend Developer"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Company
              </label>
              <select name="company" value={input.company} onChange={changeEventListener} className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Company</option>
                {companies.map((company) => (
                  <option key={company._id} value={company._id}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Location
              </label>
              <input
                type="text"
                placeholder="Lahore, Pakistan"
                name="location"
                value={input.location}
                onChange={changeEventListener}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Job Type
              </label>
              <select name="jobtype" value={input.jobtype} onChange={changeEventListener} className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option value={"full time"}>Full Time</option>
                <option value={"part time"}>Part Time</option>
                <option value={"internship"}>Internship</option>
                <option value={"remote"}>Remote</option>
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
                onChange={changeEventListener}
                placeholder="120000"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Number of Positions
              </label>
              <input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventListener}
                placeholder="5"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-semibold">
              Requirements
            </label>
            <input
              type="text"
              name="requirements"
              value={input.requirements}
              onChange={changeEventListener}
              placeholder="React, Node.js, MongoDB, Express"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-semibold">
              Job Description
            </label>
            <textarea
              name="description"
              value={input.description}
              onChange={changeEventListener}
              rows={6}
              placeholder="Describe the job role..."
              className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              className="border border-gray-300 px-8 py-1.5 md:py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 md:py-3 rounded-xl transition cursor-pointer"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;