export type Lang = "en" | "ar";

export const personalInfo = {
  email: "sayed.algioshy@gmail.com",
  phoneDisplay: "+20 100 470 2754",
  phoneHref: "tel:+201004702754",
  location: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  initials: "EG",
};

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    project: "Project",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Elsayed Ahmed Gioshy",
    title: "IT Support Specialist | Systems & Network Technician",
    summary:
      "I keep computers and networks running — from hardware troubleshooting and Windows setup to router configuration and remote support. MIS graduate with hands-on project experience.",
    available: "Open to IT opportunities",
    downloadCv: "Download CV",
    contactMe: "Contact Me",
  },
  about: {
    kicker: "Profile",
    title: "About Me",
    paragraphs: [
      "Detail-oriented IT Support Specialist with a solid foundation in hardware troubleshooting, Windows installation and configuration, basic networking, and data management. Familiar with PC assembly, driver installation, Microsoft Office, Google Workspace, and remote support tools such as AnyDesk and TeamViewer.",
      "I hold a Bachelor's degree in Management Information Systems, with academic project experience in database design, system analysis, and role-based access control. I'm eager to apply my technical skills, troubleshoot IT issues, and support reliable daily operations while continuing to develop professionally.",
    ],
  },
  skills: {
    kicker: "What I Do",
    title: "Skills & Expertise",
    items: [
      {
        icon: "hardware",
        title: "IT Support & Hardware",
        desc: "PC assembly, hardware diagnostics, Windows installation and configuration, driver installation, and everyday troubleshooting.",
      },
      {
        icon: "network",
        title: "Networking",
        desc: "Home and office router configuration, access point setup, and network printer sharing.",
      },
      {
        icon: "office",
        title: "Office & Workspace",
        desc: "Working knowledge of Microsoft Word, Excel, PowerPoint, Google Workspace, and spreadsheet management.",
      },
      {
        icon: "data",
        title: "Data Entry & Management",
        desc: "Accurate data entry, record management, spreadsheet organization, and sharp attention to detail.",
      },
      {
        icon: "remote",
        title: "Remote Support",
        desc: "Hands-on with AnyDesk, TeamViewer, and Windows Remote Desktop for remote technical assistance.",
      },
      {
        icon: "systems",
        title: "Databases & Systems Analysis",
        desc: "Project experience in database design, requirements gathering, system analysis, role-based access control, and software testing.",
      },
    ],
  },
  project: {
    kicker: "Featured Project",
    title: "Highlighted Work",
    name: "Automotive Service Center Management System",
    period: "Sep 2024 – May 2025",
    periodLabel: "Graduation project",
    description:
      "An integrated management system for automotive service centers that streamlines workshop operations, appointment scheduling, and customer record management.",
    bullets: [
      "Centralized system for managing workshop operations and customer records.",
      "Designed a database for inventory tracking, spare parts, and maintenance invoicing.",
      "Role-based access control for administrators, reception staff, and technicians.",
      "System analysis, requirements gathering, and user testing to improve usability.",
    ],
    tags: ["Database Design", "System Analysis", "Role-Based Access", "User Testing"],
  },
  education: {
    kicker: "Education & Languages",
    title: "Background",
    degree: "Bachelor's Degree in Management Information Systems (MIS)",
    institute: "Higher Institute for Management Information Systems, Egypt",
    date: "May 2025",
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native", value: 100 },
      { name: "English", level: "Conversational", value: 60 },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's Get In Touch",
    subtitle: "Looking for a reliable IT support specialist? I'd love to hear from you.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    cta: "Email Me",
    footer: "© 2026 Elsayed Ahmed Gioshy. All rights reserved.",
  },
};

export type Content = typeof en;

