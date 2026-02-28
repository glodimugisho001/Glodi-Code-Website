import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        hello: "Hello, I'm",
        title: "Full Stack Developer",
        description:
          "I build modern, performant web applications from end to end. React, Next.js on the frontend — API Routes, Server Actions, Prisma & PostgreSQL on the backend.",
        contact: "Contact Me",
        view_work: "View My Work",
      },
      about: {
        title: "About Me",
        subtitle:
          "I'm a passionate Full Stack Developer with a keen eye for design and a dedication to creating seamless, end-to-end user experiences.",
        experience: "Experience",
        exp_desc:
          "I have almost 2 years of experience in web development, mainly self-taught and through personal projects. I am passionate about continuous learning and creating innovative solutions.",
        education: "Education",
        edu_desc:
          "High school diploma in electronics. Currently a university student in Computer Engineering.",
      },
      skills: {
        title: "Skills & Technologies",
        subtitle:
          "I build complete web applications — from pixel-perfect UIs to robust backends with databases.",
        additional: "Additional Skills",
      },
      projects: {
        title: "Projects",
        subtitle:
          "Here are some of my recent projects that showcase my skills and creativity.",
        visit: "Visit Site",
        portfolio_desc:
          "My own web portfolio site, designed to showcase my projects, skills, and experience.",
        little_lemon_desc:
          "App for helping people book a table at the Little Lemon restaurant.",
        blog_desc:
          "A modern and minimalist blog designed for effortless publishing and reading, with a smooth and elegant interface.",
        quiz_desc:
          "A simple quiz app with a clean and intuitive interface for testing your knowledge.",
        todo_desc:
          "A todo list with a clean interface for managing tasks, powered by a full-stack backend.",
        converter_desc:
          "A versatile unit converter that allows users to convert units of continuous quantities.",
      },
      footer: {
        description:
          "A passionate Full Stack Developer building exceptional digital experiences with modern web technologies.",
        quick_links: "Quick Links",
        contact: "Contact",
        rights: "All rights reserved.",
        built_with: "Built with React & Tailwind CSS",
      },
      contact: {
        title: "Get In Touch",
        subtitle:
          "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!",
        info_title: "Contact Information",
        follow_me: "Follow Me",
        form: {
          name: "Name",
          name_placeholder: "Your full name",
          email: "Email",
          email_placeholder: "your@email.com",
          subject: "Subject",
          subject_placeholder: "What's this about?",
          message: "Message",
          message_placeholder: "Your message...",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully.",
          error: "Failed to send message.",
          validation: {
            name_req: "Name is required",
            email_req: "Email is required",
            email_inv: "Invalid email format",
            subject_req: "Subject is required",
            message_req: "Message is required",
          },
        },
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      hero: {
        hello: "Bonjour, je suis",
        title: "Développeur Full Stack",
        description:
          "Je construis des applications web modernes et performantes de bout en bout. React, Next.js en frontend — API Routes, Server Actions, Prisma & PostgreSQL en backend.",
        contact: "Contactez-moi",
        view_work: "Voir mes travaux",
      },
      about: {
        title: "À propos de moi",
        subtitle:
          "Je suis un Développeur Full Stack passionné avec un œil attentif pour le design et un dévouement à la création d'expériences utilisateur fluides de bout en bout.",
        experience: "Expérience",
        exp_desc:
          "J'ai presque 2 ans d'expérience en développement web, principalement en autodidacte et à travers des projets personnels. Je suis passionné par l'apprentissage continu et la création de solutions innovantes.",
        education: "Formation",
        edu_desc:
          "Diplôme d'études secondaires en électronique. Actuellement étudiant à l'université en Génie Informatique.",
      },
      skills: {
        title: "Compétences & Technologies",
        subtitle:
          "Je construis des applications web complètes — des interfaces pixel-perfect aux backends robustes avec bases de données.",
        additional: "Compétences Additionnelles",
      },
      projects: {
        title: "Projets",
        subtitle:
          "Voici quelques-uns de mes projets récents qui illustrent mes compétences et ma créativité.",
        visit: "Visiter le site",
        portfolio_desc:
          "Mon propre site portfolio, conçu pour présenter mes projets, mes compétences et mon expérience.",
        little_lemon_desc:
          "Application pour aider les gens à réserver une table au restaurant Little Lemon.",
        blog_desc:
          "Un blog moderne et minimaliste conçu pour une publication et une lecture sans effort, avec une interface fluide et élégante.",
        quiz_desc:
          "Une application de quiz simple avec une interface intuitive pour tester vos connaissances.",
        todo_desc:
          "Une liste de tâches avec une interface propre pour gérer les tâches, propulsée par un backend full-stack.",
        converter_desc:
          "Un convertisseur d'unités polyvalent qui permet aux utilisateurs de convertir des unités de quantités continues.",
      },
      footer: {
        description:
          "Un Développeur Full Stack passionné créant des expériences numériques exceptionnelles avec des technologies web modernes.",
        quick_links: "Liens rapides",
        contact: "Contact",
        rights: "Tous droits réservés.",
        built_with: "Construit avec React & Tailwind CSS",
      },
      contact: {
        title: "Contactez-moi",
        subtitle:
          "Vous avez un projet en tête ou souhaitez discuter d'opportunités ? Je serais ravi de vous entendre !",
        info_title: "Informations de Contact",
        follow_me: "Suivez-moi",
        form: {
          name: "Nom",
          name_placeholder: "Votre nom complet",
          email: "Email",
          email_placeholder: "votre@email.com",
          subject: "Sujet",
          subject_placeholder: "De quoi s'agit-il ?",
          message: "Message",
          message_placeholder: "Votre message...",
          send: "Envoyer le message",
          sending: "Envoi...",
          success: "Message envoyé avec succès.",
          error: "Échec de l'envoi du message.",
          validation: {
            name_req: "Le nom est requis",
            email_req: "L'email est requis",
            email_inv: "Format d'email invalide",
            subject_req: "Le sujet est requis",
            message_req: "Le message est requis",
          },
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
