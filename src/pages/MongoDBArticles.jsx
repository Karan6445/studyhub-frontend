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
title:"Introduction to MongoDB",
level:"Beginner",
time:"5 min",
desc:"Learn what MongoDB is and why it is used in modern web applications."
},

{
id:2,
title:"Installing MongoDB",
level:"Beginner",
time:"6 min",
desc:"Install MongoDB locally and setup your development environment."
},

{
id:3,
title:"MongoDB Database Concepts",
level:"Beginner",
time:"8 min",
desc:"Understand databases, collections and documents in MongoDB."
},

{
id:4,
title:"MongoDB CRUD Operations",
level:"Beginner",
time:"10 min",
desc:"Learn Create, Read, Update and Delete operations."
},

{
id:5,
title:"MongoDB Documents",
level:"Beginner",
time:"8 min",
desc:"Understand JSON documents and data structure."
},

{
id:6,
title:"MongoDB Collections",
level:"Beginner",
time:"7 min",
desc:"Learn how collections store related documents."
},

{
id:7,
title:"MongoDB Query Operators",
level:"Intermediate",
time:"10 min",
desc:"Search and filter data using MongoDB operators."
},

{
id:8,
title:"MongoDB Indexing",
level:"Intermediate",
time:"12 min",
desc:"Improve database performance using indexes."
},

{
id:9,
title:"MongoDB Aggregation",
level:"Intermediate",
time:"15 min",
desc:"Analyze and process data using aggregation pipeline."
},

{
id:10,
title:"Mongoose with MongoDB",
level:"Intermediate",
time:"12 min",
desc:"Connect MongoDB with Node.js using Mongoose."
},

{
id:11,
title:"MongoDB Schema Design",
level:"Intermediate",
time:"10 min",
desc:"Create efficient database schemas."
},

{
id:12,
title:"MongoDB Authentication",
level:"Advanced",
time:"15 min",
desc:"Secure MongoDB databases and user access."
},


];


export default function MongoDBArticles(){


const [search,setSearch] = useState("");



const filtered = articles.filter((article)=>

article.title
.toLowerCase()
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

"url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600')"

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

MongoDB Learning Hub

</span>



<h1 className="
text-5xl
md:text-6xl
font-extrabold
mt-6
">

Master

<span className="text-orange-400">

 MongoDB Database

</span>

</h1>



<p className="
mt-5
text-lg
text-gray-200
max-w-2xl
">

Learn MongoDB from basics to advanced concepts including
CRUD operations, queries, aggregation, indexing and database design.

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

placeholder="Search MongoDB articles..."

className="w-full outline-none text-lg"

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


<div className="bg-white rounded-2xl shadow-lg p-6 text-center">

<BookOpen
className="mx-auto text-orange-500"
size={40}
/>

<h2 className="text-3xl font-bold mt-4">
12+
</h2>

<p className="text-gray-500">
MongoDB Articles
</p>

</div>



<div className="bg-white rounded-2xl shadow-lg p-6 text-center">

<Clock
className="mx-auto text-orange-500"
size={40}
/>

<h2 className="text-3xl font-bold mt-4">
120+
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