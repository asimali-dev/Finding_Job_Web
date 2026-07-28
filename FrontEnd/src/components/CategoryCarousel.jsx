import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Data Scientist",
  "DevOps Engineer",
  "Graphic Designer",
  "Digital Marketing",
  "Cyber Security",
  "Mobile Developer",
];

function CategoryCarousel() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Job Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
            Browse opportunities across the most in-demand industries and
            discover the perfect role that matches your skills, experience,
            and career goals.
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {categories.map((cat, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <button className="w-full rounded-full border border-gray-300 bg-white py-3 px-5 text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 cursor-pointer">
                  {cat}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default CategoryCarousel;