"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedCollapse from "./AnimatedCollapse";
import ProjectDetails from "./ProjectDetails";

export default function Work() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 3,
      company: "Personal Project",
      title: "Pomodoro Timer",
      description:
        "A simple timer app to help with focused work sessions and regular breaks. Built in pure JavaScript as my first ever coding project.",
      icon: "⏲️",
      image: "/PomodoreTimer.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      year: 2024,
      duration: "3 week",
      aiPercentage: 50,
      whyBuilt:
        "I wanted to learn the basics of web development and create something useful for my own productivity. ",
      howBuilt:
        "Hand-coded the frist version then fine tuned using copilot in vs code.",
      otherInfo:
        "This project taught me a lot about DOM manipulation and event handling. I use this myself almost every day.",
      githubLink: "https://github.com/Testo-saurus/POMODORE-LOFI-APP",
      websiteLink: "https://testo-saurus.github.io/POMODORE-LOFI-APP/",
    },
    {
      id: 1,
      company: "Mico Saas",
      title: "Nebenkosten Navigator",
      description:
        'German Landlords can via PDF upload create a simple "Nebenkostenabrechnung" for their tenants.',
      icon: "🧾",
      image: "/NebenkostenNav_ScreenShot.png",
      techStack: ["base44"],
      year: 2023,
      duration: "14 days",
      aiPercentage: 99,
      whyBuilt:
        "To simplify the process of creating utility cost statements for German landlords. Basically replace the Excel Solution.",
      howBuilt:
        "Built using Base44, a rapid development platform. Initially explored custom backend solutions for PDF data extraction, testing both Google Document API (did not work) and OpenAI's API with predefined extraction schemas (worked well). While both approaches showed promise, I ultimately leveraged Base44's built-in PDF processing capabilities for optimal reliability and maintainability.",
      otherInfo:
        "5 people (friends and family) tested the service and it worked for them. However, launching this as a real product would require more extensive testing to fine-tune edge cases and ensure reliability across different scenarios.",

      githubLink: "https://github.com/Testo-saurus/NebenkostenNav",
      websiteLink: "https://nebenkosten-navigator-04626349.base44.app",
    },
    {
      id: 2,
      company: "Personal Project", // Changed from "Game" to be more descriptive
      title: "Circle Conquest: Political Edition - Territory Game",
      description:
        "A real-time, strategy game where players control political circles to expand territory across a USA-shaped map. ",
      icon: "🇺🇸", // Updated icon to reflect political theme
      image: "/Screenshot_Circle_Game.png",
      techStack: [
        "React",
        "Tailwind CSS",
        "Base44",
        "Pusher.js",
        "Deno (Backend Functions)",
      ], // Added more specific tech
      year: 2025, // Updated year to current year of completion
      duration: "1 Week", // "2 Days" is too short for a multiplayer game
      aiPercentage: 95,
      whyBuilt:
        "Inspired by popular territory-expansion games like Paper.io 2, the goal was to build a dynamic and engaging multiplayer experience from scratch. This project also served as a deep dive into real-time web technologies and complex game logic within a modern development platform.",
      howBuilt:
        "Developed using the Base44 platform with React and Tailwind CSS for the frontend. Attempted to implement real-time multiplayer functionality using Pusher.js and custom Deno backend functions, but encountered challenges with state synchronization across clients.",
      otherInfo:
        "Never successfully implemented robust real-time multiplayer functionality.  Significant Problems with state synchronization, player authentication, and efficient backend communication using Pusher.js and custom Deno backend functions.", // Emphasize overcoming MP challenges
      githubLink: "#", // Please update this to the actual game's repo if available
      websiteLink:
        "https://circle-conquest-political-edition-4a71582e.base44.app/",
    },
    {
      id: 4,
      company: "Chrome Extension",
      title: "Focus Extension",
      description:
        "A browser extension that uses AI to scan the DOM and give users feedback on whether they're staying productive online.",
      icon: "🎯",
      image: "/focusEx.png",
      techStack: ["JavaScript", "Chrome Extension APIs", "AI Model"],
      year: 2025,
      duration: "2 weeks",
      aiPercentage: 70,
      whyBuilt:
        "I wanted a simple tool that could nudge me (and others) when we drift off-task, using AI to analyze what’s actually happening in the browser.",
      howBuilt:
        "Built as a Chrome extension in JavaScript, with an AI model that inspects page content and context. The extension provides real-time feedback and gentle reminders to help users refocus.",
      otherInfo:
        "Not published yet. Learned a lot about browser APIs, content scripts, and integrating AI into client-side tools.",
      githubLink: "https://github.com/yourusername/focus-extension",
      websiteLink: "https://yourdomain.com/focus-extension",
    },
  ];

  // Add this function to handle clicks:
  const toggleProject = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null); // Close if already open
    } else {
      setExpandedProject(projectId); // Open this project
    }
  };

  return (
    <section id="work" className="py-16 md:py-20 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex-colum items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Projects & Products </h2>
            <p className="text-gray-600 mb-8">
              In 2025, I quit my job at CHECK24 and took six months off to learn
              programming. Why? Because I genuinely love building products. I
              realized that with a bit of coding knowledge, I can leverage AI to
              create things entirely on my own—and I think that&apos;s pretty
              exciting - so I went all in.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 group mb-8 lg:mb-0 cursor-pointer"
          >
            All Projects{" "}
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
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Project - Takes up more space */}
          <div className="md:col-span-2">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                    {projects[0].icon}
                  </div>
                  <span className="text-sm text-gray-600">
                    {projects[0].company}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{projects[0].title}</h3>
                <p className="text-gray-600 mb-6">{projects[0].description}</p>
                <button
                  onClick={() => toggleProject(projects[0].id)}
                  className=" cursor-pointer inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium group/link"
                >
                  {expandedProject === projects[0].id ? "... less" : "... more"}

                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedProject === projects[0].id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedProject === projects[0].id && (
                  <AnimatedCollapse isOpen={expandedProject === projects[0].id}>
                    <ProjectDetails project={projects[0]} />
                  </AnimatedCollapse>
                )}
              </div>

              {/* Project Image/Preview */}
              <a
                href={projects[0].websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-50 md:h-150 bg-gray-100 relative overflow-hidden block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src={projects[0].image}
                  alt={`${projects[0].title} preview`}
                  fill
                  className="rounded-lg object-cover object-top shadow"
                  sizes="100vw"
                />
              </a>
            </div>
          </div>

          {/* Regular Projects - Now 2 columns instead of 3 */}
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                    {project.icon}
                  </div>
                  <span className="text-sm text-gray-600">
                    {project.company}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <button
                  onClick={() => toggleProject(project.id)}
                  className=" cursor-pointer inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium group/link"
                >
                  {expandedProject === project.id ? "... less" : "... more"}

                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedProject === project.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedProject === project.id && (
                  <AnimatedCollapse isOpen={expandedProject === project.id}>
                    <ProjectDetails project={project} />
                  </AnimatedCollapse>
                )}
              </div>

              {/* Project Image/Preview - Smaller for regular projects */}
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-gray-100 relative overflow-hidden flex-1 flex items-end cursor-pointer hover:opacity-90 transition-opacity"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className=" object-cover object-center object-bottom "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 590vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-16 bg-white rounded-lg shadow-lg mb-2 mx-auto"></div>
                      <p className="text-xs text-gray-500">Preview</p>
                    </div>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
