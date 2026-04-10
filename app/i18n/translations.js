export const ui = {
  "nav.about": { fr: "A PROPOS", en: "ABOUT", ar: "من أنا" },
  "nav.experience": { fr: "EXPERIENCE", en: "EXPERIENCE", ar: "الخبرات" },
  "nav.skills": { fr: "COMPETENCES", en: "SKILLS", ar: "المهارات" },
  "nav.education": { fr: "FORMATION", en: "EDUCATION", ar: "التعليم" },
  "nav.projects": { fr: "PROJETS", en: "PROJECTS", ar: "المشاريع" },
  "hero.hello": { fr: "Bonjour", en: "Hello", ar: "مرحبا" },
  "hero.thisIs": { fr: "Je suis", en: "This is", ar: "أنا" },
  "hero.role": { fr: "je suis", en: "I'm a", ar: "وأنا" },
  "hero.contact": { fr: "Me contacter", en: "Contact me", ar: "تواصل معي" },
  "hero.resume": { fr: "Voir CV", en: "Get Resume", ar: "عرض السيرة الذاتية" },
  "about.title": { fr: "A PROPOS", en: "ABOUT", ar: "من أنا" },
  "about.subtitle": { fr: "Qui suis-je ?", en: "Who am I?", ar: "من أنا؟" },
  "experience.title": { fr: "Experiences", en: "Experience", ar: "الخبرات" },
  "skills.title": { fr: "Competences", en: "Skills", ar: "المهارات" },
  "education.title": { fr: "Formation", en: "Education", ar: "التعليم" },
  "contact.title": { fr: "Contact", en: "Contact", ar: "اتصل" },
  "contact.form.title": { fr: "Me Contacter", en: "Contact Me", ar: "تواصل معي" },
  "contact.form.desc": {
    fr: "Si vous avez des questions ou des preoccupations, n'hesitez pas a me contacter. Je suis ouvert aux opportunites de travail qui correspondent a mes competences et a mes interets.",
    en: "If you have any questions or concerns, please don't hesitate to contact me. I am open to work opportunities that align with my skills and interests.",
    ar: "إذا كان لديك أي سؤال أو استفسار، لا تتردد في التواصل معي. أنا منفتح على فرص العمل التي تتوافق مع مهاراتي واهتماماتي."
  },
  "contact.form.name": { fr: "Votre nom", en: "Your name", ar: "اسمك" },
  "contact.form.email": { fr: "Votre email", en: "Your email", ar: "بريدك الإلكتروني" },
  "contact.form.message": { fr: "Votre message", en: "Your message", ar: "رسالتك" },
  "contact.form.required": { fr: "Tous les champs sont requis !", en: "All fields are required!", ar: "جميع الحقول مطلوبة!" },
  "contact.form.invalidEmail": { fr: "Veuillez saisir un email valide !", en: "Please provide a valid email!", ar: "يرجى إدخال بريد إلكتروني صحيح!" },
  "contact.form.sending": { fr: "Envoi en cours...", en: "Sending message...", ar: "جاري الإرسال..." },
  "contact.form.send": { fr: "Envoyer", en: "Send message", ar: "إرسال" },
  "contact.form.sent": { fr: "Message envoye avec succes !", en: "Message sent successfully!", ar: "تم إرسال الرسالة بنجاح!" },
  "footer.by": { fr: "Portfolio par", en: "Portfolio by", ar: "ملف أعمال بواسطة" }
};

export function localizeText(value, locale) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value[locale] || value.fr || value.en || Object.values(value)[0] || "";
  }
  return String(value);
}
