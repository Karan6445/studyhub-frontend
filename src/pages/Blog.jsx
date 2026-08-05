import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api/axios"; // Change the path if your axios.js is elsewhere





export default function Blog() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [articles, setArticles] = useState([]);
const [articleLoading, setArticleLoading] = useState(true);



useEffect(() => {
  fetchArticles();
}, []);



const fetchArticles = async () => {

  try {

    const res = await api.get("/articles");

    setArticles(res.data.articles);

  } catch (err) {

    console.log(err);

  } finally {

    setArticleLoading(false);

  }

};

  const handleSubscribe = async () => {
  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  try {
    setLoading(true);

    const res = await api.post("/subscribers", {
      email,
    });

    alert(res.data.message);
    setEmail("");
  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-slate-50">



      {/* ================= FEATURED BLOG ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold text-gray-900">
      🌟 Featured Article
    </h2>

    <p className="text-gray-600 mt-4 text-lg">
      Hand-picked articles to help you learn faster and stay ahead.
    </p>

  </div>

  <div className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-lg hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-300 grid lg:grid-cols-2">

    {/* Left Image */}

    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
      alt="Featured Blog"
      className="w-full h-full object-cover"
    />

    {/* Right Content */}

    <div className="p-10 flex flex-col justify-between">

      <div>

        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
          🔥 Trending
        </span>

        <h2 className="text-4xl font-bold mt-6 leading-tight text-gray-900">
          How to Become a Full Stack Developer in 2026
        </h2>

        <p className="text-gray-600 mt-5 leading-8">
          Learn the complete roadmap to becoming a successful Full Stack
          Developer using HTML, CSS, JavaScript, React, Node.js, Express,
          MongoDB, Git, and deployment tools.
        </p>

        {/* Blog Info */}

        <div className="flex flex-wrap gap-6 mt-8 text-gray-500">

          <span>👤 John Doe</span>

          <span>📅 July 2026</span>

          <span>⏱ 10 min read</span>

        </div>

      </div>

      {/* Button */}

      <Link
        to="/blog/full-stack-developer-2026"
        className="mt-10 w-fit bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-orange-300 transition-all duration-300 inline-block"
      >
        Read More →
      </Link>

    </div>

  </div>

</section>

{/* ================= LATEST ARTICLES ================= */}

{/* ================= LATEST ARTICLES ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">


<div className="flex justify-between items-center mb-10">


<div>

<h2 className="text-4xl font-bold text-gray-900">
Latest Articles
</h2>


<p className="text-gray-600 mt-2">
Stay updated with latest programming tutorials and career tips.
</p>


</div>


</div>



{
articleLoading ? (

<h2 className="text-center text-xl">
Loading Articles...
</h2>


)

:

articles.length === 0 ? (

<h2 className="text-center text-xl">
No Articles Found
</h2>


)

:

(


<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


{

articles.map((article)=>(


<div

key={article._id}

className="
bg-white
rounded-2xl
overflow-hidden
border
border-orange-100
shadow-lg
hover:shadow-2xl
transition
"


>


<img

src={article.image}

alt={article.title}

className="
w-full
h-52
object-cover
"

/>



<div className="p-6">


<span className="
bg-orange-100
text-orange-700
text-xs
px-3
py-1
rounded-full
font-semibold
">

{article.category}

</span>



<h3 className="
text-2xl
font-bold
mt-4
">

{article.title}

</h3>



<p className="
text-gray-600
mt-3
">

{article.description}

</p>



<div className="
flex
justify-between
text-sm
text-gray-500
mt-6
">


<span>
👤 {article.author}
</span>


<span>
⏱ 5 min
</span>


</div>




<Link

to={`/article/${article._id}`}

className="
mt-6
text-orange-600
font-semibold
inline-block
hover:text-orange-700
"

>

Read More →

</Link>


</div>


</div>


))


}


</div>


)


}


</section>


{/* ================= BLOG CATEGORIES ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  {/* Heading */}

  <div className="text-center mb-12">

    <h2 className="text-4xl font-bold text-gray-900">
      Explore <span className="text-orange-500">Categories</span>
    </h2>

    <p className="text-gray-600 mt-4 text-lg">
      Browse articles by your favorite technology and topics.
    </p>

  </div>

  {/* Categories Grid */}

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">

    {/* React */}
    

    <Link to="/react-articles">

<div className="bg-white rounded-2xl border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/40 hover:-translate-y-2 transition-all duration-300 p-8 text-center cursor-pointer">

      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">
        ⚛️
      </div>

      <h3 className="text-xl font-bold mt-5 text-gray-900">
        React
      </h3>

      <p className="text-orange-500 mt-2 font-medium">
        25 Articles
      </p>

</div>

</Link>

    {/* Java */}

    <Link to="/java-articles">

<div className="bg-white rounded-2xl border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/40 hover:-translate-y-2 transition-all duration-300 p-8 text-center cursor-pointer">

      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">
        ☕
      </div>

      <h3 className="text-xl font-bold mt-5 text-gray-900">
        Java
      </h3>

      <p className="text-orange-500 mt-2 font-medium">
        18 Articles
      </p>

</div>

</Link>

    {/* Python */}

    <Link to="/python-articles">

<div className="bg-white rounded-2xl border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/40 hover:-translate-y-2 transition-all duration-300 p-8 text-center cursor-pointer">

      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">
        🐍
      </div>

      <h3 className="text-xl font-bold mt-5 text-gray-900">
        Python
      </h3>

      <p className="text-orange-500 mt-2 font-medium">
        22 Articles
      </p>

</div>

</Link>

    {/* AI */}

    <Link to="/ai-articles">

  <div className="bg-white rounded-2xl border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/40 hover:-translate-y-2 transition-all duration-300 p-8 text-center cursor-pointer">

    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">
      🤖
    </div>

    <h3 className="text-xl font-bold mt-5 text-gray-900">
      AI
    </h3>

    <p className="text-orange-500 mt-2 font-medium">
      15 Articles
    </p>

  </div>

</Link>

    {/* Node.js */}

    <Link to="/nodejs-articles">

  <div className="bg-white rounded-2xl border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/40 hover:-translate-y-2 transition-all duration-300 p-8 text-center cursor-pointer">

    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-3xl">
      🟢
    </div>

    <h3 className="text-xl font-bold mt-5 text-gray-900">
      Node.js
    </h3>

    <p className="text-orange-500 mt-2 font-medium">
      16 Articles
    </p>

  </div>

</Link>

    {/* MongoDB */}

   <Link to="/mongodb-articles">

<div className="
bg-white 
rounded-2xl 
border 
border-orange-100 
shadow-md 
hover:shadow-xl 
hover:shadow-orange-200/40 
hover:-translate-y-2 
transition-all 
duration-300 
p-8 
text-center 
cursor-pointer
">


<div className="
w-16 
h-16 
bg-orange-100 
rounded-full 
flex 
items-center 
justify-center 
mx-auto 
text-3xl
">

🍃

</div>


<h3 className="
text-xl 
font-bold 
mt-5 
text-gray-900
">

MongoDB

</h3>


<p className="
text-orange-500 
mt-2 
font-medium
">

12 Articles

</p>


</div>

</Link>

    {/* Career */}

    <Link to="/career-articles">

<div className="
bg-white 
rounded-2xl 
border 
border-orange-100 
shadow-md 
hover:shadow-xl 
hover:shadow-orange-200/40 
hover:-translate-y-2 
transition-all 
duration-300 
p-8 
text-center 
cursor-pointer
">


<div className="
w-16 
h-16 
bg-orange-100 
rounded-full 
flex 
items-center 
justify-center 
mx-auto 
text-3xl
">

💼

</div>


<h3 className="
text-xl 
font-bold 
mt-5 
text-gray-900
">

Career

</h3>


<p className="
text-orange-500 
mt-2 
font-medium
">

10 Articles

</p>


</div>

</Link>

    {/* Interview */}

    <Link to="/interview-articles">

<div className="
bg-white 
rounded-2xl 
border 
border-orange-100 
shadow-md 
hover:shadow-xl 
hover:shadow-orange-200/40 
hover:-translate-y-2 
transition-all 
duration-300 
p-8 
text-center 
cursor-pointer
">


<div className="
w-16 
h-16 
bg-orange-100 
rounded-full 
flex 
items-center 
justify-center 
mx-auto 
text-3xl
">

🎯

</div>


<h3 className="
text-xl 
font-bold 
mt-5 
text-gray-900
">

Interview

</h3>


<p className="
text-orange-500 
mt-2 
font-medium
">

30 Articles

</p>


</div>

</Link>

  </div>

</section>

{/* ================= POPULAR POSTS & NEWSLETTER ================= */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="grid lg:grid-cols-2 gap-10">

    {/* ================= Popular Posts ================= */}

    <div className="bg-white rounded-3xl border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/40 transition p-8">

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        ⭐ <span className="text-orange-500">Popular Posts</span>
      </h2>

      <div className="space-y-6">

        <div className="flex items-start gap-5 border-b border-orange-100 pb-5">

          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
            ⚛️
          </div>

          <div>

            <h3 className="font-bold text-xl text-gray-900">
              Top 10 React Projects for Beginners
            </h3>

            <p className="text-gray-500 mt-2">
              8 min read • July 2026
            </p>

          </div>

        </div>

        <div className="flex items-start gap-5 border-b border-orange-100 pb-5">

          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
            ☕
          </div>

          <div>

            <h3 className="font-bold text-xl text-gray-900">
              Java Interview Questions & Answers
            </h3>

            <p className="text-gray-500 mt-2">
              12 min read • July 2026
            </p>

          </div>

        </div>

        <div className="flex items-start gap-5 border-b border-orange-100 pb-5">

          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
            🐍
          </div>

          <div>

            <h3 className="font-bold text-xl text-gray-900">
              Python Complete Roadmap
            </h3>

            <p className="text-gray-500 mt-2">
              10 min read • June 2026
            </p>

          </div>

        </div>

        <div className="flex items-start gap-5">

          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
            🤖
          </div>

          <div>

            <h3 className="font-bold text-xl text-gray-900">
              AI Tools Every Developer Should Know
            </h3>

            <p className="text-gray-500 mt-2">
              6 min read • June 2026
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* ================= Newsletter ================= */}

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-orange-100 border border-orange-100 shadow-lg p-10">

      {/* Decorative Circles */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-300 opacity-20 rounded-full"></div>

      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-300 opacity-20 rounded-full"></div>

      <div className="relative">

        <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
          📩 Newsletter
        </span>

        <h2 className="text-4xl font-bold text-gray-900 mt-6">
          Join <span className="text-orange-500">20,000+</span> Students
        </h2>

        <p className="text-gray-600 mt-5 leading-8">
          Subscribe to receive the latest tutorials,
          interview preparation guides, notes,
          courses, and programming resources
          directly in your inbox.
        </p>

        <div className="mt-8 space-y-4">

          <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-orange-200 px-5 py-4 outline-none focus:ring-2 focus:ring-orange-300"
/>

          <button
  onClick={handleSubscribe}
  disabled={loading}
  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white transition py-4 rounded-xl font-bold shadow-md shadow-orange-200"
>
  {loading ? "Subscribing..." : "Subscribe Now"}
</button>

        </div>

        <p className="text-gray-500 mt-5 text-sm">
          No spam. Unsubscribe anytime.
        </p>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}