"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pb-8 md:pb-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden flex-shrink-0">
            <Image
              className="w-full h-full object-cover"
              src="/Jannik_Headshot.JPG"
              alt="Headshot Photo of Jannik"
              width={180}
              height={180}
              priority
            />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold animate-slide-up">
              Hello, I&#39;m <br />
              <span className="text-blue-600">Jannik</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                A Curious Product Manager with a maker’s mindset and a soft spot
                for great UX.
              </p>
            </div>
            {/* playful chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "📍 Hamburg",
                "🧭 B2B & B2C",
                "🗣️ EN/DE",
                "✨ Open to collab",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
