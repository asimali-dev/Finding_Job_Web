import React, { useState } from "react";
import AppliedJobs from "./AppliedJobs";
import { useSelector } from "react-redux";
import {
    Mail,
    Phone,
    MapPin,
    Upload,
    Download,
    Pencil,
} from "lucide-react";
import UpdatedProfile from "./UpdatedProfile";

function Profile() {

    const [Open, SetOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    return (
        <div className="bg-slate-100 min-h-screen mt-18 py-6 md:py-10">

            <div className="max-w-6xl mx-auto px-4 md:px-5">

                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 md:p-8">

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                        <div className="flex flex-col sm:flex-row items-center gap-6">

                            <div>
                                <img
                                    src={user?.profile?.profilephoto}
                                    alt=""
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-sky-200 shadow-lg"
                                />
                            </div>


                            <div className="text-center sm:text-left">

                                <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                                    {user?.fullname
                                        ?.split(" ")
                                        .map(word =>
                                            word.charAt(0).toUpperCase() +
                                            word.slice(1).toLowerCase()
                                        )
                                        .join(" ")}
                                </h1>

                                <p className="text-slate-500 mt-3 max-w-xl leading-7">
                                    {user?.profile?.bio}
                                </p>

                            </div>

                        </div>


                        <button
                            onClick={() => SetOpen(true)}
                            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl transition cursor-pointer"
                        >
                            <Pencil size={18}/>
                            Edit Profile
                        </button>

                    </div>

                </div>


                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mt-8">


                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 md:p-8">

                        <h2 className="text-2xl font-bold text-slate-800 mb-8">
                            Contact Information
                        </h2>


                        <div className="space-y-6">


                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                                    <Mail className="text-sky-500"/>
                                </div>

                                <div className="overflow-hidden">
                                    <p className="text-sm text-slate-500">
                                        Email
                                    </p>

                                    <h3 className="font-semibold break-all">
                                        {user?.email}
                                    </h3>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                                    <Phone className="text-sky-500"/>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Phone
                                    </p>

                                    <h3 className="font-semibold">
                                        {user?.phonenumber}
                                    </h3>
                                </div>

                            </div>


                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                                    <MapPin className="text-sky-500"/>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Location
                                    </p>

                                    <h3 className="font-semibold">
                                        {user?.city}, {user?.country}
                                    </h3>
                                </div>

                            </div>


                        </div>

                    </div>



                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-4 md:p-8">

                        <h2 className="text-2xl font-bold text-slate-800 mb-8">
                            Skills
                        </h2>


                        <div className="flex flex-wrap gap-3">

                            {
                                user?.profile?.skills?.map((skill,index)=>(
                                    <span
                                        key={index}
                                        className="px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-medium hover:bg-sky-500 hover:text-white transition cursor-pointer"
                                    >
                                        {skill}
                                    </span>
                                ))
                            }

                        </div>


                    </div>


                </div>



                <div className="rounded-3xl shadow-lg border border-slate-200 p-5 md:p-8 mt-8 bg-white">

                    <h2 className="text-2xl font-bold text-slate-800 mb-8">
                        Resume
                    </h2>


                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4">

                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">


                            <div className="w-full">

                                <h3 className="text-xl font-semibold text-slate-800">
                                    Upload Your Resume
                                </h3>


                                <p className="text-slate-500 mt-2">
                                    Upload your latest CV in PDF format.
                                </p>


                                <a
                                    className="break-all text-blue-600"
                                    href={user?.profile?.resume}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {user?.profile?.resumeOrignalName}
                                </a>


                            </div>



                            <div className="flex flex-wrap justify-center gap-4">


                                <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl transition cursor-pointer">
                                    <Upload size={18}/>
                                    Upload Resume
                                </button>



                                <a
                                    href={user?.profile?.resume}
                                    download={user?.profile?.resumeOrignalName}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    <button className="flex items-center gap-2 border border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-xl transition cursor-pointer">
                                        <Download size={18}/>
                                        Download Resume
                                    </button>

                                </a>


                            </div>


                        </div>

                    </div>

                </div>



                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 md:p-8 mt-8">

                    <h2 className="text-2xl font-bold text-slate-800 mb-8">
                        Applied Jobs
                    </h2>

                    <AppliedJobs />

                </div>



                <UpdatedProfile open={Open} setopen={SetOpen}/>


            </div>

        </div>
    );
}

export default Profile;