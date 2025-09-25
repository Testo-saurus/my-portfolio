"use client";
import Image from "next/image";
import { useState } from "react";
import AnimatedCollapse from "./AnimatedCollapse";
import ProjectDetails from "./ProjectDetails";

export default function Work() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      company: "Techplus X",
      title: "UI Product Explorations",
      description:
        "Lorem ipsum dolor sit amet, consectetur asul moler adipiscing elit eu gravida etiam.",
      icon: "📊",
      image: "/project-1.jpg",
      // Add expanded content:
      techStack: ["React", "TypeScript", "Tailwind", "Figma"],
      year: 2024,
      duration: "3 months",
      aiPercentage: 25,
      whyBuilt:
        "To explore modern UI patterns and improve user experience across our product suite.",
      howBuilt:
        "Used React with TypeScript for type safety, Tailwind for consistent styling, and Figma for prototyping.",
      otherInfo: "This project helped establish our design system foundation.",
      githubLink: "https://github.com/yourusername/project1",
      websiteLink: "https://project1.example.com",
    },
    {
      id: 2,
      company: "Mico Saas",
      title: "Nebenkosten Navigator",
      description:
        'German Landlords can via PDF upload create a simple "Nebenkostenabrechnung" for their tenants.',
      icon: "📦",
      image: "/Screenshot_Circle_Game.png",
      techStack: ["Next.js", "Python", "PDF-lib", "Stripe"],
      year: 2023,
      duration: "6 months",
      aiPercentage: 40,
      whyBuilt:
        "To simplify the complex process of creating utility cost statements for German landlords.",
      howBuilt:
        "Built with Next.js frontend, Python backend for PDF processing, and Stripe for payments.",
      otherInfo: "Processed over 1,000 documents in the first month.",
      githubLink: "https://github.com/yourusername/nebenkosten",
      websiteLink: "https://nebenkosten-navigator.com",
    },
    {
      id: 3,
      company: "Techplus X",
      title: "UI Product Explorations",
      description:
        "Lorem ipsum dolor sit amet, consectetur asul moler adipiscing elit eu gravida etiam.",
      icon: "📊",
      image: "/project-1.jpg",
      // Add expanded content:
      techStack: ["React", "TypeScript", "Tailwind", "Figma"],
      year: 2024,
      duration: "3 months",
      aiPercentage: 25,
      whyBuilt:
        "To explore modern UI patterns and improve user experience across our product suite.",
      howBuilt:
        "Used React with TypeScript for type safety, Tailwind for consistent styling, and Figma for prototyping.",
      otherInfo: "This project helped establish our design system foundation.",
      githubLink: "https://github.com/yourusername/project1",
      websiteLink: "https://project1.example.com",
    },
    {
      id: 4,
      company: "Mico Saas",
      title: "Nebenkosten Navigator",
      description:
        'German Landlords can via PDF upload create a simple "Nebenkostenabrechnung" for their tenants.',
      icon: "📦",
      image: "/project-2.jpg",
      techStack: ["Next.js", "Python", "PDF-lib", "Stripe"],
      year: 2023,
      duration: "6 months",
      aiPercentage: 40,
      whyBuilt:
        "To simplify the complex process of creating utility cost statements for German landlords.",
      howBuilt:
        "Built with Next.js frontend, Python backend for PDF processing, and Stripe for payments.",
      otherInfo: "Processed over 1,000 documents in the first month.",
      githubLink: "https://github.com/yourusername/nebenkosten",
      websiteLink: "https://nebenkosten-navigator.com",
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
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 group mb-8 lg:mb-0"
          >
            All projects
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
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Project - Takes up more space */}
          <div className="md:col-span-3">
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
              <div className="h-64 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-20 bg-white rounded-lg shadow-lg mb-4 mx-auto"></div>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="1200"
                      height="550"
                      src="https://nebenkosten-navigator-04626349.base44.app"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Projects */}
          <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
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
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-center object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-16 bg-white rounded-lg shadow-lg mb-2 mx-auto"></div>
                        <p className="text-xs text-gray-500">Preview</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