const ar: Content = {
  nav: {
    about: "نبذة عني",
    skills: "المهارات",
    project: "المشروع",
    education: "التعليم",
    contact: "تواصل",
  },
  hero: {
    greeting: "مرحباً، أنا",
    name: "السيد أحمد جيوشي",
    title: "أخصائي دعم فني | فني أنظمة وشبكات",
    summary:
      "أعمل على تشغيل الحواسيب والشبكات — من صيانة الأجهزة وتثبيت ويندوز إلى إعداد الراوترات والدعم عن بُعد. خريج نظم معلومات إدارية بخبرة مشاريع عملية.",
    available: "متاح لفرص العمل",
    downloadCv: "تحميل السيرة الذاتية",
    contactMe: "تواصل معي",
  },
  about: {
    kicker: "الملف الشخصي",
    title: "نبذة عني",
    paragraphs: [
      "أخصائي دعم فني دقيق في التفاصيل، أمتلك أساساً متيناً في صيانة الأجهزة وتثبيت ويندوز وإعداده وأساسيات الشبكات وإدارة البيانات. أعرف تجميع الحواسيب وتثبيت التعريفات وبرامج مايكروسوفت أوفيس وجوجل ورك سبيس وأدوات الدعم عن بُعد مثل AnyDesk وTeamViewer.",
      "أحمل درجة البكالوريوس في نظم المعلومات الإدارية، مع خبرة أكاديمية في تصميم قواعد البيانات وتحليل الأنظمة والصلاحيات حسب الدور. أحرص على توظيف مهاراتي التقنية وحل المشكلات التقنية ودعم استمرارية العمل اليومي مع مواصلة تطوير نفسي مهنياً.",
    ],
  },
  skills: {
    kicker: "ما أقدمه",
    title: "المهارات والخبرات",
    items: [
      {
        icon: "hardware",
        title: "الدعم الفني وصيانة الأجهزة",
        desc: "تجميع الحواسيب وفحص الأعطال وتثبيت ويندوز وإعداده وتثبيت التعريفات وحل المشكلات اليومية.",
      },
      {
        icon: "network",
        title: "الشبكات",
        desc: "إعداد راوترات المنازل والمكاتب ونقاط الوصول ومشاركة طابعات الشبكة.",
      },
      {
        icon: "office",
        title: "أوفيس وجوجل ورك سبيس",
        desc: "إجادة العمل على وورد وإكسل وباوربوينت وجوجل ورك سبيس وإدارة جداول البيانات.",
      },
      {
        icon: "data",
        title: "إدخال البيانات وإدارتها",
        desc: "إدخال بيانات دقيق وإدارة السجلات وتنظيم جداول البيانات وعناية فائقة بالتفاصيل.",
      },
      {
        icon: "remote",
        title: "الدعم عن بُعد",
        desc: "خبرة عملية في AnyDesk وTeamViewer وسطح المكتب البعيد في ويندوز للمساعدة التقنية عن بُعد.",
      },
      {
        icon: "systems",
        title: "قواعد البيانات وتحليل الأنظمة",
        desc: "خبرة في تصميم قواعد البيانات وجمع المتطلبات وتحليل الأنظمة والصلاحيات حسب الدور واختبار البرمجيات.",
      },
    ],
  },
  project: {
    kicker: "مشروع مميز",
    title: "أعمال مختارة",
    name: "نظام إدارة مركز خدمة السيارات",
    period: "سبتمبر 2024 – مايو 2025",
    periodLabel: "مشروع التخرج",
    description:
      "نظام متكامل لإدارة مراكز خدمة السيارات يسهّل عمليات الورشة وجدولة المواعيد وإدارة سجلات العملاء.",
    bullets: [
      "نظام مركزي لإدارة عمليات الورشة وسجلات العملاء.",
      "تصميم قاعدة بيانات لتتبع المخزون وقطع الغيار وفواتير الصيانة.",
      "صلاحيات حسب الدور للإدارة وموظفي الاستقبال والفنيين.",
      "تحليل النظام وجمع المتطلبات واختبار المستخدم لتحسين سهولة الاستخدام.",
    ],
    tags: ["تصميم قواعد البيانات", "تحليل الأنظمة", "صلاحيات حسب الدور", "اختبار المستخدم"],
  },
  education: {
    kicker: "التعليم واللغات",
    title: "المؤهلات",
    degree: "بكالوريوس نظم المعلومات الإدارية (MIS)",
    institute: "المعهد العالي لنظم المعلومات الإدارية، مصر",
    date: "مايو 2025",
    languagesTitle: "اللغات",
    languages: [
      { name: "العربية", level: "اللغة الأم", value: 100 },
      { name: "الإنجليزية", level: "محادثة", value: 60 },
    ],
  },
  contact: {
    kicker: "تواصل معي",
    title: "لنتحدث",
    subtitle: "تبحث عن أخصائي دعم فني موثوق؟ يسعدني تواصلك معي.",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    locationLabel: "الموقع",
    cta: "راسلني",
    footer: "© 2026 السيد أحمد جيوشي. جميع الحقوق محفوظة.",
  },
};

export const content: Record<Lang, Content> = { en, ar };
