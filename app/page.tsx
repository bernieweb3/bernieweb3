import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { BuilderThesis } from '@/components/builder-thesis';
import { SelectedProjects } from '@/components/selected-projects';
import { CurrentlyBuilding } from '@/components/currently-building';
import { EcosystemRecognition } from '@/components/ecosystem-recognition';
import { CommunitiesBuilt } from '@/components/communities-built';
import { Contact } from '@/components/contact';
import { ThemeProvider } from '@/components/theme-provider';

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main className="pt-16">
        <Hero />
        <BuilderThesis />
        <SelectedProjects />
        <CurrentlyBuilding />
        <EcosystemRecognition />
        <CommunitiesBuilt />
        <Contact />
      </main>
      <footer className="bg-card border-t border-border py-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </ThemeProvider>
  );
}
