import { useTranslation } from "react-i18next";
import { Quote, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  const { t } = useTranslation();

  const testimonialKeys = ["item1", "item2", "item3"];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("testimonials.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              {/* Quotation icon decoration */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-200/50 dark:text-slate-800/30" />

              <div className="space-y-4 text-left">
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg inline-block">
                  <MessageSquare className="h-4 w-4" />
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 italic text-sm sm:text-base leading-relaxed font-sans pt-2 relative z-10">
                  "{t(`testimonials.${key}.quote`)}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3.5 text-left">
                {/* Initials avatar placeholder */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                  {t(`testimonials.${key}.author`)
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <span className="font-sans text-sm font-bold text-slate-900 dark:text-white block">
                    {t(`testimonials.${key}.author`)}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block">
                    {t(`testimonials.${key}.role`)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
