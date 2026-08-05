const stats = [
  {
    number: "500k+",
    title: "Active Students",
  },
  {
    number: "12k+",
    title: "Curated Notes",
  },
  {
    number: "1.2M",
    title: "Study Hours",
  },
  {
    number: "98%",
    title: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section className="py-14 bg-orange-50/40 border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              border
              border-orange-100
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:shadow-orange-200/50
              "
            >

              <h2
                className="
                text-4xl
                font-bold
                mb-3
                bg-gradient-to-r
                from-orange-500
                via-amber-500
                to-yellow-500
                bg-clip-text
                text-transparent
                "
              >
                {item.number}
              </h2>


              <p className="text-gray-600 font-medium">
                {item.title}
              </p>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}