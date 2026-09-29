import React, { useState } from 'react'
import axios from "axios";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function UpdatedProfile({ open, setopen }) {
    const [input, setinput] = useState({
        fullname: "",
        email: "",
        phonenumber: "",
        bio: "",
        skills: "",
        resume: null,
        profilephoto: null
    })
    const changeEventHandler = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value,
        })

    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phonenumber", input.phonenumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.profilephoto) {
            formData.append("profilephoto", input.profilephoto);
        }

        if (input.resume) {
            formData.append("resume", input.resume);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }

        try {
            console.log("Before axios");
            const res = await axios.post(
                "https://finding-job-web.vercel.app/api/v1/user/Profile/Update",
                formData,
                {
                    withCredentials: true,
                }
            );
            if (res.data.success) {
                setopen(false);
                console.log(res.data);
            }
            console.log("try")

        } catch (error) {
            console.log(error.response);
            console.log(error.response?.data);
        }
        console.log("hey")
    }
    const filechangehandler = (e) => {
        const file = e.target.files?.[0]
        setinput({
            ...input,
            resume: file,
        })

    }
    return (
        <Dialog open={open} onOpenChange={setopen}>
            <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle className="text-[18px] mx-auto">Update Profile</DialogTitle>
                    <form className="space-y-5 mt-5" onSubmit={submitHandler}>
                        <div>
                            <label className="text-sm font-medium">Full Name</label>
                            <input
                                name="fullname"
                                value={input.fullname}
                                onChange={changeEventHandler}
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full mt-2 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                                name="email"
                                value={input.email}
                                onChange={changeEventHandler}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Phone Number</label>
                            <input
                                name="phonenumber"
                                value={input.phonenumber}
                                onChange={changeEventHandler}
                                type="text"
                                placeholder="Enter phone number"
                                className="w-full mt-2 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Bio</label>
                            <textarea

                                name="bio"
                                value={input.bio}
                                onChange={changeEventHandler}

                                rows="4"
                                placeholder="Tell recruiters about yourself"
                                className="w-full mt-2 border rounded-lg px-4 py-2 outline-none resize-none focus:ring-2 focus:ring-sky-500"
                            ></textarea>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Skills</label>
                            <input
                                name="skills"
                                type="text"
                                value={input.skills}
                                onChange={changeEventHandler}
                                placeholder="HTML, CSS, JavaScript, React"
                                className="w-full mt-2 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Resume (PDF)</label>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={filechangehandler}
                                className="w-full mt-2 border rounded-lg px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Profile Photo</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    setinput((prev) => ({
                                        ...prev,
                                        profilephoto: file,
                                    }));
                                }}
                                className="w-full mt-2 border rounded-lg px-4 py-2"
                            />
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button onClick={() => {
                                setopen(false)
                            }}
                                type="button"
                                className="px-5 py-2 rounded-lg border hover:bg-slate-100 cursor-pointer"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white cursor-pointer"
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default UpdatedProfile