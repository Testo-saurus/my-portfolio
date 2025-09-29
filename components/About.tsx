import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {" "}
          {/* Changed to items-start */}
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I&#39;m a Product Manager with a passion for creating digital
              products that make a difference. With experience in both B2B and
              B2C environments, I specialize in turning complex problems into
              simple, elegant solutions.
            </p>

            <p className="text-gray-600 mb-8">
              When I&#39;m not building products, you can find me exploring new
              technologies, reading about design, or enjoying the outdoors.
            </p>

            {/* Move anchor inside text container with responsive positioning */}
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 group mb-8 lg:mb-0"
            >
              More about me
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

            <div className="grid grid-cols-2 gap-6 lg:hidden">
              {" "}
              {/* Show on small screens only */}
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-gray-600">5+ years in Product Management</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Focus</h3>
                <p className="text-gray-600">User-centered design & strategy</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold mb-6">Past Experience</h3>

              {/* Stats for large screens */}
              <div className="hidden lg:grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Experience</h4>
                  <p className="text-gray-600">
                    5+ years in Product Management
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Focus</h4>
                  <p className="text-gray-600">
                    User-centered design & strategy
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-8">
                  {/* Your existing timeline code */}
                  {[
                    {
                      title: "Sr. Product Manager",
                      company: "Protofy (digital agency)",
                      period: "since 2025",
                      current: true,
                    },
                    {
                      title: "Product Manager",
                      company: "CHECK24 (private health insurance comparison)",
                      period: "2023 – 2025",
                      current: false,
                    },
                    {
                      title: "Founder | Product Person",
                      company: "myActiveLab (digital health app),",
                      period: "2021 – 2023",
                      current: false,
                    },
                  ].map((experience) => (
                    <div
                      key={experience.title}
                      className="relative flex items-start"
                    >
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full border-4 border-white shadow-md ${
                          experience.current ? "bg-blue-600" : "bg-gray-400"
                        }`}
                      ></div>
                      <div className="ml-12">
                        <h4 className="font-semibold text-gray-900">
                          {experience.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {experience.company}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
