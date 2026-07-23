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
  Pin,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Projects() {
  const { t } = useTranslation();

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
                {["HTML", "CSS", "VANILLA JS"].map((tech) => (
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
                href="https://chromewebstore.google.com/detail/eojingdfichlpfndflmdgpngmfhhnjkn?utm_source=item-share-cb"
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
              <div className="bg-[#0f111a] min-h-[420px] flex flex-col font-sans">
                
                {/* Extension Top Header */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-[#0f111a] rounded-sm transform rotate-45" />
                  </div>
                  <span className="font-bold text-white tracking-wide text-sm">Tabix</span>
                </div>

                <div className="px-4 flex flex-col gap-4">
                  {/* Search Bar */}
                  <div className="relative group">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500 group-hover:text-slate-400 transition-colors" />
                    <input
                      type="text"
                      placeholder="Search tabs or domains..."
                      readOnly
                      className="w-full bg-transparent border border-slate-700/80 rounded-lg pl-9 pr-16 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 hover:border-slate-600 transition-colors"
                    />
                    <div className="absolute right-2 top-2 px-1.5 py-0.5 rounded text-[10px] border border-slate-700/80 text-slate-500 font-mono">
                      Ctrl+K
                    </div>
                  </div>

                  {/* Quick Search Header */}
                  <div className="flex justify-between items-center text-[9px] font-extrabold tracking-widest text-slate-500 uppercase mt-2">
                    <span>Quick Search</span>
                    <span>10 Tabs Active</span>
                  </div>

                  {/* Pinned Sessions */}
                  <div>
                    <div className="flex justify-between items-center text-[9px] font-extrabold tracking-widest text-slate-500 uppercase mb-3">
                      <div className="flex items-center gap-1.5">
                        <Pin className="h-3 w-3 text-red-500 fill-red-500" />
                        <span>Pinned Sessions</span>
                      </div>
                      <span>4 items</span>
                    </div>

                    <div className="space-y-1">
                      {/* Active Item */}
                      <div className="flex items-center gap-3 p-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 relative">
                        <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-indigo-500" />
                        
                        <div className="flex items-center gap-2 pl-3">
                          <div className="h-3.5 w-3.5 rounded border border-slate-600/60" />
                          <Pin className="h-3.5 w-3.5 text-indigo-400 fill-indigo-400" />
                          <Bookmark className="h-3 w-3 text-slate-600" />
                        </div>
                        
                        <div className="h-6 w-6 rounded-lg bg-white shrink-0 flex items-center justify-center">
                          <div className="h-4 w-4 bg-emerald-600 rounded-[4px] flex items-center justify-center">
                            <Sparkles className="h-2.5 w-2.5 text-white" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-indigo-300 text-xs font-semibold truncate tracking-tight">AI Learning for Developers</div>
                          <div className="text-slate-500 text-[10px] truncate">https://chatgpt.com/c/6a2a9bb9-b...</div>
                        </div>

                        <div className="px-1.5 py-0.5 rounded border border-indigo-500/20 text-indigo-400 text-[8px] font-mono flex items-center gap-1 shrink-0">
                          <span>90MB</span>
                          <span className="text-slate-500">· JS Heap</span>
                        </div>
                      </div>

                      {/* Inactive Item 1 */}
                      <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-white/5 cursor-default transition-colors">
                        <div className="flex items-center gap-2 pl-3">
                          <div className="h-3.5 w-3.5 rounded border border-slate-600/60" />
                          <Pin className="h-3.5 w-3.5 text-indigo-400 fill-indigo-400" />
                          <div className="w-3" />
                        </div>
                        
                        <div className="h-6 w-6 rounded-lg bg-white shrink-0 flex items-center justify-center">
                          <div className="h-4 w-4 bg-emerald-600 rounded-[4px] flex items-center justify-center">
                            <Sparkles className="h-2.5 w-2.5 text-white" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-slate-200 text-xs font-semibold truncate tracking-tight">HTML Basics to Advanced</div>
                          <div className="text-slate-500 text-[10px] truncate">https://chatgpt.com/c/6a5db365-...</div>
                        </div>

                        <div className="px-1.5 py-0.5 rounded border border-emerald-500/20 text-emerald-400 text-[8px] font-mono flex items-center gap-1 shrink-0">
                          <span>143MB</span>
                          <span className="text-slate-500">· JS Heap</span>
                        </div>
                      </div>
                      
                      {/* Inactive Item 2 */}
                      <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-white/5 cursor-default transition-colors">
                        <div className="flex items-center gap-2 pl-3">
                          <div className="h-3.5 w-3.5 rounded border border-slate-600/60" />
                          <Pin className="h-3.5 w-3.5 text-indigo-400 fill-indigo-400" />
                          <div className="w-3" />
                        </div>
                        
                        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shrink-0 flex items-center justify-center shadow-inner">
                          <span className="text-white text-[10px] font-bold">NS</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-slate-200 text-xs font-semibold truncate tracking-tight">Nirmal Sing Nithish N Portfoli...</div>
                          <div className="text-slate-500 text-[10px] truncate">https://aistudio.google.com/apps/2...</div>
                        </div>

                        <div className="px-1.5 py-0.5 rounded border border-emerald-500/20 text-emerald-400 text-[8px] font-mono flex items-center gap-1 shrink-0">
                          <span>34MB</span>
                          <span className="text-slate-500">· JS Heap</span>
                        </div>
                      </div>

                      {/* Inactive Item 3 */}
                      <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-white/5 cursor-default transition-colors">
                        <div className="flex items-center gap-2 pl-3">
                          <div className="h-3.5 w-3.5 rounded border border-slate-600/60" />
                          <Pin className="h-3.5 w-3.5 text-indigo-400 fill-indigo-400" />
                          <div className="w-3" />
                        </div>
                        
                        <div className="h-6 w-6 rounded-lg bg-white shrink-0 flex items-center justify-center shadow-inner">
                          <Github className="h-4 w-4 text-slate-900" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-slate-200 text-xs font-semibold truncate tracking-tight">GitHub</div>
                          <div className="text-slate-500 text-[10px] truncate">https://github.com/</div>
                        </div>

                        <div className="px-1.5 py-0.5 rounded border border-emerald-500/20 text-emerald-400 text-[8px] font-mono flex items-center gap-1 shrink-0">
                          <span>29MB</span>
                          <span className="text-slate-500">· JS Heap</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section: CHATGPT.COM */}
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-[9px] font-extrabold tracking-widest text-slate-500 uppercase mb-3">
                      <span>ChatGPT.com</span>
                      <span>1 item</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-white/5 cursor-default transition-colors">
                      <div className="flex items-center gap-2 pl-3">
                        <div className="h-3.5 w-3.5 rounded border border-slate-600/60" />
                        <div className="w-3.5" />
                        <div className="w-3" />
                      </div>
                      
                      <div className="h-6 w-6 rounded-lg bg-white shrink-0 flex items-center justify-center">
                        <div className="h-4 w-4 bg-emerald-600 rounded-[4px] flex items-center justify-center">
                          <Sparkles className="h-2.5 w-2.5 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-slate-200 text-xs font-semibold truncate tracking-tight">GitHub Authentication Error</div>
                        <div className="text-slate-500 text-[10px] truncate">https://chatgpt.com/c/6a61cbf5-8...</div>
                      </div>

                      <div className="px-1.5 py-0.5 rounded border border-emerald-500/20 text-emerald-400 text-[8px] font-mono flex items-center gap-1 shrink-0">
                        <span>104MB</span>
                        <span className="text-slate-500">· JS Heap</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Shortcuts */}
                <div className="mt-6 bg-[#0a0d14] px-4 py-3 flex items-center justify-between text-[10px] font-semibold text-slate-400 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded border border-slate-700/80 bg-white/5 text-white">↕</span> 
                      Navigate
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded border border-slate-700/80 bg-white/5 text-white">Enter</span> 
                      Open
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded border border-slate-700/80 bg-white/5 text-white">Ctrl+W</span> 
                      Close
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded border border-slate-700/80 bg-white/5 text-white">Ctrl+S</span> 
                      Save
                    </div>
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
