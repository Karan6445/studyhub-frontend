import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import PopularMaterials from "./components/PopularMaterials";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// ================= USER PAGES =================
import Notes from "./pages/Notes";
import Courses from "./pages/Courses";
import Syllabus from "./pages/Syllabus";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogDetails from "./pages/BlogDetails";

// ================= ARTICLE PAGES =================
import ReactArticles from "./pages/ReactArticles";
import JavaArticles from "./pages/JavaArticles";
import PythonArticles from "./pages/PythonArticles";
import AIArticles from "./pages/AIArticles";
import NodeArticles from "./pages/NodeArticles";
import MongoDBArticles from "./pages/MongoDBArticles";
import CareerArticles from "./pages/CareerArticles";
import InterviewArticles from "./pages/InterviewArticles";
import ArticleDetails from "./pages/ArticleDetails";

// ================= ADMIN =================
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";

import AddArticle from "./admin/pages/AddArticle";
import ManageArticles from "./admin/pages/ManageArticles";
import EditArticle from "./admin/pages/EditArticle";

import AddNotes from "./admin/pages/AddNotes";
import ManageNotes from "./admin/pages/ManageNotes";

import AddSyllabus from "./admin/pages/AddSyllabus";
import ManageSyllabus from "./admin/pages/ManageSyllabus";

import AddBlog from "./admin/pages/AddBlog";
import ManageBlogs from "./admin/pages/ManageBlogs";

import UploadFiles from "./admin/pages/UploadFiles";
import ManageFiles from "./admin/pages/ManageFiles";

import UsersPage from "./admin/pages/Users";
import Settings from "./admin/pages/Settings";

// ================= AUTH =================
import AdminLogin from "./admin/pages/AdminLogin";
import AdminRegister from "./admin/pages/AdminRegister";
import ProtectedRoute from "./admin/routes/ProtectedRoute";

// ================= HOME =================

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <PopularMaterials />
      <CTA />
      <Testimonials />
    </>
  );
}

// ================= USER LAYOUT =================

function UserLayout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/syllabus" element={<Syllabus />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

        <Route
          path="/react-articles"
          element={<ReactArticles />}
        />

        <Route
          path="/java-articles"
          element={<JavaArticles />}
        />

        <Route
          path="/python-articles"
          element={<PythonArticles />}
        />

        <Route
          path="/ai-articles"
          element={<AIArticles />}
        />

        <Route
          path="/nodejs-articles"
          element={<NodeArticles />}
        />

        <Route
          path="/mongodb-articles"
          element={<MongoDBArticles />}
        />

        <Route
          path="/career-articles"
          element={<CareerArticles />}
        />

        <Route
          path="/interview-articles"
          element={<InterviewArticles />}
        />

        <Route
          path="/article/:id"
          element={<ArticleDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
}

// ================= APP =================

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= USER WEBSITE ================= */}

        <Route path="/*" element={<UserLayout />} />

        {/* ================= ADMIN AUTH ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/register"
          element={<AdminRegister />}
        />

        {/* ================= PROTECTED ADMIN ================= */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/admin"
            element={<AdminLayout />}
          >

            {/* Dashboard */}

            <Route
              path="dashboard"
              element={<Dashboard />}
            />

            {/* Articles */}

            <Route
              path="articles/add"
              element={<AddArticle />}
            />

            <Route
              path="articles/manage"
              element={<ManageArticles />}
            />

            <Route
              path="edit-article/:id"
              element={<EditArticle />}
            />

            {/* Notes */}

            <Route
              path="notes/add"
              element={<AddNotes />}
            />

            <Route
              path="notes/manage"
              element={<ManageNotes />}
            />

            {/* Syllabus */}

            <Route
              path="syllabus/add"
              element={<AddSyllabus />}
            />

            <Route
              path="syllabus/manage"
              element={<ManageSyllabus />}
            />

            {/* Blogs */}

            <Route
              path="blogs/add"
              element={<AddBlog />}
            />

            <Route
              path="blogs/manage"
              element={<ManageBlogs />}
            />

            {/* Files */}

            <Route
              path="upload"
              element={<UploadFiles />}
            />

            <Route
              path="files"
              element={<ManageFiles />}
            />

            {/* Users */}

            <Route
              path="users"
              element={<UsersPage />}
            />

            {/* Settings */}

            <Route
              path="settings"
              element={<Settings />}
            />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;