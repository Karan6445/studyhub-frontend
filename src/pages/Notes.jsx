import {
  Search,
  BookOpen,
  FileText,
  Database,
  Image,
  Download,
  Star,
  Upload,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import React, { useState } from "react";


const Notes = () => {


const [activeCategory,setActiveCategory] = useState(
"All Resources"
);

const [sortBy,setSortBy] = useState("Most Recent");



const resources = [
  {
    title: "Data Structures Summary",
    type: "Lecture Notes",
    description: "Visual guides for trees, graphs and searching algorithms.",
    file: "PDF • 12MB",
    icon: "📄",
    pdf: "/pdfs/data-structures-summary.pdf",
  },

  {
    title: "Database Management System",
    type: "Lecture Notes",
    description: "Complete DBMS notes with SQL queries and concepts.",
    file: "PDF • 15MB",
    icon: "📘",
    pdf: "/pdfs/database-management-system.pdf",
  },

  {
    title: "Modern Economics",
    type: "E-Books",
    description: "Chapter-wise economics reference book.",
    file: "EPUB • 8MB",
    icon: "📚",
    pdf: "/pdfs/modern-economics.pdf",
  },

  {
    title: "Operating System PYQ",
    type: "PYQs",
    description: "Previous year university examination papers.",
    file: "PDF • 5MB",
    icon: "📝",
    pdf: "/pdfs/operating-system-pyq.pdf",
  },

  {
    title: "Computer Network PYQ",
    type: "PYQs",
    description: "Last 5 years solved question papers.",
    file: "PDF • 7MB",
    icon: "📑",
    pdf: "/pdfs/computer-network-pyq.pdf",
  },

  {
    title: "Machine Learning Case Study",
    type: "Case Studies",
    description: "Real world AI and ML implementation study.",
    file: "PDF • 10MB",
    icon: "📊",
    pdf: "/pdfs/machine-learning-case-study.pdf",
  },

  {
    title: "AI Healthcare Project",
    type: "Case Studies",
    description: "Artificial intelligence healthcare case analysis.",
    file: "PDF • 9MB",
    icon: "🤖",
    pdf: "/pdfs/ai-healthcare-project.pdf",
  },
];



let filteredResources =

activeCategory === "All Resources"

?

resources

:

resources.filter(
(item)=>item.type===activeCategory
);



if(sortBy==="Popularity")
{

filteredResources.sort(
(a,b)=>b.popularity-a.popularity
);

}



if(sortBy==="Year")
{

filteredResources.sort(
(a,b)=>b.year-a.year
);

}



if(sortBy==="Most Recent")
{

filteredResources.sort(
(a,b)=>b.year-a.year
);

}



return (

<div className="min-h-screen bg-orange-50/40">


{/* ================= HERO SECTION ================= */}

<section className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">


{/* Background Glow */}

<div
className="
absolute
top-0
right-0
w-[400px]
h-[400px]
bg-orange-200/40
blur-[120px]
rounded-full
"
/>



{/* Heading */}

<div className="text-center relative z-10">


<h1
className="
text-5xl
font-bold
text-gray-900
leading-tight
"
>

Curated Study Materials{" "}

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
& PYQs
</span>


</h1>



<p className="
mt-6
text-lg
text-gray-600
max-w-3xl
mx-auto
leading-8
">

Access a comprehensive library of peer-reviewed notes,
reference books and previous year question papers
meticulously organized for your academic excellence.

</p>


</div>


</section>





{/* ================= FILTER SECTION ================= */}


<section className="max-w-7xl mx-auto px-6 mb-16">


<div className="
flex
flex-col
lg:flex-row
justify-between
items-start
lg:items-center
gap-6
">



{/* Left Buttons */}


<div className="flex flex-wrap gap-3">


<button

onClick={()=>setActiveCategory("All Resources")}

className={`

px-6
py-2
rounded-full
font-semibold
transition

${
activeCategory==="All Resources"

?

"bg-orange-500 text-white shadow-md shadow-orange-200"

:

"bg-white border border-orange-200 text-gray-700 hover:bg-orange-50"

}

`}

>

All Resources

</button>




<button

onClick={()=>setActiveCategory("Lecture Notes")}

className={`

px-6
py-2
rounded-full
font-semibold
transition

${
activeCategory==="Lecture Notes"

?

"bg-orange-500 text-white shadow-md shadow-orange-200"

:

"bg-white border border-orange-200 text-gray-700 hover:bg-orange-50"

}

`}

>

Lecture Notes

</button>





<button

onClick={()=>setActiveCategory("E-Books")}

className={`

px-6
py-2
rounded-full
font-semibold
transition

${
activeCategory==="E-Books"

?

"bg-orange-500 text-white shadow-md shadow-orange-200"

:

"bg-white border border-orange-200 text-gray-700 hover:bg-orange-50"

}

`}

>

E-Books

</button>





<button

onClick={()=>setActiveCategory("PYQs")}

className={`

px-6
py-2
rounded-full
font-semibold
transition

${
activeCategory==="PYQs"

?

"bg-orange-500 text-white shadow-md shadow-orange-200"

:

"bg-white border border-orange-200 text-gray-700 hover:bg-orange-50"

}

`}

>

PYQs

</button>





<button

onClick={()=>setActiveCategory("Case Studies")}

className={`

px-6
py-2
rounded-full
font-semibold
transition

${
activeCategory==="Case Studies"

?

"bg-orange-500 text-white shadow-md shadow-orange-200"

:

"bg-white border border-orange-200 text-gray-700 hover:bg-orange-50"

}

`}

>

Case Studies

</button>



</div>





{/* Right Sort */}


<div className="flex items-center gap-3">


<span className="text-gray-600 font-medium">
Sort By:
</span>



<select

value={sortBy}

onChange={(e)=>setSortBy(e.target.value)}

className="
border
border-orange-200
rounded-lg
px-4
py-2
outline-none
bg-white
focus:ring-2
focus:ring-orange-300
"

>


<option value="Most Recent">
Most Recent
</option>


<option value="Popularity">
Popularity
</option>


<option value="Year">
Year
</option>


</select>


</div>



</div>


</section>

{/* ================= FEATURED RESOURCE ================= */}

<section className="max-w-7xl mx-auto px-6 mb-20">

  <div
    className="
    bg-white
    rounded-2xl
    shadow-md
    border
    border-orange-100
    overflow-hidden
    hover:shadow-xl
    hover:shadow-orange-200/40
    transition
    duration-300
    "
  >

    <div className="grid lg:grid-cols-3 gap-8 p-8">


      {/* Left Image */}

      <div className="relative">


        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
          alt="Machine Learning"
          className="w-full h-64 object-cover rounded-xl"
        />



        <span
          className="
          absolute
          top-4
          left-4
          bg-orange-400
          text-white
          text-xs
          font-bold
          px-3
          py-1
          rounded-full
          "
        >
          Premium
        </span>


      </div>




      {/* Right Content */}


      <div className="lg:col-span-2 flex flex-col justify-between">



        <div>



          {/* Subject & Rating */}


          <div className="flex justify-between items-center">


            <p className="text-orange-600 font-semibold">
              Computer Science • CS401
            </p>



            <div className="flex items-center gap-2">


              <span className="text-orange-500 text-xl">
                ⭐
              </span>



              <span className="font-semibold">
                4.9
              </span>



              <span className="text-gray-500">
                (1.2k)
              </span>



            </div>


          </div>





          {/* Title */}


          <h2 className="
          text-3xl
          font-bold
          mt-4
          text-gray-900
          ">

            Advanced Machine Learning:
            Theory and Practice

          </h2>





          {/* Description */}


          <p className="
          text-gray-600
          mt-4
          leading-7
          ">

            Complete set of lecture notes, curated references,
            previous year questions, solved assignments,
            and practice problems from the MIT Spring Semester.

          </p>



        </div>






        {/* Bottom */}


       <div className="flex justify-between items-center mt-10">
  <div className="flex items-center gap-3">
    <img
      src="https://i.pravatar.cc/100?img=12"
      alt="Professor"
      className="w-12 h-12 rounded-full"
    />

    <div>
      <p className="font-semibold text-gray-900">
        Prof. Adrian Thorne
      </p>

      <p className="text-gray-500 text-sm">
        Machine Learning Expert
      </p>
    </div>
  </div>

  <a
    href="/pdfs/Machine_Learning_Study_Guide.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-orange-500
      hover:bg-orange-600
      text-white
      px-8
      py-3
      rounded-xl
      font-semibold
      transition
      shadow-md
      shadow-orange-200
    "
  >
    Download
  </a>
</div>




      </div>



    </div>


  </div>


</section>



{/* ================= RESOURCE CARDS ================= */}


<section className="max-w-7xl mx-auto px-6 mb-20">


<div className="flex justify-between items-center mb-8">


<h2 className="text-3xl font-bold text-gray-900">

{activeCategory}

</h2>


<p className="text-gray-500">

{filteredResources.length} Resources Found

</p>


</div>




<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


{
filteredResources.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
border
border-orange-100
p-6
hover:shadow-xl
hover:shadow-orange-200/40
hover:-translate-y-1
transition
duration-300
"


>


<div className="
flex justify-between items-center
">


<div

className="
w-14
h-14
rounded-xl
bg-orange-100
flex
items-center
justify-center
text-3xl
"

>

{item.icon}

</div>



<span

className="
text-xs
bg-orange-50
text-orange-700
px-3
py-1
rounded-full
font-medium
"

>

{item.file}

</span>



</div>





<h3

className="
text-xl
font-bold
mt-6
text-gray-900
"

>

{item.title}

</h3>





<p

className="
text-gray-600
mt-3
leading-7
"

>

{item.description}

</p>





<button
  onClick={() => window.open("/pdfs/sample-notes.pdf", "_blank")}
  className="
    w-full
    mt-8
    border
    border-orange-400
    text-orange-600
    py-3
    rounded-xl
    hover:bg-orange-500
    hover:text-white
    transition
    font-semibold
  "
>
  Preview
</button>


</div>


))


}



</div>


</section>






{/* ================= PREVIOUS YEAR PAPERS ================= */}


<section className="max-w-7xl mx-auto px-6 mb-20">


<div className="flex flex-col md:flex-row justify-between items-center mb-8">


<div>


<h2 className="text-4xl font-bold text-gray-900">

Previous Year Papers

</h2>


<p className="text-gray-600 mt-2">

Sharpen your preparation with official question papers.

</p>


</div>



<button className="
mt-4
md:mt-0
text-orange-600
font-semibold
hover:underline
">

View Archive →

</button>


</div>





<div className="
overflow-x-auto
bg-white
rounded-2xl
shadow
border
border-orange-100
">


<table className="w-full">


<thead className="bg-orange-50">


<tr>


<th className="text-left p-5">
Exam Title
</th>


<th className="text-left p-5">
Year
</th>


<th className="text-left p-5">
Semester
</th>


<th className="text-left p-5">
Difficulty
</th>


<th className="text-right p-5">
Action
</th>


</tr>


</thead>





<tbody>

  {/* ================= DSA ================= */}
  <tr className="border-t hover:bg-orange-50/50 transition">

    <td className="p-5">
      <h4 className="font-semibold">
        Data Structures & Algorithms
      </h4>

      <p className="text-gray-500 text-sm">
        University Final Examination
      </p>
    </td>

    <td className="p-5">
      2023
    </td>

    <td className="p-5">
      Semester 4
    </td>

    <td className="p-5">
      <div className="flex gap-1">
        <div className="w-5 h-2 bg-orange-500 rounded"></div>
        <div className="w-5 h-2 bg-orange-500 rounded"></div>
        <div className="w-5 h-2 bg-gray-300 rounded"></div>
      </div>
    </td>

    <td className="p-5 text-right">
      <a
        href="/pdfs/dsa-2023.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-5
          py-2
          rounded-lg
          font-semibold
          transition
        "
      >
        Download
      </a>
    </td>

  </tr>



  {/* ================= Discrete Mathematics ================= */}
  <tr className="border-t hover:bg-orange-50/50 transition">

    <td className="p-5">
      <h4 className="font-semibold">
        Discrete Mathematics
      </h4>

      <p className="text-gray-500 text-sm">
        Mid Semester Examination
      </p>
    </td>

    <td className="p-5">
      2022
    </td>

    <td className="p-5">
      Semester 3
    </td>

    <td className="p-5">
      <div className="flex gap-1">
        <div className="w-5 h-2 bg-orange-500 rounded"></div>
        <div className="w-5 h-2 bg-orange-500 rounded"></div>
        <div className="w-5 h-2 bg-orange-500 rounded"></div>
      </div>
    </td>

    <td className="p-5 text-right">
      <a
        href="/pdfs/discrete-maths-2022.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-5
          py-2
          rounded-lg
          font-semibold
          transition
        "
      >
        Download
      </a>
    </td>

  </tr>



  {/* ================= Operating System ================= */}
  <tr className="border-t hover:bg-orange-50/50 transition">

    <td className="p-5">
      <h4 className="font-semibold">
        Operating System
      </h4>

      <p className="text-gray-500 text-sm">
        End Semester Examination
      </p>
    </td>

    <td className="p-5">
      2021
    </td>

    <td className="p-5">
      Semester 5
    </td>

    <td className="p-5">
      <div className="flex gap-1">
        <div className="w-5 h-2 bg-orange-500 rounded"></div>
        <div className="w-5 h-2 bg-gray-300 rounded"></div>
        <div className="w-5 h-2 bg-gray-300 rounded"></div>
      </div>
    </td>

    <td className="p-5 text-right">
      <a
        href="/pdfs/operating-system-2021.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-5
          py-2
          rounded-lg
          font-semibold
          transition
        "
      >
        Download
      </a>
    </td>

  </tr>

</tbody>
</table>





<div className="flex justify-between items-center p-5 border-t">


<p className="text-gray-500">
Showing 3 of 128 papers
</p>



<div className="flex gap-3">


<button className="
w-10
h-10
rounded-lg
border
border-orange-200
hover:bg-orange-100
">

←

</button>



<button className="
w-10
h-10
rounded-lg
border
border-orange-200
hover:bg-orange-100
">

→

</button>



</div>


</div>



</div>



</section>







{/* ================= UPLOAD CTA ================= */}



<section className="max-w-7xl mx-auto px-6 mb-20">



<div className="
relative
overflow-hidden
rounded-3xl
bg-gradient-to-r
from-orange-500
via-orange-400
to-amber-400
px-10
py-16
lg:px-16
">



<div className="
absolute
-top-24
-right-24
w-72
h-72
bg-white
opacity-20
rounded-full
">
</div>





<div className="
relative
z-10
flex
flex-col
lg:flex-row
items-center
justify-between
gap-10
">





<div className="max-w-2xl">


<h2 className="
text-4xl
font-bold
text-white
leading-tight
">

Contributing Your Own Study Materials?

</h2>



<p className="
mt-5
text-orange-50
text-lg
leading-8
">


Join more than 

<span className="
font-semibold
text-white
">

500+

</span>

contributors helping thousands of students.

Upload your notes, assignments, books, or previous year
question papers and earn study credits.


</p>



</div>







<button className="
bg-white
text-orange-600
hover:bg-orange-50
transition
duration-300
font-bold
px-8
py-4
rounded-xl
shadow-lg
">


Upload Study Material


</button>





</div>



</div>



</section>
    </div>
  );
};

export default Notes;