import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { SOCIALS } from "../../constants/social";
import {
  Search,
  ExternalLink,
  Github,
  Moon,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Bookmark,
  Power,
  RefreshCw,
  PlusCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TabItem {
  id: string;
  title: string;
  url: string;
  category: "Development" | "Social" | "Learning";
  hibernated: boolean;
}

export function Projects() {
  const { t } = useTranslation();

  // Interactive mock tab state for the simulation inside the browser mockup
  const [tabs, setTabs] = useState<TabItem[]>([
    {
      id: "1",
      title: "GitHub - nithishnirmal2003",
      url: "github.com/nithishnirmal2003",
      category: "Social",
      hibernated: false,
    },
    {
      id: "2",
      title: "React 19 Core Docs & Specs",
      url: "react.dev/reference/react",
      category: "Learning",
      hibernated: false,
    },
    {
      id: "3",
      title: "Flutter Clean Architecture Boilerplate",
      url: "github.com/nirmalsing/flutter-clean",
      category: "Development",
      hibernated: true,
    },
    {
      id: "4",
      title: "Vite dev server - Portfolio App",
      url: "localhost:3000",
      category: "Development",
      hibernated: false,
    },
    {
      id: "5",
      title: "Material UI Palette Builder",
      url: "mui.com/customization/palette",
      category: "Learning",
      hibernated: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleHibernate = (id: string) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === id ? { ...tab, hibernated: !tab.hibernated } : tab
      )
    );
  };

  const addRandomTab = () => {
    const fresh: TabItem = {
      id: Date.now().toString(),
      title: "Tailwind CSS v4.0 Release Notes",
      url: "tailwindcss.com/blog/v4",
      category: "Learning",
      hibernated: false,
    };
    setTabs((p) => [...p, fresh]);
  };

  const filteredTabs = tabs.filter((tab) => {
    const matchesSearch =
      tab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tab.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      selectedCategory === "All" || tab.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const activeTabsCount = tabs.filter((t) => !t.hibernated).length;
  const memorySaved = tabs.filter((t) => t.hibernated).length * 85; // approx 85MB per tab

  return (
    <section
      id={SECTIONS.projects}
      className="w-full bg-white dark:bg-slate-950 py-24 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("projects.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text details column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>{t("projects.tabix.tagline")}</span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {t("projects.tabix.title")}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base">
              {t("projects.tabix.desc")}
            </p>

            {/* Core Features */}
            <div className="space-y-4 pt-4">
              <h4 className="font-sans text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                {t("projects.tabix.featuresTitle")}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {["management", "groups", "performance", "sync"].map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {t(`projects.tabix.features.${feat}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture description */}
            <div className="space-y-2.5 pt-4">
              <h4 className="font-sans text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5" />
                <span>{t("projects.tabix.architectureTitle")}</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                {t("projects.tabix.architecture")}
              </p>
            </div>

            {/* Tech tag clouds */}
            <div className="space-y-3">
              <h4 className="font-sans text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                {t("projects.tabix.technologiesTitle")}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["React", "TypeScript", "Chrome Extension APIs", "Storage API", "SCSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://chromewebstore.google.com"
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t("projects.tabix.buttons.store")}</span>
              </a>

              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>{t("projects.tabix.buttons.github")}</span>
              </a>
            </div>

          </div>

          {/* Right interactive browser mockup column */}
          <div className="lg:col-span-7">
            <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl overflow-hidden">
              
              {/* Browser Window Header Mock */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-200 dark:bg-slate-950/80 border-b border-slate-300 dark:border-slate-800">
                {/* Traffic buttons */}
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
                </div>
                
                {/* Address bar simulation */}
                <div className="flex-1 max-w-md mx-4 px-3 py-1 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 rounded-lg text-xs font-mono text-center truncate">
                  chrome-extension://tabix/popup.html
                </div>

                <div className="h-3 w-3" /> {/* empty placeholder for symmetry */}
              </div>

              {/* Browser Main Interactive Content Area (Simulating Tabix UI) */}
              <div className="bg-white dark:bg-slate-950 p-6 min-h-[420px] flex flex-col justify-between">
                <div>
                  
                  {/* Extension Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-900">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                        Tx
                      </div>
                      <div>
                        <span className="font-sans text-sm font-bold text-slate-900 dark:text-white">
                          Tabix Extension
                        </span>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500">
                          v1.0.4 • Memory Optimizing
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={addRandomTab}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-all"
                    >
                      <PlusCircle className="h-3 w-3" />
                      <span>Simulate Add</span>
                    </button>
                  </div>

                  {/* Filter and Search actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4">
                    <div className="sm:col-span-7 relative">
                      <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400 dark:text-slate-600" />
                      <input
                        type="text"
                        placeholder="Search tabs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="sm:col-span-5 flex gap-1">
                      {["All", "Development", "Learning"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`flex-1 py-1 rounded-md text-[10px] font-bold ${
                            selectedCategory === cat
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tabs List */}
                  <div className="space-y-2 mt-4 max-h-[220px] overflow-y-auto no-scrollbar">
                    <AnimatePresence initial={false}>
                      {filteredTabs.map((tab) => (
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                            tab.hibernated
                              ? "border-slate-100 dark:border-slate-900/60 bg-slate-50/50 dark:bg-slate-900/10 text-slate-400 dark:text-slate-600"
                              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Bookmark
                              className={`h-3.5 w-3.5 shrink-0 ${
                                tab.hibernated
                                  ? "text-slate-300 dark:text-slate-700"
                                  : "text-blue-500 dark:text-blue-400"
                              }`}
                            />
                            <div className="truncate text-left">
                              <span className="font-semibold block truncate">
                                {tab.title}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block truncate">
                                {tab.url}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${
                                tab.category === "Development"
                                  ? "bg-indigo-500/10 text-indigo-500"
                                  : tab.category === "Social"
                                  ? "bg-blue-500/10 text-blue-500"
                                  : "bg-amber-500/10 text-amber-500"
                              }`}
                            >
                              {tab.category}
                            </span>

                            <button
                              onClick={() => toggleHibernate(tab.id)}
                              aria-label="Toggle Hibernate"
                              className={`p-1 rounded-md transition-colors ${
                                tab.hibernated
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                              }`}
                            >
                              <Power className="h-3 w-3" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Extension Footer status banner */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <RefreshCw className="h-3 w-3 animate-spin text-blue-500" />
                    <span>{activeTabsCount} Tabs Active</span>
                  </div>
                  <div>
                    <span>{memorySaved}MB Saved</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
