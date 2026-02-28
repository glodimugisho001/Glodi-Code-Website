/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuToggle = () => setMenuIsOpen(!menuIsOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { label: t("nav.home"), href: "#acceuil" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#project" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const getThemeValue = localStorage.getItem("themeValue");
  const getValueJs = JSON.parse(getThemeValue);
  const [isThemeDark, setIsThemeDark] = useState(getValueJs);

  useEffect(() => {
    const htmlElement = document.documentElement;
    isThemeDark
      ? htmlElement.classList.add("dark")
      : htmlElement.classList.remove("dark");
    localStorage.setItem("themeValue", JSON.stringify(isThemeDark));
  }, [isThemeDark]);

  return (
    <div className="relative md:max-w-[1000px] md:mx-auto px-4 md:px-6 lg:px-0">
      <div className="flex items-center py-4 justify-between">
        <a href="#acceuil" className="text-lg font-bold" translate="no">
          Glodi<span className="text-blue-600 dark:text-blue-400">Code.</span>
        </a>

        <div className="flex items-center gap-5">
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-sm font-medium text-muted-foreground">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer uppercase"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              <span>{i18n.language === "en" ? "en" : "fr"}</span>
            </button>
            <button
              onClick={() => setIsThemeDark(!isThemeDark)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isThemeDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              onClick={menuToggle}
              aria-label="Toggle menu"
            >
              {menuIsOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuIsOpen && (
          <motion.ul
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border px-4 py-2 flex flex-col shadow-sm"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  onClick={menuToggle}
                  href={href}
                  className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
