import React from 'react'
import logo from "../assets/Gemini_Generated_Image_3lnljw3lnljw3lnl.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from '@/redux/authSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
                "http://localhost:3000/api/v1/user/logout",
                {},
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                dispatch(logoutUser());
                toast.success(res.data.message);
                navigate("/");
            }

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }
    const { user } = useSelector((store) => store.auth);
    return (
        <nav className='w-full h-18 bg-white px-10 py-2 flex justify-between items-center fixed top-0 left-0 z-50'>
            <div className='w-[15%] h-full'>
                <img className='object-cover w-full h-full ' src={logo} alt="" />
            </div>
            <div
                className={`h-full flex items-center ${!user ? "justify-between w-[43%]" : "justify-end w-[30%]"
                    }`}
            >
                <div className="w-[85%] h-full">
                    <ul className="flex justify-between text-lg h-full items-center">
                        <Link to={"/"}>
                            <li className="cursor-pointer hover:text-blue-600 transition-all duration-200">
                                Home
                            </li></Link>
                        <Link to={"/jobs"}>
                            <li className="cursor-pointer hover:text-blue-600 transition-all duration-200">
                                Jobs
                            </li>

                        </Link>
                        <Link to={"/companies"}>
                            <li className="cursor-pointer hover:text-blue-600 transition-all duration-200">
                                Companies
                            </li>

                        </Link>
                         <Link to={"/about"}>
                            <li className="cursor-pointer hover:text-blue-600 transition-all duration-200">
                                About Us
                            </li>

                        </Link>
                    </ul>
                </div>

                <div
                    className={`flex items-center ${!user ? "w-[55%] pl-4" : "w-auto ml-6"
                        }`}
                >
                    {!user ? (
                        <div className="flex items-center gap-3">
                            <Link to="/login"> <button
                                className="px-5 py-2 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition cursor-pointer"
                            >
                                Login
                            </button></Link>
                            <Link to="/signup">
                                <button
                                    className="px-5 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition cursor-pointer"
                                >
                                    Signup
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <div className="cursor-pointer">
                                    <Avatar className="h-11 w-11">
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                                    </Avatar>
                                </div>
                            </PopoverTrigger>

                            <PopoverContent className="w-80">
                                <div className="space-y-3">
                                    <h4 className="font-semibold">Asim Ali</h4>

                                    <p className="text-sm text-muted-foreground">
                                        MERN Stack Developer
                                    </p>

                                    <button className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition-all duration-300">
                                        View Profile
                                    </button>

                                    <button onClick={logoutHandler} className="w-full rounded-md border border-gray-300 py-2 hover:bg-gray-100 transition-all duration-300">
                                        Logout
                                    </button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>




        </nav>
    )
}

export default Navbar