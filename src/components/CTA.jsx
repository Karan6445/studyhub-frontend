export default function CTA() {
  return (
    <section className="py-20 bg-orange-50/40">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-orange-200
          via-amber-200
          to-yellow-200
          px-8
          py-20
          md:px-16
          text-center
          "
        >

          {/* Decorative Circles */}

          <div className="
          absolute
          -top-40
          -left-40
          w-96
          h-96
          rounded-full
          border-8
          border-white/40
          ">
          </div>


          <div className="
          absolute
          -bottom-52
          -right-52
          w-[520px]
          h-[520px]
          rounded-full
          border-8
          border-white/40
          ">
          </div>



          <div className="relative z-10 max-w-3xl mx-auto">


            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              leading-tight
              "
            >
              Ready to start your journey?
            </h2>



            <p
              className="
              mt-6
              text-lg
              text-gray-700
              leading-8
              "
            >
              Join thousands of students already using StudyHub to improve
              their learning experience and achieve academic success.
            </p>




            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">


              {/* Primary Button */}

              <button
                className="
                px-8
                py-4
                rounded-xl
                bg-orange-500
                text-white
                font-semibold
                hover:bg-orange-600
                transition-all
                duration-300
                shadow-lg
                shadow-orange-200
                "
              >
                Get Started For Free
              </button>




              {/* Secondary Button */}

              <button
                className="
                px-8
                py-4
                rounded-xl
                border-2
                border-orange-500
                text-orange-600
                font-semibold
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300
                "
              >
                Contact Sales
              </button>


            </div>


          </div>


        </div>

      </div>
    </section>
  );
}