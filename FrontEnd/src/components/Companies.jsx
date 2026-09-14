import React, { useEffect, useState } from "react";
import { Building2, MapPin, Globe, AlarmPlusIcon } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import API from "../API/axios"

function Companies() {
  const [company , setcompany] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchCompanies = async ()=>{
      try {
        const res = await AlarmPlusIcon.get('/api/v1/company/all',
        {},
        {
          withCredentials: true,
        }
        )
        if(res.data.success){
          toast.success(res.data.message)
          setcompany(res.data.companies)

          console.log(res.data)
        }
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    }
    fetchCompanies();
  },[])
  

  return (
    <section className="bg-slate-100 min-h-screen py-16 mt-18">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Explore <span className="text-blue-600">Top Companies</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover leading companies hiring talented professionals and find
            your next career opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {company.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
            >

              <div className="w-20 h-20 flex items-center justify-center">
                <img className="w-full h-full object-center object-contain" src={company.logo} alt={company.name} />
              </div>

              <h2 className="text-2xl font-bold mt-5 truncate">
                {company.name}
              </h2>

              <p className="text-gray-500 mt-3 leading-6 line-clamp-2">
                {company.description}
              </p>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{company.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 truncate">
                  <Globe size={18} />
                  <span>{company.website}</span>
                </div>

              </div>
              <div className="flex justify-between items-center mt-8 w-full">
                <button onClick={()=> navigate(`/company/description/${company._id}`)} className="w-full bg-blue-100 text-blue-700 cursor-pointer py-2 text-[17px] rounded-lg text-sm font-medium hover:bg-blue-700 hover:text-white transition-all">
                  Detail
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Companies;