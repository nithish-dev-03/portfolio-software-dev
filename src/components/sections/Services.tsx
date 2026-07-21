import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import {
  Laptop,
  Smartphone,
  Server,
  Chrome,
  LayoutGrid,
  Zap,
  Bug,
} from "lucide-react";
import { motion } from "motion/react";

interface ServiceItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export function Services() {
  const { t } = useTranslation();

  const services: ServiceItem[] = [
    { key: "frontendDev", icon: Laptop, color: "text-blue-500 bg-blue-500/10" },
    { key: "mobileApp", icon: Smartphone, color: "text-cyan-500 bg-cyan-500/10" },
    { key: "backendApis", icon: Server, color: "text-indigo-500 bg-indigo-500/10" },
    { key: "chromeExt", icon: Chrome, color: "text-amber-500 bg-amber-500/10" },
    { key: "uiImpl", icon: LayoutGrid, color: "text-emerald-500 bg-emerald-500/10" },
    { key: "perfOpt", icon: Zap, color: "text-pink-500 bg-pink-500/10" },
    { key: "bugFix", icon: Bug, color: "text-red-500 bg-red-500/10" },
  ];

  return (
    <section
      id={SECTIONS.services}
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("services.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:border-blue-500/20 dark:hover:border-white/10 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4 text-left">
                  <div className={`p-3 rounded-xl inline-block group-hover:scale-110 transition-transform ${srv.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {t(`services.list.${srv.key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {t(`services.list.${srv.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
