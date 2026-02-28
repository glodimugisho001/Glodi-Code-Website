/* eslint-disable no-unused-vars */
import React from "react";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const quickLinks = [
  { label: "Home", href: "#acceuil", key: "nav.home" },
  { label: "About", href: "#about", key: "nav.about" },
  { label: "Skills", href: "#skills", key: "nav.skills" },
  { label: "Projects", href: "#project", key: "nav.projects" },
  { label: "Contact", href: "#contact", key: "nav.contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/glodimugisho001", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/glodi-mugisho-877b74317/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/GlodiMugisho", label: "Twitter" },
];

const contactItems = [
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&to=glodicode.dev@gmail.com",
    display: "glodicode.dev@gmail.com",
  },
  { icon: Phone, href: "tel:+243989371602", display: "+243 98 937 16 02" },
  { icon: MapPin, href: null, display: "Goma, RDC" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="md:max-w-[1000px] md:mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        {/* Brand */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold mb-2" translate="no">
            GlodiCode.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            {t("footer.description")}
          </p>
          <div className="flex gap-2 mt-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            {t("footer.quick_links")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map(({ key, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            {t("footer.contact")}
          </h3>
          <ul className="space-y-2.5">
            {contactItems.map(({ icon: Icon, href, display }) => (
              <li key={display} className="flex items-center gap-2">
                <Icon size={13} className="text-slate-500 shrink-0" />
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {display}
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">{display}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Glodi Code. {t("footer.rights")}
        </p>
        <p className="text-xs text-slate-500">{t("footer.built_with")}</p>
      </div>
    </footer>
  );
}
