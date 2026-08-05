import React, { useState } from "react";
import { Search, ArrowRight, BookOpen, Clock, Star } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Introduction to Java",
    level: "Beginner",
    time: "5 min",
    desc: "Learn what Java is and why it is one of the world's most popular programming languages.",
  },
  {
    id: 2,
    title: "Java Installation",
    level: "Beginner",
    time: "6 min",
    desc: "Install JDK, configure Java and run your first Java program.",
  },
  {
    id: 3,
    title: "Variables & Data Types",
    level: "Beginner",
    time: "8 min",
    desc: "Understand primitive and non-primitive data types in Java.",
  },
  {
    id: 4,
    title: "Operators",
    level: "Beginner",
    time: "7 min",
    desc: "Arithmetic, Logical, Relational and Assignment Operators.",
  },
  {
    id: 5,
    title: "Conditional Statements",
    level: "Beginner",
    time: "8 min",
    desc: "Learn if, else, else-if and switch statements.",
  },
  {
    id: 6,
    title: "Loops in Java",
    level: "Beginner",
    time: "9 min",
    desc: "Master for, while and do-while loops.",
  },
  {
    id: 7,
    title: "Methods",
    level: "Intermediate",
    time: "8 min",
    desc: "Create reusable methods and pass parameters.",
  },
  {
    id: 8,
    title: "Arrays",
    level: "Intermediate",
    time: "10 min",
    desc: "Store multiple values using arrays.",
  },
  {
    id: 9,
    title: "Strings",
    level: "Intermediate",
    time: "9 min",
    desc: "String methods and manipulation techniques.",
  },
  {
    id: 10,
    title: "Classes & Objects",
    level: "Intermediate",
    time: "12 min",
    desc: "Introduction to Object-Oriented Programming.",
  },
  {
    id: 11,
    title: "Constructors",
    level: "Intermediate",
    time: "8 min",
    desc: "Learn default and parameterized constructors.",
  },
  {
    id: 12,
    title: "Inheritance",
    level: "Intermediate",
    time: "10 min",
    desc: "Reuse code through inheritance.",
  },
  {
    id: 13,
    title: "Polymorphism",
    level: "Advanced",
    time: "10 min",
    desc: "Method Overloading and Method Overriding.",
  },
  {
    id: 14,
    title: "Abstraction",
    level: "Advanced",
    time: "10 min",
    desc: "Abstract classes and interfaces.",
  },
  {
    id: 15,
    title: "Exception Handling",
    level: "Advanced",
    time: "12 min",
    desc: "Handle runtime errors using try-catch-finally.",
  },
  {
    id: 16,
    title: "Collections Framework",
    level: "Advanced",
    time: "15 min",
    desc: "ArrayList, LinkedList, HashMap, HashSet and more.",
  },
  {
    id: 17,
    title: "Multithreading",
    level: "Advanced",
    time: "15 min",
    desc: "Run multiple threads simultaneously in Java.",
  },
  {
    id: 18,
    title: "JDBC",
    level: "Advanced",
    time: "20 min",
    desc: "Connect Java applications with MySQL database.",
  },
];

export default function JavaArticles() {
  const [search, setSearch] = useState("");

  const filtered = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-orange-50 min-h-screen">

      {/* Hero Section */}

      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">

          <span className="bg-orange-500 px-5 py-2 rounded-full w-fit font-semibold">
            Java Learning Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Master <span className="text-orange-400">Java Programming</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-2xl">
            Learn Java from beginner to advanced with practical examples,
            object-oriented programming, collections, multithreading, JDBC,
            interview preparation and real-world projects.
          </p>

        </div>

      </section>

      {/* Search */}

      <div className="max-w-6xl mx-auto -mt-10 relative z-20 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">

          <Search className="text-orange-500" />

          <input
            type="text"
            placeholder="Search Java articles..."
            className="w-full outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <BookOpen className="mx-auto text-orange-500" size={40} />
          <h2 className="text-3xl font-bold mt-4">18+</h2>
          <p className="text-gray-500">Java Articles</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Clock className="mx-auto text-orange-500" size={40} />
          <h2 className="text-3xl font-bold mt-4">120+</h2>
          <p className="text-gray-500">Minutes of Learning</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Star className="mx-auto text-orange-500" size={40} />
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

                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
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