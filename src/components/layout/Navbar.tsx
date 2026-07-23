import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/ThemeContext";
import { useLanguageContext } from "../../context/LanguageContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { SECTIONS } from "../../constants/routes";
import { Sun, Moon, Globe, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const { t } = useTranslation();
  const { mode, toggleTheme } = useThemeContext();
  const { language, changeLanguage } = useLanguageContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: SECTIONS.hero, labelKey: "navbar.home" },
    { id: SECTIONS.about, labelKey: "navbar.about" },
    { id: SECTIONS.skills, labelKey: "navbar.skills" },
    { id: SECTIONS.experience, labelKey: "navbar.experience" },
    { id: SECTIONS.projects, labelKey: "navbar.projects" },
    { id: SECTIONS.services, labelKey: "navbar.services" },
    { id: SECTIONS.contact, labelKey: "navbar.contact" },
  ];

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "ta" : "en");
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 dark:border-white/5 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(SECTIONS.hero)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:block hidden">
              Nirmal Sing Nithish
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSectionIndicator"
                      className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {t(item.labelKey)}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Language"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === "en" ? "தமிழ்" : "English"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Language"
              className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === "en" ? "TA" : "EN"}</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-slate-950/95 dark:bg-slate-950/95 backdrop-blur-lg"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 text-base font-semibold rounded-xl transition-colors ${
                      isActive
                        ? "bg-blue-600/10 text-blue-600 dark:text-blue-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                    }`}
                  >
                    {t(item.labelKey)}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
