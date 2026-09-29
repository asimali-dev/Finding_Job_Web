import React, { useState } from 'react'
import logo from "../assets/Gemini_Generated_Image_3lnljw3lnljw3lnl.png";
import { Link } from "react-router-dom";
import { logoutUser } from '@/redux/authSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import MobileMenu from "./MobileMenu";

import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

import axios from 'axios';

function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.post(
                "https://finding-job-web.vercel.app/api/v1/user/logout",
                {},
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                dispatch(logoutUser());
                navigate("/");
            }

        } catch (error) {
            console.log(error);
        }
    }

    const { user } = useSelector((store) => store.auth);
    const [open, setopen] = useState(false);


    return (

        <nav className='w-full h-18 bg-white px-5 lg:px-10 py-2 flex justify-between items-center fixed top-0 left-0 z-50'>


            <div className='w-[35%] sm:w-[25%] lg:w-[15%] h-full'>
                <img
                    className='object-cover w-full h-full'
                    src={logo}
                    alt=""
                />
            </div>
            <div className='hidden lg:flex h-full items-center'>


                <div className="w-[85%] h-full">

                    <ul className="flex gap-10 text-lg h-full items-center">
                        {
                            (user && user.role === "recruiter") ? (
                                <>
                                 <Link to={"/admin/dashboard"}>
                                        <li className='cursor-pointer hover:text-blue-600'>Dasboard</li>
                                    </Link>
                                    <Link to={"/admin/jobs"}>
                                        <li className='cursor-pointer hover:text-blue-600'>Jobs</li>
                                    </Link>
                                    <Link to={"/admin/companies"}>
                                        <li className='cursor-pointer hover:text-blue-600'>Companies</li>
                                    </Link>
                                </>

                            ) : (
                                <>
                                    <Link to={"/"}>
                                        <li className="cursor-pointer hover:text-blue-600">
                                            Home
                                        </li>
                                    </Link>


                                    <Link to={"/jobs"}>
                                        <li className="cursor-pointer hover:text-blue-600">
                                            Jobs
                                        </li>
                                    </Link>


                                    <Link to={"/companies"}>
                                        <li className="cursor-pointer hover:text-blue-600">
                                            Companies
                                        </li>
                                    </Link>


                                    <Link to={"/about"}>
                                        <li className="cursor-pointer hover:text-blue-600">
                                            About Us
                                        </li>
                                    </Link>
                                </>


                            )
                        }



                    </ul>

                </div>


                <div className="flex items-center ml-10">


                    {!user ? (

                        <div className="flex items-center gap-3">

                            <Link to="/login">
                                <button className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                                    Login
                                </button>
                            </Link>


                            <Link to="/signup">
                                <button className="px-5 py-2 rounded-lg bg-black text-white">
                                    Signup
                                </button>
                            </Link>


                        </div>

                    ) : (

                        <Popover open={open} onOpenChange={setopen}>

                            <PopoverTrigger asChild>

                                <div className="cursor-pointer">

                                    <Avatar className="h-11 w-11">

                                        <AvatarImage
                                            src={user?.profile?.profilephoto}
                                        />

                                        <AvatarFallback>
                                            CN
                                        </AvatarFallback>

                                        <AvatarBadge className="bg-green-600" />

                                    </Avatar>

                                </div>

                            </PopoverTrigger>


                            <PopoverContent className="w-80">

                                <div className="space-y-3">

                                    <h4 className="font-semibold">
                                        {user?.fullname}
                                    </h4>
                                    {
                                        user?.role === "student" && (
                                            <button
                                                onClick={() => {
                                                    setopen(false);
                                                    navigate("/profile");
                                                }}
                                                className="w-full rounded-md bg-blue-600 py-2 text-white"
                                            >
                                                View Profile
                                            </button>
                                        )
                                    }
                                    <button
                                        onClick={logoutHandler}
                                        className="w-full rounded-md border py-2"
                                    >
                                        Logout
                                    </button>


                                </div>

                            </PopoverContent>


                        </Popover>

                    )}

                </div>


            </div>

            <div className="lg:hidden">
                <MobileMenu user={user}
                    logoutHandler={logoutHandler} />
            </div>


        </nav>

    )
}

export default Navbar