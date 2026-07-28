import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice"
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setinput] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "",
    file: ""
  });
  const changeEventHandler = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const fileChangeHandler = (e) => {
    setinput({
      ...input,
      file: e.target.files[0],
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input)
    const formdata = new FormData();
    formdata.append("fullname", input.fullname);
    formdata.append("email", input.email);
    formdata.append("phonenumber", input.phonenumber);
    formdata.append("password", input.password);
    formdata.append("role", input.role);
    formdata.append("file", input.file);


    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/register",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }

      )
      console.log(res.data);
      if (res.data.success) {
        navigate("/")
        dispatch(setUser(res.data.user));
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Something is missing")
      //  console.log(error.response?.data);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Join NexHire and find your dream job.
        </p>

        <form className="space-y-5" onSubmit={submitHandler}>

          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your full name"
              className="mt-2"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter your phone number"
              className="mt-2"
              name="phonenumber"
              value={input.phonenumber}
              onChange={changeEventHandler}
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="mt-2"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>

          <div>
            <Label className="mb-2 block">Register As</Label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" value="student" onChange={changeEventHandler} />
                Student
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" value="recruiter" onChange={changeEventHandler} />
                Recruiter
              </label>
            </div>
          </div>
          <div>
            <Label>Profile Photo</Label>
            <Input
              type="file"
              className="mt-2 cursor-pointer"
              accept="image/*"
              onChange={fileChangeHandler}
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;