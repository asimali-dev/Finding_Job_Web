
import React, { useEffect, useState } from "react";
import { Download, Eye, Check, X } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Applicants() {
  const { id } = useParams();
  const [applicants, setapplicants] = useState([]);
  const [job, setJob] = useState(null);


  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/applicants/get/applicants/${id}`,
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          console.log("data", res.data);
          console.log(res.data.job.applications);
          setapplicants(res.data.job.applications)
          setJob(res.data.job.title)
        }

      } catch (error) {
        console.log(error);
      }
    };
    fetchApplicants()

  }, [id])

  const updateStatus = async (applicationId , status)=>{
    try {
      const res = await axios.put(
        `http://localhost:3000/api/v1/applicants/update/${applicationId}`,
        {
          status : status
        },
        {
          withCredentials: true
        }
      )
      if(res.data.success){
        console.log("data", res.data);

        setapplicants((prev)=>(
          prev.map((application)=>{
            application._id === applicationId ? {...application , status : status} 
            : application

          })
        ))
      }
      
    } catch (error) {
      console.log(error)
      
    }

  };
  return (
    <div className="min-h-screen bg-slate-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 lg:p-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                Applicants
              </h1>

              <p className="text-slate-500 mt-2 text-sm sm:text-base">
                Manage applicants and review their applications.
              </p>
            </div>

            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold w-fit">
              Total Applicants: {applicants?.length}
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">

              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="px-4 py-4 text-sm font-semibold text-slate-600">
                    Applicant
                  </th>

                  <th className="px-4 py-4 text-sm font-semibold text-slate-600">
                    Email
                  </th>

                  <th className="px-4 py-4 text-sm font-semibold text-slate-600">
                    Job
                  </th>

                  <th className="px-4 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-4 py-4 text-sm font-semibold text-slate-600">
                    CV
                  </th>

                  <th className="px-4 py-4 text-sm font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  applicants.map((application) => (
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition">

                      <td className="px-4 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
                            <img className="w-full h-full object-center object-cover rounded-full" src={application?.applicant?.profile?.profilephoto} alt="" />
                          </div>

                          <div>
                            <p className="font-semibold text-slate-800">
                              {application?.applicant?.fullname}
                            </p>

                            <p className="text-sm text-slate-500">
                              {application?.applicant?.city}, {application.applicant?.country}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-5 text-sm text-slate-600">
                        {application?.applicant?.email}
                      </td>

                      <td className="px-4 py-5">
                        <p className="font-medium text-slate-700">
                          {job}
                        </p>
                      </td>

                      <td className="px-4 py-5">
                        <span className="inline-flex bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {application?.status}
                        </span>
                      </td>

                      <td className="px-4 py-5">
                        <div className="flex items-center gap-2">
                          <a href={`https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(
                            application?.applicant?.profile?.resume
                          )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-slate-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 transition">
                            <Eye size={16} />
                            View
                          </a>

                          <a
                            href={application?.applicant?.profile?.resume}
                            download={application?.applicant?.profile?.resumeOrignalName}
                            className="flex items-center gap-2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition"
                          >
                            <Download size={16} />
                            Download
                          </a>

                        </div>
                      </td>

                      <td className="px-4 py-5">
                        <div className="flex items-center gap-2">

                          <button onClick={()=> updateStatus(application?._id , "accepted")} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer">
                            <Check size={16} />
                            Accept
                          </button>

                          <button onClick={()=> updateStatus(application?._id , "rejected")} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer">
                            <X size={16} />
                            Reject
                          </button>

                        </div>
                      </td>

                    </tr>

                  ))
                }

              </tbody>

            </table>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Applicants;
