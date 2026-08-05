import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  BookOpen,
  Clock,
  Star,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Introduction to Python",
    level: "Beginner",
    time: "5 min",
    desc: "Learn what Python is and why it is one of the most popular programming languages.",
  },
  {
    id: 2,
    title: "Installing Python",
    level: "Beginner",
    time: "6 min",
    desc: "Install Python, VS Code and run your first Python program.",
  },
  {
    id: 3,
    title: "Variables & Data Types",
    level: "Beginner",
    time: "8 min",
    desc: "Understand variables, integers, strings, floats and booleans.",
  },
  {
    id: 4,
    title: "Operators",
    level: "Beginner",
    time: "6 min",
    desc: "Arithmetic, Assignment, Logical and Comparison operators.",
  },
  {
    id: 5,
    title: "Conditional Statements",
    level: "Beginner",
    time: "7 min",
    desc: "Learn if, elif and else statements.",
  },
  {
    id: 6,
    title: "Loops",
    level: "Beginner",
    time: "8 min",
    desc: "Master for loops and while loops.",
  },
  {
    id: 7,
    title: "Functions",
    level: "Intermediate",
    time: "10 min",
    desc: "Create reusable functions with parameters and return values.",
  },
  {
    id: 8,
    title: "Lists",
    level: "Intermediate",
    time: "9 min",
    desc: "Store multiple values using Python Lists.",
  },
  {
    id: 9,
    title: "Tuples",
    level: "Intermediate",
    time: "8 min",
    desc: "Learn immutable collections in Python.",
  },
  {
    id: 10,
    title: "Sets",
    level: "Intermediate",
    time: "8 min",
    desc: "Work with unique values using Sets.",
  },
  {
    id: 11,
    title: "Dictionary",
    level: "Intermediate",
    time: "10 min",
    desc: "Store key-value pairs efficiently.",
  },
  {
    id: 12,
    title: "Strings",
    level: "Intermediate",
    time: "9 min",
    desc: "String manipulation and built-in methods.",
  },
  {
    id: 13,
    title: "Object-Oriented Programming",
    level: "Advanced",
    time: "15 min",
    desc: "Classes, Objects and Encapsulation.",
  },
  {
    id: 14,
    title: "Inheritance",
    level: "Advanced",
    time: "12 min",
    desc: "Reuse code using inheritance.",
  },
  {
    id: 15,
    title: "Exception Handling",
    level: "Advanced",
    time: "12 min",
    desc: "Handle runtime errors using try and except.",
  },
  {
    id: 16,
    title: "Modules & Packages",
    level: "Intermediate",
    time: "10 min",
    desc: "Organize your Python code using modules.",
  },
  {
    id: 17,
    title: "File Handling",
    level: "Intermediate",
    time: "12 min",
    desc: "Read and write text files.",
  },
  {
    id: 18,
    title: "NumPy",
    level: "Advanced",
    time: "18 min",
    desc: "Scientific computing using NumPy.",
  },
  {
    id: 19,
    title: "Pandas",
    level: "Advanced",
    time: "18 min",
    desc: "Data analysis using Pandas.",
  },
  {
    id: 20,
    title: "Web Scraping",
    level: "Advanced",
    time: "20 min",
    desc: "Extract website data using BeautifulSoup.",
  },
  {
    id: 21,
    title: "Django Basics",
    level: "Advanced",
    time: "22 min",
    desc: "Build powerful web applications using Django.",
  },
  {
    id: 22,
    title: "Python Interview Questions",
    level: "Advanced",
    time: "25 min",
    desc: "Most asked interview questions with answers.",
  },
];

export default function PythonArticles() {
  const [search, setSearch] = useState("");

  const filtered = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-orange-50 min-h-screen">

      {/* Hero */}

      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">

          <span className="bg-orange-500 px-5 py-2 rounded-full w-fit font-semibold">
            Python Learning Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Master
            <span className="text-orange-400">
              {" "}Python Programming
            </span>
          </h1>

          <p className="mt-5 text-lg max-w-2xl text-gray-200">
            Learn Python from beginner to advanced with practical examples,
            projects, Django, NumPy, Pandas, APIs and interview preparation.
          </p>

        </div>

      </section>

      {/* Search */}

      <div className="max-w-6xl mx-auto -mt-10 relative z-20 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">

          <Search className="text-orange-500" />

          <input
            type="text"
            placeholder="Search Python articles..."
            className="w-full outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <BookOpen
            className="mx-auto text-orange-500"
            size={40}
          />

          <h2 className="text-3xl font-bold mt-4">
            22+
          </h2>

          <p className="text-gray-500">
            Python Articles
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <Clock
            className="mx-auto text-orange-500"
            size={40}
          />

          <h2 className="text-3xl font-bold mt-4">
            180+
          </h2>

          <p className="text-gray-500">
            Minutes of Learning
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <Star
            className="mx-auto text-orange-500"
            size={40}
          />

          <h2 className="text-3xl font-bold mt-4">
            100%
          </h2>

          <p className="text-gray-500">
            Free Tutorials
          </p>

        </div>

      </div>
            {/* Articles */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((article) => (

            <div
              key={article.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >

              {/* Top Gradient */}

              <div className="h-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600"></div>

              <div className="p-7">

                {/* Level */}

                <div className="flex justify-between items-center">

                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    {article.level}
                  </span>

                  <span className="text-gray-400 text-sm">
                    #{article.id}
                  </span>

                </div>

                {/* Title */}

                <h2 className="text-2xl font-bold mt-5 text-gray-900 group-hover:text-orange-500 transition">
                  {article.title}
                </h2>

                {/* Description */}

                <p className="text-gray-600 mt-4 leading-7">
                  {article.desc}
                </p>

                {/* Bottom */}

                <div className="flex justify-between items-center mt-8">

                  <div className="flex items-center gap-2 text-gray-500">

                    <Clock size={18} />

                    <span>{article.time}</span>

                  </div>

                  <button
                    className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    flex
                    items-center
                    gap-2
                    transition
                    "
                  >
                    Read

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        

      </div>

    </div>
  );
}