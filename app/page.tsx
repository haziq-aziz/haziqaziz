import { Hero } from "@/components/main/Hero";
import { Projects } from "@/components/main/Projects";
import { Skills } from "@/components/main/Skills";
import { Achievements } from "@/components/main/Achievements";
import { Footer } from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}
