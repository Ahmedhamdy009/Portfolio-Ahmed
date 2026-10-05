/**
 * PROJECTS & CASE STUDIES REPOSITORY
 * Ahmed Hamdy — WordPress & Frontend Developer
 */

const portfolioProjects = [
  {
    id: "ayman-marketing",
    featured: true,
    categories: ["all", "wordpress", "websites"],
    categoryBadge: { ar: "ووردبريس & خدمات", en: "WordPress & Services" },
    title: {
      ar: "موقع وخدمات أيمن للتسويق الرقمي",
      en: "Ayman Digital Marketing Platform"
    },
    shortDesc: {
      ar: "منصة ويب متكاملة لوكالة تسويق رقمي بتجربة مستخدم عالية التحويل، وهيكلية SEO متقدمة لزيادة استقطاب العملاء المحتملين.",
      en: "A comprehensive digital marketing platform engineered for high conversion rates, technical SEO rankings, and client acquisition."
    },
    image: "https://res.cloudinary.com/dznk5pyof/image/upload/v1775755802/Screenshot_2026-04-09_180908_mjn5xf.png",
    demoUrl: "https://ayman-marketing.netlify.app/",
    tags: ["WordPress", "HTML5/CSS3", "JavaScript", "Technical SEO", "Speed Optimization"],
    metrics: {
      lighthouse: "98/100",
      loadTime: "1.1s",
      responsive: "100%"
    },
    caseStudy: {
      problem: {
        ar: "كانت الوكالة تعاني من غياب هوية رقمية واضحة وموقع بطيء لا يعبر عن جودة خدماتهم التسويقية، مع انعدام التهيئة لمحركات البحث وصعوبة تحويل الزوار إلى اتصالات حقيقية.",
        en: "The agency lacked a cohesive digital brand and operated on a sluggish website that failed to reflect their marketing quality, had zero SEO indexing, and struggled to convert visitors into business leads."
      },
      goals: {
        ar: "بناء موقع فائق السرعة، صياغة مسار بصري واضح للخدمات، تطبيق معايير SEO الفنية لتصدر الكلمات المفتاحية، وتسهيل التواصل الفوري عبر WhatsApp ونماذج الطلب.",
        en: "Develop an ultra-fast website, establish clear service navigation funnels, implement Technical SEO standards for search rankings, and facilitate friction-free WhatsApp and form conversions."
      },
      approach: {
        ar: "تم تصميم واجهات مستخدم حديثة بأسلوب نقي (Clean UI)، ثم بناؤها بكود خفيف ومتجاوب مع ضغط الأصول، وتجهيز هيكلية Schema.org لبيانات محركات البحث.",
        en: "Designed a clean, modern UI with structured visual hierarchy, followed by lightweight, responsive coding, asset optimization, and Schema.org metadata integration."
      },
      result: {
        ar: "إطلاق موقع احترافي متجاوب بنسبة 100% حقق تقييم 98 في Google Lighthouse وزيادة ملموسة في استفسارات العملاء عبر القنوات المباشرة.",
        en: "Successfully launched a 100% responsive website scoring 98 on Google Lighthouse with a marked increase in direct client inquiries."
      }
    }
  },
  {
    id: "velostore-ecommerce",
    featured: false,
    categories: ["all", "woocommerce", "websites", "frontend"],
    categoryBadge: { ar: "متجر إلكتروني", en: "E-Commerce" },
    title: {
      ar: "متجر VeloStore للمنتجات التقنية",
      en: "VeloStore E-Commerce Platform"
    },
    shortDesc: {
      ar: "متجر إلكتروني عصري ثنائي اللغة (عربي / إنجليزي) لبيع المنتجات التقنية والأزياء، مع عربة تسوق ذكية وفلاتر بحث سريعة.",
      en: "Modern bilingual e-commerce store (Arabic & English) featuring instant category filters, streamlined cart checkout, and responsive catalog."
    },
    image: "https://res.cloudinary.com/dznk5pyof/image/upload/v1776365757/Screenshot_2026-04-16_205553_wt9r9p.png",
    demoUrl: "https://velostore-eg.netlify.app/",
    tags: ["WooCommerce", "JavaScript", "CSS Grid", "Bilingual RTL/LTR", "UX Design"],
    metrics: {
      lighthouse: "96/100",
      loadTime: "1.3s",
      responsive: "100%"
    },
    caseStudy: {
      problem: {
        ar: "صعوبة استعراض المنتجات وتصنيفها على الشاشات الصغيرة، وغياب دعم سلس للغتين العربية والإنجليزية مع الحفاظ على سرعة عربة التسوق.",
        en: "Difficulty browsing product catalogs on mobile devices, alongside the absence of smooth bilingual Arabic/English switching without cart lag."
      },
      goals: {
        ar: "توفير تجربة تسوق سلسة بنظام كروت تفاعلية، دعم ثنائي الاتجاه (RTL & LTR)، وتحقيق زمن تحميل سريع لتحفيز عمليات الشراء.",
        en: "Deliver an effortless shopping experience with interactive product cards, flawless bidirectional RTL/LTR support, and rapid loading to boost checkouts."
      },
      approach: {
        ar: "بناء واجهة مستخدم تعتمد على CSS Grid ونظام كروت المنتجات، وتطبيق فلاتر سريعة تعتمد على تصنيفات مخصصة مع توافق تام للأجهزة الذكية.",
        en: "Constructed a grid-based modular catalog with real-time filtering, optimized media loading, and bidirectional UI tokens for English and Arabic."
      },
      result: {
        ar: "تجربة تصفح سريعة ومنسقة، استعراض فوري للمنتجات وسلة الشراء، وجهوزية تامة للربط مع بوابات الدفع الإلكتروني وقواعد البيانات.",
        en: "Smooth and rapid user shopping journey, instant product discovery, and architecture fully ready for payment gateway integration."
      }
    }
  },
  {
    id: "nexus-digital-agency",
    featured: false,
    categories: ["all", "landing-pages", "wordpress"],
    categoryBadge: { ar: "صفحة هبوط واستوديو", en: "Landing Page & Studio" },
    title: {
      ar: "وكالة Nexus Digital الإبداعية",
      en: "Nexus Digital Agency Platform"
    },
    shortDesc: {
      ar: "موقع احترافي لوكالة تسويق وتطوير يقدم استعراضاً بصرياً فخماً للخدمات والمشاريع، مع تحسين مسار التحويل للعملاء.",
      en: "A sleek agency website showcasing branding, web development, and digital marketing services with high-converting modern aesthetics."
    },
    image: "https://res.cloudinary.com/dznk5pyof/image/upload/v1776365661/Screenshot_2026-04-16_205409_vo0jid.png",
    demoUrl: "https://astrix-studio.netlify.app",
    tags: ["WordPress", "Elementor Pro", "Modern UI/UX", "Responsive", "Core Web Vitals"],
    metrics: {
      lighthouse: "97/100",
      loadTime: "1.2s",
      responsive: "100%"
    },
    caseStudy: {
      problem: {
        ar: "غياب حضور رقمي قوي يليق بوكالة إبداعية، وعدم تنظيم الخدمات بشكل محفز يجذب الشركات والعملاء الكبار.",
        en: "Absence of a distinguished online presence befitting a creative agency, with cluttered service descriptions failing to win enterprise clients."
      },
      goals: {
        ar: "تصميم موقع ذو طابع بصري داكن فاخر (Dark Premium)، إبراز باقات الخدمات، وتوفير أسلوب حجز استشارة أو بدء مشروع بضغطة زر.",
        en: "Design an upscale dark-themed showcase, structure services into digestible modules, and streamline lead booking with one-click CTAs."
      },
      approach: {
        ar: "تطوير هيكلية واضحة تعتمد على أقسام الخدمات المترابطة، استخدام تباين لوني دقيق مع عناصر تفاعلية أنيقة وتأثيرات تمرير خفيفة الوزن.",
        en: "Engineered clean modular sections, high-contrast typography, restrained micro-interactions, and fast-loading imagery."
      },
      result: {
        ar: "رفع موثوقية العلامة التجارية للوكالة، وتقديم عرض خدمات متكامل يسهل اتخاذ قرار التعاقد للعملاء المستهدفين.",
        en: "Significantly enhanced brand trust, resulting in a cohesive presentation that accelerates client contract decisions."
      }
    }
  },
  {
    id: "ahmed-hamdy-brand-system",
    featured: false, // NOTE: featured layout applies only to the first card (idx===0 in JS)
    categories: ["all", "frontend", "websites"],
    categoryBadge: { ar: "نظام التصميم والبورتفوليو", en: "Design System & Brand" },
    title: {
      ar: "منظومة الهوية الرقمية والبورتفوليو الشخصي",
      en: "Ahmed Hamdy Personal Brand & Architecture"
    },
    shortDesc: {
      ar: "نظام تصميم متكامل وبورتفوليو احترافي بمؤشرات أداء استثنائية، ثنائي اللغة (RTL/LTR) مع توافق تام مع معايير WordPress و Elementor.",
      en: "A bespoke personal brand website and design system engineered with native CSS tokens, 100% Core Web Vitals compliance, and bilingual architecture."
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    demoUrl: "#",
    tags: ["HTML5 Semantic", "Vanilla CSS", "JavaScript ES6+", "Design Tokens", "WCAG 2.1"],
    metrics: {
      lighthouse: "100/100",
      loadTime: "0.8s",
      responsive: "100%"
    },
    caseStudy: {
      problem: {
        ar: "معظم قوالب المطورين مكررة وبطيئة وتعتمد على إطارات عمل ثقيلة تضر بمؤشرات Core Web Vitals وتفتقر إلى هوية بصرية متميزة.",
        en: "Most developer portfolios rely on bloated templates or heavy libraries that degrade Core Web Vitals and lack an authentic personal brand identity."
      },
      goals: {
        ar: "إنشاء موقع شخصي وهوية بصرية هندسية أصلية تبرز الخبرة في ووردبريس والواجهات الأمامية، مع أداء لا يقبل المساومة ودعم كامل للعربية والإنجليزية.",
        en: "Craft an original geometric monogram and high-end agency aesthetic showcasing WordPress and frontend mastery with uncompromising speed and bilingual support."
      },
      approach: {
        ar: "بناء نظام رموز تصميمية (Design Tokens)، تصميم مونوغرام AH هندسي دقيق، وبرمجة تفاعلية بدون مكتبات خارجية ثقيلة مع دعم كامل للوصول الشامل.",
        en: "Developed a pure CSS design token system, constructed a precision geometric AH monogram SVG, and created lightweight vanilla JavaScript interactions."
      },
      result: {
        ar: "موقع فائق الأناقة والسرعة محققاً 100/100 على مؤشرات Lighthouse ومظهر ينافس أرقى الاستوديوهات العالمية.",
        en: "An internationally competitive, razor-sharp personal brand website hitting 100/100 on Lighthouse with impeccable typography and responsiveness."
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects };
}
