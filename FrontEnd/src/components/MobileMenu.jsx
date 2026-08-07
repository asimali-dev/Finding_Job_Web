
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
    const navigate = useNavigate();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="cursor-pointer">
                    <Menu size={28} />
                </button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-[300px] bg-white px-6"
            >
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold">
                        NexHire
                    </SheetTitle>
                </SheetHeader>

                <div className="mt-10 flex flex-col gap-2">

                    {user?.role === "recruiter" ? (
                        <>
                            <Link
                                to="/admin/dashboard"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/admin/jobs"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                Jobs
                            </Link>

                            <Link
                                to="/admin/companies"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                Companies
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/jobs"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                Jobs
                            </Link>

                            <Link
                                to="/companies"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                Companies
                            </Link>

                            <Link
                                to="/about"
                                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                                About Us
                            </Link>
                        </>
                    )}

                    <div className="border-t my-5"></div>

                    {!user ? (
                        <div className="flex flex-col gap-3">

                            <Link to="/login">
                                <button
                                    className="
                                    w-full py-3 rounded-xl
                                    bg-gray-100
                                    font-semibold
                                    hover:bg-gray-200
                                    transition
                                    "
                                >
                                    Login
                                </button>
                            </Link>

                            <Link to="/signup">
                                <button
                                    className="
                                    w-full py-3 rounded-xl
                                    bg-blue-600
                                    text-white
                                    font-semibold
                                    hover:bg-blue-700
                                    transition
                                    "
                                >
                                    Signup
                                </button>
                            </Link>

                        </div>
                    ) : (
                        <div
                            className="
                            flex items-center gap-4
                            bg-gray-50
                            p-4
                            rounded-2xl
                            "
                        >

                            <Popover
                                open={open}
                                onOpenChange={setOpen}
                            >
                                <PopoverTrigger asChild>

                                    <Avatar className="h-14 w-14 cursor-pointer">

                                        <AvatarImage
                                            src={user?.profile?.profilephoto}
                                        />

                                        <AvatarFallback>
                                            CN
                                        </AvatarFallback>

                                    </Avatar>

                                </PopoverTrigger>

                                <PopoverContent className="w-64">

                                    <div className="space-y-3">

                                        <h4 className="font-semibold">
                                            {user?.fullname}
                                        </h4>

                                        {user?.role === "student" && (
                                            <button
                                                onClick={() => {
                                                    setOpen(false);
                                                    navigate("/profile");
                                                }}
                                                className="
                                                w-full
                                                py-2
                                                rounded-lg
                                                bg-blue-600
                                                text-white
                                                "
                                            >
                                                View Profile
                                            </button>
                                        )}

                                        <button
                                            onClick={logoutHandler}
                                            className="
                                            w-full
                                            py-2
                                            rounded-lg
                                            border
                                            hover:bg-gray-100
                                            "
                                        >
                                            Logout
                                        </button>

                                    </div>

                                </PopoverContent>
                            </Popover>

                            <div>
                                <p className="font-semibold">
                                    {user?.fullname}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {user?.role === "recruiter"
                                        ? "Recruiter"
                                        : "Student"}
                                </p>
                            </div>

                        </div>
                    )}

                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileMenu;
