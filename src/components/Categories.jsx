import {
  Cpu,
  Code2,
  CircuitBoard,
  Calculator,
  Database,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Programming",
    desc: "Master C, C++, Java, Python, JavaScript and modern software development.",
    icon: Code2,
  },
  {
    title: "Electronics",
    desc: "Digital Electronics, Analog Circuits, Microprocessors and Embedded Systems.",
    icon: CircuitBoard,
  },
  {
    title: "Database Systems",
    desc: "Learn SQL, DBMS, MongoDB, Data Modeling and Database Design.",
    icon: Database,
  },
  {
    title: "Engineering Mathematics",
    desc: "Calculus, Linear Algebra, Probability and Numerical Methods.",
    icon: Calculator,
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-orange-50/30">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Explore Engineering Categories
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Discover notes, books, question papers and study resources for every engineering subject.
          </p>

        </div>



        {/* Grid */}

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">



          {/* Featured Card */}

          <div className="
          lg:col-span-2
          md:col-span-2
          bg-white
          rounded-3xl
          border
          border-orange-100
          p-8
          hover:shadow-xl
          hover:shadow-orange-200/40
          transition
          duration-300
          group
          ">


            <div className="flex justify-between items-start">


              <div className="
              w-20
              h-20
              rounded-2xl
              bg-orange-100
              flex
              items-center
              justify-center
              ">

                <Cpu
                  size={42}
                  className="text-orange-600"
                />

              </div>



              <ArrowUpRight
                className="text-gray-400 group-hover:text-orange-600 transition"
                size={28}
              />


            </div>




            <div className="mt-12">


              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Computer Science & Engineering
              </h3>



              <p className="text-gray-600 leading-8 mb-8">

                Access premium notes, lab manuals, coding resources,
                previous year papers, projects, and placement preparation
                materials curated for Computer Science students.

              </p>




              <div className="flex gap-3 flex-wrap">


                <span className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                  DSA
                </span>

                <span className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                  DBMS
                </span>

                <span className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                  OS
                </span>

                <span className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                  CN
                </span>

                <span className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                  Java
                </span>

                <span className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                  React
                </span>


              </div>


            </div>


          </div>





          {/* Small Cards */}


          {categories.map((item, index) => {

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                bg-white
                rounded-3xl
                border
                border-orange-100
                p-8
                hover:shadow-xl
                hover:shadow-orange-200/40
                hover:-translate-y-2
                transition
                duration-300
                "
              >


                <div className="
                w-14
                h-14
                rounded-xl
                bg-orange-100
                flex
                items-center
                justify-center
                mb-6
                ">


                  <Icon
                    className="text-orange-600"
                    size={28}
                  />


                </div>



                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>



                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>



              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}