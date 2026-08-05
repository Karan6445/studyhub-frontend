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
    id:1,
    title:"Introduction to Node.js",
    level:"Beginner",
    time:"5 min",
    desc:"Learn what Node.js is, how it works and why developers use it for backend development.",
  },

  {
    id:2,
    title:"Installing Node.js",
    level:"Beginner",
    time:"6 min",
    desc:"Install Node.js, npm and configure your development environment.",
  },

  {
    id:3,
    title:"Node.js Architecture",
    level:"Beginner",
    time:"8 min",
    desc:"Understand event-driven architecture and the Node.js runtime environment.",
  },

  {
    id:4,
    title:"Node.js Modules",
    level:"Beginner",
    time:"8 min",
    desc:"Learn built-in modules, custom modules and module exports.",
  },

  {
    id:5,
    title:"NPM in Node.js",
    level:"Beginner",
    time:"7 min",
    desc:"Understand npm packages and how to manage dependencies.",
  },

  {
    id:6,
    title:"Creating First Node Server",
    level:"Beginner",
    time:"10 min",
    desc:"Create your first web server using Node.js HTTP module.",
  },

  {
    id:7,
    title:"Express.js Framework",
    level:"Intermediate",
    time:"10 min",
    desc:"Learn Express.js and build scalable backend applications.",
  },

  {
    id:8,
    title:"Routing in Express",
    level:"Intermediate",
    time:"8 min",
    desc:"Create GET, POST, PUT and DELETE routes in Node.js.",
  },

  {
    id:9,
    title:"Middleware in Node.js",
    level:"Intermediate",
    time:"10 min",
    desc:"Understand middleware functions and request processing.",
  },

  {
    id:10,
    title:"Building REST API",
    level:"Intermediate",
    time:"12 min",
    desc:"Create professional REST APIs using Node.js and Express.",
  },

  {
    id:11,
    title:"MongoDB Connection with Node.js",
    level:"Intermediate",
    time:"12 min",
    desc:"Connect MongoDB database using Mongoose.",
  },

  {
    id:12,
    title:"Authentication using JWT",
    level:"Advanced",
    time:"15 min",
    desc:"Implement secure login and authentication systems.",
  },

  {
    id:13,
    title:"File Upload using Multer",
    level:"Advanced",
    time:"12 min",
    desc:"Upload images and files in Node.js applications.",
  },

  {
    id:14,
    title:"Error Handling",
    level:"Advanced",
    time:"10 min",
    desc:"Handle errors professionally in Node.js projects.",
  },

  {
    id:15,
    title:"Deploy Node.js Application",
    level:"Advanced",
    time:"15 min",
    desc:"Learn how to deploy Node.js backend applications.",
  },

  {
    id:16,
    title:"Node.js Best Practices",
    level:"Advanced",
    time:"15 min",
    desc:"Write clean, secure and scalable Node.js applications.",
  },


];


export default function NodeArticles(){


const [search,setSearch] = useState("");



const filtered = articles.filter((article)=>

article.title.toLowerCase()
.includes(search.toLowerCase())

);



return (

<div className="bg-orange-50 min-h-screen">



{/* HERO */}

<section

className="
relative
h-[420px]
bg-cover
bg-center
"

style={{

backgroundImage:

"url('https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1600')"

}}

>


<div className="absolute inset-0 bg-black/65"></div>



<div className="
relative
max-w-7xl
mx-auto
h-full
flex
flex-col
justify-center
px-6
text-white
">


<span className="
bg-orange-500
px-5
py-2
rounded-full
w-fit
font-semibold
">

Node.js Learning Hub

</span>



<h1 className="
text-5xl
md:text-6xl
font-extrabold
mt-6
">

Master 

<span className="text-orange-400">

 Node.js Development

</span>

</h1>



<p className="
mt-5
text-lg
text-gray-200
max-w-2xl
">

Learn Node.js from basics to advanced concepts including
Express.js, REST APIs, MongoDB, Authentication, Deployment
and backend development.

</p>


</div>


</section>





{/* SEARCH */}


<div className="
max-w-6xl
mx-auto
-mt-10
relative
z-20
px-6
">


<div className="
bg-white
rounded-2xl
shadow-xl
p-4
flex
items-center
gap-4
">


<Search className="text-orange-500"/>


<input

type="text"

placeholder="Search Node.js articles..."

className="
w-full
outline-none
text-lg
"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>


</div>






{/* STATS */}


<div className="
max-w-6xl
mx-auto
px-6
py-12
grid
md:grid-cols-3
gap-6
">


<div className="
bg-white
rounded-2xl
shadow-lg
p-6
text-center
">

<BookOpen 
className="mx-auto text-orange-500"
size={40}
/>


<h2 className="text-3xl font-bold mt-4">

16+

</h2>


<p className="text-gray-500">

Node.js Articles

</p>


</div>





<div className="
bg-white
rounded-2xl
shadow-lg
p-6
text-center
">


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





<div className="
bg-white
rounded-2xl
shadow-lg
p-6
text-center
">


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






{/* ARTICLES */}



<div className="
max-w-7xl
mx-auto
px-6
pb-20
">


<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{

filtered.map((article)=>(


<div

key={article.id}

className="
bg-white
rounded-3xl
shadow-lg
hover:shadow-2xl
transition
duration-300
hover:-translate-y-2
overflow-hidden
"

>


<div className="
h-2
bg-gradient-to-r
from-orange-500
to-yellow-400
">

</div>



<div className="p-7">



<span className="
bg-orange-100
text-orange-600
px-3
py-1
rounded-full
text-sm
">

{article.level}

</span>



<h2 className="
text-2xl
font-bold
mt-5
">

{article.title}

</h2>



<p className="
text-gray-600
mt-4
">

{article.desc}

</p>




<div className="
flex
justify-between
items-center
mt-8
">


<span className="text-gray-500">

{article.time} Read

</span>




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
"

>

Read

<ArrowRight size={18}/>

</button>


</div>


</div>


</div>


))


}



</div>


</div>



</div>


)

}