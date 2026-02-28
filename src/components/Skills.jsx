/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const dataSkills = [
  {
    title: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Prisma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    title: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    title: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
];

const additionalSkills = [
  "Server Actions",
  "Next.js API Routes",
  "Zod",
  "UI/UX Design",
  "Git & GitHub",
  "Responsive Design",
  "REST API",
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="md:max-w-[1000px] md:mx-auto py-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          {t("skills.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
          {t("skills.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {dataSkills.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 object-contain"
            />
            <span className="text-sm font-medium">{item.title}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 p-6 rounded-xl border border-border bg-card shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h3 className="text-sm font-semibold mb-3">{t("skills.additional")}</h3>
        <div className="flex flex-wrap gap-2">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
