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
title:"How to Build a Developer Career",
level:"Beginner",
time:"5 min",
desc:"Learn the roadmap and skills required to start a successful software career."
},

{
id:2,
title:"Resume Building Guide",
level:"Beginner",
time:"8 min",
desc:"Create an ATS-friendly resume that attracts recruiters."
},

{
id:3,
title:"LinkedIn Profile Optimization",
level:"Beginner",
time:"7 min",
desc:"Improve your LinkedIn profile and increase job opportunities."
},

{
id:4,
title:"Portfolio Website Guide",
level:"Beginner",
time:"10 min",
desc:"Build a professional portfolio to showcase your projects."
},

{
id:5,
title:"How to Prepare for Interviews",
level:"Beginner",
time:"10 min",
desc:"Learn technical and HR interview preparation strategies."
},

{
id:6,
title:"Frontend Developer Roadmap",
level:"Intermediate",
time:"12 min",
desc:"Complete roadmap to become a frontend developer."
},

{
id:7,
title:"Backend Developer Roadmap",
level:"Intermediate",
time:"12 min",
desc:"Learn backend technologies and server-side development."
},

{
id:8,
title:"Full Stack Developer Roadmap",
level:"Intermediate",
time:"15 min",
desc:"Become a complete full stack developer with MERN stack."
},

{
id:9,
title:"Git and GitHub for Developers",
level:"Intermediate",
time:"8 min",
desc:"Learn version control and manage your projects professionally."
},

{
id:10,
title:"Freelancing Career Guide",
level:"Advanced",
time:"12 min",
desc:"Start freelancing and earn through your development skills."
},

];


export default function CareerArticles(){


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

"url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600')"

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

Career Learning Hub

</span>



<h1 className="
text-5xl
md:text-6xl
font-extrabold
mt-6
">

Build Your

<span className="text-orange-400">

 Successful Career

</span>

</h1>



<p className="
mt-5
text-lg
text-gray-200
max-w-2xl
">

Learn career skills including resume building,
interview preparation, LinkedIn optimization,
portfolio building and developer growth strategies.

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

placeholder="Search Career articles..."

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
10+
</h2>

<p className="text-gray-500">
Career Articles
</p>

</div>




<div className="bg-white rounded-2xl shadow-lg p-6 text-center">

<Clock
className="mx-auto text-orange-500"
size={40}
/>

<h2 className="text-3xl font-bold mt-4">
100+
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
Free Resources
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