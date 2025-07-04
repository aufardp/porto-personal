import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillSection } from "../components/SkillSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toogle */}
      <ThemeToggle />
      {/* Background effect */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
      </main>
      {/* Footer */}
    </div>
  );
};
