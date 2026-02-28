/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const dataAbout = [
    {
      title: t("about.experience"),
      description: t("about.exp_desc"),
    },
    {
      title: t("about.education"),
      description: t("about.edu_desc"),
    },
  ];

  return (
    <div className="md:max-w-[1000px] md:mx-auto py-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          {t("about.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
          {t("about.subtitle")}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4 md:justify-center">
        {dataAbout.map((item, index) => (
          <motion.div
            key={index}
            className="md:w-96 p-6 rounded-xl border border-border bg-card shadow-sm"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
