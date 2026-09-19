
import Image from "next/image";
import React from "react";
import bannerImg from "@/src/assets/bannerbook.png";

const Banner = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm lg:grid-cols-2">

        {/* Content */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-xl space-y-7">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Discover your next favorite book
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Books to
              <span className="text-orange-500"> freshen up </span>
              your bookshelf.
            </h1>

            {/* Description */}
            <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Explore a thoughtfully curated collection of books designed to
              inspire your imagination, expand your knowledge, and make every
              reading moment special.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500">
                View Books
              </button>

              <button className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:bg-slate-100">
                Explore Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                <p className="text-sm text-slate-500">Books</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">5K+</p>
                <p className="text-sm text-slate-500">Readers</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">4.9</p>
                <p className="text-sm text-slate-500">Rating</p>
              </div>
            </div>

          </div>
        </div>

        {/* Image */}
        <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-slate-100 p-8 sm:p-12 lg:min-h-[650px]">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-200/40 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative z-10 transition duration-500 hover:scale-105">
            <Image
              src={bannerImg}
              alt="Books"
              priority
              className="h-auto w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;

