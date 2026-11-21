export const personalInfo = {
  name: "Nikhil Kumar",
  title: "Full Stack Engineer",
  tagline: "Full stack engineer with 3+ years building scalable web applications — prediction-market and trading integrations, event-driven architectures, FIX protocol pipelines, Web3 wallet flows and AI integrations that actually ship.",
  location: "Indore, India · IST",
  email: "vashishtnikhil158@gmail.com",
  phone: "+91 62824 85857",
  github: "mishranikhil15",
  linkedin: "nikhil-mishra",
  githubUrl: "https://github.com/mishranikhil15",
  linkedinUrl: "https://linkedin.com/in/nikhil-mishra",
  emailUrl: "mailto:vashishtnikhil158@gmail.com",
  phoneUrl: "tel:+916282485857",
  resumeUrl: "/resume.pdf",
  availability: "Available for new opportunities",
  about: "I build the parts of a product that have to stay up — APIs, queues, sockets and the data paths behind them.",
  aboutDetails: [
    "Most of my recent work sits in real-time systems: the backend behind Pronostyx, a prediction market platform, where I integrated Limitless Exchange as the execution venue — building the order-payload, wallet and market-data layer around it — plus a custom FIX protocol parser ingesting live data from Crypto.com and event-driven pipelines held together with RabbitMQ, circuit breakers and dead-letter queues.",
    "Before that I spent two years on full-stack product work — React and Redux on the front, Node.js, NestJS and Express behind it — with a habit of chasing down slow queries and caching the right things.",
    "I studied B.Tech at Cochin University of Science and Technology and went through Masai School's full-time full-stack program. These days I lean heavily on AI tooling — OpenAI, DeepSeek and Claude Code — as part of how I build."
  ],
  focusAreas: [
    "Real-time systems",
    "Trading & market integrations",
    "Event-driven architecture",
    "API design",
    "Performance tuning",
    "Web3 integration",
    "AI integration"
  ],
  stats: [
    { label: "Years of experience", value: "3+" },
    { label: "API performance gain", value: "40%" },
    { label: "Latency cut with Redis", value: "35%" },
    { label: "Manual effort automated", value: "60%" }
  ]
};

export const experience = [
  {
    id: "trueigtech",
    current: true,
    period: "Jan 2026 — Present",
    role: "Software Engineer",
    company: "Trueigtech",
    location: "Indore, India",
    description: "Built the backend for Pronostyx, a prediction market platform, integrating Limitless Exchange for market data and order execution.",
    highlights: [
      "Owned the order-placement flow: validation, payload construction, submission to Limitless and reconciling responses back into user positions.",
      "Wrote a FIX protocol parser mapping live market data from Crypto.com.",
      "Integrated Privy for dual wallet auth (EOA + custodial) with JWT sessions.",
      "Shipped an event-driven RabbitMQ pipeline with circuit breakers, DLQs and retries."
    ],
    technologies: ["Node.js", "Socket.IO", "RabbitMQ", "FIX", "Privy", "Web3"]
  },
  {
    id: "hawk-martech",
    current: false,
    period: "Apr 2025 — Dec 2025",
    role: "Software Engineer",
    company: "Hawk Martech",
    location: "Gurgaon, India",
    description: "Built scalable backend services using NestJS and Express.",
    highlights: [
      "Implemented Redis caching, cutting average response latency by 35%.",
      "Added logging dashboards that made debugging far faster.",
      "Optimized MySQL and MongoDB queries, improving API performance by 40%."
    ],
    technologies: ["NestJS", "Redis", "MySQL", "MongoDB", "Grafana"]
  },
  {
    id: "hana-software",
    current: false,
    period: "Aug 2023 — Apr 2025",
    role: "Associate Software Engineer",
    company: "Hana Software (USA)",
    location: "Remote",
    description: "Built full-stack web apps using React, Redux, Ant Design and Node.js.",
    highlights: [
      "Developed secure REST APIs with authentication and WebSocket support.",
      "Automated workflows with Puppeteer, cutting manual effort by 60%.",
      "Improved MongoDB performance through schema redesign and indexing."
    ],
    technologies: ["React", "Redux", "Node.js", "Puppeteer", "MongoDB"]
  }
];

