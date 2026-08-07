import React from "react";
import { Star } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      name: "Ali Raza",
      role: "Frontend Developer",
      review:
        "NexHire made my job search incredibly easy. Within two weeks I received interview calls from multiple companies.",
    },
    {
      name: "Ayesha Khan",
      role: "UI/UX Designer",
      review:
        "The platform is clean, fast, and easy to use. I found my dream design job through NexHire.",
    },
    {
      name: "Usman Ahmed",
      role: "Backend Developer",
      review:
        "I really liked the smooth application process. Everything from profile creation to applying for jobs was simple.",
    },
  ];

  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            What Our <span className="text-blue-600">Users Say</span>
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Thousands of professionals trust NexHire to discover better career
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all duration-300"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-600 font-bold text-xl flex items-center justify-center">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {review.role}
                  </p>
                </div>

              </div>

              <div className="flex gap-1 mt-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-7 mt-5">
                "{review.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;