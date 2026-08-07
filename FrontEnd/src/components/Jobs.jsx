import React, { useEffect, useState } from "react";
import Filterbar from "./Filterbar";
import Jobcart from "./Jobcart";
import Sheet from "./Sheet";
import { useSelector } from "react-redux";

function Jobs() {
    const { allJobs, filters } = useSelector((store) => store.job);
    console.log("Redux jobs:", allJobs);

    const [filterJob, setfilterJob] = useState([]);

    if (!allJobs) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    useEffect(() => {
        let updatedJob = [...allJobs];

        if (filters.location) {
            updatedJob = updatedJob.filter((job) => {
                return (
                    job.location.toLowerCase() === filters.location.toLowerCase()
                );
            });
        }

        if (filters.role) {
            updatedJob = updatedJob.filter((job) => {
                return job.title
                    .toLowerCase()
                    .includes(filters.role.toLowerCase());
            });
        }

        if (filters.salary === "0-40k") {
            updatedJob = updatedJob.filter((job) => {
                return job.salary >= 0 && job.salary <= 40000;
            });
        }

        if (filters.salary === "42k-100k") {
            updatedJob = updatedJob.filter((job) => {
                return job.salary >= 42000 && job.salary <= 100000;
            });
        }

        if (filters.salary === "126k-150k") {
            updatedJob = updatedJob.filter((job) => {
                return job.salary >= 126000 && job.salary <= 150000;
            });
        }

        if (filters.search) {
            updatedJob = updatedJob.filter((job) => {
                return (
                    job.title
                        .toLowerCase()
                        .includes(filters.search.toLowerCase()) ||
                    job.description
                        .toLowerCase()
                        .includes(filters.search.toLowerCase())
                );
            });
        }

        setfilterJob(updatedJob);
    }, [allJobs, filters]);

    return (
        <div className="mt-18">
            <div className="max-w-7xl mx-auto mt-5 px-4 lg:px-0">

                {/* Mobile Filter Button */}
                <div className="block lg:hidden mb-5">
                    <Sheet />
                </div>

                <div className="flex flex-col lg:flex-row gap-5">

                    {/* Desktop Filter Sidebar */}
                    <div className="hidden lg:block lg:w-[22%]">
                        <Filterbar />
                    </div>

                    {allJobs.length === 0 ? (
                        <span>Job not Found</span>
                    ) : (
                        <div className="flex-1 pb-5 lg:h-[100vh] overflow-y-auto hide-scrollbar">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filterJob.map((item, index) => (
                                    <Jobcart key={index} allJobs={item} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Jobs;