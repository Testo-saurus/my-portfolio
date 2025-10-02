import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex gap-6 flex-wrap items-center justify-center">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600 hover:text-gray-900 transition-colors"
              href="/imprint"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Imprint
            </Link>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600 hover:text-gray-900 transition-colors"
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
          </div>

          {/* Tech note */}
          <p className="text-sm text-gray-500">
            Built with Next.js and deployed with Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
