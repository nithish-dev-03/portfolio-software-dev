import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { SOCIALS } from "../../constants/social";
import { Github, Star, GitBranch, Terminal, Calendar, Code } from "lucide-react";
import { motion } from "motion/react";

export function GithubSection() {
  const { t } = useTranslation();

  // Create mock data for the contribution heatmap (53 weeks * 7 days = 371 cells, let's render a representative subset of say 140 days for a pristine responsive layout)
  const daysCount = 140;
  const contributionCells = Array.from({ length: daysCount }).map((_, i) => {
    // Generate organic-looking contributions counts
    const rand = Math.random();
    let level = 0; // 0: empty, 1: light, 2: medium, 3: dark green
    if (rand > 0.85) level = 3;
    else if (rand > 0.6) level = 2;
    else if (rand > 0.3) level = 1;
    return {
      day: i,
      commits: level === 0 ? 0 : level === 1 ? Math.floor(Math.random() * 2) + 1 : level === 2 ? Math.floor(Math.random() * 4) + 3 : Math.floor(Math.random() * 6) + 7,
      level,
    };
  });

  const popularRepos = [
    {
      name: "tabix-extension",
      desc: t("github.repos.tabix"),
      language: "TypeScript",
      color: "bg-blue-500",
      stars: 48,
      forks: 12,
    },
    {
      name: "flutter-clean-architecture",
      desc: t("github.repos.flutterApps"),
      language: "Dart",
      color: "bg-cyan-500",
      stars: 35,
      forks: 8,
    },
    {
      name: "react-redux-saga-starter",
      desc: t("github.repos.reactBoilerplate"),
      language: "JavaScript",
      color: "bg-yellow-500",
      stars: 22,
      forks: 4,
    },
  ];

  const statItems = [
    { key: "contributions", val: "850+", icon: Calendar, color: "text-emerald-500 bg-emerald-500/10" },
    { key: "repositories", val: "35+", icon: GitBranch, color: "text-blue-500 bg-blue-500/10" },
    { key: "stars", val: "120+", icon: Star, color: "text-amber-500 bg-amber-500/10" },
    { key: "languages", val: "TypeScript, Dart, JS", icon: Code, color: "text-purple-500 bg-purple-500/10" },
  ];

  return (
    <section
      id={SECTIONS.github}
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("github.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("github.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Stats & popular repos column */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="h-5 w-5 text-blue-500" />
              <span>Statistics overview</span>
            </h3>

            {/* Quick stats badges */}
            <div className="grid grid-cols-2 gap-4">
              {statItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.key}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-sm"
                  >
                    <div className={`p-2.5 rounded-xl inline-block ${item.color} mb-3`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="block text-2xl font-extrabold text-slate-900 dark:text-white">
                      {item.val}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 block">
                      {t(`github.stats.${item.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Popular Repos list */}
            <div className="space-y-4">
              <h4 className="font-sans text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                {t("github.stats.popularRepo")}
              </h4>

              <div className="space-y-3">
                {popularRepos.map((repo) => (
                  <div
                    key={repo.name}
                    className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-sm flex items-start justify-between gap-4 group hover:border-blue-500/20 transition-all"
                  >
                    <div className="space-y-2 text-left">
                      <span className="font-sans text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors block">
                        {repo.name}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {repo.desc}
                      </p>
                      <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
                        <div className="flex items-center gap-1">
                          <span className={`h-2 w-2 rounded-full ${repo.color}`} />
                          <span>{repo.language}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Star className="h-3 w-3 text-amber-500" />
                          <span>{repo.stars}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={SOCIALS.github}
                      target="_blank"
                      rel="noreferrer referrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contribution Heatmap mockup column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-500" />
              <span>{t("github.stats.activity")}</span>
            </h3>

            {/* Heatmap Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-md">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
                <span>Oct 2025 - Mar 2026</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">
                  {t("github.stats.contributions")}
                </span>
              </div>

              {/* Grid cell layout */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-4 no-scrollbar">
                {contributionCells.map((cell) => (
                  <div
                    key={cell.day}
                    title={`${cell.commits} commits on day ${cell.day}`}
                    className={`h-3 w-3 rounded-sm transition-all hover:scale-125 cursor-pointer ${
                      cell.level === 0
                        ? "bg-slate-100 dark:bg-slate-800"
                        : cell.level === 1
                        ? "bg-emerald-500/20 dark:bg-emerald-950/40"
                        : cell.level === 2
                        ? "bg-emerald-500/50 dark:bg-emerald-600"
                        : "bg-emerald-600 dark:bg-emerald-400"
                    }`}
                  />
                ))}
              </div>

              {/* Legend bar */}
              <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-slate-400 mt-2">
                <span>Less</span>
                <div className="h-2.5 w-2.5 rounded-sm bg-slate-100 dark:bg-slate-800" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500/20 dark:bg-emerald-950/40" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500/50 dark:bg-emerald-600" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-600 dark:bg-emerald-400" />
                <span>More</span>
              </div>
            </div>

            {/* Profile redirect CTA */}
            <div className="pt-4 text-center lg:text-left">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer referrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-bold hover:bg-slate-900 transition-colors shadow-lg"
              >
                <Github className="h-4.5 w-4.5" />
                <span>{t("github.stats.profileButton")}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
