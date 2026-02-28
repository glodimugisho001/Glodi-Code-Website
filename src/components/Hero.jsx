/* eslint-disable no-unused-vars */
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import glodi from "../assets/profile.webp";

const socialLinks = [
  { icon: Github, href: "https://github.com/glodimugisho001", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/glodi-code",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/GlodiMugisho", label: "Twitter" },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="acceuil"
      className="flex flex-col-reverse items-center md:items-start px-4 md:px-6 lg:px-0 py-16 md:py-28 gap-8 md:gap-12 md:flex-row md:max-w-[1000px] md:mx-auto"
    >
      {/* Text content */}
      <motion.div
        className="flex-1 flex flex-col items-center text-center md:items-start md:text-left"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 block"
        >
          {t("hero.hello")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2"
        >
          Glodi Mugisho
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-muted-foreground mb-5"
        >
          {t("hero.title")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-base text-muted-foreground max-w-md leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          className="flex gap-3 mt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <Button asChild>
            <a href="#contact">{t("hero.contact")}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#project">{t("hero.view_work")}</a>
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="shrink-0"
      >
        <img
          src={glodi}
          alt="Glodi Mugisho"
          className="w-[220px] h-[260px] md:w-[260px] md:h-[300px] object-cover rounded-2xl ring-1 ring-border shadow-md"
          loading="eager"
        />
      </motion.div>
    </section>
  );
}