export const education = [
  {
    id: "masai",
    institution: "Masai School",
    degree: "Full Stack Web Development, full time",
    period: "Aug 2022 – Jul 2023",
    location: "Bengaluru"
  },
  {
    id: "cusat",
    institution: "Cochin University of Science and Technology",
    degree: "B.Tech",
    period: "2015 – 2019",
    location: "Kochi"
  }
];

export const projects = [
  {
    id: "pronostyx",
    featured: true,
    title: "Pronostyx",
    subtitle: "Prediction market platform · Limitless Exchange integration",
    description: "The platform layer around a live prediction market. Limitless Exchange owns the orderbook and matching — my work was everything that talks to it: validating requests, building and signing order payloads, submitting them, and reconciling responses into user positions and market-resolution claim flows.",
    points: [
      "Six services (Next.js frontend, Express backends, data-consumer, job scheduler) synchronised over RabbitMQ",
      "Custom FIX protocol parser ingesting real-time Crypto.com market data",
      "Socket.IO namespaces split by auth level — public orderbook feed vs. per-user portfolio",
      "Privy wallet integration: dual EOA + custodial flows on Base Mainnet",
      "Circuit breakers, dead-letter queues and retry policies across third-party and on-chain calls"
    ],
    technologies: ["Node.js", "Next.js", "Socket.IO", "Redis", "RabbitMQ", "FIX Protocol", "Privy", "Base Mainnet"],
    links: []
  },
  {
    id: "viacation",
    featured: false,
    title: "Viacation",
    subtitle: "Travel booking platform",
    description: "Catalog, booking and routing services with Redis-based caching for response time, plus Redis-driven rate limiting on login and API endpoints to stop abuse.",
    points: [],
    technologies: ["NestJS", "Redis", "Docker", "MongoDB"],
    links: []
  },
  {
    id: "travel-deals",
    featured: false,
    title: "Travel Deals Online",
    subtitle: "Partner-integrated travel APIs",
    description: "REST APIs for travel search, pricing and partner integrations. External provider APIs for offers and booking data, on MySQL schemas tuned for fast retrieval.",
    points: [],
    technologies: ["Express.js", "MySQL", "JavaScript", "3rd-party APIs"],
    links: []
  },
  {
    id: "strike-a-pose",
    featured: false,
    title: "Strike A Pose",
    subtitle: "Booking & appointment system",
    description: "Photography appointment scheduling — users book a slot and track editing and delivery.",
    points: [],
    technologies: ["Node.js", "Express", "MongoDB"],
    links: [
      { label: "Code ↗", url: "#" },
      { label: "Live ↗", url: "#" }
    ]
  },
  {
    id: "peanut-butter",
    featured: false,
    title: "Peanut Butter",
    subtitle: "Full-stack e-commerce",
    description: "Product storefront with JWT auth, bcrypt hashing and a MongoDB-backed Express API.",
    points: [],
    technologies: ["Node.js", "Express", "JWT", "MongoDB"],
    links: [
      { label: "Code ↗", url: "#" },
      { label: "Live ↗", url: "#" }
    ]
  },
  {
    id: "slido-clone",
    featured: false,
    title: "Slido Clone",
    subtitle: "Live audience interaction",
    description: "Real-time polls, quizzes and Q&A over Socket.IO for live events.",
    points: [],
    technologies: ["Socket.io", "Express", "JavaScript"],
    links: [
      { label: "Code ↗", url: "#" },
      { label: "Live ↗", url: "#" }
    ]
  }
];

