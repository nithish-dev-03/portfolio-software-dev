import { useTranslation } from "react-i18next";
import { SOCIALS } from "../../constants/social";
import { SECTIONS } from "../../constants/routes";
import { ArrowRight, Download, MessageSquare, Award } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Generate a beautiful print-friendly view of Nirmal's resume or trigger mock alert
    alert("Resume download simulation starting. Nirmal Sing Nithish's official curriculum vitae (CV) will download.");
  };

  return (
    <section
      id={SECTIONS.hero}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white dark:bg-slate-950 py-20 transition-colors"
    >
      {/* Background radial glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] w-full bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl opacity-80" />
      <div className="absolute left-1/4 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-bold text-blue-600 dark:text-blue-400"
            >
              <Award className="h-3.5 w-3.5" />
              <span>{t("hero.experienceBadge")}</span>
            </motion.div>

            {/* Dynamic Animated Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
              >
                {t("hero.title")}
              </motion.h1>
              
              {/* Name indicator */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
              >
                {SOCIALS.name}
              </motion.p>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection(SECTIONS.projects)}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                <span>{t("hero.viewProjects")}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>{t("hero.downloadResume")}</span>
              </button>

              <button
                onClick={() => scrollToSection(SECTIONS.contact)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-transparent text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{t("hero.contactMe")}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Visual Column (Floating Glowing Avatar card) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Multi-layered neon glow effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-3xl blur-xl opacity-20" />
              
              {/* Glassmorphic Neumorphic Avatar Container */}
              <div className="absolute inset-0 rounded-3xl p-1 bg-gradient-to-tr from-white/10 to-white/5 dark:from-slate-800/40 dark:to-slate-900/40 shadow-2xl backdrop-blur-xl flex items-center justify-center border border-white/10">
                <div className="w-full h-full rounded-[20px] bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                  
                  {/* Internal Grid background */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />

                  {/* Initials badge */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black text-3xl sm:text-4xl flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                    NS
                  </div>

                  <p className="text-xl font-bold text-slate-800 dark:text-white mt-6 z-10">
                    Nirmal Sing N N
                  </p>
                  
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-2 z-10 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    ~/nirmalsing-portfolio
                  </p>

                  <div className="flex gap-2.5 mt-6 z-10">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Open to roles & projects
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
