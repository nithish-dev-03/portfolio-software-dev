import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { Briefcase, Tag, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const { t } = useTranslation();

  const items = t("experience.items", { returnObjects: true }) as Array<{
    role: string;
    company: string;
    duration: string;
    desc: string;
    tech: string[];
  }>;

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
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row md:items-center group">
                  
                  {/* Timeline marker / glow point */}
                  <div className="absolute left-4 md:left-1/2 h-8 w-8 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 -translate-x-1/2 flex items-center justify-center z-10 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <Briefcase className="h-3 w-3 text-white" />
                  </div>

                  {/* Metadata Column */}
                  <div className={`pl-12 md:w-1/2 flex flex-col items-start ${isEven ? "md:pl-0 md:pr-12 md:items-end md:text-right" : "md:order-2 md:pl-12 md:items-start"}`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      <Tag className="h-3.5 w-3.5" />
                      {item.duration}
                    </span>
                    <h3 className="font-sans text-xl font-black text-slate-900 dark:text-white mt-3">
                      {item.role}
                    </h3>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {item.company}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className={`pl-12 md:w-1/2 mt-4 md:mt-0 ${isEven ? "md:pl-12" : "md:order-1 md:pr-12 md:pl-0"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-md hover:border-blue-500/20 transition-all hover:shadow-lg"
                    >
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-5">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
