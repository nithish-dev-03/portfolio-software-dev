import { useTranslation } from "react-i18next";
import { SOCIALS } from "../../constants/social";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center sm:text-left">
            <span className="font-sans text-base font-bold tracking-tight text-slate-900 dark:text-white">
              {SOCIALS.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t("footer.rights")}
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer referrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer referrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SOCIALS.email}`}
                aria-label="Send Email"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <span>{t("footer.backToTop")}</span>
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-900 mt-8 pt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
