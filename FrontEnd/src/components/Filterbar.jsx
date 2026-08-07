import React from "react";
import { useDispatch } from "react-redux";
import { setLocationFilter, setRoleFilter, setSalaryFilter } from "@/redux/JobSlice";
function FilterSidebar() {
  const dispatch = useDispatch();

  const filterData = [
    {
      filterType: "location",
      array: [
        "lahore",
        "karachi",
        "islamabad",
        "gujranwala",
        "multan",
      ],
    },
    {
      filterType: "role job",
      array: [
        "frontend developer",
        "backend developer",
        "MERN Stack developer",
        "ai developer",
        "software developer",
      ],
    },
    {
      filterType: "salary",
      array: [
        "0-40k",
        "42k-100k",
        "101k-125k",
        "126k-150k",
      ],
    },
  ];


  return (
    <div className="w-full md:w-72 bg-white rounded-xl shadow-sm border p-5">

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Filter Jobs
      </h2>


      {
        filterData.map((filter, index) => (
          <div key={index} className="mb-7">

            <h3 className="text-lg font-semibold capitalize text-gray-700 mb-4">
              {filter.filterType}
            </h3>


            <div className="space-y-3">

              {
                filter.array.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      name={filter.filterType}
                      value={item}
                      className="w-4 h-4 cursor-pointer accent-blue-600"
                      onChange={()=>{
                        if(filter.filterType === "location"){
                          dispatch(setLocationFilter(item))
                        }
                        if(filter.filterType === "role job"){
                          dispatch(setRoleFilter(item))
                        }
                        if(filter.filterType === "salary"){
                          dispatch(setSalaryFilter(item))
                        }
                      }}
                    />

                    <label className="text-gray-600 capitalize cursor-pointer hover:text-blue-600 transition">
                      {item}
                    </label>

                  </div>
                ))
              }

            </div>

          </div>
        ))
      }

    </div>
  );
}

export default FilterSidebar;