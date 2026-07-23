import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../constants/routes";
import { SOCIALS } from "../../constants/social";
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null | "coming_soon">(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t("contact.form.validation.nameRequired");
    }

    if (!form.email.trim()) {
      newErrors.email = t("contact.form.validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t("contact.form.validation.emailInvalid");
    }

    if (!form.message.trim()) {
      newErrors.message = t("contact.form.validation.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSendSuccess(null);

    // try {
    //   const response = await fetch(`https://formsubmit.co/ajax/${SOCIALS.email}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: form.name,
    //       email: form.email,
    //       message: form.message,
    //       _subject: "Testing the protfolio message",
    //     }),
    //   });

    //   if (response.ok) {
    //     setSendSuccess(true);
    //     setForm({ name: "", email: "", message: "" }); // reset
    //   } else {
    //     setSendSuccess(false);
    //   }
    // } catch (error) {
    //   setSendSuccess(false);
    // } finally {
    //   setIsSending(false);
    // }

    // Coming soon implementation
    setTimeout(() => {
      setSendSuccess("coming_soon");
      setIsSending(false);
    }, 1000);
  };

  return (
    <section
      id={SECTIONS.contact}
      className="w-full bg-slate-50 dark:bg-slate-900/40 py-24 border-t border-slate-100 dark:border-slate-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("contact.title")}
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column (Contact details / links) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                Contact details
              </h3>

              <div className="space-y-4">
                {/* Location card */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/60 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 block font-semibold">
                      {t("contact.info.location")}
                    </span>
                    <span className="text-sm text-slate-800 dark:text-slate-200 font-bold block">
                      {t("contact.info.locationVal")}
                    </span>
                  </div>
                </div>

                {/* Email card */}
                <a
                  href={`mailto:${SOCIALS.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/60 shadow-sm hover:border-blue-500/20 transition-all block group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 block font-semibold">
                      {t("contact.info.email")}
                    </span>
                    <span className="text-sm text-slate-800 dark:text-slate-200 font-bold block group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {SOCIALS.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social channels widget */}
            <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Social Networks
              </span>

              <div className="flex gap-3">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-colors text-xs"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-colors text-xs"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Contact form) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Form Feedback State */}
                <AnimatePresence mode="wait">
                  {/* {sendSuccess === true && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-sm flex items-start gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span>{t("contact.form.successMessage")}</span>
                    </motion.div>
                  )} */}

                  {sendSuccess === false && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-sm flex items-start gap-2"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{t("contact.form.errorMessage")}</span>
                    </motion.div>
                  )}

                  {sendSuccess === "coming_soon" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-sm flex items-start gap-2"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{t("contact.form.comingSoon")}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs font-bold text-red-500 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs font-bold text-red-500 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs font-bold text-red-500 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 disabled:opacity-50"
                >
                  {isSending ? (
                    <span>{t("contact.form.sending")}</span>
                  ) : (
                    <>
                      <span>{t("contact.form.sendButton")}</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
