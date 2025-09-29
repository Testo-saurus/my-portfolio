import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content takes available space */}
      <main className="flex-1 flex flex-col items-stretch pt-16 sm:pt-20">
        {/* Sections handle their own horizontal padding */}
        <Hero />
        <About />
        <Work />
      </main>

      {/* Footer at bottom */}
      <footer className="flex gap-6 flex-wrap items-center justify-center p-8 border-t border-gray-200">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/imprint"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Imprint
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/jannik-strohbeck-044707130"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
