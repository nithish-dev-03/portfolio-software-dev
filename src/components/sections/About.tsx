import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { Bug, TrendingUp, Monitor, Boxes, Layers } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const { t } = useTranslation();

  const strengthsList = [
    { key: "debugging", icon: Bug, color: "text-red-500 bg-red-500/10" },
    { key: "performance", icon: TrendingUp, color: "text-amber-500 bg-amber-500/10" },
    { key: "responsive", icon: Monitor, color: "text-blue-500 bg-blue-500/10" },
    { key: "cleanArch", icon: Boxes, color: "text-emerald-500 bg-emerald-500/10" },
    { key: "api", icon: Layers, color: "text-indigo-500 bg-indigo-500/10" },
  ];

  return (
    <section
      id={SECTIONS.about}
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("about.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left bio column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans text-2xl font-bold text-slate-900 dark:text-white leading-tight">
              {t("about.experienceTitle")}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base">
              {t("about.bio")}
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base">
              {t("about.experienceSubtitle")}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    2+
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Years Exp.
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                    15+
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Projects Done
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    100%
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Code Quality
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Strengths column (Bento cards list) */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-sans text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              {t("about.strengthsTitle")}
            </h4>

            <div className="grid grid-cols-1 gap-3.5">
              {strengthsList.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <motion.div
                    key={strength.key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md dark:hover:border-white/10 hover:border-blue-500/20 transition-all group"
                  >
                    <div className={`p-3 rounded-xl transition-all group-hover:scale-110 ${strength.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-sans text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                      {t(`about.strengths.${strength.key}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
