import Image from "next/image";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/Footer";
import Projects from "./components/Project";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center font-sans bg-gray-100">
      <main className="items-center">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
