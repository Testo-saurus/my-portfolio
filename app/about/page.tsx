"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BackButton from "../../components/BackButton";

export default function AboutPage() {
  const [openModel, setOpenModel] = useState<string | null>(null);

  const mentalModels = [
    {
      name: "Human-centered design",
      description:
        "I try to start with what real people actually need, not just what sounds good in a meeting. If users struggle, it’s a sign to rethink things. Testing with humans early usually saves headaches later.",
    },
    {
      name: "Jobs-to-be-Done (JTBD) Theory",
      description:
        "People use products to solve problems, not just for features. I find it helps to ask what job someone’s really trying to get done, and focus on that. Sometimes the answer isn’t what you expect.",
    },
    {
      name: "Move Fast and Break Things",
      description:
        "Shipping quickly and learning from what doesn’t work has taught me more than waiting for perfect. I’d rather get feedback early and adjust than polish forever. Mistakes are part of the process. Also, I don't wait for permission—except when users might be negatively affected.",
    },
    {
      name: "Go out and talk with users",
      description:
        "Whenever I’m stuck (or building something new), talking to users usually helps. Real conversations beat dashboards and surveys. It’s not always comfortable, but it’s almost always useful.",
    },
  ];

  return (
    <>
      <section className="py-12 md:py-20 bg-white ">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="items-center">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Smaller version of your picture */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  className="w-full h-full object-cover"
                  src="/Jannik_Headshot.JPG"
                  alt="Headshot Photo of Jannik"
                  width={96}
                  height={96}
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  Happy to tell you more:
                </h1>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  I&apos;m a Product Manager focused on outcome-driven UX,
                  pragmatic delivery, and building empowered teams. I balance
                  continuous discovery with fast, measurable delivery to create
                  products people love.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "📍 Hamburg",
                    "🧭 B2B & B2C",
                    "🗣️ EN/DE",
                    "✨ Open to collab",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href="/CV Jannik Strohbeck 2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border rounded-lg hover:bg-gray-50"
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center mb-2 gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
              🧠
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Mental Models I Like
            </h2>
          </div>
          <p className="text-center text-gray-500 mb-8">
            Some patterns I aim for when making stuff. Sometimes I nail them,
            sometimes not so much.
          </p>
          <div className="flex flex-wrap gap-6">
            {mentalModels.map((model) => (
              <button
                key={model.name}
                className={`bg-white rounded-lg shadow-md p-4 text-left hover:shadow-lg focus:outline-none ${
                  openModel === model.name ? "z-10 relative" : ""
                }`}
                style={{
                  width: openModel === model.name ? "100%" : "calc(50% - 12px)", // Smooth width change
                }}
                onClick={() =>
                  setOpenModel(openModel === model.name ? null : model.name)
                }
                aria-expanded={openModel === model.name}
              >
                <h3 className="font-medium text-lg text-gray-800">
                  {model.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {openModel === model.name ? (
                    <>
                      <span className="block mb-2">{model.description}</span>
                      <span className="text-sm text-blue-500 mt-2">
                        ... less
                      </span>
                    </>
                  ) : (
                    <>
                      {model.description.slice(0, 50)}
                      <span className="text-blue-500">... more</span>
                    </>
                  )}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center mb-2 gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
              ⭐
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Content I like</h2>
          </div>
          <p className="text-center text-gray-500 mb-8">
            This keeps me inspired and curious.
          </p>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
              <h3 className="font-medium text-lg text-gray-800">Podcasts</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  <a
                    href="https://www.lennyspodcast.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Lenny’s Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.acquired.fm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Acquired
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
              <h3 className="font-medium text-lg text-gray-800">
                Timeless Ideas (as Videos){" "}
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=6vHkLKA2e08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Jony Ive on “Focus”
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=sfmQvc6tB1o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    JTBD Theory by Clayton Christensen
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
              <h3 className="font-medium text-lg text-gray-800">Blogs</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  <a
                    href="https://www.lennyrachitsky.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Lenny’s Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.refactoring.fm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Refactoring
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