export const stack = [
  {
    id: "languages",
    title: "01 Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Node.js", "NestJS", "Express", "React", "Next.js", "Redux", "GraphQL"]
  },
  {
    id: "data",
    title: "02 Data",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    id: "realtime",
    title: "03 Real-time & Messaging",
    items: ["Socket.IO", "WebSockets", "RabbitMQ", "FIX Protocol"]
  },
  {
    id: "blockchain-ai",
    title: "04 Blockchain & AI",
    items: ["Privy", "WalletConnect", "Custodial wallets", "OpenAI APIs", "DeepSeek", "Claude Code"]
  },
  {
    id: "cloud-devops",
    title: "05 Cloud, DevOps & Observability",
    items: ["AWS", "GCP", "Docker", "Grafana", "CI/CD", "GitHub Actions"]
  },
  {
    id: "tooling",
    title: "06 Tooling",
    items: ["Git", "Postman", "Jira", "Notion", "VS Code"]
  }
];

export const githubStats = {
  publicRepos: 66,
  starsEarned: 12,
  followers: 110,
  topLanguage: "JavaScript",
  languageBreakdown: [
    { name: "JavaScript", percentage: "72.0%" },
    { name: "HTML", percentage: "27.0%" },
    { name: "Python", percentage: "0.8%" },
    { name: "TypeScript", percentage: "0.2%" }
  ],
  recentRepos: [
    { name: "mishranikhil15", description: "No description", stars: 0, language: null },
    { name: "mishranikhil15.github.io", description: "No description", stars: 1, language: "HTML" },
    { name: "Progressive-Student-Dashboard-Full-Stack-", description: "No description", stars: 0, language: "JavaScript" },
    { name: "Harij-Softech", description: "No description", stars: 0, language: "TypeScript" }
  ],
  lastUpdated: "21/12/2025"
};

export const blogPosts = [
  {
    id: "rest-vs-websockets-vs-sse",
    date: "15 Jul 2026",
    title: "REST vs WebSockets vs SSE: which one do you actually need?",
    excerpt: "Most people jump straight from REST to WebSockets and skip the option in the middle. Server-Sent Events is simpler, and for a lot of features it is the right answer.",
    tags: ["REST", "WebSockets", "SSE"],
    url: "#",
    draft: false
  },
  {
    id: "sitemaps-canonical-tags",
    date: "2 Sept 2025",
    title: "Sitemaps and canonical tags: the two SEO things developers own",
    excerpt: "Most SEO is someone else's job. These two live in your code, take an afternoon, and getting them wrong quietly splits your rankings across duplicate URLs.",
    tags: ["SEO", "Sitemap", "Canonical"],
    url: "#",
    draft: false
  },
  {
    id: "nestjs-vs-express",
    date: "28 Aug 2025",
    title: "NestJS vs Express: which one should you pick?",
    excerpt: "Express gives you a blank page. NestJS gives you a filled-in form — and if you know Spring Boot, it will feel familiar. Covers dependency injection, DTO validation, SOLID, and swapping Express for Fastify underneath.",
    tags: ["Node.js", "NestJS", "Spring Boot", "DTOs", "Fastify"],
    url: "#",
    draft: false
  },
  {
    id: "postgresql-vs-mongodb",
    date: "24 Aug 2025",
    title: "PostgreSQL vs MongoDB: how to actually choose",
    excerpt: "Not \"SQL vs NoSQL\". The real question is whether you read your data whole or combine it in ways you cannot predict. Plus the myths that waste everyone's time.",
    tags: ["PostgreSQL", "MongoDB", "Databases"],
    url: "#",
    draft: false
  },
  {
    id: "why-message-queue-rabbitmq",
    date: "28 Jul 2025",
    title: "Why add a message queue? RabbitMQ explained simply",
    excerpt: "A queue is just a shared to-do list between services. What problem it solves, the three settings that stop it losing work, and when you do not need one.",
    tags: ["RabbitMQ", "Architecture"],
    url: "#",
    draft: false
  }
];

export const footer = {
  copyright: "2026 Nikhil Kumar — Indore, India",
  visitsLabel: "visits"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];