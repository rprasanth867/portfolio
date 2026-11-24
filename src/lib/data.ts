export const personalInfo = {
  name: "V V N Durga Prasanth Rudrakshula",
  namePrefix: "V V N Durga",
  firstName: "Prasanth",
  lastName: "Rudrakshula",
  brandName: "prasanth",
  brandDomain: ".dev",
  brandInitial: "P",
  city: "Bangalore",
  title: "Senior Software Engineer (SDE-2)",
  targetRoles: ["Senior Software Engineer (SDE-2)", "Mobile Full Stack Developer"],
  preferredLocations: ["Bengaluru", "Hyderabad", "Chennai"],
  employmentType: "full-time",
  roles: [
    "Senior Software Engineer (SDE-2)",
    "Mobile Full Stack Developer",
    "React Native Developer",
    "React.js Developer"
  ],
  tagline: "Senior Software Engineer with 4+ years of experience architecting and delivering high-performance web and mobile applications using React, React Native, Next.js, TypeScript, and Redux Toolkit. Specialized in building reusable Design System Libraries (NPM packages), cross-platform application architectures, and low-latency real-time communications (WebSockets, XMPP). Proven track record of optimizing application performance, enforcing strict security standards, and delivering enterprise-grade full-stack solutions with lightweight Node.js/Express backends.",
  location: "Bangalore, India",
  email: "rprasanth867@gmail.com",
  phone: "+91 9985702662",
  github: "rprasanth867",
  linkedin: "prasanth-rudrakshula",
  githubUrl: "https://github.com/rprasanth867",
  linkedinUrl: "https://www.linkedin.com/in/prasanth-rudrakshula/",
  emailUrl: "mailto:rprasanth867@gmail.com",
  phoneUrl: "tel:+919985702662",
  resumeUrl: "/Prasanth_resume_rn.pdf",
  resumeFileName: "Prasanth_resume_rn.pdf",
  availability: "Available for new opportunities",
  about: "I build mobile and web products with React Native, React, Next.js, and Node.js, with a focus on reusable architecture, fast experiences, and reliable real-time communication.",
  aboutDetails: [
    "At Nouveau Labs, I built and maintained a React Native design system with more than 30 reusable components used across five or more enterprise apps. I also improved app startup time by 35% through Hermes migration, lazy loading, and code splitting.",
    "I have delivered cross-platform messaging and offline-first experiences using WebSockets, XMPP, Server-Sent Events, polling, and WatermelonDB. My work includes background sync, responsive state management, and secure session and local storage flows.",
    "I also build full-stack web features and Node.js/Express REST APIs, including authentication with JWT, OAuth 2.0, API keys, SSO, and role-based access control. I take features through design, implementation, testing, review, deployment, and production support."
  ],
  focusAreas: [
    "React Native",
    "Cross-platform apps",
    "Design systems",
    "Real-time messaging",
    "React & Next.js",
    "Node.js APIs",
    "Application performance"
  ],
  stats: [
    { label: "Years of experience", value: "4+" },
    { label: "Reusable UI components", value: "30+" },
    { label: "Enterprise apps using design system", value: "5+" },
    { label: "Faster app startup", value: "35%" }
  ]
};

export const experience = [
  {
    id: "nouveau-labs",
    company: "Nouveau Labs Pvt. Ltd.",
    employment: "Full-time · 4+ years",
    arrangement: "On-site",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        id: "senior-software-engineer",
        current: true,
        period: "Jun 2026 — Present",
        title: "Senior Software Engineer",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Built and maintained a reusable design system library with 30+ UI components, used across 5+ enterprise applications.",
          "Improved React Native app startup time by 35% through Hermes migration, lazy loading, and code splitting.",
          "Developed offline messaging using WatermelonDB and real-time communication features using WebSockets, XMPP, and SSE.",
          "Integrated AI-powered Copilot features and developed REST APIs using Node.js, Express.js, and MySQL.",
          "Implemented security features including secure storage, CAPTCHA, account lockout, and CORS restrictions.",
          "Mentored junior developers and received the Rising Star Award (2024) and Star Award (2025)."
        ],
        technologies: ["React Native", "React.js", "TypeScript", "WatermelonDB", "WebSockets", "XMPP", "SSE", "Node.js", "Express.js", "MySQL", "MongoDB", "Redis"]
      },
      {
        id: "software-engineer",
        current: false,
        period: "Nov 2022 — Jun 2026",
        title: "Software Engineer",
        location: "Bengaluru, India",
        highlights: [
          "Built and integrated REST APIs using Node.js, Express.js, and MySQL, and worked with MongoDB and Redis for data management and caching.",
          "Developed real-time communication features using WebSockets, XMPP, SSE, long polling, and short polling.",
          "Implemented authentication and authorization using JWT, OAuth 2.0, API keys, SDK keys, and SSO.",
          "Built an SEO-friendly landing page using Next.js, server-side rendering, and metadata optimization.",
          "Improved application performance through lazy loading, code splitting, memoization, and render optimization; contributed to testing, code reviews, debugging, and production support."
        ],
        technologies: ["React Native", "React.js", "TypeScript", "WatermelonDB", "WebSockets", "XMPP", "SSE", "Node.js", "Express.js", "MySQL", "Redux Toolkit", "Ant Design", "MUI", "Storybook", "NPM", "i18n"]
      }
    ],
  }
];

