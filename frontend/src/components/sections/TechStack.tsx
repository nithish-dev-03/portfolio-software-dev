import { useTranslation } from "react-i18next";
import {
  Code,
  FileCode2,
  Smartphone,
  Cpu,
  Database,
  Layers,
  Palette,
  Layout,
  GitBranch,
  Terminal,
  Monitor,
  Chrome,
} from "lucide-react";
import { motion } from "motion/react";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  glowColor: string; // Tailwind glow border color
  bgGlow: string; // Tailwind absolute background blur
}

export function TechStack() {
  const { t } = useTranslation();

  const techs: TechItem[] = [
    { name: "React", icon: Code, glowColor: "hover:border-blue-500/30", bgGlow: "group-hover:bg-blue-500/10" },
    { name: "TypeScript", icon: FileCode2, glowColor: "hover:border-sky-500/30", bgGlow: "group-hover:bg-sky-500/10" },
    { name: "JavaScript", icon: FileCode2, glowColor: "hover:border-yellow-500/30", bgGlow: "group-hover:bg-yellow-500/10" },
    { name: "Flutter", icon: Smartphone, glowColor: "hover:border-cyan-500/30", bgGlow: "group-hover:bg-cyan-500/10" },
    { name: "Dart", icon: Smartphone, glowColor: "hover:border-teal-500/30", bgGlow: "group-hover:bg-teal-500/10" },
    { name: "Node.js", icon: Cpu, glowColor: "hover:border-emerald-500/30", bgGlow: "group-hover:bg-emerald-500/10" },
    { name: "Express.js", icon: Cpu, glowColor: "hover:border-neutral-500/30", bgGlow: "group-hover:bg-neutral-500/10" },
    { name: "MongoDB", icon: Database, glowColor: "hover:border-green-500/30", bgGlow: "group-hover:bg-green-500/10" },
    { name: "Redux", icon: Layers, glowColor: "hover:border-violet-500/30", bgGlow: "group-hover:bg-violet-500/10" },
    { name: "Redux Saga", icon: Layers, glowColor: "hover:border-purple-500/30", bgGlow: "group-hover:bg-purple-500/10" },
    { name: "Redux Thunk", icon: Layers, glowColor: "hover:border-indigo-500/30", bgGlow: "group-hover:bg-indigo-500/10" },
    { name: "Material UI", icon: Layout, glowColor: "hover:border-blue-600/30", bgGlow: "group-hover:bg-blue-600/10" },
    { name: "Ant Design", icon: Layout, glowColor: "hover:border-red-500/30", bgGlow: "group-hover:bg-red-500/10" },
    { name: "Tailwind CSS", icon: Palette, glowColor: "hover:border-cyan-400/30", bgGlow: "group-hover:bg-cyan-400/10" },
    { name: "SCSS / CSS", icon: Palette, glowColor: "hover:border-pink-500/30", bgGlow: "group-hover:bg-pink-500/10" },
    { name: "Git", icon: GitBranch, glowColor: "hover:border-orange-500/30", bgGlow: "group-hover:bg-orange-500/10" },
    { name: "GitHub", icon: GitBranch, glowColor: "hover:border-neutral-700/30", bgGlow: "group-hover:bg-neutral-700/10" },
    { name: "VS Code", icon: Monitor, glowColor: "hover:border-blue-500/30", bgGlow: "group-hover:bg-blue-500/10" },
    { name: "Chrome DevTools", icon: Chrome, glowColor: "hover:border-amber-500/30", bgGlow: "group-hover:bg-amber-500/10" },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("techStack.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("techStack.subtitle")}
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
                className={`relative group p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 overflow-hidden transition-all duration-300 ${tech.glowColor}`}
              >
                {/* Micro interaction glow */}
                <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 ${tech.bgGlow}`} />

                <div className="flex flex-col items-center justify-center text-center space-y-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
