import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleBrowseCourses = () => {
    navigate("/courses?view=all");
  };

  const handleGetStarted = () => {
    navigate("/courses");
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 pb-20">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-200/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">


        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-10">

          <span className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-orange-100
          text-orange-700
          font-semibold
          text-sm
          mb-6
          ">
            📚 Illuminated Focus
          </span>



          <h1 className="
          text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          text-gray-900
          ">

            Master Your Studies with{" "}

            <span className="
            bg-gradient-to-r
            from-orange-500
            via-amber-500
            to-yellow-500
            bg-clip-text
            text-transparent
            ">
              StudyHub
            </span>

          </h1>




          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            A modern digital environment designed for high-performance
            learning. Access curated notes, collaborate with researchers,
            and illuminate your educational journey with expert-led
            courses and premium study resources.
          </p>




          <div className="flex flex-wrap gap-5 mt-10">


            {/* Primary Button */}

            <button
              onClick={handleGetStarted}
              className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-yellow-500
              text-white
              font-semibold
              shadow-lg
              hover:shadow-orange-300
              hover:scale-105
              transition-all
              "
            >
              Get Started Free
              <span className="text-xl">→</span>

            </button>




            {/* Secondary Button */}

            <button
              onClick={handleBrowseCourses}
              className="
              border
              border-gray-300
              bg-white
              px-8
              py-4
              rounded-xl
              font-semibold
              text-gray-700
              hover:bg-orange-50
              hover:border-orange-400
              hover:text-orange-600
              transition
              "
            >
              Browse Courses
            </button>


          </div>

        </div>




        {/* ================= RIGHT CONTENT ================= */}


        <div className="relative flex justify-center items-center">


          {/* Glow */}

          <div className="
          absolute
          -top-12
          -right-12
          w-80
          h-80
          rounded-full
          bg-orange-300/30
          blur-[110px]
          " />




          {/* Hero Image */}

          <div className="
          relative
          z-10
          overflow-hidden
          rounded-3xl
          border
          border-orange-100
          shadow-2xl
          bg-white
          ">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80"
              alt="Students studying together"
              className="w-full max-w-[620px] h-[430px] object-cover"
            />

          </div>





          {/* Floating Card */}

          <div className="
          absolute
          -bottom-8
          -left-8
          z-20
          bg-white
          rounded-2xl
          shadow-xl
          border
          border-orange-100
          p-5
          flex
          items-center
          gap-4
          ">


            <div className="
            w-14
            h-14
            rounded-full
            bg-orange-100
            flex
            items-center
            justify-center
            text-2xl
            ">
              ⚡
            </div>



            <div>

              <h3 className="
              font-bold
              text-lg
              text-gray-900
              ">
                Daily Progress
              </h3>


              <p className="text-gray-500 text-sm">
                85% Target reached
              </p>


            </div>


          </div>


        </div>


      </div>

    </section>
  );
}