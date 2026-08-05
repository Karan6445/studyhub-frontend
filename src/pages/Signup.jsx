import React, { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return alert("Please fill all fields.");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/signup", formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-orange-50
      via-white
      to-amber-100
      px-5
      relative
      overflow-hidden
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        w-72
        h-72
        bg-orange-300
        rounded-full
        blur-3xl
        opacity-30
        top-10
        right-10
      "
      ></div>

      {/* Card */}

      <div
        className="
        w-full
        max-w-md
        bg-white/50
        backdrop-blur-2xl
        border
        border-white/70
        shadow-2xl
        rounded-3xl
        p-8
      "
      >
        {/* Logo */}

        <div className="flex justify-center mb-5">
          <div
            className="
            w-16
            h-16
            rounded-full
            bg-gradient-to-r
            from-orange-500
            via-amber-500
            to-yellow-500
            flex
            items-center
            justify-center
            shadow-lg
          "
          >
            <GraduationCap size={35} className="text-white" />
          </div>
        </div>

        <h1
          className="
          text-4xl
          font-bold
          text-center
          bg-gradient-to-r
          from-orange-500
          via-amber-500
          to-yellow-500
          bg-clip-text
          text-transparent
        "
          style={{ fontFamily: "'Literata', serif" }}
        >
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-8 mt-2">
          Join StudyHub today
        </p>

        {/* Form */}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="
            w-full
            py-3
            px-4
            rounded-xl
            bg-white/80
            border
            border-gray-200
            outline-none
            focus:ring-2
            focus:ring-orange-400
            focus:border-orange-400
            transition
          "
          />

          {/* Email */}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="
            w-full
            py-3
            px-4
            rounded-xl
            bg-white/80
            border
            border-gray-200
            outline-none
            focus:ring-2
            focus:ring-orange-400
            focus:border-orange-400
            transition
          "
          />

          {/* Password */}

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="
            w-full
            py-3
            px-4
            rounded-xl
            bg-white/80
            border
            border-gray-200
            outline-none
            focus:ring-2
            focus:ring-orange-400
            focus:border-orange-400
            transition
          "
          />

          {/* Signup Button */}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-orange-500
            via-amber-500
            to-yellow-500
            text-white
            font-semibold
            hover:shadow-lg
            hover:shadow-orange-300
            hover:scale-[1.02]
            transition-all
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Google Button */}

          <button
            type="button"
            className="
            w-full
            py-3
            rounded-xl
            bg-white
            border
            border-gray-200
            hover:border-orange-400
            hover:bg-orange-50
            transition
          "
          >
            Sign Up With Google
          </button>
        </form>

        {/* Login Link */}

        <p className="text-center mt-6 text-gray-600">
          Already have an account?

          <Link
            to="/login"
            className="
            text-orange-600
            font-bold
            ml-1
            hover:underline
          "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;