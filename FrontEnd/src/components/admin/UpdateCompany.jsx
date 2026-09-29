import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setsinglecompany } from "@/redux/CompanySlice";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCompany() {
    const { singleCompany } = useSelector((store) => store.company);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        logo: null,
    });

    useEffect(() => {
        if (singleCompany) {
            setInput({
                name: singleCompany.name,
                description: singleCompany.description,
                website: singleCompany.website,
                location: singleCompany.location,
                logo: null,
            });
        }
    }, [singleCompany]);

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const fileChangeHandler = (e) => {
        setInput({
            ...input,
            logo: e.target.files[0],
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submit chala ha")

        const formData = new FormData();

        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);

        if (input.logo) {
            formData.append("logo", input.logo);
        }

        try {
            const res = await axios.put(
                `https://finding-job-web.vercel.app/api/v1/company/update/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                console.log("han data mil gya ha ")
                dispatch(setsinglecompany(res.data.updated_company));
                toast.success(res.data.message);
                navigate(`/admin/company/detail/${id}`);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    };




    return (
        <div className="min-h-screen bg-slate-100 py-8 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border mt-20">

                <div className="border-b px-8 py-6">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Update Company
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Update your company information.
                    </p>
                </div>

                <form onSubmit={submitHandler} className="p-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <div>
                            <label className="block mb-2 font-semibold">
                                Company Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={changeEventHandler}
                                placeholder="Company Name"
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">
                                Website
                            </label>

                            <input
                                type="text"
                                name="website"
                                value={input.website}
                                onChange={changeEventHandler}
                                placeholder="https://company.com"
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
                                placeholder="Lahore, Pakistan"
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">
                                Company Logo
                            </label>

                            <input
                                type="file"
                                name="logo"
                                onChange={fileChangeHandler}
                                className="w-full border rounded-lg px-4 py-2.5 cursor-pointer"
                            />
                        </div>

                    </div>

                    <div className="mt-6">
                        <label className="block mb-2 font-semibold">
                            Company Description
                        </label>

                        <textarea
                            rows={6}
                            name="description"
                            value={input.description}
                            onChange={changeEventHandler}
                            placeholder="Write something about your company..."
                            className="w-full border rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">

                        <button
                            type="button"
                            className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition cursor-pointer"
                        >
                            Update Company
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default UpdateCompany;