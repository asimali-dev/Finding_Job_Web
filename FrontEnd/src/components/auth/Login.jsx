
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice"
import API from "../../API/axios"

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input)

    try {
      const res = await API.post("/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }

      )
      console.log(res.data);
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        if(res.data.user.role === "student"){
          navigate("/")
        }
        else if (res.data.user.role === "recruiter" ){
          navigate("/admin/dashboard")
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message);
      console.log(error.response);
      console.log(error.response?.data);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-[430px] bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to continue to NexHire.
        </p>

        <form className="space-y-5" onSubmit={submitHandler}>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2"
              value={input.email}
              onChange={changeEventHandler}
              name="email"
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
            <Label className="mb-2 block">Login As</Label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={changeEventHandler}
                />
                Student
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  onChange={changeEventHandler}
                />
                Recruiter
              </label>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer" type="submit">
            Login
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;