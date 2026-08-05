import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return alert("Please fill all fields.");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", formData);

      // Save Token
      localStorage.setItem("token", res.data.token);

      // Save User
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-100 px-5 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Login Card */}

      <div className="relative w-full max-w-md bg-white/50 backdrop-blur-2xl border border-white/70 shadow-2xl rounded-3xl p-8">

        {/* Logo */}

        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-lg">
            <GraduationCap
              size={35}
              className="text-white"
            />
          </div>
        </div>

        <h1
          className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Literata',serif" }}
        >
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Login to continue your learning journey
        </p>

        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Email */}

          <div className="mb-5 relative">

            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            />

          </div>

          {/* Password */}

          <div className="mb-6 relative">

            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-11 pr-11 py-3 rounded-xl bg-white/80 border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            />

            {showPassword ? (

              <EyeOff
                onClick={() => setShowPassword(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-orange-500"
                size={18}
              />

            ) : (

              <Eye
                onClick={() => setShowPassword(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-orange-500"
                size={18}
              />

            )}

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-300 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        {/* Divider */}

        <div className="flex items-center gap-3 my-6">

          <div className="h-px bg-gray-300 flex-1"></div>

          <span className="text-gray-500 text-sm">
            OR
          </span>

          <div className="h-px bg-gray-300 flex-1"></div>

        </div>

        {/* Google */}

        <button
          type="button"
          className="w-full py-3 rounded-xl bg-white border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition"
        >
          Continue with Google
        </button>

        {/* Signup */}

        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <Link
            to="/signup"
            className="ml-1 text-orange-600 font-bold hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;