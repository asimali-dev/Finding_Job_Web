import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import {
  MapPin,
  Globe,
  Building2,
  ArrowLeft,
} from "lucide-react";

function CompanyDescription() {

  const { id } = useParams();

  const [company, setCompany] = useState({});

  useEffect(() => {

    const fetchCompany = async () => {

      try {

        const res = await axios.get(
          `http://localhost:3000/api/v1/company/get/${id}`,
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          setCompany(res.data.company);
        }

      } catch (error) {

        toast.error(
          error.response?.data?.message || "Something went wrong"
        );

      }

    };

    fetchCompany();

  }, [id]);


  return (

    <div className="min-h-screen bg-slate-100 mt-18 py-10">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8" data-aos = "fade-up">

          <Link
            to="/companies"
            className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-700"
          >
            <ArrowLeft size={18}/>
            Back
          </Link>
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-24 h-24 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">

              {
                company.logo ?

                <img
                  src={company.logo}
                  className="w-full h-full object-contain"
                />
                :
                <Building2
                  size={45}
                  className="text-blue-600"
                />

              }

            </div>
            <div className="flex-1 text-center sm:text-left">

              <h1 className="text-3xl font-bold text-slate-800">
                {company.name}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 text-gray-600">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin size={18}/>
                  {company.location || "Not Available"}
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Globe size={18}/>
                  {company.website || "Not Available"}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-6" data-aos = "fade-up">


          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            About Company
          </h2>
          <p className="text-gray-600 leading-7">

            {
              company.description ||
              "No description available"
            }

          </p>

        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-6" data-aos = "fade-up">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Company Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">
                Company Name
              </p>

              <h3 className="font-semibold mt-1">
                {company.name}
              </h3>

            </div>
            <div>

              <p className="text-sm text-gray-500">
                Location
              </p>

              <h3 className="font-semibold mt-1">
                {company.location || "N/A"}
              </h3>

            </div>
            <div>

              <p className="text-sm text-gray-500">
                Website
              </p>

              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 mt-1 block break-all"
              >
                {company.website || "N/A"}
              </a>

            </div>
            <div>

              <p className="text-sm text-gray-500">
                Created Date
              </p>
              <h3 className="font-semibold mt-1">
                {
                  company.createdAt
                  ?
                  new Date(company.createdAt).toLocaleDateString()
                  :
                  "N/A"
                }
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-3
            rounded-xl
            transition
            cursor-pointer
            "
          >
            View Company Jobs
          </button>


        </div>



      </div>

    </div>

  );

}

export default CompanyDescription;