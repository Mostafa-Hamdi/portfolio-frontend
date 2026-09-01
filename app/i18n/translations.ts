export type Lang = "ar" | "en";

export const translations = {
  ar: {
    meta: {
      title:
        "مصطفى حمدي | وكالة تطوير مواقع وتجارة إلكترونية — Shopify وWooCommerce وبرمجة مخصصة",
      description:
        "مواقع تجارة إلكترونية وتطبيقات ويب مخصصة بأكواد نظيفة — بدون قوالب جاهزة. تطوير Shopify وWooCommerce وووردبريس وبرمجة مخصصة، إعداد الاستضافة، وأتمتة سير العمل. احصل على عرض سعر مجاني اليوم.",
    },
    header: {
      nav: { home: "الرئيسية", approach: "منهجنا", services: "خدماتنا", work: "أعمالنا", contact: "تواصل" },
      cta: "احصل على عرض سعر مجاني",
    },
    hero: {
      badge: "وكالة تطوير مواقع وتجارة إلكترونية",
      titleLine1: "تجارة إلكترونية و",
      titleLine2: "تطوير مواقع احترافي",
      description1: "نصمم ونطوّر",
      descriptionHighlight1: "متاجر Shopify وWooCommerce ومواقع ووردبريس مخصصة",
      description2: "مبنية للسرعة والتحويلات والنمو —",
      descriptionHighlight2: "بدون قوالب جاهزة",
      description3: "، فقط كود نظيف مصمم حول عملك.",
      customSolutionsPrefix: "كما نقدّم",
      customSolutionsHighlight: "حلول برمجية مخصصة بالكامل",
      customSolutionsSuffix: "بدون أدوات بناء صفحات، كود مكتوب يدويًا 100%.",
      techFiltersLabel: "استكشف حسب التقنية",
      techFilters: { shopify: "Shopify", wordpress: "ووردبريس", customCoding: "برمجة مخصصة" },
      stats: [
        { value: "+50", label: "مشروع منجز" },
        { value: "100%", label: "كود مخصص بالكامل" },
        { value: "24/7", label: "دعم فني" },
      ],
      ctaPrimary: "احصل على عرض سعر مجاني",
      ctaSecondary: "شاهد أعمالنا",
      showcaseCaption: "مواقع حقيقية قمنا ببرمجتها",
    },
    approach: {
      badge: "كيف نعمل",
      titleSolid: "أكواد مبرمجة، ",
      titleColored: "وليست قوالب جاهزة",
      intro:
        "نبني منصات تجارة إلكترونية عالية الأداء، وتطبيقات ويب مبرمجة بالكامل، وبنية تحتية متكاملة، وأتمتة لسير العمل —",
      introHighlight: "مبرمجة بشكل نظيف، دون الاعتماد على قوالب جاهزة.",
      capabilities: [
        {
          title: "هندسة التجارة الإلكترونية والقوالب المخصصة",
          description:
            "متاجر Shopify وWooCommerce مخصصة، مصممة لزيادة التحويلات — بدون أدوات بناء صفحات مقيدة.",
          bullets: [
            "بناء ثيمات Shopify مخصصة (Online Store 2.0, Liquid)",
            "بحث AJAX ديناميكي، معاينة سريعة، ومقارنة منتجات",
            "تطوير إضافات WooCommerce ومنطق الدفع",
            "تحسين أداء قواعد البيانات والكتالوجات",
          ],
        },
        {
          title: "تطبيقات ويب مبرمجة بالكامل",
          description:
            "تطبيقات ويب ولوحات تحكم مبنية من الصفر — بدون أدوات بناء صفحات أو إضافات متضخمة.",
          bullets: [
            "مواقع وتطبيقات ويب مخصصة حسب احتياج عملك",
            "تطوير ووردبريس يتجاوز القوالب والإضافات الجاهزة",
            "تكامل مع أي أداة أو واجهة برمجية خارجية",
            "برمجة متكاملة بدون أدوات بناء المواقع",
          ],
        },
        {
          title: "الاستضافة والدومينات والبريد الرسمي",
          description:
            "إعداد بنية تحتية متكاملة لتعمل أعمالك على أساس احترافي وموثوق.",
          bullets: [
            "نشر الاستضافة السحابية وإعداد السيرفرات",
            "إدارة DNS وربط الدومينات المخصصة",
            "تجهيز بريد إلكتروني احترافي وآمن",
            "مراقبة ودعم البنية التحتية باستمرار",
          ],
        },
        {
          title: "هندسة الأتمتة وسير العمل",
          description: "أتمتة تُزيل العمل اليدوي من مسار المبيعات والعمليات لديك.",
          bullets: [
            "أنظمة أتمتة متقدمة باستخدام n8n والـ Webhooks",
            "تكاملات واتساب وقواعد البيانات",
            "نشر محتوى تلقائي",
            "مسارات استرجاع العملاء والاحتفاظ بهم",
          ],
        },
      ],
    },
    services: {
      badge: "ماذا نقدم",
      titleSolid: "خدمات مصممة ",
      titleColored: "لـتنمية عملك",
      subtitle: "من أول متجر إلكتروني إلى مسار مبيعات مؤتمت بالكامل — نغطي كل طبقة من حضورك الرقمي.",
      items: [
        {
          title: "تطوير متاجر Shopify وWooCommerce",
          description: "متاجر إلكترونية مخصصة مصممة لتحويل الزوار إلى عملاء.",
          bullets: [
            "صفحات منتجات ودفع محسّنة للتحويل",
            "متاجر سريعة ومتوافقة مع الجوال أولاً",
            "تكامل آمن للدفع والشحن",
            "قابلة للتوسع مع نمو كتالوجك",
          ],
        },
        {
          title: "تطوير تطبيقات ويب مخصصة",
          description: "تطبيقات ولوحات تحكم مبرمجة بالكامل حول سير عملك بالضبط.",
          bullets: [
            "برمجة كاملة بدون أدوات بناء صفحات",
            "تكاملات واجهات برمجية وأطراف ثالثة",
            "لوحات تحكم وأدوات داخلية",
            "بنية قابلة للتوسع والصيانة",
          ],
        },
        {
          title: "تحسين سرعة الموقع ومحركات البحث",
          description: "تحسين تقني وأداء يحوّل الزيارات إلى ترتيب أعلى وإيرادات فعلية.",
          bullets: [
            "تحسين Core Web Vitals ونتائج Lighthouse",
            "تحسين السيو الداخلي والبيانات المنظمة",
            "أوقات تحميل أسرع ومعدل ارتداد أقل",
            "بناء متوافق مع الجوال ومعايير إمكانية الوصول",
          ],
        },
        {
          title: "إعداد الاستضافة والدومين والبريد",
          description: "بنية تحتية موثوقة حتى لا يتوقف موقعك أو بريدك الرسمي أبدًا.",
          bullets: [
            "نشر الاستضافة السحابية",
            "إعداد DNS والدومين",
            "إعداد بريد إلكتروني احترافي آمن",
            "تفعيل SSL وتقوية الحماية",
          ],
        },
        {
          title: "أتمتة سير العمل (n8n وواتساب)",
          description: "مسارات أتمتة تزيل العمل اليدوي من المبيعات والدعم.",
          bullets: [
            "أتمتة العملاء المحتملين والطلبات",
            "تكاملات واتساب للأعمال",
            "مزامنة CRM وقواعد البيانات",
            "مسارات استرجاع السلة المتروكة",
          ],
        },
        {
          title: "صيانة ودعم المواقع",
          description: "رعاية مستمرة تُبقي موقعك سريعًا وآمنًا ومتصلًا دائمًا.",
          bullets: [
            "تحديثات ومراقبة مستمرة",
            "إصلاح الأخطاء وفحص الأداء",
            "استجابة دعم فوري بأولوية",
            "نسخ احتياطي مجدول وتصحيحات أمنية",
          ],
        },
      ],
      ctaButton: "لنبني شيئًا رائعًا معًا",
      ctaMessage: "حوّل رؤيتك إلى واقع مع خدمات تطوير احترافية متميزة",
    },
    projects: {
      badge: "دراسات حالة",
      titleSolid: "نتائج حقيقية، ",
      titleColored: "مشاريع حقيقية",
      subtitle: "مجموعة من المتاجر الإلكترونية وتطبيقات الويب التي قمنا ببرمجتها لعملاء في مختلف المجالات.",
      filterAll: "الكل",
      viewProject: "مشاهدة المشروع",
      viewAll: "عرض كل المشاريع",
      collapse: "طي المشاريع",
      filteredBy: "عرض مشاريع",
      clearFilter: "إزالة الفلتر — عرض الكل",
      noMatches: "لا توجد مشاريع بهذه التقنية بعد.",
    },
    contact: {
      badge: "تواصل معنا",
      titleSolid: "لنبدأ ",
      titleColored: "مشروعك",
      subtitle: "أخبرنا عن متجرك الإلكتروني أو تطبيق الويب الخاص بك — سنرد بعرض سعر مجاني خلال 24 ساعة.",
      whatsapp: "واتساب",
      whatsappDetail: "أسرع طريقة للتواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationDetail: "القاهرة، مصر — نخدم عملاء حول العالم",
      followUs: "تابعنا",
      form: {
        name: "الاسم",
        namePlaceholder: "أحمد محمد",
        email: "البريد الإلكتروني",
        emailPlaceholder: "example@email.com",
        phone: "رقم الهاتف",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
        errors: {
          name: "الاسم مطلوب",
          email: "يرجى إدخال بريد إلكتروني صحيح",
          phone: "أدخل رقم هاتف صحيح مع رمز الدولة",
          message: "الرسالة مطلوبة",
        },
        successTitle: "تم إرسال الرسالة!",
        successText: "شكرًا لتواصلك معنا — سنرد عليك خلال 24 ساعة.",
        errorTitle: "حدث خطأ",
        errorText: "حدث خطأ ما، حاول مرة أخرى لاحقًا.",
      },
    },
    footer: {
      tagline: "وكالة تطوير مواقع وتجارة إلكترونية نبني متاجر وتطبيقات بأكواد مخصصة — بدون قوالب.",
      navigation: "التصفح",
      services: "الخدمات",
      getInTouch: "تواصل معنا",
      servicesList: ["تطوير التجارة الإلكترونية", "تطبيقات ويب مخصصة", "الاستضافة والأتمتة"],
      rights: "جميع الحقوق محفوظة.",
      worldwide: "القاهرة، مصر — عملاء حول العالم",
    },
  },
  en: {
    meta: {
      title:
        "Mostafa Hamdi | E-Commerce & Web Development Agency — Shopify, WooCommerce & Custom Coding",
      description:
        "Custom e-commerce websites and web applications engineered clean — no page builders, no templates. Shopify, WooCommerce, WordPress, and custom-coded development, hosting setup, and workflow automation. Get a free quote today.",
    },
    header: {
      nav: { home: "Home", approach: "Approach", services: "Services", work: "Work", contact: "Contact" },
      cta: "Get Free Quote",
    },
    hero: {
      badge: "E-Commerce & Web Development Agency",
      titleLine1: "E-Commerce &",
      titleLine2: "Web Development",
      description1: "We design and build",
      descriptionHighlight1: "custom Shopify, WooCommerce & WordPress websites",
      description2: "engineered for speed, conversions and growth —",
      descriptionHighlight2: "no drag-and-drop templates",
      description3: ", just clean code built around your business.",
      customSolutionsPrefix: "We also engineer",
      customSolutionsHighlight: "fully custom software solutions",
      customSolutionsSuffix: "no page builders, 100% hand-coded.",
      techFiltersLabel: "Explore by technology",
      techFilters: { shopify: "Shopify", wordpress: "WordPress", customCoding: "Custom Coding" },
      stats: [
        { value: "50+", label: "Projects Shipped" },
        { value: "100%", label: "Custom-Coded" },
        { value: "24/7", label: "Support" },
      ],
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "View Our Work",
      showcaseCaption: "Real sites we've engineered",
    },
    approach: {
      badge: "How We Build",
      titleSolid: "Engineered, ",
      titleColored: "Not Templated",
      intro:
        "We build high-performance e-commerce platforms, custom-coded web applications, complete infrastructure setup, and workflow automations —",
      introHighlight: "engineered clean, without relying on pre-made templates.",
      capabilities: [
        {
          title: "E-Commerce Engineering & Custom Themes",
          description:
            "Custom Shopify and WooCommerce storefronts engineered for conversion — no locked-down page builders.",
          bullets: [
            "Custom Shopify theme builds (Online Store 2.0, Liquid)",
            "Dynamic AJAX search, quick-view & product comparison",
            "WooCommerce plugin development & checkout logic",
            "Database & catalog performance optimization",
          ],
        },
        {
          title: "Custom-Coded Web Applications",
          description:
            "Web applications and dashboards built from scratch — no page builders, no bloated plugins.",
          bullets: [
            "Custom websites and web apps tailored to your business",
            "WordPress development beyond basic themes and plugins",
            "Integrations with any third-party tool or API",
            "Full-stack custom coding, no site builders",
          ],
        },
        {
          title: "Hosting, Domains & Formal Emails",
          description:
            "End-to-end infrastructure setup so your business runs on solid, professional foundations.",
          bullets: [
            "Cloud hosting deployment & server configuration",
            "DNS management & custom domain mapping",
            "Secure corporate email provisioning",
            "Ongoing infrastructure monitoring & support",
          ],
        },
        {
          title: "Workflow & Automation Engineering",
          description: "Automation that removes manual work from your sales and operations pipeline.",
          bullets: [
            "Advanced n8n automation pipelines & webhooks",
            "WhatsApp & database integrations",
            "Automated content publishing",
            "Customer recovery & retention funnels",
          ],
        },
      ],
    },
    services: {
      badge: "What We Offer",
      titleSolid: "Services Built to ",
      titleColored: "Grow Your Business",
      subtitle: "From your first storefront to a fully automated sales pipeline — we cover every layer of your web presence.",
      items: [
        {
          title: "Shopify & WooCommerce Development",
          description: "Custom e-commerce storefronts engineered to convert browsers into buyers.",
          bullets: [
            "Conversion-optimized product & checkout pages",
            "Fast, mobile-first storefronts",
            "Secure payment & shipping integrations",
            "Built to scale with your catalog",
          ],
        },
        {
          title: "Custom Web Application Development",
          description: "Custom-coded web apps and dashboards built around your exact workflow.",
          bullets: [
            "Fully custom-coded, no page builders",
            "API & third-party integrations",
            "Admin dashboards & internal tools",
            "Scalable, maintainable architecture",
          ],
        },
        {
          title: "Website Speed & SEO Optimization",
          description: "Technical SEO and performance tuning that turns traffic into rankings and revenue.",
          bullets: [
            "Core Web Vitals & Lighthouse tuning",
            "On-page SEO & structured data",
            "Faster load times, lower bounce rate",
            "Mobile-first, accessible builds",
          ],
        },
        {
          title: "Hosting, Domain & Email Setup",
          description: "Reliable infrastructure so your site and business email never go down.",
          bullets: [
            "Cloud hosting deployment",
            "DNS & domain configuration",
            "Secure business email setup",
            "SSL & security hardening",
          ],
        },
        {
          title: "Workflow Automation (n8n & WhatsApp)",
          description: "Automation pipelines that remove manual work from sales and support.",
          bullets: [
            "Automated lead & order workflows",
            "WhatsApp business integrations",
            "CRM & database syncing",
            "Abandoned-cart recovery flows",
          ],
        },
        {
          title: "Website Maintenance & Support",
          description: "Ongoing care that keeps your site fast, secure, and always online.",
          bullets: [
            "Ongoing updates & monitoring",
            "Bug fixes & performance checks",
            "Priority support response",
            "Scheduled backups & security patches",
          ],
        },
      ],
      ctaButton: "Let's Build Something Amazing",
      ctaMessage: "Transform your vision into reality with premium development services",
    },
    projects: {
      badge: "Case Studies",
      titleSolid: "Real Results, ",
      titleColored: "Real Projects",
      subtitle: "A selection of e-commerce stores and web applications we've engineered for clients across industries.",
      filterAll: "All",
      viewProject: "View Live Project",
      viewAll: "View All Projects",
      collapse: "Collapse Projects",
      filteredBy: "Showing projects using",
      clearFilter: "Clear filter — show all",
      noMatches: "No projects with this technology yet.",
    },
    contact: {
      badge: "Get In Touch",
      titleSolid: "Let's ",
      titleColored: "Build Your Project",
      subtitle: "Tell us about your e-commerce store or web app — we'll reply with a free quote within 24 hours.",
      whatsapp: "WhatsApp",
      whatsappDetail: "Fastest way to reach us",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationDetail: "Cairo, Egypt — Serving clients worldwide",
      followUs: "Follow Us",
      form: {
        name: "Your Name",
        namePlaceholder: "John Doe",
        email: "Your Email",
        emailPlaceholder: "john@example.com",
        phone: "Phone Number",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send Message",
        submitting: "Sending...",
        errors: {
          name: "Name is required",
          email: "Please enter valid email",
          phone: "Enter a valid phone number with country code",
          message: "Message is required",
        },
        successTitle: "Message Sent!",
        successText: "Thanks for reaching out — we'll get back to you within 24 hours.",
        errorTitle: "Oops!",
        errorText: "Something went wrong. Please try again later.",
      },
    },
    footer: {
      tagline: "E-commerce & web development agency engineering custom-coded stores and applications — no templates.",
      navigation: "Navigation",
      services: "Services",
      getInTouch: "Get in Touch",
      servicesList: ["E-Commerce Development", "Custom Web Applications", "Hosting & Automation"],
      rights: "All rights reserved.",
      worldwide: "Cairo, Egypt — Worldwide clients",
    },
  },
};

export type Translations = typeof translations.en;
