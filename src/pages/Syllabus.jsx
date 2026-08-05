import React, { useState, useRef } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Syllabus = () => {

  const [search, setSearch] = useState("");

  const [highlight, setHighlight] = useState("");

const semesterRefs = {
  1: useRef(null),
  2: useRef(null),
  3: useRef(null),
  4: useRef(null),
  5: useRef(null),
  6: useRef(null),
  7: useRef(null),
  8: useRef(null),
};

const subjectRefs = {
  "engineering mathematics": useRef(null),
  "programming in c": useRef(null),
  physics: useRef(null),
  "web development": useRef(null),
};

const handleSearch = () => {
  const value = search.toLowerCase().trim();

  // Search Semester
  if (value.includes("semester") || value.startsWith("sem")) {
    const num = value.match(/\d+/);

    if (num && semesterRefs[num[0]]) {
      semesterRefs[num[0]].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setHighlight(`Semester ${num[0]}`);

      setTimeout(() => {
        setHighlight("");
      }, 2000);

      return;
    }
  }

  // Search Subjects
  for (const subject in subjectRefs) {
    if (subject.includes(value)) {
      subjectRefs[subject].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setHighlight(subject);

      setTimeout(() => {
        setHighlight("");
      }, 2000);

      return;
    }
  }

  alert("No result found.");
};

  return (
    <div className="min-h-screen bg-slate-50">

  {/* ================= HERO SECTION ================= */}

<section className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-200/40 blur-[120px] rounded-full"></div>

  <div className="relative z-10 text-center">

    <span
      className="
      inline-block
      bg-orange-100
      text-orange-700
      font-semibold
      px-5
      py-2
      rounded-full
      shadow-sm
      "
    >
      📚 University Syllabus
    </span>

    <h1
      className="
      text-5xl
      lg:text-6xl
      font-bold
      text-gray-900
      mt-6
      leading-tight
      "
    >
      Find Your{" "}

      <span
        className="
        bg-gradient-to-r
        from-orange-500
        via-amber-500
        to-yellow-500
        bg-clip-text
        text-transparent
        "
      >
        Semester Syllabus
      </span>

    </h1>

    <p
      className="
      max-w-3xl
      mx-auto
      mt-6
      text-lg
      text-gray-600
      leading-8
      "
    >
      Browse semester-wise subjects, download official syllabus PDFs,
      and stay updated with the latest curriculum designed to help you
      succeed in every semester.
    </p>

  </div>

  {/* Search Box */}

  <div
    className="
    mt-14
    bg-white
    rounded-2xl
    shadow-xl
    shadow-orange-100
    border
    border-orange-100
    p-3
    flex
    flex-col
    md:flex-row
    gap-3
    relative
    z-10
    "
  >

    <div className="flex items-center flex-1 px-4">

      <Search
        size={22}
        className="text-orange-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search subject or semester..."
        className="
        w-full
        px-4
        py-4
        outline-none
        bg-transparent
        placeholder:text-gray-400
        "
      />

    </div>

    <button
      onClick={handleSearch}
      className="
      px-10
      py-4
      rounded-xl
      bg-gradient-to-r
      from-orange-500
      via-amber-500
      to-yellow-500
      text-white
      font-semibold
      shadow-lg
      hover:shadow-orange-300
      hover:scale-105
      transition-all
      duration-300
      "
    >
      Search
    </button>

  </div>

</section>

      {/* ================= SEMESTER CARDS ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  <div className="flex justify-between items-center mb-10">

    <div>

      <h2 className="text-4xl font-bold text-gray-900">
        Browse by{" "}
        <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
          Semester
        </span>
      </h2>

      <p className="text-gray-600 mt-3 leading-7">
        Select your semester to explore subjects and download the official syllabus.
      </p>

    </div>

  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Semester 1 */}
    <div
      ref={semesterRefs[1]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 1"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📘
      </div>

      <h3 className="text-2xl font-bold mt-6 text-gray-900">
        Semester 1
      </h3>

      <p className="text-gray-600 mt-2">
        8 Subjects
      </p>

      <Link
        to="/pdfs/sem1.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 2 */}
    <div
      ref={semesterRefs[2]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 2"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📙
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 2</h3>

      <p className="text-gray-600 mt-2">8 Subjects</p>

      <Link
        to="/pdfs/sem2.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 3 */}
    <div
      ref={semesterRefs[3]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 3"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📗
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 3</h3>

      <p className="text-gray-600 mt-2">7 Subjects</p>

      <Link
        to="/pdfs/sem3.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 4 */}
    <div
      ref={semesterRefs[4]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 4"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📕
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 4</h3>

      <p className="text-gray-600 mt-2">7 Subjects</p>

      <Link
        to="/pdfs/sem4.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 5 */}
    <div
      ref={semesterRefs[5]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 5"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📓
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 5</h3>

      <p className="text-gray-600 mt-2">6 Subjects</p>

      <Link
        to="/pdfs/sem5.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 6 */}
    <div
      ref={semesterRefs[6]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 6"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📔
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 6</h3>

      <p className="text-gray-600 mt-2">6 Subjects</p>

      <Link
        to="/pdfs/sem6.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 7 */}
    <div
      ref={semesterRefs[7]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 7"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📒
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 7</h3>

      <p className="text-gray-600 mt-2">5 Subjects</p>

      <Link
        to="/pdfs/sem7.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

    {/* Semester 8 */}
    <div
      ref={semesterRefs[8]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Semester 8"
          ? "border-orange-500 ring-4 ring-orange-200 shadow-2xl shadow-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        🎓
      </div>

      <h3 className="text-2xl font-bold mt-6">Semester 8</h3>

      <p className="text-gray-600 mt-2">5 Subjects</p>

      <Link
        to="/pdfs/sem8.pdf"
        target="_blank"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        View Syllabus →
      </Link>

    </div>

  </div>

</section>

      {/* ================= FEATURED SUBJECTS ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  {/* Heading */}

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold text-gray-900">
      Featured{" "}
      <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
        Subjects
      </span>
    </h2>

    <p className="text-gray-600 mt-4 text-lg">
      Explore some of the most important subjects in your curriculum.
    </p>

  </div>

  {/* Subject Cards */}

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Subject 1 */}

    <div
      ref={subjectRefs["engineering mathematics"]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Engineering Mathematics"
          ? "border-orange-500 shadow-2xl shadow-orange-200 ring-4 ring-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        📘
      </div>

      <h3 className="text-xl font-bold mt-6 text-gray-900">
        Engineering Mathematics
      </h3>

      <p className="text-gray-500 mt-2">
        Subject Code: MA101
      </p>

      <div className="mt-6 space-y-2 text-gray-600">
        <p>👨‍🏫 Faculty : Dr. Sharma</p>
        <p>🎓 Credits : 4</p>
      </div>

      <a
        href="/pdfs/engineering-mathematics.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        Download PDF
      </a>

    </div>

    {/* Subject 2 */}

    <div
      ref={subjectRefs["programming in c"]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Programming in C"
          ? "border-orange-500 shadow-2xl shadow-orange-200 ring-4 ring-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        💻
      </div>

      <h3 className="text-xl font-bold mt-6">
        Programming in C
      </h3>

      <p className="text-gray-500 mt-2">
        Subject Code: CS102
      </p>

      <div className="mt-6 space-y-2 text-gray-600">
        <p>👨‍🏫 Faculty : Prof. Singh</p>
        <p>🎓 Credits : 4</p>
      </div>

      <a
        href="/pdfs/programming-in-c.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        Download PDF
      </a>

    </div>

    {/* Subject 3 */}

    <div
      ref={subjectRefs["physics"]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Physics"
          ? "border-orange-500 shadow-2xl shadow-orange-200 ring-4 ring-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        ⚡
      </div>

      <h3 className="text-xl font-bold mt-6">
        Physics
      </h3>

      <p className="text-gray-500 mt-2">
        Subject Code: PH103
      </p>

      <div className="mt-6 space-y-2 text-gray-600">
        <p>👨‍🏫 Faculty : Dr. Verma</p>
        <p>🎓 Credits : 3</p>
      </div>

      <a
        href="/pdfs/physics.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        Download PDF
      </a>

    </div>

    {/* Subject 4 */}

    <div
      ref={subjectRefs["web development"]}
      className={`bg-white rounded-3xl p-6 border transition-all duration-500 ${
        highlight === "Web Development"
          ? "border-orange-500 shadow-2xl shadow-orange-200 ring-4 ring-orange-200 scale-105"
          : "border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
      }`}
    >

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
        🌐
      </div>

      <h3 className="text-xl font-bold mt-6">
        Web Development
      </h3>

      <p className="text-gray-500 mt-2">
        Subject Code: CS205
      </p>

      <div className="mt-6 space-y-2 text-gray-600">
        <p>👨‍🏫 Faculty : Mr. Kumar</p>
        <p>🎓 Credits : 4</p>
      </div>

      <a
        href="/pdfs/web-development.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:scale-105 transition-all shadow-lg shadow-orange-200"
      >
        Download PDF
      </a>

    </div>

  </div>

</section>

      {/* ================= DOWNLOAD SYLLABUS ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  <div className="flex flex-col md:flex-row justify-between items-center mb-10">

    <div>
      <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold mb-4">
        📄 Latest PDFs
      </span>

      <h2 className="text-4xl font-bold text-gray-900">
        Download Syllabus
      </h2>

      <p className="text-gray-600 mt-3 text-lg">
        Download the latest syllabus PDFs for every subject.
      </p>
    </div>

    <button className="mt-5 md:mt-0 text-orange-500 font-semibold hover:text-orange-600 transition">
      View All →
    </button>

  </div>

  <div className="overflow-x-auto bg-white rounded-3xl border border-orange-100 shadow-lg hover:shadow-orange-200/40 transition">

    <table className="w-full">

      <thead className="bg-orange-50">

        <tr>

          <th className="text-left p-5 font-semibold">Subject</th>
          <th className="text-left p-5 font-semibold">Code</th>
          <th className="text-left p-5 font-semibold">Semester</th>
          <th className="text-left p-5 font-semibold">PDF Size</th>
          <th className="text-right p-5 font-semibold">Action</th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-t border-orange-100 hover:bg-orange-50 transition">

          <td className="p-5 font-medium">Engineering Mathematics</td>
          <td className="p-5">MA101</td>
          <td className="p-5">Semester 1</td>
          <td className="p-5">2.4 MB</td>

          <td className="p-5 text-right">

            <a
              href="/pdfs/engineering-mathematics.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold hover:scale-105 transition"
            >
              Download
            </a>

          </td>

        </tr>

        <tr className="border-t border-orange-100 hover:bg-orange-50 transition">

          <td className="p-5 font-medium">Programming in C</td>
          <td className="p-5">CS102</td>
          <td className="p-5">Semester 1</td>
          <td className="p-5">3.1 MB</td>

          <td className="p-5 text-right">

            <a
              href="/pdfs/programming-in-c.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold hover:scale-105 transition"
            >
              Download
            </a>

          </td>

        </tr>

        <tr className="border-t border-orange-100 hover:bg-orange-50 transition">

          <td className="p-5 font-medium">Physics</td>
          <td className="p-5">PH103</td>
          <td className="p-5">Semester 1</td>
          <td className="p-5">2.8 MB</td>

          <td className="p-5 text-right">

            <a
              href="/pdfs/physics.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold hover:scale-105 transition"
            >
              Download
            </a>

          </td>

        </tr>

        <tr className="border-t border-orange-100 hover:bg-orange-50 transition">

          <td className="p-5 font-medium">Web Development</td>
          <td className="p-5">CS205</td>
          <td className="p-5">Semester 3</td>
          <td className="p-5">4.2 MB</td>

          <td className="p-5 text-right">

            <a
              href="/pdfs/web-development.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold hover:scale-105 transition"
            >
              Download
            </a>

          </td>

        </tr>

      </tbody>

    </table>

    <div className="flex justify-between items-center p-5 border-t border-orange-100">

      <p className="text-gray-500">
        Showing 4 of 64 syllabus files
      </p>

      <div className="flex gap-3">

        <button className="w-10 h-10 rounded-xl border border-orange-200 hover:bg-orange-50 transition">
          ←
        </button>

        <button className="w-10 h-10 rounded-xl border border-orange-200 hover:bg-orange-50 transition">
          →
        </button>

      </div>

    </div>

  </div>

</section>
      {/* ================= DOWNLOAD CURRICULUM CTA ================= */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="relative overflow-hidden rounded-[32px] bg-gray-900 px-10 py-16 lg:px-16">

    {/* Orange Glow */}

    <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-orange-500/20 blur-[120px]" />

    <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-yellow-400/10 blur-[120px]" />

    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">

      {/* Left */}

      <div className="max-w-2xl">

        <span className="inline-flex items-center px-5 py-2 rounded-full bg-orange-500 text-white font-semibold">
          📚 Complete Curriculum
        </span>

        <h2 className="text-5xl font-bold text-white mt-6 leading-tight">

          Download the
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            {" "}Complete Curriculum
          </span>

        </h2>

        <p className="mt-6 text-gray-300 text-lg leading-8">

          Get all semester syllabi, subject-wise PDFs,
          elective details, lab manuals, and the latest
          university curriculum in one downloadable package.

        </p>

        <div className="flex flex-wrap gap-6 mt-8">

          <div className="text-orange-300 font-medium">
            ✅ 8 Semesters
          </div>

          <div className="text-orange-300 font-medium">
            ✅ 60+ Subjects
          </div>

          <div className="text-orange-300 font-medium">
            ✅ Updated PDFs
          </div>

        </div>

      </div>

      {/* Right */}

      <div className="text-center">

        <a
          href="/pdfs/complete-curriculum.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold shadow-xl hover:scale-105 transition"
        >
          📥 Download Curriculum
        </a>

        <p className="text-gray-400 mt-5">
          PDF • Approx. 45 MB
        </p>

      </div>

    </div>

  </div>

</section>
    </div>
  );
};

export default Syllabus;
