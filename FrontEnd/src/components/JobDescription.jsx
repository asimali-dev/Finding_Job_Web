import React, { useEffect } from "react";
import {
  MapPin,
  Briefcase,
  IndianRupee,
  Calendar,
  Building2,
  Clock,
  Users,
  ArrowLeft,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setSingleJob } from "@/redux/JobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import useApplyJob from "../hooks/useApplyJob";
import API from "../API/axios"

function JobDescription() {
  const { user } = useSelector((store) => store.auth)
  const {applyJob} = useApplyJob();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const singleJob = async () => {
      try {
        const res = await API.get(
          `/api/v1/job/get/${id}`,
          {
            withCredentials: true,
          },
        );
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          console.log("Redux me bhej diya");
          toast.success(res.data.message)
        }

      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    }
    singleJob()

  }, [id, dispatch])
  const posted_time = (mongodbTime) => {
    const createTime = new Date(mongodbTime);
    const currentTime = new Date();
    const Timediff = currentTime - createTime;
    return Math.floor(Timediff / (1000 * 24 * 60 * 60))
  }
  const navigate = useNavigate();
  const { singleJob } = useSelector((store) => store.job);
  console.log(singleJob)


  const isApplied = singleJob?.applications.some((application)=>application?.applicant?._id === user._id || false)

  if (!singleJob) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10 mt-18">
      <div className="max-w-7xl mx-auto px-5">

        <button onClick={() => navigate("/jobs")} className="flex items-center gap-2 text-sky-600 font-medium mb-6 hover:text-sky-700 cursor-pointer">
          <ArrowLeft size={18} />
          Back to Jobs
        </button>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8" data-aos="fade-up">

          <div className="flex flex-col lg:flex-row justify-between gap-8" >

            <div >

              <div className="w-25 h-25 rounded-2xl flex items-center justify-center text-3xl font-bold text-sky-600">
                <img className="w-full h-full object-center object-contain" src={singleJob?.company?.logo} alt="G" />
              </div>

              <h1 className="text-4xl font-bold text-slate-800 mt-5">
                {singleJob?.title}
              </h1>

              <p className="text-slate-500 text-lg mt-1">
                {singleJob?.company?.name} Inc.
              </p>

              <div className="flex flex-wrap gap-5 mt-6" >

                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  {singleJob?.location}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Briefcase size={18} />
                  {singleJob?.jobtype}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <a href="">PKR {singleJob?.salary}/month</a>
                </div>

              </div>

            </div>

            <div className="flex items-start">
              {
                (isApplied) ? (
                  <Button onClick={() => applyJob(id)} disabled className="bg-sky-500 hover:bg-sky-600 px-8 py-6 text-base">
                    Already Applied
                  </Button>
                ) : (
                  <Button onClick={() => applyJob(id)} className="bg-sky-500 hover:bg-sky-600 px-8 py-6 text-base" >
                    Apply Now
                  </Button>
                )
              }
            </div>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8" data-aos="fade-up">

              <h2 className="text-2xl font-bold mb-5" data-aos="fade-up">
                Job Description
              </h2>

              <p className="text-slate-600 leading-8">
                {singleJob?.description}
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8" data-aos="fade-up">

              <h2 className="text-2xl font-bold mb-5">
                Required Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {singleJob?.requirements.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-sky-100 text-black text-[16px] px-3 py-4 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}

              </div>

            </div>

          </div>

          <div className="space-y-8">

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8" data-aos="fade-up">

              <h2 className="text-2xl font-bold mb-6">
                Job Overview
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <Clock className="text-sky-500" />
                  <span>Experience : 2+ Years</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-sky-500" />
                  <span>Vacancies : {singleJob?.position}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-sky-500" />
                  <span>Posted : {posted_time(singleJob?.createdAt) == 0 ? "Today" : `${posted_time(singleJob?.createdAt)} days ago`}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Building2 className="text-sky-500" />
                  <span>{singleJob?.company?.name} Inc.</span>
                </div>

              </div>
              <Button className="w-full mt-8 bg-sky-500 hover:bg-sky-600">
                Apply Now
              </Button>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8" data-aos="fade-up">

              <h2 className="text-2xl font-bold mb-5">
                About Company
              </h2>

              <p className="text-slate-600 leading-7">
                Google is one of the world's leading technology companies,
                building products that help billions of people every day.
              </p>

              <Button
                variant="outline"
                className="mt-6 w-full"
              >
                View Company
              </Button>

            </div>

          </div>

        </div>

        <div className="mt-10" data-aos="fade-up">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Related Jobs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">
                  React Developer
                </h3>

                <p className="text-slate-500 mt-2">
                  Microsoft
                </p>

                <Button className="w-full mt-6 bg-sky-500 hover:bg-sky-600">
                  View Details
                </Button>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default JobDescription;