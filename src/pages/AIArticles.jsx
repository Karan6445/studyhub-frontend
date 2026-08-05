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
    title: "Introduction to Artificial Intelligence",
    level: "Beginner",
    time: "5 min",
    desc: "Learn the fundamentals of Artificial Intelligence and how it is transforming industries.",
  },
  {
    id: 2,
    title: "History of AI",
    level: "Beginner",
    time: "6 min",
    desc: "Explore the evolution of Artificial Intelligence from the 1950s to today.",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    level: "Beginner",
    time: "10 min",
    desc: "Understand supervised, unsupervised and reinforcement learning.",
  },
  {
    id: 4,
    title: "Deep Learning",
    level: "Intermediate",
    time: "12 min",
    desc: "Learn about neural networks and deep learning architectures.",
  },
  {
    id: 5,
    title: "Neural Networks",
    level: "Intermediate",
    time: "12 min",
    desc: "Understand how artificial neurons solve complex problems.",
  },
  {
    id: 6,
    title: "Natural Language Processing",
    level: "Intermediate",
    time: "15 min",
    desc: "Discover how AI processes and understands human language.",
  },
  {
    id: 7,
    title: "Computer Vision",
    level: "Intermediate",
    time: "14 min",
    desc: "Teach computers to recognize and analyze images.",
  },
  {
    id: 8,
    title: "Generative AI",
    level: "Advanced",
    time: "16 min",
    desc: "Explore ChatGPT, Gemini, image generation and AI assistants.",
  },
  {
    id: 9,
    title: "TensorFlow",
    level: "Advanced",
    time: "18 min",
    desc: "Build machine learning models using TensorFlow.",
  },
  {
    id: 10,
    title: "PyTorch",
    level: "Advanced",
    time: "18 min",
    desc: "Create deep learning applications using PyTorch.",
  },
  {
    id: 11,
    title: "AI Ethics",
    level: "Intermediate",
    time: "8 min",
    desc: "Understand responsible AI and ethical considerations.",
  },
  {
    id: 12,
    title: "AI in Healthcare",
    level: "Intermediate",
    time: "10 min",
    desc: "Explore AI applications in diagnosis and medical research.",
  },
  {
    id: 13,
    title: "AI Projects",
    level: "Advanced",
    time: "20 min",
    desc: "Build real-world AI applications step by step.",
  },
  {
    id: 14,
    title: "AI Interview Questions",
    level: "Advanced",
    time: "18 min",
    desc: "Prepare for AI and Machine Learning technical interviews.",
  },
  {
    id: 15,
    title: "Future of AI",
    level: "Beginner",
    time: "10 min",
    desc: "Explore the future trends and opportunities in Artificial Intelligence.",
  },
];

export default function AIArticles() {
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
            "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">

          <span className="bg-orange-500 px-5 py-2 rounded-full w-fit font-semibold">
            AI Learning Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
            Master
            <span className="text-orange-400">
              {" "}Artificial Intelligence
            </span>
          </h1>

          <p className="mt-5 text-lg max-w-2xl text-gray-200">
            Learn Artificial Intelligence, Machine Learning, Deep Learning,
            NLP, Computer Vision and Generative AI through practical tutorials,
            projects and interview preparation.
          </p>

        </div>

      </section>

      {/* Search */}

      <div className="max-w-6xl mx-auto -mt-10 relative z-20 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">

          <Search className="text-orange-500" />

          <input
            type="text"
            placeholder="Search AI articles..."
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
            15+
          </h2>

          <p className="text-gray-500">
            AI Articles
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <Clock
            className="mx-auto text-orange-500"
            size={40}
          />

          <h2 className="text-3xl font-bold mt-4">
            150+
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

            {/* ================= Articles ================= */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((article) => (

            <div
              key={article.id}
              className="
              bg-white
              rounded-3xl
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              overflow-hidden
              group
              "
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

                {/* Footer */}

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