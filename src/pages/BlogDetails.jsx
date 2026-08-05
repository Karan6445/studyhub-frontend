import { useParams, Link } from "react-router-dom";

const blogs = {
  "full-stack-developer-2026": {
    title: "How to Become a Full Stack Developer in 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    author: "John Doe",
    date: "July 2026",
    readTime: "10 min read",
    content: `A Full Stack Developer is responsible for building both the frontend and backend of web applications.

Learn HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub, Authentication, Deployment and build real-world projects.

Projects to Build:
• Portfolio
• Chat App
• LMS
• E-commerce
• Notes Sharing Website

Practice every day and build real projects to become job-ready.`,
  },

  "react-19-features": {
    title: "React 19 New Features Explained",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    author: "Admin",
    date: "July 2026",
    readTime: "5 min read",
    content: `React 19 introduces Server Components, Actions, use(), useOptimistic(), better hydration and major performance improvements.

React applications become faster and easier to build.`,
  },

  "express-rest-api": {
    title: "Build REST APIs using Express.js",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
    author: "Admin",
    date: "July 2026",
    readTime: "8 min read",
    content: `Learn Express.js Routing, Middleware, CRUD APIs, JWT Authentication and MongoDB Integration.

Express is lightweight, fast and perfect for backend development.`,
  },

  "mongodb-crash-course": {
    title: "MongoDB Crash Course",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200",
    author: "Admin",
    date: "July 2026",
    readTime: "6 min read",
    content: `Learn Collections, Documents, CRUD Operations, Aggregation, Indexing and Mongoose.

MongoDB is the database used in the MERN Stack.`,
  },

  "java-interview-questions": {
    title: "Java Interview Questions",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200",
    author: "Admin",
    date: "July 2026",
    readTime: "7 min read",
    content: `Top Java Interview Questions with detailed explanations covering OOP, JVM, JDK, JRE, Collections, Exception Handling and Multithreading.`,
  },

  "ai-tools-students": {
    title: "AI Tools Every Student Should Know",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200",
    author: "Admin",
    date: "July 2026",
    readTime: "6 min read",
    content: `Discover ChatGPT, GitHub Copilot, Claude, Gemini, Perplexity, Grammarly and other AI tools that increase productivity.`,
  },

  "software-engineer-roadmap": {
    title: "Roadmap to Become a Software Engineer",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    author: "Admin",
    date: "July 2026",
    readTime: "9 min read",
    content: `Learn Programming, DSA, Frontend, Backend, Databases, Git, Cloud, System Design and Interview Preparation.

Build multiple real-world projects before applying for jobs.`,
  },
};

export default function BlogDetails() {
  const { slug } = useParams();

  console.log("Slug:", slug);

  const blog = blogs[slug];

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Blog Not Found</h1>

        <Link
          to="/blog"
          className="mt-6 bg-yellow-400 px-6 py-3 rounded-xl font-semibold"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
        />

        <h1 className="text-5xl font-bold mt-10">
          {blog.title}
        </h1>

        <div className="flex gap-8 text-gray-500 mt-6">
          <span>👤 {blog.author}</span>
          <span>📅 {blog.date}</span>
          <span>⏱ {blog.readTime}</span>
        </div>

        <div className="mt-10 whitespace-pre-line leading-9 text-lg text-gray-700">
          {blog.content}
        </div>

        <Link
          to="/blog"
          className="inline-block mt-12 bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-xl font-bold"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}