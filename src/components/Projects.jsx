/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import convertisseur from "../assets/unit-converter.webp";
import Blog from "../assets/ReactBlog.webp";
import todo from "../assets/todoapp.webp";
import portfolio from "../assets/portfolio-glodi.webp";
import LittleLemon from "../assets/littleLemon.webp";
import quireact from "../assets/quizreact.webp";

export default function Projects() {
  const { t } = useTranslation();

  const dataProjects = [
    {
      title: "Portfolio",
      description: t(
        "projects.portfolio_desc",
        "My own web portfolio site, designed to showcase my projects, skills, and experience.",
      ),
      url: "https://glodi-code.vercel.app/",
      image: portfolio,
      stack: ["React", "Tailwind CSS", "EmailJS", "Framer Motion"],
    },
    {
      title: "Little Lemon",
      description: t(
        "projects.little_lemon_desc",
        "App for helping people book a table at the Little Lemon restaurant.",
      ),
      url: "https://little-lemon-app-teal.vercel.app/",
      image: LittleLemon,
      stack: ["React", "CSS"],
    },
    {
      title: "React Blog",
      description: t(
        "projects.blog_desc",
        "A modern and minimalist blog designed for effortless publishing and reading, with a smooth and elegant interface.",
      ),
      url: "https://mon-blog-teal.vercel.app/",
      image: Blog,
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    },
    {
      title: "Quiz App",
      description: t(
        "projects.quiz_desc",
        "A simple quiz app with a clean and intuitive interface for testing your knowledge.",
      ),
      url: "https://quiz-react-one-wine.vercel.app/",
      image: quireact,
      stack: ["React", "Tailwind CSS"],
    },
    {
      title: "Todo List",
      description: t(
        "projects.todo_desc",
        "A todo list with a clean interface for managing tasks, powered by a full-stack backend.",
      ),
      url: "https://todo-app-three-gilt-20.vercel.app/",
      image: todo,
      stack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    },
    {
      title: "Unit Converter",
      description: t(
        "projects.converter_desc",
        "A versatile unit converter that allows users to convert units of continuous quantities.",
      ),
      url: "https://convertisseur-unites-nine.vercel.app/",
      image: convertisseur,
      stack: ["React", "Tailwind CSS"],
    },
  ];

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
          {t("projects.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
          {t("projects.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataProjects.map((project, index) => (
          <motion.div
            key={index}
            className="h-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <Card className="h-full group border-border bg-card overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
              <CardContent className="p-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden"
                >
                  <img
                    src={project.image}
                    loading="lazy"
                    alt={project.title}
                    className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </CardContent>

              <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle className="text-base">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="px-4 pb-4 pt-0 flex flex-col items-start gap-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={13} className="mr-1.5" />
                    {t("projects.visit")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
