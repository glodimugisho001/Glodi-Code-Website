import React from "react";
import { Code2, BriefcaseBusiness, Newspaper, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const serviceIcons = [Code2, BriefcaseBusiness, Newspaper, Wrench];

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.items.web_apps.title"),
      description: t("services.items.web_apps.description"),
    },
    {
      title: t("services.items.business_sites.title"),
      description: t("services.items.business_sites.description"),
    },
    {
      title: t("services.items.blogs.title"),
      description: t("services.items.blogs.description"),
    },
    {
      title: t("services.items.features.title"),
      description: t("services.items.features.description"),
    },
  ];

  return (
    <section className="md:max-w-[1000px] md:mx-auto py-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          {t("services.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
          {t("services.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[index];

          return (
            <motion.div
              key={service.title}
              className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
