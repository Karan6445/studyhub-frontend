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
title:"How to Prepare for Coding Interviews",
level:"Beginner",
time:"5 min",
desc:"Learn the complete strategy to prepare for technical coding interviews."
},

{
id:2,
title:"Data Structures Interview Questions",
level:"Beginner",
time:"10 min",
desc:"Important DSA concepts frequently asked in developer interviews."
},

{
id:3,
title:"Array Interview Questions",
level:"Beginner",
time:"8 min",
desc:"Practice common array problems asked by companies."
},

{
id:4,
title:"String Interview Questions",
level:"Beginner",
time:"8 min",
desc:"Solve important string manipulation problems."
},

{
id:5,
title:"Linked List Interview Questions",
level:"Intermediate",
time:"12 min",
desc:"Understand linked list problems and their solutions."
},

{
id:6,
title:"Stack & Queue Questions",
level:"Intermediate",
time:"10 min",
desc:"Prepare stack and queue based interview problems."
},

{
id:7,
title:"OOPs Interview Questions",
level:"Intermediate",
time:"12 min",
desc:"Learn frequently asked object oriented programming questions."
},

{
id:8,
title:"Java Interview Questions",
level:"Intermediate",
time:"15 min",
desc:"Top Java questions asked in technical interviews."
},

{
id:9,
title:"React Interview Questions",
level:"Intermediate",
time:"15 min",
desc:"Important React concepts asked in frontend interviews."
},

{
id:10,
title:"Node.js Interview Questions",
level:"Intermediate",
time:"15 min",
desc:"Prepare backend Node.js interview questions."
},

{
id:11,
title:"MongoDB Interview Questions",
level:"Intermediate",
time:"12 min",
desc:"Common MongoDB database interview questions."
},

{
id:12,
title:"SQL Interview Questions",
level:"Intermediate",
time:"15 min",
desc:"Practice SQL queries and database concepts."
},

{
id:13,
title:"MERN Stack Interview Questions",
level:"Advanced",
time:"20 min",
desc:"Complete MERN stack interview preparation guide."
},

{
id:14,
title:"System Design Basics",
level:"Advanced",
time:"20 min",
desc:"Learn system design concepts for developer interviews."
},

{
id:15,
title:"HR Interview Questions",
level:"Beginner",
time:"10 min",
desc:"Prepare answers for common HR interview rounds."
},

{
id:16,
title:"Resume Based Questions",
level:"Beginner",
time:"8 min",
desc:"Learn how to answer questions from your resume."
},

{
id:17,
title:"Project Explanation Guide",
level:"Intermediate",
time:"12 min",
desc:"Explain your projects confidently in interviews."
},

{
id:18,
title:"Git & GitHub Interview Questions",
level:"Intermediate",
time:"10 min",
desc:"Important Git concepts asked by recruiters."
},

{
id:19,
title:"API Interview Questions",
level:"Advanced",
time:"15 min",
desc:"REST API and backend interview preparation."
},

{
id:20,
title:"Placement Preparation Roadmap",
level:"Advanced",
time:"15 min",
desc:"Complete roadmap for software placement preparation."
},

{
id:21,
title:"Coding Round Tips",
level:"Advanced",
time:"10 min",
desc:"Improve your performance in coding rounds."
},

{
id:22,
title:"Mock Interview Guide",
level:"Advanced",
time:"12 min",
desc:"How to practice and improve interview skills."
},

{
id:23,
title:"Communication Skills",
level:"Beginner",
time:"8 min",
desc:"Improve communication for technical interviews."
},

{
id:24,
title:"Freshers Interview Guide",
level:"Beginner",
time:"10 min",
desc:"Complete interview guide for fresh graduates."
},

{
id:25,
title:"Top Product Based Company Questions",
level:"Advanced",
time:"20 min",
desc:"Prepare for interviews at product companies."
},

{
id:26,
title:"FAANG Interview Preparation",
level:"Advanced",
time:"20 min",
desc:"Preparation strategies for top tech companies."
},

{
id:27,
title:"Aptitude Interview Questions",
level:"Beginner",
time:"10 min",
desc:"Practice quantitative aptitude questions."
},

{
id:28,
title:"Behavioral Interview Questions",
level:"Intermediate",
time:"10 min",
desc:"Learn STAR method for behavioral answers."
},

{
id:29,
title:"Online Assessment Preparation",
level:"Intermediate",
time:"15 min",
desc:"Crack online coding assessments."
},

{
id:30,
title:"Final Interview Checklist",
level:"Advanced",
time:"8 min",
desc:"Things to prepare before your final interview."
}

];



export default function InterviewArticles(){


const [search,setSearch]=useState("");



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

"url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600')"

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

Interview Preparation Hub

</span>



<h1 className="
text-5xl
md:text-6xl
font-extrabold
mt-6
">

Crack Your

<span className="text-orange-400">

 Technical Interviews

</span>

</h1>



<p className="
mt-5
text-lg
text-gray-200
max-w-2xl
">

Prepare for coding rounds, technical interviews,
HR rounds, DSA, Java, MERN Stack and software
developer interviews.

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

placeholder="Search Interview articles..."

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
30+
</h2>

<p className="text-gray-500">
Interview Articles
</p>

</div>




<div className="bg-white rounded-2xl shadow-lg p-6 text-center">

<Clock
className="mx-auto text-orange-500"
size={40}
/>

<h2 className="text-3xl font-bold mt-4">
300+
</h2>

<p className="text-gray-500">
Minutes Learning
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
Free Preparation
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