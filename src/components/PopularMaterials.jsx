const materials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200",
    badge: "Lecture Notes",
    title: "Data Structures & Algorithms",
    description:
      "Complete handwritten notes covering Arrays, Linked Lists, Trees, Graphs, Dynamic Programming and Interview Questions.",
    author: "Prof. Aman Verma",
    price: "Free",
    color: "bg-orange-300",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
    badge: "PDF + Lab",
    title: "Database Management System",
    description:
      "Comprehensive DBMS notes including SQL, ER Models, Normalization, Transactions and Previous Year Questions.",
    author: "Dr. Priya Sharma",
    price: "Free",
    color: "bg-amber-300",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    badge: "Placement Kit",
    title: "Operating System",
    description:
      "CPU Scheduling, Deadlocks, Memory Management, Virtual Memory and Placement-oriented Interview Notes.",
    author: "StudyHub Team",
    price: "Premium",
    color: "bg-yellow-300",
  },
];

export default function PopularMaterials() {
  return (
    <section className="py-20 bg-orange-50/30">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">


          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Popular Engineering Resources
            </h2>


            <p className="text-gray-500 mt-3">
              Most downloaded notes, books, and placement materials by engineering students.
            </p>


          </div>



          <button
            className="
            font-semibold
            text-orange-600
            hover:text-orange-700
            hover:translate-x-1
            transition
            "
          >
            View All Resources →
          </button>


        </div>




        {/* Cards */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {materials.map((item) => (

            <div
              key={item.id}
              className="
              bg-white
              rounded-3xl
              border
              border-orange-100
              overflow-hidden
              hover:-translate-y-2
              hover:shadow-xl
              hover:shadow-orange-200/40
              transition-all
              duration-300
              "
            >


              {/* Image */}

              <div className="relative overflow-hidden h-60">


                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                  "
                />



                <span
                  className="
                  absolute
                  top-4
                  right-4
                  bg-orange-100
                  text-orange-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                  "
                >
                  {item.badge}
                </span>


              </div>




              {/* Content */}


              <div className="p-6">


                <h3 className="
                text-2xl
                font-bold
                mb-3
                text-gray-900
                ">
                  {item.title}
                </h3>



                <p className="
                text-gray-600
                leading-7
                mb-8
                ">
                  {item.description}
                </p>




                <div className="flex justify-between items-center border-t border-orange-100 pt-5">


                  <div className="flex items-center gap-3">


                    <div
                      className={`w-10 h-10 rounded-full ${item.color}`}
                    ></div>


                    <span className="font-medium text-gray-700">
                      {item.author}
                    </span>


                  </div>




                  <span
                    className="
                    font-bold
                    text-orange-600
                    text-lg
                    "
                  >
                    {item.price}
                  </span>



                </div>


              </div>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
}