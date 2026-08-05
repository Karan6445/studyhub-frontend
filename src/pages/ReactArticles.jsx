import React, { useState } from "react";
import { Search, ArrowRight, BookOpen, Clock, Star } from "lucide-react";

const articles = [
  { id: 1, title: "Introduction to React", level: "Beginner", time: "5 min", desc: "Learn what React is and why it is one of the most popular frontend libraries." },
  { id: 2, title: "JSX Explained", level: "Beginner", time: "6 min", desc: "Understand JSX syntax and how it works behind the scenes." },
  { id: 3, title: "Components", level: "Beginner", time: "8 min", desc: "Create reusable functional components in React." },
  { id: 4, title: "Props", level: "Beginner", time: "7 min", desc: "Pass data from parent to child components." },
  { id: 5, title: "State", level: "Beginner", time: "8 min", desc: "Manage dynamic data using state." },
  { id: 6, title: "useState Hook", level: "Beginner", time: "8 min", desc: "Handle component state with hooks." },
  { id: 7, title: "useEffect Hook", level: "Intermediate", time: "10 min", desc: "Perform side effects in functional components." },
  { id: 8, title: "Event Handling", level: "Beginner", time: "6 min", desc: "Respond to user actions in React." },
  { id: 9, title: "Conditional Rendering", level: "Intermediate", time: "7 min", desc: "Render UI conditionally." },
  { id: 10, title: "Lists & Keys", level: "Intermediate", time: "8 min", desc: "Render lists efficiently using keys." },
  { id: 11, title: "Forms", level: "Intermediate", time: "10 min", desc: "Create controlled forms." },
  { id: 12, title: "React Router", level: "Intermediate", time: "12 min", desc: "Build multi-page React applications." },
  { id: 13, title: "Context API", level: "Advanced", time: "12 min", desc: "Manage global application state." },
  { id: 14, title: "useRef", level: "Intermediate", time: "9 min", desc: "Access DOM elements efficiently." },
  { id: 15, title: "useMemo", level: "Advanced", time: "10 min", desc: "Optimize expensive calculations." },
  { id: 16, title: "useCallback", level: "Advanced", time: "10 min", desc: "Optimize callback functions." },
  { id: 17, title: "Custom Hooks", level: "Advanced", time: "15 min", desc: "Create reusable custom hooks." },
  { id: 18, title: "API Fetching", level: "Intermediate", time: "12 min", desc: "Fetch API data using Axios and Fetch." },
  { id: 19, title: "Project Structure", level: "Intermediate", time: "8 min", desc: "Organize scalable React projects." },
  { id: 20, title: "Performance", level: "Advanced", time: "15 min", desc: "Improve React application performance." },
  { id: 21, title: "Authentication", level: "Advanced", time: "12 min", desc: "Implement Login & Signup." },
  { id: 22, title: "Protected Routes", level: "Advanced", time: "10 min", desc: "Secure pages using React Router." },
  { id: 23, title: "Deployment", level: "Intermediate", time: "8 min", desc: "Deploy on Vercel and Netlify." },
  { id: 24, title: "Best Practices", level: "Advanced", time: "12 min", desc: "Write clean and maintainable code." },
  { id: 25, title: "Complete React Project", level: "Advanced", time: "25 min", desc: "Build a complete real-world React application." },
];

export default function ReactArticles() {
  const [search, setSearch] = useState("");

  const filtered = articles.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-orange-50 min-h-screen">

      {/* Hero */}
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">
          <span className="bg-orange-500 px-5 py-2 rounded-full w-fit font-semibold">
            React Learning Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Master React <span className="text-orange-400">Step by Step</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-2xl">
            Learn React from beginner to advanced with professionally written
            tutorials, practical examples, hooks, routing, authentication,
            deployment and complete projects.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-6xl mx-auto -mt-10 relative z-20 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
          <Search className="text-orange-500" />
          <input
            type="text"
            placeholder="Search React articles..."
            className="w-full outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <BookOpen className="mx-auto text-orange-500" size={38} />
          <h2 className="text-3xl font-bold mt-4">25+</h2>
          <p className="text-gray-500">React Articles</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Clock className="mx-auto text-orange-500" size={38} />
          <h2 className="text-3xl font-bold mt-4">150+</h2>
          <p className="text-gray-500">Minutes of Learning</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Star className="mx-auto text-orange-500" size={38} />
          <h2 className="text-3xl font-bold mt-4">100%</h2>
          <p className="text-gray-500">Free Tutorials</p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((article) => (

            <div
              key={article.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
            >

              <div className="h-2 bg-gradient-to-r from-orange-500 to-yellow-400"></div>

              <div className="p-7">

                <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                  {article.level}
                </span>

                <h2 className="text-2xl font-bold mt-5">
                  {article.title}
                </h2>

                <p className="text-gray-600 mt-4">
                  {article.desc}
                </p>

                <div className="flex justify-between items-center mt-8">

                  <span className="text-gray-500">
                    {article.time} Read
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl flex items-center gap-2">
                    Read
                    <ArrowRight size={18} />
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