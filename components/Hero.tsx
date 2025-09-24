"use client";

import { useState } from "react";
import Modal from "./Modal";

import Image from "next/image";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pb-20 px-6 animate-fade-in">
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
              A Product Manager passionate about creating exceptional digital
              experiences that solve real problems and delight users.
            </p>

            <button
              onClick={() => {
                console.log("clickeddddd");
                setIsOpen(true);
              }}
              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 group whitespace-nowrap flex-shrink-0"
            >
              Contact me
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  );
}