export const education = [
  {
    id: "nxtwave",
    institution: "NxtWave",
    degree: "Full Stack Development",
    period: "2021 — 2022",
    location: "Hyderabad, India"
  },
  {
    id: "adikavi-nannaya-university",
    institution: "Adikavi Nannaya University",
    degree: "B.Sc (Mathematics, Statistics)",
    period: "2014 — 2017",
    location: "Rajamahendravaram, India"
  }
];

export const projects = [
  {
    id: "enterprise-design-system",
    featured: true,
    title: "Enterprise Design System",
    subtitle: "Cross-platform UI engine · Nouveau Labs",
    description: "A reusable React Native design system packaged for use across enterprise applications, built to improve UI consistency and reduce repeated implementation work.",
    points: [
      "Built and maintained an NPM library with 30+ reusable UI components",
      "Adopted across 5+ enterprise applications",
      "Improved React Native startup time by 35% through Hermes migration, lazy loading, and code splitting"
    ],
    technologies: ["React Native", "TypeScript", "NPM", "Storybook", "i18n", "MUI", "Ant Design"],
    links: []
  },
  {
    id: "dolphincc",
    featured: false,
    title: "DolphinCC",
    subtitle: "Cross-platform contact-center application",
    description: "Built offline-first messaging and real-time communication features for contact-center workflows across mobile and web.",
    points: [
      "Integrated an AI-powered Copilot enabling context-aware interactions and natural language assistance",
      "Implemented offline storage and background synchronization with WatermelonDB",
      "Built messaging with WebSockets, XMPP, Server-Sent Events, Long Polling, and Short Polling",
      "Established robust session management, secure local storage, CAPTCHA, account lockout, and CORS whitelisting",
      "Reduced unnecessary React re-renders through refined state management and memoization"
    ],
    technologies: ["React Native", "React.js", "Redux Toolkit", "WatermelonDB", "WebSockets", "XMPP", "SSE", "Ant Design"],
    links: []
  },
  {
    id: "dolphinvc",
    featured: false,
    title: "DolphinVC",
    subtitle: "Full-stack web platform",
    description: "Developed secure authentication flows, REST APIs, and an SEO-focused landing page for a full-stack web product.",
    points: [
      "Implemented JWT, OAuth 2.0, API key, SDK key, SSO, and RBAC authentication flows",
      "Built REST APIs with Node.js, Express.js, and MySQL",
      "Created a Next.js landing page with server-side rendering and metadata optimization"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL"],
    links: []
  }
];

export const stack = [
  {
    id: "languages",
    title: "01 Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java"]
  },
  {
    id: "mobile-web",
    title: "02 Mobile & Web",
    items: ["React Native", "React.js", "Next.js", "Redux Toolkit", "React Query", "Axios", "GraphQL", "HTML5", "CSS3", "Micro-frontends"]
  },
  {
    id: "native",
    title: "03 React Native",
    items: ["React Native CLI", "Expo", "React Navigation", "Native Modules Bridge", "WatermelonDB", "Crashlytics", "Async Storage", "Hermes", "Fabric", "JSI", "TurboModules"]
  },
  {
    id: "backend-data",
    title: "04 Backend & Data",
    items: ["Node.js", "Express.js", "REST APIs", "MySQL", "Redis", "MongoDB"]
  },
  {
    id: "realtime",
    title: "05 Real-time Communication",
    items: ["WebSockets", "XMPP", "Server-Sent Events", "Long Polling", "Short Polling"]
  },
  {
    id: "cloud",
    title: "06 Cloud & Delivery",
    items: ["AWS EC2", "AWS S3", "CloudFront", "Docker", "CI/CD", "Pipelines"]
  },
  {
    id: "testing-ai",
    title: "07 Testing",
    items: ["Jest", "Vitest", "React Testing Library", "React Native Testing Library", "Playwright", "MSW"]
  },
  {
    id: "ai-tools",
    title: "08 AI Tools",
    items: ["CopilotKit", "MCP", "Skills", "Claude", "Cursor", "GitHub Copilot"]
  }
];

export const footer = {
  copyrightYear: "2026"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "#contact" }
];