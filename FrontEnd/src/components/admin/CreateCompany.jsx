import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
function CreateCompany() {
    const [input, setinput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        logo: ""
    });
    const changeEventHandler = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    const fileChangeHandler = (e) => {
        setinput({
            ...input,
            logo: e.target.files[0],
        });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        const formdata = new FormData();
        formdata.append("name", input.name);
        formdata.append("website", input.website);
        formdata.append("description", input.description);
        formdata.append("logo", input.logo);
        formdata.append("location", input.location);

        try {
            const res = await axios.post(
                "https://finding-job-web.vercel.app/api/v1/company/register",
                formdata,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true
                }

            )
            if (res.data.success) {
                toast.success(res.data.message);
                console.log(res.data)
                setinput({
                    name: "",
                    description: "",
                    website: "",
                    location: "",
                    logo: null,
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }


    }
    return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8 mt-20">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl border border-slate-200">
            <div className="border-b px-6 md:px-10 py-6">
                <h1 className="text-3xl font-bold text-slate-800">
                    Create Company
                </h1>
                <p className="text-gray-500 mt-2">
                    Fill in your company details before posting jobs.
                </p>
            </div>
            <form 
                className="p-6 md:p-10"
                onSubmit={submitHandler}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Company Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={changeEventHandler}
                            placeholder="Google Inc."
                            className="w-full border rounded-xl px-4 py-3 
                            outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>



                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Website
                        </label>

                        <input
                            type="text"
                            name="website"
                            value={input.website}
                            onChange={changeEventHandler}
                            placeholder="https://company.com"
                            className="w-full border rounded-xl px-4 py-3 
                            outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={input.location}
                            onChange={changeEventHandler}
                            placeholder="Lahore, Pakistan"
                            className="w-full border rounded-xl px-4 py-3 
                            outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Company Logo
                        </label>

                        <input
                            type="file"
                            name="logo"
                            onChange={fileChangeHandler}
                            className="w-full border rounded-xl px-4 py-3 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="mt-6">

                    <label className="block mb-2 font-semibold text-slate-700">
                        Company Description
                    </label>


                    <textarea
                        rows={6}
                        name="description"
                        value={input.description}
                        onChange={changeEventHandler}
                        placeholder="Write something about your company..."
                        className="w-full border rounded-xl px-4 py-3 
                        resize-none outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">


                    <button
                        type="button"
                        className="border border-gray-300 px-8 py-3 
                        rounded-xl hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 
                        rounded-xl hover:bg-blue-700 transition"
                    >
                        Create Company
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default CreateCompany;