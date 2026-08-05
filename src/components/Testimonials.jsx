import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Medical Student",
    review:
      "StudyHub completely changed how I organize my final year research. The notes system is intuitive and the quality is unmatched.",
    color: "bg-orange-300",
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "CS Undergraduate",
    review:
      "The algorithms course helped me land my dream internship. Highly recommend the interactive challenge section!",
    color: "bg-amber-300",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-orange-50/40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-14 items-center">


          {/* Left */}

          <div>

            <h2 className="
            text-5xl
            font-bold
            leading-tight
            text-gray-900
            ">

              Students Love
              <br />

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
                StudyHub
              </span>

            </h2>



            <p className="text-gray-600 mt-6 leading-8">
              Hear from our community of dedicated learners who have
              transformed their grades and careers.
            </p>



            <div className="flex gap-4 mt-10">


              <button
                className="
                w-12
                h-12
                rounded-full
                border
                border-orange-200
                flex
                items-center
                justify-center
                hover:bg-orange-100
                hover:border-orange-400
                transition
                "
              >
                <ChevronLeft size={22}/>
              </button>



              <button
                className="
                w-12
                h-12
                rounded-full
                border
                border-orange-200
                flex
                items-center
                justify-center
                hover:bg-orange-100
                hover:border-orange-400
                transition
                "
              >
                <ChevronRight size={22}/>
              </button>


            </div>


          </div>





          {/* Cards */}

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">


            {testimonials.map((item) => (

              <div
                key={item.id}
                className="
                bg-white
                rounded-3xl
                border-l-4
                border-orange-500
                p-8
                shadow-sm
                hover:shadow-xl
                hover:shadow-orange-200/40
                transition
                duration-300
                "
              >


                {/* Stars */}

                <div className="flex gap-1 mb-6">

                  {[1,2,3,4,5].map((star)=>(

                    <Star
                      key={star}
                      size={18}
                      fill="#f97316"
                      color="#f97316"
                    />

                  ))}

                </div>




                {/* Review */}

                <p className="
                italic
                text-gray-700
                leading-8
                mb-10
                ">
                  "{item.review}"
                </p>





                {/* User */}

                <div className="flex items-center gap-4">


                  <div
                    className={`
                    w-12
                    h-12
                    rounded-full
                    ${item.color}
                    `}
                  />


                  <div>

                    <h4 className="font-bold text-gray-900">
                      {item.name}
                    </h4>


                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>


                  </div>


                </div>



              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
}