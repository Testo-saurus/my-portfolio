// components/Navigation.tsx
"use client";

import Link from "next/link";
import { useModal } from "../app/layout";

export default function Navigation() {
  const { openContact } = useModal();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 h-16 sm:h-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span role="img" aria-label="waving hand">
            👋
          </span>{" "}
          Welcome to my page!
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/#about" className="hover:underline">
            About
          </Link>
          <Link href="/#work" className="hover:underline">
            Work
          </Link>

          <button onClick={openContact} className="hover:underline">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
