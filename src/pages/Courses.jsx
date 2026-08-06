import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { createOrder, verifyPayment } from "../api/payment";

const Courses = () => {
  const location = useLocation();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
const [filteredCourses, setFilteredCourses] = useState([]);
const [searchMessage, setSearchMessage] = useState("");

  useEffect(() => {
    if (location.search.includes("view=all")) {
      setShowAllCourses(true);

      setTimeout(() => {
        const section = document.getElementById("popular-courses");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

const courses = [
  {
    id: 1,
    title: "React JS Masterclass",
    category: "Web Development",
    description: "Build modern web applications using React.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    rating: "4.9",
    students: "3.2k",
    price: "₹799",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Java Full Stack",
    category: "Programming",
    description: "Learn Java, Spring Boot and MySQL.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    rating: "4.8",
    students: "4.5k",
    price: "₹999",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 3,
    title: "Python for Beginners",
    category: "Python",
    description: "Master Python from beginner to advanced.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
    rating: "4.9",
    students: "5.1k",
    price: "₹699",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    category: "Artificial Intelligence",
    description: "Build AI & ML projects using Python.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    rating: "5.0",
    students: "6.8k",
    price: "₹1499",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    title: "HTML & CSS Complete",
    category: "Frontend",
    description: "Learn HTML5 & CSS3 from scratch.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    rating: "4.7",
    students: "2.8k",
    price: "₹499",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 6,
    title: "JavaScript ES6",
    category: "JavaScript",
    description: "Master modern JavaScript with projects.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    rating: "4.8",
    students: "4.1k",
    price: "₹699",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 7,
    title: "Node.js Bootcamp",
    category: "Backend",
    description: "Create scalable REST APIs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    rating: "4.9",
    students: "3.9k",
    price: "₹899",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 8,
    title: "MongoDB Complete",
    category: "Database",
    description: "Master MongoDB database development.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    rating: "4.8",
    students: "2.5k",
    price: "₹599",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 9,
    title: "Express.js Bootcamp",
    category: "Backend",
    description: "Develop powerful Express.js APIs.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    rating: "4.8",
    students: "2.7k",
    price: "₹699",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 10,
    title: "Next.js Complete",
    category: "React",
    description: "Build fast production-ready applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    rating: "4.9",
    students: "5.8k",
    price: "₹999",
    color: "bg-gray-200 text-gray-800",
  },
  {
    id: 11,
    title: "TypeScript Mastery",
    category: "Programming",
    description: "Become confident with TypeScript.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    rating: "4.9",
    students: "3.5k",
    price: "₹899",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 12,
    title: "Tailwind CSS",
    category: "Frontend",
    description: "Create beautiful responsive websites.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    rating: "4.8",
    students: "2.4k",
    price: "₹599",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: 13,
    title: "Flutter Development",
    category: "Mobile",
    description: "Build Android & iOS apps with Flutter.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    rating: "4.9",
    students: "4.2k",
    price: "₹999",
    color: "bg-sky-100 text-sky-700",
  },
  {
    id: 14,
    title: "Android Kotlin",
    category: "Mobile",
    description: "Develop native Android apps.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    rating: "4.8",
    students: "2.8k",
    price: "₹899",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 15,
    title: "UI/UX Design",
    category: "Design",
    description: "Learn professional UI & UX design.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    rating: "4.8",
    students: "2.9k",
    price: "₹699",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 16,
    title: "Figma Masterclass",
    category: "Design",
    description: "Master UI design using Figma.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
    rating: "4.7",
    students: "2.2k",
    price: "₹599",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 17,
    title: "AWS Cloud",
    category: "Cloud",
    description: "Learn Amazon Web Services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    rating: "4.9",
    students: "5.4k",
    price: "₹1299",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 18,
    title: "Docker & Kubernetes",
    category: "DevOps",
    description: "Containerization & deployment.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    rating: "4.9",
    students: "3.6k",
    price: "₹1199",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 19,
    title: "Git & GitHub",
    category: "Tools",
    description: "Master Git version control.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
    rating: "4.8",
    students: "6.1k",
    price: "₹399",
    color: "bg-red-100 text-red-700",
  },
  {
    id: 20,
    title: "Cyber Security",
    category: "Security",
    description: "Ethical hacking & cybersecurity.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    rating: "5.0",
    students: "3.8k",
    price: "₹1499",
    color: "bg-red-100 text-red-700",
  },
  {
    id: 21,
    title: "Data Science",
    category: "Data",
    description: "Become a professional Data Scientist.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    rating: "4.9",
    students: "4.9k",
    price: "₹1399",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 22,
    title: "Power BI",
    category: "Analytics",
    description: "Create interactive dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    rating: "4.8",
    students: "3.1k",
    price: "₹799",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 23,
    title: "SQL Complete",
    category: "Database",
    description: "Master SQL from beginner to expert.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    rating: "4.8",
    students: "3.9k",
    price: "₹599",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 24,
    title: "PHP & Laravel",
    category: "Backend",
    description: "Build modern PHP & Laravel applications.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
    rating: "4.7",
    students: "2.5k",
    price: "₹799",
    color: "bg-red-100 text-red-700",
  },
  {
    id: 25,
    title: "Digital Marketing",
    category: "Marketing",
    description: "Master SEO, Google Ads & Social Media.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    rating: "4.8",
    students: "4.3k",
    price: "₹699",
    color: "bg-orange-100 text-orange-700",
  },
];

useEffect(() => {
  setFilteredCourses(courses);
}, []);

const handleSearch = () => {
  const keyword = searchTerm.trim().toLowerCase();

  if (keyword === "") {
    setFilteredCourses(courses);
    setSearchMessage("");
    setShowAllCourses(false);
    return;
  }

  const results = courses.filter((course) =>
    course.title.toLowerCase().includes(keyword) ||
    course.category.toLowerCase().includes(keyword) ||
    course.description.toLowerCase().includes(keyword)
  );

  if (results.length > 0) {
    setFilteredCourses(results);
    setSearchMessage("");
    setShowAllCourses(true);

    setTimeout(() => {
      const section = document.getElementById("popular-courses");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  } else {
    setFilteredCourses([]);
    setShowAllCourses(true);
    setSearchMessage("❌ No course found.");
  }
};


const handlePayment = async (amount) => {
  try {
    // Create Razorpay Order
    const { order } = await createOrder(amount);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "StudyHub",

      description: "StudyHub Course Purchase",

      order_id: order.id,

      handler: async function (response) {
        try {
          const result = await verifyPayment(response);

          if (result.success) {
            alert("✅ Payment Successful");
          } else {
            alert("❌ Payment Verification Failed");
          }
        } catch (err) {
          console.error(err);
          alert("Verification Error");
        }
      },

      prefill: {
        name: "Student",
        email: "student@example.com",
        contact: "9999999999",
      },

      theme: {
        color: "#f97316",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (err) {
    console.error(err);
    alert("Unable to create payment.");
  }
};


return (
  <div className="min-h-screen bg-slate-50">

    {/* ================= HERO SECTION ================= */}

    <section
      id="popular-courses"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-20"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-200/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10 text-center">

        <span className="inline-block bg-orange-100 text-orange-700 font-semibold px-6 py-2 rounded-full">
          🚀 Learn New Skills
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">

          Learn From The{" "}

          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Best Online Courses
          </span>

        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
          Master in-demand skills with expert instructors.
          Learn React, Java, Python, AI, Web Development and
          much more with hands-on projects.
        </p>

      </div>

      {/* Search Box */}

      <div className="relative z-10 mt-14 bg-white border border-orange-100 shadow-xl rounded-2xl p-3 flex flex-col lg:flex-row gap-3">

        <div className="flex items-center flex-1 px-4">

          <Search
            className="text-orange-400"
            size={22}
          />

          <input
            type="text"
            placeholder="Search your favourite course..."
            className="w-full px-4 py-4 outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
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
          hover:scale-105
          hover:shadow-orange-200
          transition-all
          "
        >
          Search
        </button>

      </div>

    </section>

    {searchMessage && (
      <p className="text-center text-red-500 font-semibold mb-10">
        {searchMessage}
      </p>
    )}

    {/* ================= FEATURED COURSE ================= */}

    <section className="max-w-7xl mx-auto px-6 mb-20">

      <h2 className="text-4xl font-bold text-center mb-12">

        <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
          🌟 Featured Course
        </span>

      </h2>

      <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden grid lg:grid-cols-2 hover:shadow-2xl transition-all duration-300">

        {/* Left Image */}

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="React Course"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />

        </div>

        {/* Right */}

        <div className="p-10 flex flex-col justify-between">

          <div>

            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
              ⭐ Bestseller
            </span>

            <h2 className="text-4xl font-bold mt-6 text-gray-900">
              MERN Stack Complete Bootcamp
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Learn HTML, CSS, JavaScript, React, Node.js,
              Express.js and MongoDB by building real-world
              projects from scratch.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>

                <h3 className="text-2xl font-bold text-orange-500">
                  ⭐ 4.9
                </h3>

                <p className="text-gray-500">
                  Rating
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-orange-500">
                  👨‍🎓 12k+
                </h3>

                <p className="text-gray-500">
                  Students
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-orange-500">
                  ⏱ 48 hrs
                </h3>

                <p className="text-gray-500">
                  Duration
                </p>

              </div>

            </div>

          </div>

          {/* Price */}

          <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>

              <h2 className="text-4xl font-bold text-orange-500">
                ₹999
              </h2>

              <p className="text-gray-400 line-through">
                ₹2499
              </p>

            </div>

            <button
              className="
              px-10
              py-4
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-yellow-500
              text-white
              font-bold
              shadow-lg
              hover:scale-105
              hover:shadow-orange-200
              transition-all
              "
            >
              Enroll Now
            </button>

          </div>

        </div>

      </div>

    </section>

{/* ================= POPULAR COURSES ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  <div className="flex justify-between items-center mb-10">

    <div>

      <h2 className="text-4xl font-bold text-gray-900">
        Popular Courses
      </h2>

      <p className="text-gray-600 mt-2">
        Choose from our most popular courses.
      </p>

    </div>

    <button
      onClick={() => {
        if (showAllCourses) {
          setFilteredCourses(courses);
          setSearchTerm("");
          setSearchMessage("");
        }

        setShowAllCourses(!showAllCourses);
      }}
      className="hidden md:block text-orange-500 font-semibold hover:text-orange-600 transition"
    >
      {showAllCourses ? "Show Less ↑" : "View All →"}
    </button>

  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {(showAllCourses
      ? filteredCourses
      : filteredCourses.slice(0, 4)
    ).map((course, index) => (

      <div
        key={index}
        className="bg-white rounded-3xl border border-orange-100 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >

        <div className="overflow-hidden">

          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover hover:scale-110 transition duration-500"
          />

        </div>

        <div className="p-6">

          <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
            {course.category}
          </span>

          <h3 className="text-xl font-bold mt-4 text-gray-900">
            {course.title}
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            {course.description}
          </p>

          <div className="flex justify-between mt-5 text-sm text-gray-500">

            <span>⭐ {course.rating}</span>

            <span>👨‍🎓 {course.students}</span>

          </div>

          <div className="flex justify-between items-center mt-6">

            <h4 className="text-2xl font-bold text-orange-500">
              {course.price}
            </h4>

            <button
              className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-yellow-500
              text-white
              font-semibold
              shadow-md
              hover:shadow-orange-200
              hover:scale-105
              transition-all
              "
            >
              Enroll
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>


{/* ================= PRICING PLANS ================= */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  {/* Heading */}

  <div className="text-center mb-16">

    <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold mb-5">
      💎 Pricing Plans
    </span>

    <h2 className="text-5xl font-bold text-gray-900">
      Choose Your Learning Plan
    </h2>

    <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
      Flexible pricing designed for every learner—from beginners to professionals.
    </p>

  </div>

  {/* Cards */}

  <div className="grid lg:grid-cols-3 gap-8">

    {/* ================= Basic ================= */}

    <div className="bg-white rounded-3xl border border-orange-100 shadow-lg hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-300 p-8">

      <span className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm">
        Beginner
      </span>

      <h3 className="text-3xl font-bold mt-6 text-gray-900">
        Basic
      </h3>

      <p className="text-gray-600 mt-3">
        Perfect for students starting their learning journey.
      </p>

      <div className="mt-8">
        <h2 className="text-5xl font-bold text-gray-900">
          ₹499
        </h2>

        <p className="text-gray-500 mt-2">
          per month
        </p>
      </div>

      <ul className="mt-10 space-y-4 text-gray-700">

        <li>✅ Access to 10 Courses</li>

        <li>✅ Course Notes & PDFs</li>

        <li>✅ Community Support</li>

        <li>❌ Certificates</li>

        <li>❌ Live Classes</li>

      </ul>

      <button
  onClick={() => handlePayment(499)}
  className="
    w-full
    mt-10
    py-4
    rounded-xl
    font-semibold
    border
    border-orange-200
    bg-orange-50
    text-orange-700
    hover:bg-orange-100
    transition-all
  "
>
  Get Started
</button>

    </div>

    {/* ================= Pro ================= */}

    <div
      className="
      relative
      rounded-3xl
      overflow-hidden
      bg-gradient-to-br
      from-orange-500
      via-amber-500
      to-yellow-500
      text-white
      shadow-2xl
      scale-105
      p-8
      "
    >

      <span className="absolute top-6 right-6 bg-white text-orange-600 px-4 py-2 rounded-full text-xs font-bold">
        MOST POPULAR
      </span>

      <h3 className="text-3xl font-bold mt-6">
        Pro
      </h3>

      <p className="mt-3 text-orange-100">
        Best for serious learners and placement preparation.
      </p>

      <div className="mt-8">

        <h2 className="text-5xl font-bold">
          ₹999
        </h2>

        <p className="mt-2 text-orange-100">
          per month
        </p>

      </div>

      <ul className="mt-10 space-y-4">

        <li>✅ Unlimited Courses</li>

        <li>✅ Notes & PDFs</li>

        <li>✅ Certificates</li>

        <li>✅ Live Classes</li>

        <li>✅ Priority Support</li>

      </ul>

      <button
  onClick={() => handlePayment(999)}
  className="
    mt-10
    w-full
    py-4
    rounded-xl
    bg-white
    text-orange-600
    font-bold
    hover:scale-105
    transition-all
  "
>
  Buy Pro
</button>

    </div>

    {/* ================= Premium ================= */}

    <div className="bg-white rounded-3xl border border-orange-100 shadow-lg hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-300 p-8">

      <span className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm">
        Professional
      </span>

      <h3 className="text-3xl font-bold mt-6 text-gray-900">
        Premium
      </h3>

      <p className="text-gray-600 mt-3">
        Complete learning solution with career support.
      </p>

      <div className="mt-8">

        <h2 className="text-5xl font-bold text-gray-900">
          ₹1499
        </h2>

        <p className="text-gray-500 mt-2">
          per month
        </p>

      </div>

      <ul className="mt-10 space-y-4 text-gray-700">

        <li>✅ Unlimited Courses</li>

        <li>✅ Live Projects</li>

        <li>✅ Internship Support</li>

        <li>✅ Mock Interviews</li>

        <li>✅ Career Guidance</li>

      </ul>

      <button
  onClick={() => handlePayment(1499)}
  className="
    mt-10
    w-full
    py-4
    rounded-xl
    font-semibold
    text-white
    bg-gradient-to-r
    from-orange-500
    via-amber-500
    to-yellow-500
    hover:shadow-lg
    hover:scale-105
    transition-all
  "
>
  Get Premium
</button>

    </div>

  </div>

</section>
    </div>
  );
};

export default Courses;