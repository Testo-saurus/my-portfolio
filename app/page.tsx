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
    </div>
  );
}
