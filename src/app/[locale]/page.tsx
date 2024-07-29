import { GithubSection } from "@/components/github-section";
import { SectionSeparator } from "@/components/layout/section-gradient";
import { NavigationBar } from "@/components/navigation-bar";
import { SectionContact } from "@/components/section-contact";
import { SectionExperience } from "@/components/section-experience";
import { Hero } from "@/components/section-hero";
import { SectionLanguages } from "@/components/section-languages";
import { SectionWork } from "@/components/section-work";

export default function Home() {
    return (
        <main className="flex-grow">
            <Hero />
            <NavigationBar />
            <section id="about" className="scroll-mt-28">
                <SectionLanguages />
                <SectionSeparator />
                <SectionExperience />
            </section>
            <SectionSeparator />
            <SectionWork />
            <SectionSeparator />
            <SectionContact />
            <SectionSeparator />
            <GithubSection />
        </main>
    );
}
