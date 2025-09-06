import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { EducationExperienceSection } from "@/components/education-experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ReferencesSection } from "@/components/references-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <EducationExperienceSection />
      <ProjectsSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  );
}
