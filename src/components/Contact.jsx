/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  LoaderCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { t } = useTranslation();

  const dataContact = [
    {
      title: t("contact.form.email"),
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=glodicode.dev@gmail.com",
      display: "glodicode.dev@gmail.com",
    },
    {
      title: t("contact.form.phone"),
      icon: Phone,
      href: "tel:+243989371602",
      display: "+243 98 937 16 02",
    },
    {
      title: t("contact.info_title_loc", "Location"),
      icon: MapPin,
      href: null,
      display: "Goma, RDC",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/glodimugisho001",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/glodi-mugisho-877b74317/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/GlodiMugisho", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/glodi_mugisho/",
      label: "Instagram",
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
          {t("contact.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-5">
        <ContactInfo
          dataContact={dataContact}
          socialLinks={socialLinks}
          t={t}
        />
        <ContactForm t={t} />
      </div>
    </div>
  );
}

function ContactInfo({ dataContact, socialLinks, t }) {
  return (
    <motion.div
      className="flex-1 p-6 rounded-xl border border-border bg-card shadow-sm"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-5">{t("contact.info_title")}</h2>

      <div className="space-y-4 mb-8">
        {dataContact.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 p-2 rounded-lg bg-muted shrink-0">
                <Icon size={15} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                  {item.title}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.display}
                  </a>
                ) : (
                  <p className="text-sm">{item.display}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">{t("contact.follow_me")}</h3>
        <div className="flex gap-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ContactForm({ t }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const schemas = yup.object().shape({
    user_name: yup.string().required(t("contact.form.validation.name_req")),
    user_email: yup
      .string()
      .email(t("contact.form.validation.email_inv"))
      .required(t("contact.form.validation.email_req")),
    subject: yup.string().required(t("contact.form.validation.subject_req")),
    message: yup.string().required(t("contact.form.validation.message_req")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas),
    mode: "onTouched",
  });

  const sendEmail = async (formData, e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success(t("contact.form.success"), { id: "email" });
        setIsLoading(false);
        reset();
      } else {
        toast.error(t("contact.form.error"), { id: "email" });
        setIsLoading(false);
        reset();
      }
    } catch (error) {
      console.log("Network error:", error);
      setIsLoading(false);
      reset();
    }
  };

  return (
    <motion.form
      ref={form}
      className="flex-1 p-6 rounded-xl border border-border bg-card shadow-sm flex flex-col gap-4"
      onSubmit={handleSubmit((formData, e) => sendEmail(formData, e))}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="space-y-1.5">
        <Label htmlFor="user_name">{t("contact.form.name")}</Label>
        <Input
          id="user_name"
          type="text"
          placeholder={t("contact.form.name_placeholder")}
          {...register("user_name")}
        />
        {errors.user_name && (
          <p className="text-xs text-destructive">{errors.user_name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="user_email">{t("contact.form.email")}</Label>
        <Input
          id="user_email"
          type="email"
          placeholder={t("contact.form.email_placeholder")}
          {...register("user_email")}
        />
        {errors.user_email && (
          <p className="text-xs text-destructive">
            {errors.user_email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject">{t("contact.form.subject")}</Label>
        <Input
          id="subject"
          type="text"
          placeholder={t("contact.form.subject_placeholder")}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder={t("contact.form.message_placeholder")}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full mt-1"
        onClick={() => setIsLoading(true)}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoaderCircle size={18} className="animate-spin" />
        ) : (
          <>
            <Send size={15} className="mr-2" />
            {t("contact.form.send")}
          </>
        )}
      </Button>
    </motion.form>
  );
}
