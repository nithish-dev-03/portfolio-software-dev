import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { SOCIALS } from "../../constants/social";
import { Github, Star, GitBranch, Terminal, Calendar, Code } from "lucide-react";
import { useGithubDashboard } from "../../hooks/useGithub";

export function GithubSection() {
  const { t } = useTranslation();
  const { data: dashboard, isLoading, error } = useGithubDashboard();

  if (isLoading) {
    return (
      <section className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-900 flex justify-center items-center h-96">
        <div className="text-slate-500 animate-pulse text-lg font-medium">Loading GitHub Data...</div>
      </section>
    );
  }

  if (error || !dashboard) {
    return (
      <section className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-900 flex justify-center items-center h-96">
        <div className="text-red-500 text-lg font-medium">Unable to load GitHub Data. Please try again later.</div>
      </section>
    );
  }

  const {
    totalRepositories,
    stars,
    languages,
    topRepositories,
    contributions
  } = dashboard;

  const topLanguagesStr = languages.slice(0, 3).map((l: any) => l.name).join(', ') || 'N/A';
  
  const allDays = contributions?.weeks?.flatMap((w: any) => w.contributionDays) || [];
  const recentDays = allDays.slice(-140).map((day: any, i: number) => {
    let level = 0;
    if (day.contributionLevel === 'FIRST_QUARTILE') level = 1;
    else if (day.contributionLevel === 'SECOND_QUARTILE') level = 2;
    else if (day.contributionLevel === 'THIRD_QUARTILE') level = 3;
    else if (day.contributionLevel === 'FOURTH_QUARTILE') level = 4;
    return { day: i, date: day.date, commits: day.contributionCount, level };
  });

  const firstDate = allDays.length > 0 ? new Date(allDays[0].date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
  const lastDate = allDays.length > 0 ? new Date(allDays[allDays.length - 1].date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
  const contributionRange = allDays.length > 0 ? `${firstDate} - ${lastDate}` : '';

  const statItems = [
    { key: "contributions", val: `${contributions?.totalContributions || 0}`, icon: Calendar, color: "text-emerald-500 bg-emerald-500/10" },
    { key: "repositories", val: `${totalRepositories}`, icon: GitBranch, color: "text-blue-500 bg-blue-500/10" },
    { key: "stars", val: `${stars}`, icon: Star, color: "text-amber-500 bg-amber-500/10" },
    { key: "languages", val: topLanguagesStr, icon: Code, color: "text-purple-500 bg-purple-500/10" },
  ];

  const colorMap: Record<string, string> = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Dart: 'bg-cyan-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-indigo-500',
    Python: 'bg-green-500'
  };

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

          {/* Right Contribution Heatmap mockup column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-500" />
              <span>{t("github.stats.activity")}</span>
            </h3>

            {/* Heatmap Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-md">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
                <span>{contributionRange}</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">
                  {contributions?.totalContributions || 0} {t("github.stats.contributions")}
                </span>
              </div>

              {/* Grid cell layout */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-4 no-scrollbar">
                {recentDays.map((cell: any) => (
                  <div
                    key={cell.day}
                    title={`${cell.commits} commits on ${cell.date}`}
                    className={`h-3 w-3 rounded-sm transition-all hover:scale-125 cursor-pointer ${
                      cell.level === 0
                        ? "bg-slate-100 dark:bg-slate-800/60"
                        : cell.level === 1
                        ? "bg-emerald-200 dark:bg-emerald-900/80"
                        : cell.level === 2
                        ? "bg-emerald-300 dark:bg-emerald-700"
                        : cell.level === 3
                        ? "bg-emerald-400 dark:bg-emerald-500"
                        : "bg-emerald-500 dark:bg-emerald-400"
                    }`}
                  />
                ))}
              </div>

              {/* Legend bar */}
              <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-slate-400 mt-2">
                <span>Less</span>
                <div className="h-2.5 w-2.5 rounded-sm bg-slate-100 dark:bg-slate-800/60" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-200 dark:bg-emerald-900/80" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-300 dark:bg-emerald-700" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-400 dark:bg-emerald-500" />
                <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500 dark:bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Repositories */}
        <div className="mt-16 space-y-6">
          <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Code className="h-5 w-5 text-indigo-500" />
            <span>Repositories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {topRepositories.map((repo: any) => (
              <div
                key={repo.name}
                className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between gap-4 group hover:border-blue-500/20 transition-all h-full"
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="font-sans text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors block truncate" title={repo.name}>
                        {repo.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 flex-shrink-0">
                        {repo.isPrivate ? "Private" : "Public"}
                      </span>
                    </div>
                    <a
                      href={repo.url || SOCIALS.github}
                      target="_blank"
                      rel="noreferrer referrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 -mr-1.5 -mt-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0"
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-2" title={repo.description}>
                    {repo.description || 'No description provided.'}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${colorMap[repo.language || ''] || 'bg-slate-500'}`} />
                    <span>{repo.language || 'Markdown'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-amber-500" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
