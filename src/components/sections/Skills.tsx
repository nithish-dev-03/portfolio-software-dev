import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { SKILL_CATEGORIES } from "../../constants/skills";
import {
  Code2,
  FileCode,
  FileText,
  Layers,
  Palette,
  Layout,
  Scissors,
  Server,
  Cpu,
  Link,
  Smartphone,
  Zap,
  Database,
  Table,
  GitBranch,
  Monitor,
  Settings,
  Bug,
  TrendingUp,
  Boxes,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

// Explicit type-safe mapping of icon names to Lucide icons
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  FileCode,
  FileText,
  Layers,
  Palette,
  Layout,
  Scissors,
  Server,
  Cpu,
  Link,
  Smartphone,
  Zap,
  Database,
  Table,
  GitBranch,
  Monitor,
  Settings,
  Bug,
  TrendingUp,
  Boxes,
  Users,
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id={SECTIONS.skills}
      className="w-full bg-white dark:bg-slate-950 py-24 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("skills.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900/80 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:border-white/10 hover:border-blue-500/10 transition-all group"
            >
              <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                {t(category.titleKey)}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => {
                  const IconComponent = ICON_MAP[skill.iconName] || Code2;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                          <IconComponent className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar with motion interaction */}
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
