import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center gap-16 py-32 px-16 bg-cream dark:bg-black sm:items-start">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
