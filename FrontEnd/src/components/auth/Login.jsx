import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-[430px] bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to continue to NexHire.
        </p>

        <form className="space-y-5">

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="mt-2"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
            Login
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
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