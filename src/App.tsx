import { ThemeProvider as ThemeContextProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AppThemeProvider } from "./theme/ThemeProvider";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { GithubSection } from "./components/sections/Github";
import { TechStack } from "./components/sections/TechStack";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import "./localization/i18n"; // Bootstrap i18n system on boot

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/20 dark:selection:bg-blue-500/30 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubSection />
        <TechStack />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <AppThemeProvider>
          <PortfolioApp />
        </AppThemeProvider>
      </LanguageProvider>
    </ThemeContextProvider>
  );
}
