import React, { Suspense } from "react";
import { ThemeProvider as ThemeContextProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AppThemeProvider } from "./theme/ThemeProvider";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import "./localization/i18n"; // Bootstrap i18n system on boot

// Lazy load below-the-fold components for performance
const Skills = React.lazy(() => import("./components/sections/Skills").then(module => ({ default: module.Skills })));
const Experience = React.lazy(() => import("./components/sections/Experience").then(module => ({ default: module.Experience })));
const Projects = React.lazy(() => import("./components/sections/Projects").then(module => ({ default: module.Projects })));
const GithubSection = React.lazy(() => import("./components/sections/Github").then(module => ({ default: module.GithubSection })));
const TechStack = React.lazy(() => import("./components/sections/TechStack").then(module => ({ default: module.TechStack })));
const Services = React.lazy(() => import("./components/sections/Services").then(module => ({ default: module.Services })));
const Contact = React.lazy(() => import("./components/sections/Contact").then(module => ({ default: module.Contact })));

// Loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] w-full">
    <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/20 dark:selection:bg-blue-500/30 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<SectionLoader />}>
          <Skills />
          <Experience />
          <Projects />
          <GithubSection />
          <TechStack />
          <Services />
          <Contact />
        </Suspense>
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
