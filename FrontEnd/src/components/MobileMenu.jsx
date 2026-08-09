
import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

function MobileMenu({ user, logoutHandler }) {
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        setTimeout(() => {
            setOpen(false);
        }, 300);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>

            <SheetTrigger asChild>
                <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                >
                    <Menu size={28} />
                </button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-[85%] max-w-[340px] bg-white px-5 sm:px-7"
            >

                <SheetHeader className="border-b pb-5">
                    <SheetTitle className="text-2xl font-bold text-black">
                        Nex<span className="text-blue-600">Hire</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="mt-7 flex flex-col">

                    <div
                        data-aos="fade-right"
                        data-aos-duration="500"
                        className="flex flex-col gap-1"
                    >

                        {user?.role === "recruiter" ? (
                            <>
                                <Link
                                    to="/admin/dashboard"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to="/admin/jobs"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Jobs
                                </Link>

                                <Link
                                    to="/admin/companies"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Companies
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/jobs"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Jobs
                                </Link>

                                <Link
                                    to="/companies"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Companies
                                </Link>

                                <Link
                                    to="/about"
                                    onClick={handleNavigate}
                                    className="px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    About Us
                                </Link>
                            </>
                        )}

                    </div>

                    <div className="border-t border-gray-200 my-6"></div>

                    {!user ? (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="flex flex-col gap-3"
                        >

                            <Link to="/login" onClick={handleNavigate}>
                                <button
                                    className="w-full py-3.5 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition cursor-pointer"
                                >
                                    Login
                                </button>
                            </Link>

                            <Link to="/signup" onClick={handleNavigate}>
                                <button
                                    className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
                                >
                                    Signup
                                </button>
                            </Link>

                        </div>
                    ) : (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="rounded-2xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 p-4"
                        >

                            <div className="flex items-center gap-3">

                                <Popover
                                    open={profileOpen}
                                    onOpenChange={setProfileOpen}
                                >

                                    <PopoverTrigger asChild>
                                        <button className="cursor-pointer">
                                            <Avatar className="h-12 w-12 border-2 border-blue-100">

                                                <AvatarImage
                                                    src={user?.profile?.profilephoto}
                                                />

                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>

                                            </Avatar>
                                        </button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-64">

                                        <div className="space-y-3">

                                            <h4 className="font-semibold text-gray-800">
                                                {user?.fullname}
                                            </h4>

                                            {user?.role === "student" && (
                                                <button
                                                    onClick={() => {
                                                        setProfileOpen(false);
                                                        setOpen(false);
                                                        navigate("/profile");
                                                    }}
                                                    className="w-full py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                                                >
                                                    View Profile
                                                </button>
                                            )}

                                            <button
                                                onClick={() => {
                                                    setProfileOpen(false);
                                                    setOpen(false);
                                                    logoutHandler();
                                                }}
                                                className="w-full py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                                            >
                                                Logout
                                            </button>

                                        </div>

                                    </PopoverContent>

                                </Popover>

                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-800 truncate">
                                        {user?.fullname}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {user?.role === "recruiter"
                                            ? "Recruiter"
                                            : "Student"}
                                    </p>
                                </div>

                            </div>

                        </div>
                    )}

                </div>

            </SheetContent>

        </Sheet>
    );
}

export default MobileMenu
