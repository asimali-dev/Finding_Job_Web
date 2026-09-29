import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { setsinglecompany } from '@/redux/CompanySlice';


function AdminCompanyDes() {

    const { id } = useParams()
    console.log("Company ID:", id);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const res = await axios.get(
                    `https://finding-job-web.vercel.app/api/v1/company/get/${id}`,
                    {
                        withCredentials: true,
                    }
                );

                console.log("API RESPONSE:", res.data);

                if (res.data.success) {
                    dispatch(setsinglecompany(res.data.company));
                }

            } catch (error) {
                console.log("API ERROR:", error.response?.data);
            }
        }


        fetchCompany();

    }, [id]);
    const { singleCompany } = useSelector((store) => store.company)

    const { adminJobs } = useSelector((store) => store.job)
    console.log("adminjobs", adminJobs)
    const companyJobs = adminJobs.filter(
        (job) => job?.company?._id === singleCompany?._id
    );
    return (
        <div className="min-h-screen bg-slate-100 py-10 px-5">
            <div className="max-w-7xl mx-auto space-y-8 mt-20">
                <div className="bg-white rounded-2xl shadow-md p-8">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div className="flex gap-6">

                            <img
                                src={singleCompany?.logo}
                                className="w-28 h-28 rounded-xl border object-cover"
                                alt=""
                            />

                            <div>
                                <h1 className="text-3xl font-bold">
                                    {singleCompany?.name}
                                </h1>

                                <p className="text-gray-500 mt-2">
                                    {singleCompany?.location}
                                </p>

                                <a
                                    href="/"
                                    className="text-blue-600 hover:underline"
                                >
                                    {singleCompany?.website}
                                </a>
                            </div>

                        </div>

                        <div>
                            <Link to={`/admin/company/edit/${singleCompany?._id}`}>
                                <Button>
                                    Edit Company
                                </Button>
                            </Link>
                        </div>

                    </div>

                    <hr className="my-8" />

                    <h2 className="text-xl font-semibold mb-3">
                        About Company
                    </h2>

                    <p className="text-gray-600 leading-8">
                        {singleCompany?.description}
                    </p>

                </div>
                <div className="bg-white rounded-2xl shadow-md p-8">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-2xl font-bold">
                            Jobs Posted
                        </h2>
                        <Link to={`/admin/job/create/${singleCompany?._id}`}>
                            <Button>
                                Create Job
                            </Button>

                        </Link>
                    </div>


                    <Table>
                        <TableCaption>Your company jobs.</TableCaption>

                        <TableHeader>
                            <TableRow>
                                <TableHead>Job Title</TableHead>
                                <TableHead>Applicants</TableHead>
                                <TableHead>Salary</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {
                                companyJobs.map((job) => (
                                    <TableRow key={job?._id}>
                                        <TableCell>{job?.title}</TableCell>
                                        <TableCell>{job?.applications.length}</TableCell>
                                        <TableCell> {job.salary >= 1000 ? `${job.salary / 1000}k` : job.salary}</TableCell>
                                        <TableCell>Active</TableCell>
                                        <TableCell>
                                            <button onClick={() => {
                                                navigate(`/admin/job/detail/${job?._id}`)
                                            }} className="bg-blue-600 text-white px-3 py-1 rounded">
                                                View
                                            </button>
                                        </TableCell>
                                    </TableRow>

                                ))
                            }
                        </TableBody>
                    </Table>

                </div>

            </div>
        </div>
    );
}

export default AdminCompanyDes