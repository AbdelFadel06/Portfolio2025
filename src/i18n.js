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
      subtitle: "Développeur Full Stack créatif transformant des idées en expériences digitales exceptionnelles",
      journey: {
        title: "Mon Parcours",
        paragraphs: [
          "<strong>Développeur Full Stack passionné</strong> originaire du Bénin, je mets mon expertise technique au service de projets innovants. Avec une solide expérience dans les technologies modernes, je crée des solutions digitales qui allient performance et élégance.",
          "Mon approche combine <strong>créativité et rigueur technique</strong>, me permettant de transformer des concepts complexes en interfaces intuitives et expériences utilisateur fluides.",
          "Toujours en veille technologique, j'aime relever de nouveaux défis et participer à des projets qui repoussent les limites du possible dans l'écosystème digital africain et au-delà."
        ]
      },
      skills: {
        title: "Mes Compétences Techniques",
        items: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "JavaScript", level: 88 },
          { name: "React", level: 85 },
          { name: "Python", level: 80 },
          { name: "Tailwind", level: 90 }
        ]
      },
      tools: {
        title: "Mes Outils de Travail",
        items: ["VSCode", "Figma", "GitHub", "Postman", "Vercel"]
      },
      languages: {
        title: "Langues",
        content: "Français (Natif), Anglais (Courant)"
      },
      education: {
        title: "Formation",
        content: "Bachelor en Informatique"
      },
      stats: [
        { number: "10+", label: "Projets Réalisés" },
        { number: "3+", label: "Années d'Expérience" },
        { number: "15+", label: "Technologies Maîtrisées" },
        { number: "100%", label: "Satisfaction Client" }
      ]
    },
    hero: {
      greeting: "Salut, je m'appelle",
      name: "Abdel Fadel",
      surname: "SALIOU",
      title: "Développeur Full Stack basé à Cotonou",
      description: "Passionné par la création de solutions digitales innovantes, je transforme vos idées en expériences web exceptionnelles avec les technologies modernes.",
      contact_button: "Me Contacter",
      resume_button: "Voir mon CV"
    },
    services: {
      badge: "Mes Compétences",
      title: "Mes Services",
      subtitle: "Développeur Full Stack béninois passionné, je transforme vos idées en solutions digitales performantes. De la conception à la mise en production, je vous accompagne dans la réalisation de vos projets web.",
      items: [
        {
          title: "Développement Frontend",
          description: "Création d'interfaces utilisateur modernes et réactives avec React, Next.js et Tailwind CSS. J'assure une expérience utilisateur fluide et accessible sur tous les appareils.",
          icon: "🎨",
          learn_more: "En savoir plus"
        },
        {
          title: "Développement Backend",
          description: "Conception d'APIs robustes et sécurisées avec Node.js, Express et bases de données. Architecture scalable pour vos applications web et mobiles.",
          icon: "⚙️",
          learn_more: "En savoir plus"
        },
        {
          title: "Applications Full Stack",
          description: "Développement de solutions complètes from scratch to deployment. Intégration de toutes les briques techniques pour votre projet digital.",
          icon: "🚀",
          learn_more: "En savoir plus"
        },
        {
          title: "Consulting Tech",
          description: "Accompagnement technique et conseils pour optimiser vos projets existants ou démarrer de nouvelles initiatives digitales avec les bonnes technologies.",
          icon: "💡",
          learn_more: "En savoir plus"
        }
      ],
      cta: {
        title: "Prêt à donner vie à votre projet ?",
        description: "Discutons de comment je peux vous aider à concrétiser vos ambitions digitales avec des solutions sur mesure.",
        button: "Commençons un projet"
      }
    },
    projects: {
      badge: "Mes Réalisations",
      title: "Mon <1>Portfolio</1>",
      subtitle: "Découvrez une sélection de mes projets récents où j'ai mis en œuvre mes compétences en développement fullstack pour créer des solutions digitales innovantes.",
      filters: [
        { id: 'all', name: 'Tous les projets' },
        { id: 'web', name: 'Développement Web' },
        { id: 'mobile', name: 'Applications Mobile' },
        { id: 'backend', name: 'Backend & API' }
      ],
      items: [
        {
          id: 1,
          title: "Plateforme E-commerce",
          description: "Site e-commerce complet avec paiement en ligne et dashboard admin",
          category: "web",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 2,
          title: "Application Mobile",
          description: "App de gestion de tâches avec synchronisation cloud",
          category: "mobile",
          technologies: ["React Native", "Firebase", "Redux"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 3,
          title: "Site Vitrine Corporate",
          description: "Site institutionnel moderne avec gestion de contenu",
          category: "web",
          technologies: ["Next.js", "Tailwind", "Sanity CMS"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 4,
          title: "API RESTful",
          description: "API scalable avec authentification JWT et documentation",
          category: "backend",
          technologies: ["Express", "JWT", "Swagger", "PostgreSQL"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 5,
          title: "Dashboard Analytics",
          description: "Tableau de bord avec visualisation de données en temps réel",
          category: "web",
          technologies: ["Vue.js", "D3.js", "Socket.io"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        },
        {
          id: 6,
          title: "Application SaaS",
          description: "Solution SaaS complète avec abonnements et multi-tenants",
          category: "web",
          technologies: ["React", "NestJS", "Redis", "Docker"],
          view_project: "Voir le projet",
          view_details: "Voir les détails"
        }
      ],
      cta_button: "Discutons de votre projet"
    },
    contact: {
      title: "Travaillons <1>ensemble</1>",
      subtitle: "Discutons de votre projet et voyons comment je peux vous aider à le concrétiser.",
      contact_info: "Coordonnées",
      email: "Email",
      email_value: "abdelfadelsaliou@gmail.com",
      location: "Localisation",
      location_value: "Cotonou, Bénin",
      availability: "Disponibilité",
      availability_value: "Lun - Ven, 9h - 18h",
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
        submit: "Envoyer le message",
        response_time: "Je vous réponds dans les 24 heures"
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
      subtitle: "Creative Full Stack Developer transforming ideas into exceptional digital experiences",
      journey: {
        title: "My Journey",
        paragraphs: [
          "<strong>Passionate Full Stack Developer</strong> from Benin, I put my technical expertise at the service of innovative projects. With solid experience in modern technologies, I create digital solutions that combine performance and elegance.",
          "My approach combines <strong>creativity and technical rigor</strong>, allowing me to transform complex concepts into intuitive interfaces and smooth user experiences.",
          "Always keeping up with technology trends, I enjoy taking on new challenges and participating in projects that push the boundaries of what's possible in the African digital ecosystem and beyond."
        ]
      },
      skills: {
        title: "My Technical Skills",
        items: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "JavaScript", level: 88 },
          { name: "React", level: 85 },
          { name: "Python", level: 80 },
          { name: "Tailwind", level: 90 }
        ]
      },
      tools: {
        title: "My Work Tools",
        items: ["VSCode", "Figma", "GitHub", "Postman", "Vercel"]
      },
      languages: {
        title: "Languages",
        content: "French (Native), English (Fluent)"
      },
      education: {
        title: "Education",
        content: "Bachelor's Degree in Computer Science"
      },
      stats: [
        { number: "10+", label: "Projects Completed" },
        { number: "3+", label: "Years of Experience" },
        { number: "15+", label: "Mastered Technologies" },
        { number: "100%", label: "Client Satisfaction" }
      ]
    },
    hero: {
      greeting: "Hi, my name is",
      name: "Abdel Fadel",
      surname: "SALIOU",
      title: "Full Stack Developer based in Cotonou",
      description: "Passionate about creating innovative digital solutions, I transform your ideas into exceptional web experiences with modern technologies.",
      contact_button: "Contact Me",
      resume_button: "View my CV"
    },
    services: {
      badge: "My Skills",
      title: "My Services",
      subtitle: "Passionate Beninese Full Stack Developer, I transform your ideas into high-performing digital solutions. From conception to production, I accompany you in the realization of your web projects.",
      items: [
        {
          title: "Frontend Development",
          description: "Creation of modern and reactive user interfaces with React, Next.js and Tailwind CSS. I ensure a smooth and accessible user experience on all devices.",
          icon: "🎨",
          learn_more: "Learn more"
        },
        {
          title: "Backend Development",
          description: "Design of robust and secure APIs with Node.js, Express and databases. Scalable architecture for your web and mobile applications.",
          icon: "⚙️",
          learn_more: "Learn more"
        },
        {
          title: "Full Stack Applications",
          description: "Development of complete solutions from scratch to deployment. Integration of all technical components for your digital project.",
          icon: "🚀",
          learn_more: "Learn more"
        },
        {
          title: "Tech Consulting",
          description: "Technical support and advice to optimize your existing projects or start new digital initiatives with the right technologies.",
          icon: "💡",
          learn_more: "Learn more"
        }
      ],
      cta: {
        title: "Ready to bring your project to life?",
        description: "Let's discuss how I can help you achieve your digital ambitions with custom solutions.",
        button: "Start a project"
      }
    },
    projects: {
      badge: "My Work",
      title: "My <1>Portfolio</1>",
      subtitle: "Discover a selection of my recent projects where I implemented my fullstack development skills to create innovative digital solutions.",
      filters: [
        { id: 'all', name: 'All projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'backend', name: 'Backend & API' }
      ],
      items: [
        {
          id: 1,
          title: "E-commerce Platform",
          description: "Complete e-commerce site with online payment and admin dashboard",
          category: "web",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 2,
          title: "Mobile Application",
          description: "Task management app with cloud synchronization",
          category: "mobile",
          technologies: ["React Native", "Firebase", "Redux"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 3,
          title: "Corporate Website",
          description: "Modern institutional website with content management",
          category: "web",
          technologies: ["Next.js", "Tailwind", "Sanity CMS"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 4,
          title: "RESTful API",
          description: "Scalable API with JWT authentication and documentation",
          category: "backend",
          technologies: ["Express", "JWT", "Swagger", "PostgreSQL"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 5,
          title: "Analytics Dashboard",
          description: "Dashboard with real-time data visualization",
          category: "web",
          technologies: ["Vue.js", "D3.js", "Socket.io"],
          view_project: "View project",
          view_details: "View details"
        },
        {
          id: 6,
          title: "SaaS Application",
          description: "Complete SaaS solution with subscriptions and multi-tenancy",
          category: "web",
          technologies: ["React", "NestJS", "Redis", "Docker"],
          view_project: "View project",
          view_details: "View details"
        }
      ],
      cta_button: "Discuss your project"
    },
    contact: {
      title: "Let's work <1>together</1>",
      subtitle: "Let's discuss your project and see how I can help you bring it to life.",
      contact_info: "Contact Information",
      email: "Email",
      email_value: "abdelfadelsaliou@gmail.com",
      location: "Location",
      location_value: "Cotonou, Benin",
      availability: "Availability",
      availability_value: "Mon - Fri, 9am - 6pm",
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
        submit: "Send message",
        response_time: "I'll respond within 24 hours"
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

// Configuration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'querystring', 'navigator'],
      caches: ['localStorage'],
      checkWhitelist: true
    },
    lng: 'fr'
  });

export default i18n;
