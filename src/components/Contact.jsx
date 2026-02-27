/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";

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

const schemas = yup.object().shape({
  user_name: yup.string().required("Name is required"),
  user_email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const dataContact = [
  {
    title: "Email",
    icon: Mail,
    description:
      "https://mail.google.com/mail/?view=cm&to=glodicode.dev@gmail.com",
  },
  {
    title: "phone",
    icon: Phone,
    description: "+243 97 600 42 67",
  },
  {
    title: "Location",
    icon: MapPin,
    description: "Goma, RDC",
  },
];

export default function Contact() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsPhone(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aimatePhoneInitial = { opacity: 0, x: 50 };
  const aimatePhonefinal = { opacity: 1, x: 0 };
  const aimateDesktopInitial = { opacity: 0, y: 50 };
  const aimateDesktopfinal = { opacity: 1, y: 0 };

  return (
    <>
      <div className="md:max-w-[1000px] md:mx-auto mt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <p className=" max-w-2xl mx-auto dark:text-[#CBD5E1] text-[#1A1A1A]">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-8 ">
          <ContactInfo
            aimatePhoneInitial={aimatePhoneInitial}
            aimatePhonefinal={aimatePhonefinal}
            aimateDesktopInitial={aimateDesktopInitial}
            aimateDesktopfinal={aimateDesktopfinal}
            isPhone={isPhone}
          />
          <ContactFrom
            aimatePhoneInitial={aimatePhoneInitial}
            aimatePhonefinal={aimatePhonefinal}
            aimateDesktopInitial={aimateDesktopInitial}
            aimateDesktopfinal={aimateDesktopfinal}
            isPhone={isPhone}
          />
        </div>
      </div>
    </>
  );
}

function ContactInfoFollow() {
  return (
    <>
      <div className="flex-1 ">
        <h2 className="text-2xl font-bold  mb-6">Contact Information</h2>
        {dataContact.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-4 mb-4">
              <Icon size={32} />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                {item.title.toLowerCase() === "email" ? (
                  <a
                    href={`${item.description}`}
                    className="text-blue-600 hover:underline cursor-pointer"
                    target="_blank"
                  >
                    glodicode.dev@gmail.com
                  </a>
                ) : item.title.toLowerCase() === "phone" ? (
                  <a
                    href={`tel:${item.description.replace(/\s+/g, "")}`}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function ContactInfo({
  isPhone,
  aimatePhoneInitial,
  aimatePhonefinal,
  aimateDesktopInitial,
  aimateDesktopfinal,
}) {
  return (
    <motion.div
      className="flex-1 p-4 rounded-lg shadow-md dark:bg-gray-800  dark:text-white bg-gray-200 text-[#1A1A1A]"
      initial={isPhone ? aimatePhoneInitial : aimateDesktopInitial}
      whileInView={isPhone ? aimatePhonefinal : aimateDesktopfinal}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <ContactInfoFollow />
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Follow Me</h2>
        <div className="flex gap-4">
          <a href="https://github.com/glodimugisho001">
            <Github
              size={24}
              className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
            />
          </a>
          <a href="https://www.linkedin.com/in/glodi-mugisho-877b74317/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bca%2Bdpju4TxWSoc7BbmtDhA%3D%3D">
            <Linkedin
              size={24}
              className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
            />
          </a>
          <a href="https://x.com/GlodiMugisho">
            <Twitter
              size={24}
              className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
            />
          </a>
          <a href="https://www.instagram.com/glodi_mugisho/">
            <Instagram
              size={24}
              className="cursor-pointer hover:text-[var(--link-hover)] active:text-[var(--link-active)] transition-[var(--link-transition)]"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ContactFrom({
  isPhone,
  aimatePhoneInitial,
  aimatePhonefinal,
  aimateDesktopInitial,
  aimateDesktopfinal,
}) {
  const [IsLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas),
    mode: "onTouched",
  });

  const form = useRef();
  const sendEmail = async (formData, e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        alert("Message envoyé avec succès!");
        console.log("Succès :", result);
        setIsLoading(false);
        reset();
        return;
      } else {
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        console.log("Erreur API :", result);
        setIsLoading(false);
        reset();
      }
    } catch (error) {
      console.log("Erreur réseau :", error);
      setIsLoading(false);
      reset();
    }
  };
  return (
    <motion.form
      ref={form}
      className="flex-1 px-6 py-8 rounded-lg shadow-md dark:bg-gray-800 dark:text-white bg-gray-200 text-black"
      onSubmit={handleSubmit((formData, e) => sendEmail(formData, e))}
      initial={isPhone ? aimatePhoneInitial : aimateDesktopInitial}
      whileInView={isPhone ? aimatePhonefinal : aimateDesktopfinal}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="mb-4">
        <label htmlFor="user_name" className="block mb-1">
          Name
        </label>
        <input
          className="w-full p-2 border rounded-md dark:bg-gray-900 bg-[#F5F5F5] outline-none focus:ring-2 focus:ring-blue-600 dark:placeholder:text-gray-400 placeholder:text-gray-500 placeholder:text-sm"
          id="user_name"
          name="user_name"
          type="text"
          placeholder="your full name..."
          {...register("user_name")}
        />
        {errors.user_name && (
          <p className="text-red-500 font-medium">
            {" "}
            {errors.user_name.message}{" "}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="user_email" className="block mb-1">
          Email
        </label>
        <input
          className="w-full p-2 border rounded-md dark:bg-gray-900 bg-[#F5F5F5] outline-none focus:ring-2 focus:ring-blue-600 dark:placeholder:text-gray-400 placeholder:text-gray-500 placeholder:text-sm"
          id="user_email"
          name="user_email"
          type="email"
          placeholder="your email"
          {...register("user_email")}
        />
        {errors.user_email && (
          <p className="text-red-500 font-medium">
            {errors.user_email.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1">
          Subject
        </label>
        <input
          className="w-full p-2 border rounded-md dark:bg-gray-900 bg-[#F5F5F5] outline-none focus:ring-2 focus:ring-blue-600 dark:placeholder:text-gray-400 placeholder:text-gray-500 placeholder:text-sm"
          id="subject"
          name="subject"
          type="text"
          placeholder="the topic here..."
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 font-medium">{errors.subject.message}</p>
        )}
      </div>
      <div className="mb-7">
        <label htmlFor="message" className="block mb-1">
          Message
        </label>
        <textarea
          className="w-full p-2 border rounded-md dark:bg-gray-900 bg-[#F5F5F5] outline-none focus:ring-2 focus:ring-blue-600 dark:placeholder:text-gray-400 placeholder:text-gray-500 placeholder:text-sm"
          id="message"
          name="message"
          rows="4"
          placeholder="some message..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 font-medium">{errors.message.message}</p>
        )}
      </div>
      <button
        onClick={() => setIsLoading(true)}
        type="submit"
        value="send message"
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-900 cursor-pointer text-white p-2 rounded-md transition-colors duration-200 w-full"
      >
        {IsLoading ? (
          <LoaderCircle
            size={24}
            className="animate-spin w-full flex justify-center items-center"
          />
        ) : (
          <>
            <Send className="inline mr-2" /> Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}

export { ContactInfoFollow };
