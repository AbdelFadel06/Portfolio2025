// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    navbar: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      contact_button: "Me Contacter",
      language: "Langue"
    },
    about: {
      title: "À Propos de Moi",
      main_title: "Passionné par le <1>Développement Digital</1>",
      subtitle: "Développeur Full Stack créatif — de la conception à la mise en production, je transforme vos idées en solutions qui font la différence.",
      journey: {
        title: "Mon Parcours",
        paragraphs: [
          "<strong>Développeur Full Stack passionné</strong> basé à Cotonou, Bénin. Fort d'un stage professionnel de 5 mois chez <strong>Uptimise</strong> — startup développant un SaaS de gestion RH et paie — j'ai consolidé mes compétences React et Django en conditions réelles.",
          "Ce qui me motive : <strong>réfléchir, visualiser et implémenter des solutions digitales concrètes</strong> pour les entreprises. J'analyse les besoins métiers, conçois l'architecture et livre des produits qui créent une vraie valeur ajoutée.",
          "Curieux et rigoureux, j'aime <strong>tester, casser et améliorer</strong> les systèmes pour les rendre plus robustes. Toujours en veille sur les nouvelles technologies, je m'épanouis sur des projets challengeants qui ont un impact réel."
        ]
      },
      skills: {
        title: "Mes Compétences Techniques",
        items: [
          { name: "HTML / CSS", level: 92 },
          { name: "JavaScript", level: 88 },
          { name: "TypeScript", level: 80 },
          { name: "React", level: 85 },
          { name: "Python", level: 82 },
          { name: "Django", level: 80 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Git", level: 88 }
        ]
      },
      tools: {
        title: "Mes Outils de Travail",
        items: ["VS Code", "GitHub", "Git", "Figma", "Postman", "Vercel"]
      },
      languages: {
        title: "Langues",
        content: "Français (Natif) · Anglais (Courant)"
      },
      education: {
        title: "Formation",
        content: "Bachelor en Informatique · Licence Professionnelle"
      },
      stats: [
        { number: "5+", label: "Projets Réalisés" },
        { number: "5", label: "Mois de Stage Pro" }
      ]
    },
    hero: {
      greeting: "Salut, je m'appelle",
      name: "Abdel Fadel",
      surname: "SALIOU",
      title: "Développeur Full Stack basé à Cotonou",
      description: "Je crée des solutions digitales sur mesure — de l'interface utilisateur à l'API back-end — avec React, Django et les technologies modernes.",
      contact_button: "Me Contacter",
      resume_button: "Voir mon CV"
    },
    services: {
      badge: "Ce que je fais",
      title: "Mes Services",
      subtitle: "Développeur Full Stack béninois, je transforme vos idées en solutions digitales performantes. De la conception à la mise en production, je vous accompagne à chaque étape.",
      items: [
        {
          title: "Développement Frontend",
          description: "Interfaces modernes et réactives avec React, TypeScript et Tailwind CSS. UX soignée, responsive design et accessibilité sur tous les appareils.",
          icon: "🎨",
          learn_more: "En savoir plus"
        },
        {
          title: "Développement Backend",
          description: "APIs REST robustes et sécurisées avec Python et Django. Architecture scalable, authentification JWT, gestion de bases de données relationnelles.",
          icon: "⚙️",
          learn_more: "En savoir plus"
        },
        {
          title: "Applications Full Stack",
          description: "Solutions complètes de A à Z — de la maquette Figma au déploiement. Intégration de toutes les briques techniques pour votre projet digital.",
          icon: "🚀",
          learn_more: "En savoir plus"
        },
        {
          title: "Conseil & Conception",
          description: "Analyse des besoins métiers, conception d'architecture et prototypage Figma. Je vous aide à visualiser et structurer votre projet avant de coder.",
          icon: "💡",
          learn_more: "En savoir plus"
        }
      ],
      cta: {
        title: "Prêt à donner vie à votre projet ?",
        description: "Discutons de comment je peux transformer votre idée en solution digitale performante et sur mesure.",
        button: "Commençons un projet"
      }
    },
    projects: {
      badge: "Mes Réalisations",
      title: "Mon <1>Portfolio</1>",
      subtitle: "Des plateformes complètes conçues et développées de A à Z, répondant à des besoins métiers réels.",
      filters: [
        { id: 'all', name: 'Tous les projets' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'saas', name: 'SaaS' }
      ],
      items: [
        {
          id: 1,
          title: "Bug Tracker Pro",
          description: "Plateforme collaborative de tracking et gestion de bugs pour équipes de développement, avec tableaux Kanban et suivi en temps réel.",
          category: "fullstack",
          technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 2,
          title: "Gestion Commerciale 360",
          description: "Solution tout-en-un : gestion des stocks, inventaire produits, suivi des employés, gestion des livreurs et caisse intégrée.",
          category: "fullstack",
          technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 3,
          title: "Immo Gestion",
          description: "Plateforme de gestion immobilière : biens, locataires, contrats de bail, suivi des paiements et génération de quittances.",
          category: "fullstack",
          technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 4,
          title: "E-Commerce Store",
          description: "Site e-commerce complet avec catalogue produits, panier, paiement en ligne et tableau de bord administrateur.",
          category: "ecommerce",
          technologies: ["React", "Django", "Tailwind CSS", "Stripe"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 5,
          title: "Uptimise RH & Paie",
          description: "SaaS de gestion RH et paie (stage pro – 5 mois) : gestion des employés, contrats, congés et bulletins de salaire automatisés.",
          category: "saas",
          technologies: ["React", "TypeScript", "Django", "SaaS"],
          view_project: "En savoir plus",
          view_details: "Voir les détails"
        }
      ],
      cta_button: "Discutons de votre projet"
    },
    contact: {
      title: "Travaillons <1>ensemble</1>",
      subtitle: "Un projet en tête ? Envoyez-moi un message WhatsApp ou remplissez le formulaire ci-dessous.",
      contact_info: "Coordonnées",
      whatsapp: "WhatsApp",
      whatsapp_value: "+229 01 56 92 78 99",
      whatsapp_button: "Envoyer un message WhatsApp",
      email: "Email",
      email_value: "abdelfadelsaliou@gmail.com",
      location: "Localisation",
      location_value: "Cotonou, Bénin",
      availability: "Disponibilité",
      availability_value: "Lun – Ven, 9h – 18h",
      networks: "Réseaux",
      form: {
        name: "Nom complet *",
        name_placeholder: "Votre nom",
        email: "Email *",
        email_placeholder: "votre@email.com",
        subject: "Sujet *",
        subject_placeholder: "Objet de votre message",
        message: "Message *",
        message_placeholder: "Décrivez votre projet ou votre demande...",
        submit: "Envoyer via WhatsApp",
        response_time: "Je réponds généralement dans les heures qui suivent"
      }
    },
    footer: {
      brand: "Abdel SALIOU",
      email_label: "Email professionnel",
      navigation: "Navigation",
      legal: "Légal",
      connect: "Connectons-nous",
      rights: "© {{year}} Abdel Saliou. Tous droits réservés.",
      quote: "\"Transformons vos idées en expériences digitales exceptionnelles\"",
      links: {
        about: "À propos",
        services: "Services",
        projects: "Projets",
        legal: "Mentions légales",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        contact: "Me contacter"
      }
    }
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      contact_button: "Contact Me",
      language: "Language"
    },
    about: {
      title: "About Me",
      main_title: "Passionate about <1>Digital Development</1>",
      subtitle: "Creative Full Stack Developer — from design to production, I turn your ideas into solutions that make a real difference.",
      journey: {
        title: "My Journey",
        paragraphs: [
          "<strong>Passionate Full Stack Developer</strong> based in Cotonou, Benin. With a 5-month professional internship at <strong>Uptimise</strong> — a startup building an HR and payroll SaaS — I've strengthened my React and Django skills in real-world conditions.",
          "What drives me: <strong>thinking, visualizing and implementing concrete digital solutions</strong> for businesses. I love analyzing business needs, designing architecture, and delivering products that create real value.",
          "Curious and rigorous, I love to <strong>test, break and improve</strong> systems to make them more robust. Always keeping up with new technologies, I thrive on challenging projects that push the boundaries of what's possible."
        ]
      },
      skills: {
        title: "My Technical Skills",
        items: [
          { name: "HTML / CSS", level: 92 },
          { name: "JavaScript", level: 88 },
          { name: "TypeScript", level: 80 },
          { name: "React", level: 85 },
          { name: "Python", level: 82 },
          { name: "Django", level: 80 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Git", level: 88 }
        ]
      },
      tools: {
        title: "My Work Tools",
        items: ["VS Code", "GitHub", "Git", "Figma", "Postman", "Vercel"]
      },
      languages: {
        title: "Languages",
        content: "French (Native) · English (Fluent)"
      },
      education: {
        title: "Education",
        content: "Bachelor's Degree in Computer Science"
      },
      stats: [
        { number: "5+", label: "Projects Completed" },
        { number: "5", label: "Months Pro Internship" }
      ]
    },
    hero: {
      greeting: "Hi, my name is",
      name: "Abdel Fadel",
      surname: "SALIOU",
      title: "Full Stack Developer based in Cotonou",
      description: "I build custom digital solutions — from user interface to back-end API — using React, Django and modern technologies.",
      contact_button: "Contact Me",
      resume_button: "View my CV"
    },
    services: {
      badge: "What I do",
      title: "My Services",
      subtitle: "Passionate Beninese Full Stack Developer, I transform your ideas into high-performing digital solutions. From conception to production, I'm with you every step of the way.",
      items: [
        {
          title: "Frontend Development",
          description: "Modern, reactive interfaces with React, TypeScript and Tailwind CSS. Polished UX, responsive design and accessibility across all devices.",
          icon: "🎨",
          learn_more: "Learn more"
        },
        {
          title: "Backend Development",
          description: "Robust and secure REST APIs with Python and Django. Scalable architecture, JWT authentication, and relational database management.",
          icon: "⚙️",
          learn_more: "Learn more"
        },
        {
          title: "Full Stack Applications",
          description: "Complete solutions from A to Z — from Figma mockup to deployment. Integration of all technical components for your digital project.",
          icon: "🚀",
          learn_more: "Learn more"
        },
        {
          title: "Consulting & Design",
          description: "Business needs analysis, architecture design and Figma prototyping. I help you visualize and structure your project before writing a single line of code.",
          icon: "💡",
          learn_more: "Learn more"
        }
      ],
      cta: {
        title: "Ready to bring your project to life?",
        description: "Let's discuss how I can transform your idea into a high-performing, custom digital solution.",
        button: "Start a project"
      }
    },
    projects: {
      badge: "My Work",
      title: "My <1>Portfolio</1>",
      subtitle: "Complete platforms designed and built from scratch, addressing real business needs.",
      filters: [
        { id: 'all', name: 'All projects' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'saas', name: 'SaaS' }
      ],
      items: [
        {
          id: 1,
          title: "Bug Tracker Pro",
          description: "Collaborative bug tracking and management platform for development teams, with Kanban boards and real-time tracking.",
          category: "fullstack",
          technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 2,
          title: "Business Management 360",
          description: "All-in-one solution: stock management, product inventory, employee tracking, delivery management and integrated cash register.",
          category: "fullstack",
          technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 3,
          title: "Real Estate Manager",
          description: "Real estate management platform: properties, tenants, lease agreements, payment tracking and receipt generation.",
          category: "fullstack",
          technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 4,
          title: "E-Commerce Store",
          description: "Full e-commerce site with product catalog, shopping cart, online payment and admin dashboard.",
          category: "ecommerce",
          technologies: ["React", "Django", "Tailwind CSS", "Stripe"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 5,
          title: "Uptimise HR & Payroll",
          description: "HR and payroll SaaS (5-month internship): employee management, contracts, leave tracking and automated payslip generation.",
          category: "saas",
          technologies: ["React", "TypeScript", "Django", "SaaS"],
          view_project: "Learn more",
          view_details: "View details"
        }
      ],
      cta_button: "Discuss your project"
    },
    contact: {
      title: "Let's work <1>together</1>",
      subtitle: "Have a project in mind? Send me a WhatsApp message or fill in the form below.",
      contact_info: "Contact Information",
      whatsapp: "WhatsApp",
      whatsapp_value: "+229 01 56 92 78 99",
      whatsapp_button: "Send a WhatsApp message",
      email: "Email",
      email_value: "abdelfadelsaliou@gmail.com",
      location: "Location",
      location_value: "Cotonou, Benin",
      availability: "Availability",
      availability_value: "Mon – Fri, 9am – 6pm",
      networks: "Networks",
      form: {
        name: "Full Name *",
        name_placeholder: "Your name",
        email: "Email *",
        email_placeholder: "your@email.com",
        subject: "Subject *",
        subject_placeholder: "Subject of your message",
        message: "Message *",
        message_placeholder: "Describe your project or request...",
        submit: "Send via WhatsApp",
        response_time: "I usually respond within a few hours"
      }
    },
    footer: {
      brand: "Abdel SALIOU",
      email_label: "Professional email",
      navigation: "Navigation",
      legal: "Legal",
      connect: "Let's connect",
      rights: "© {{year}} Abdel Saliou. All rights reserved.",
      quote: "\"Let's transform your ideas into exceptional digital experiences\"",
      links: {
        about: "About",
        services: "Services",
        projects: "Projects",
        legal: "Legal notice",
        privacy: "Privacy policy",
        terms: "Terms of use",
        contact: "Contact me"
      }
    }
  }
};

// Lire la langue sauvegardée (évite d'écraser la préférence utilisateur)
const savedLng = localStorage.getItem('i18nextLng');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    lng: savedLng && ['fr', 'en'].includes(savedLng) ? savedLng : 'fr'
  });

export default i18n;
