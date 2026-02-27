/* eslint-disable no-undef */
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email reçu par toi (le propriétaire du site)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: user_email, // pour pouvoir répondre directement au visiteur
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
      html: `
        <h3>Nouveau message depuis le portfolio de glodi code</h3>
        <p><strong>Nom:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Email de confirmation envoyé au visiteur
    await transporter.sendMail({
      from: `"Glodi Code" <${process.env.EMAIL}>`,
      to: user_email,
      subject: "Réception de votre message",
      text: `Bonjour ${user_name},\n\nNous avons bien reçu votre message; nous vous répondrons dans les meilleurs délais.\n\nCordialement,\nGlodi Code`,
    });

    return res.status(200).json({ success: true, message: "Emails envoyés" });
  } catch (error) {
    console.error("sendEmail error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
}
