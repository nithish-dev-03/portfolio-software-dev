import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const { t } = useTranslation();

  const focusPoints = [
    "react",
    "flutter",
    "apis",
    "state",
    "debugging",
    "reviews",
  ];

  return (
    <section
      id={SECTIONS.experience}
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("experience.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central tracker line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          {/* Timeline block */}
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row md:items-center">
              
              {/* Timeline marker / glow point */}
              <div className="absolute left-4 md:left-1/2 h-8 w-8 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 -translate-x-1/2 flex items-center justify-center z-10 shadow-lg shadow-blue-500/30">
                <Briefcase className="h-3 w-3 text-white" />
              </div>

              {/* Left Column (Metadata - duration etc) */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right flex flex-col items-start md:items-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Calendar className="h-3.5 w-3.5" />
                  {t("experience.timeline.years")}
                </span>
                <h3 className="font-sans text-xl font-black text-slate-900 dark:text-white mt-3">
                  {t("experience.timeline.role")}
                </h3>
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {t("hero.experienceBadge")}
                </span>
              </div>

              {/* Right Column (Focus points / description) */}
              <div className="pl-12 md:pl-12 md:w-1/2 mt-4 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-md hover:border-blue-500/20 transition-all"
                >
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6">
                    {t("experience.timeline.desc")}
                  </p>

                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                    {t("experience.timeline.focus")}
                  </h4>

                  <div className="grid grid-cols-1 gap-3.5">
                    {focusPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-sans">
                          {t(`experience.timeline.points.${point}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
