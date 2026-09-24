import type { PortfolioData } from '../types/portfolio';

/**
 * ============================================================================
 * NOUMAN IMRAN — CENTRAL PORTFOLIO CONFIGURATION (NOUMAN.OS v2026.1)
 * ============================================================================
 * Central single source of truth for all text, projects, skills,
 * timelines, and links across the entire digital operating system.
 */

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Nouman Imran",
    monogram: "N // I",
    roles: [
      "AI Enthusiast",
      "Software Developer",
      "Cybersecurity Learner",
      "Python Developer",
      "Web Developer",
      "Digital Creator",
      "Future Technologist"
    ],
    tagline: "Building today's ideas with tomorrow's technology.",
    shortIntro: "I'm Nouman Imran — a student, developer, AI enthusiast and cybersecurity learner building useful technology and exploring the future.",
    location: "Lahore, Pakistan",
    education: "ICS — 1st Year",
    status: "🟢 SYSTEM ONLINE",
    currentFocus: [
      "Artificial Intelligence",
      "Software Development",
      "Cybersecurity",
      "Python",
      "Web Development",
      "React / TypeScript",
      "Creative Technology"
    ],
    bioParagraphs: [
      "I am an ICS student from Lahore, Pakistan with an insatiable curiosity for how intelligent machines, resilient networks, and high-performance software interact.",
      "Rather than waiting for a graduation cap, I believe the best way to master technology is by rolling up my sleeves and building practical systems. My daily work revolves around writing clean Python scripts, constructing modern React applications, studying cybersecurity protocols, and leveraging modern AI workflows.",
      "My mission is simple: solve tangible everyday challenges with technology, cultivate deep technical craftsmanship, and lay the foundation to build impactful products for Pakistan and the world."
    ]
  },

  systemMetrics: {
    osName: "NOUMAN.OS",
    osVersion: "2026.1",
    status: "ONLINE",
    mode: "BUILDING",
    focus: "AI + CYBERSECURITY",
    education: "ICS",
    location: "LAHORE, PK",
    currentYear: "2026",
    kernel: "HYBRID_CORE_v4.2",
    securityProtocol: "TLS_AES_256_GCM_SHA384"
  },

  aboutTimeline: [
    {
      year: "2025",
      title: "Completed Matriculation",
      subtitle: "Academic Foundation",
      description: "Successfully completed secondary education with high marks, laying strong roots in science, mathematics, and logical reasoning.",
      type: "milestone",
      badge: "ACADEMIC"
    },
    {
      year: "2026",
      title: "Enrolled in ICS (Intermediate in Computer Science)",
      subtitle: "1st Year Student",
      description: "Formally began dedicated studies in Computer Science, focusing on core programming fundamentals, data structures, and computer architecture.",
      type: "education",
      badge: "CURRENT"
    },
    {
      year: "2026",
      title: "Deep Exploration: Python, AI & Cybersecurity",
      subtitle: "Applied Technical Focus",
      description: "Diving deep into automated systems, LLM prompt engineering, modern full-stack web architectures with React/Vite, and web vulnerability analysis.",
      type: "learning",
      badge: "ACTIVE"
    },
    {
      year: "FUTURE",
      title: "Build Real-World Technology & Products",
      subtitle: "Long-term Trajectory",
      description: "Architect scalable software platforms, contribute to open-source systems, and launch tech products addressing critical social and industrial needs.",
      type: "future",
      badge: "HORIZON",
      isGoal: true
    }
  ],

  // Exact 8-step timeline requested by user
  journeyTimeline: [
    {
      year: "2025",
      title: "MATHEMATICS / SCHOOL",
      subtitle: "Analytical Foundation",
      description: "Cultivated core mathematical intuition, analytical problem solving, and early algorithmic thinking during school studies.",
      type: "education",
      badge: "ACADEMIC",
      isGoal: false
    },
    {
      year: "2025",
      title: "MATRIC COMPLETION",
      subtitle: "Secondary Education Distinction",
      description: "Successfully graduated matriculation with distinction, building initial HTML/CSS/JS scripts and exploring computer hardware.",
      type: "milestone",
      badge: "COMPLETED",
      isGoal: false
    },
    {
      year: "2026",
      title: "STARTED ICS",
      subtitle: "1st Year Student, Lahore",
      description: "Formally enrolled in Intermediate in Computer Science (ICS), focusing on computational theory, programming principles, and database concepts.",
      type: "education",
      badge: "CURRENT",
      isGoal: false
    },
    {
      year: "2026",
      title: "STARTED BUILDING SOFTWARE PROJECTS",
      subtitle: "Hands-on Product Prototyping",
      description: "Began implementing practical software solutions including AWAM (civic services directory) and the Sequence & Embroidery ERP business system.",
      type: "learning",
      badge: "ACTIVE BUILDER",
      isGoal: false
    },
    {
      year: "2026",
      title: "AI + CYBERSECURITY EXPLORATION",
      subtitle: "Advanced Frontier Studies",
      description: "Deep dive into Python scripting, agentic AI workflows, API integrations, web vulnerabilities (OWASP), and network packet analysis.",
      type: "learning",
      badge: "FRONTIER",
      isGoal: false
    },
    {
      year: "FUTURE",
      title: "UNIVERSITY",
      subtitle: "BS in Computer Science / Software Engineering",
      description: "Future Goal: Pursue higher education in Computer Science or Software Engineering at a leading university to master deep systems engineering.",
      type: "future",
      badge: "FUTURE GOAL",
      isGoal: true
    },
    {
      year: "FUTURE",
      title: "INTERNSHIPS",
      subtitle: "Professional Industry Experience",
      description: "Future Plan: Gain hands-on industry experience through software development and cybersecurity internships, contributing to enterprise codebases.",
      type: "future",
      badge: "FUTURE PLAN",
      isGoal: true
    },
    {
      year: "FUTURE",
      title: "REAL-WORLD PRODUCTS",
      subtitle: "Commercial & Civic Technology Ventures",
      description: "Future Vision: Architect and deploy production-grade software products that solve high-friction problems in Pakistan and the international market.",
      type: "future",
      badge: "LONG-TERM VISION",
      isGoal: true
    }
  ],

  // Exact 6 categories requested by user
  skills: [
    // 1. PROGRAMMING
    { name: "Python", category: "programming", level: "WORKING KNOWLEDGE", note: "Scripting, Automation, Data Structures & AI Integrations" },
    { name: "JavaScript (ES6+)", category: "programming", level: "WORKING KNOWLEDGE", note: "Modern DOM, Async/Await, Events, Modules" },
    { name: "TypeScript", category: "programming", level: "LEARNING", note: "Type Safety, Strict Interfaces, Generics" },

    // 2. WEB
    { name: "HTML5", category: "web", level: "WORKING KNOWLEDGE", note: "Semantic Markup, Accessibility (a11y), SEO" },
    { name: "CSS3 / Modern CSS", category: "web", level: "WORKING KNOWLEDGE", note: "Flexbox, Grid, Glassmorphism, Responsive Styling" },
    { name: "React", category: "web", level: "WORKING KNOWLEDGE", note: "Component Trees, Hooks, State Management, SPAs" },
    { name: "Vite", category: "web", level: "WORKING KNOWLEDGE", note: "Fast Bundling, Development Server, Build Config" },
    { name: "REST APIs", category: "web", level: "FAMILIAR", note: "HTTP Methods, JSON Parsing, Fetch & Async Handling" },

    // 3. AI
    { name: "AI Tools & LLMs", category: "ai", level: "WORKING KNOWLEDGE", note: "Claude, Gemini, ChatGPT Workflows & Evaluation" },
    { name: "Prompt Engineering", category: "ai", level: "WORKING KNOWLEDGE", note: "System Instructions, Context Structuring, CoT" },
    { name: "AI-assisted Development", category: "ai", level: "WORKING KNOWLEDGE", note: "Agentic Coding, Code Refactoring, Generation" },
    { name: "AI & Neural Concepts", category: "ai", level: "LEARNING", note: "Transformers, Tokenization, Embeddings, RAG" },

    // 4. CYBERSECURITY
    { name: "Cybersecurity Fundamentals", category: "cybersecurity", level: "LEARNING", note: "CIA Triad, Defense in Depth, Threat Modeling" },
    { name: "Web Security Fundamentals", category: "cybersecurity", level: "LEARNING", note: "OWASP Top 10, XSS, CSRF, Secure Headers" },
    { name: "Networking Fundamentals", category: "cybersecurity", level: "LEARNING", note: "TCP/IP, DNS, OSI Model, Subnets, Ports" },
    { name: "Security Awareness", category: "cybersecurity", level: "FAMILIAR", note: "Phishing Defense, Credential Hygiene, 2FA" },

    // 5. TOOLS
    { name: "Git", category: "tools", level: "FAMILIAR", note: "Branching, Commit Hygiene, Merging" },
    { name: "GitHub", category: "tools", level: "FAMILIAR", note: "Repository Management, Pull Requests, Pages" },
    { name: "Firebase", category: "tools", level: "LEARNING", note: "Firestore, Hosting, Realtime Sync" },
    { name: "VS Code", category: "tools", level: "WORKING KNOWLEDGE", note: "Extensions, Debugging, Custom Shortcuts" },
    { name: "Linux Basics", category: "tools", level: "LEARNING", note: "Bash Terminal, File Permissions, Core Utilities" },

    // 6. CREATIVE
    { name: "UI Design", category: "creative", level: "FAMILIAR", note: "Futuristic Glassmorphism, Layout Proportions, Design Tokens" },
    { name: "Canva", category: "creative", level: "WORKING KNOWLEDGE", note: "Visual Assets, Slide Decks, Branding Elements" },
    { name: "Video Editing", category: "creative", level: "WORKING KNOWLEDGE", note: "Timeline Editing, Motion Graphics, Pacing" },
    { name: "Digital Content Creation", category: "creative", level: "WORKING KNOWLEDGE", note: "Technical Breakdowns, Tutorials, Social Media" }
  ],

  projects: [
    {
      id: "awam",
      title: "AWAM — Public Service Platform",
      tagline: "Civic Resource & Government Services Directory",
      description: "A public-service focused web application concept designed to empower Pakistani citizens to easily discover government services, emergency helplines, official document requirements, and utility assistance.",
      overview: "Navigating public departments, emergency contacts, citizen verification, and public utility documentation can often be confusing and fragmented. AWAM is an ongoing initiative to consolidate essential public resources into an accessible, bilingual, lightweight digital dashboard designed to work smoothly even on low-bandwidth mobile connections.",
      problem: "Citizens struggle with scattered government service information, unclear requirements for identity cards and licenses, and slow emergency helpline discovery during critical crises.",
      solution: "A centralized, verified knowledge base with categorized emergency hotlines, step-by-step document guidance, and intuitive search filters optimized for everyday mobile users.",
      techStack: ["React", "HTML5", "CSS3", "JavaScript", "Firebase"],
      status: "BUILDING",
      progressPercentage: 68,
      category: "Web Application / Civic Tech",
      features: [
        "Instant emergency helpline directory (Rescue 1122, Edhi, Police, Women Safety)",
        "Step-by-step documentation guides for citizen ID (CNIC), licenses, and certificates",
        "Lightweight offline-first interface for minimal bandwidth usage",
        "Clean Urdu/English accessibility layout"
      ],
      currentProgress: "Core UI prototype structured; currently compiling verified civic directory schemas and testing Firebase real-time data sync.",
      futurePlans: [
        "Integrate AI chatbot to answer citizen document inquiries in natural conversational Urdu and English",
        "Add automated regional emergency center geolocation mapping",
        "Introduce PWA offline caching for zero-internet crisis lookup"
      ],
      githubUrl: "https://github.com/noumanimran/awam-platform",
      liveUrl: "https://awam-platform.web.app",
      iconName: "ShieldAlert"
    },
    {
      id: "nexora",
      title: "NEXORA",
      tagline: "Next-Generation Future Communication Protocol",
      description: "A futuristic next-generation communication platform concept inspired by high-speed sci-fi neural relays and real-time collaborative workspace architectures.",
      overview: "NEXORA explores how human communication and asynchronous teamwork will evolve in the next decade. Featuring an ultramodern dark HUD interface, real-time message broadcasting, and AI-assisted conversational summarization, NEXORA is built to turn conversations into structured actionable knowledge.",
      problem: "Traditional chat platforms lead to information overload, lost context in infinite scrolls, and chaotic channel fragmentation.",
      solution: "A futuristic command-driven interface with automated thread distillation, AI semantic bookmarks, and encrypted communication channels.",
      techStack: ["React", "TypeScript", "Vite", "Firebase", "AI"],
      status: "BUILDING",
      progressPercentage: 52,
      category: "Next-Gen Software / AI",
      features: [
        "Sci-fi inspired HUD interface with soundless fluid glass transitions",
        "AI-powered instant thread synthesis and action-item extraction",
        "Encrypted real-time data streaming powered by Firebase",
        "Keyboard-driven fast switching palette inspired by IDEs"
      ],
      currentProgress: "Client-side telemetry interface, message input, and Firebase real-time event listeners implemented; fine-tuning TypeScript state machine.",
      futurePlans: [
        "Add WebRTC end-to-end voice and video channels",
        "Implement autonomous local LLM agent to summarize missed room highlights",
        "Release public developer preview"
      ],
      githubUrl: "https://github.com/noumanimran/nexora-comm",
      liveUrl: "https://nexora.dev",
      iconName: "Radio"
    },
    {
      id: "embroidery-system",
      title: "Sequence & Embroidery Business System",
      tagline: "End-to-End Digital Workflow & Production Management",
      description: "A dedicated digital management concept tailored for sequence and textile embroidery businesses to track designs, raw thread inventory, order batches, client invoices, and manufacturing stages.",
      overview: "The textile and sequence embroidery sector in Pakistan relies heavily on paper logbooks, informal messaging, and verbal updates. This project models an end-to-end ERP interface engineered for factory managers and textile business owners to monitor stitch counts, batch timelines, sequence inventories, and billing status in one centralized cockpit.",
      problem: "Textile embroidery factories experience frequent delays, inventory discrepancy in sequence reels and thread spools, and miscommunicated order specs with design buyers.",
      solution: "A customized digital production workflow that visualizes orders by manufacturing stage (Sampling, Punching/Digitizing, Machine Run, Quality Check, Delivery) and tracks material costs.",
      techStack: ["Web Development", "Database", "UI Design", "Tailwind CSS"],
      status: "BUILDING",
      progressPercentage: 74,
      category: "Business ERP / Workflow Automation",
      features: [
        "Visual Kanban board tracking embroidery orders from design sample to dispatch",
        "Sequence materials inventory tracker (reel count, metallic threads, beads)",
        "Automated client invoice generation and pending payment flags",
        "Machine shift efficiency and stitch calculation telemetry"
      ],
      currentProgress: "Database relational schema designed; responsive administration dashboard prototype built with real-time status toggles.",
      futurePlans: [
        "Add barcode / QR code scanning for batch tracking on factory floor",
        "Provide WhatsApp automated status updates for trade clients",
        "Deploy multi-tenant role access for owners, managers, and operators"
      ],
      githubUrl: "https://github.com/noumanimran/embroidery-erp",
      liveUrl: "https://embroidery-system.preview",
      iconName: "Layers"
    },
    {
      id: "personal-jarvis",
      title: "Personal AI / JARVIS",
      tagline: "Experimental Desktop Voice Assistant & Automation Agent",
      description: "An experimental personal AI assistant project built in Python exploring local speech recognition, text-to-speech feedback, system diagnostics, and automated desktop workflows.",
      overview: "Inspired by futuristic AI copilots, this project investigates how voice interfaces and local Python scripts can automate mundane developer tasks — from launching customized development environments and querying weather/system stats to executing predefined system macros without touching the keyboard.",
      problem: "Context switching between browser tabs, terminal instances, and file managers slows down learning and daily development focus.",
      solution: "A voice-activated Python automation companion that listens for wake commands, speaks diagnostic feedback, and triggers local scripts autonomously.",
      techStack: ["Python", "Speech Recognition", "Text-to-Speech", "AI"],
      status: "EXPERIMENTAL",
      progressPercentage: 45,
      category: "Artificial Intelligence / Desktop Automation",
      features: [
        "Wake-word detection and local microphone audio stream parsing",
        "Natural speech synthesis delivering verbal system feedback",
        "One-command developer workspace launch (IDE, Terminal, Browser, Localhost)",
        "Modular intent parser designed for effortless addition of new automation skills"
      ],
      currentProgress: "Speech recognition loop and TTS engine working reliably; integrating Gemini API fallback for general intelligence queries.",
      futurePlans: [
        "Migrate to fast local Whisper STT for zero-cloud latency and complete privacy",
        "Integrate smart home IoT toggle hooks",
        "Add visual holographic status overlay for secondary monitors"
      ],
      githubUrl: "https://github.com/noumanimran/jarvis-core",
      liveUrl: "https://github.com/noumanimran/jarvis-core#demo",
      iconName: "Bot"
    },
    {
      id: "cyber-sentinel",
      title: "CYBER SENTINEL — Recon Scanner",
      tagline: "Automated Web Header & DNS Vulnerability Auditor",
      description: "A planned security audit utility designed in Python to quickly inspect target domains for missing security headers (HSTS, CSP, X-Frame-Options) and basic SSL/TLS misconfigurations.",
      overview: "Security auditing requires quick reconnaissance before deep analysis. Cyber Sentinel is a lightweight CLI and web prototype designed for students and developers to inspect their own web deployments against defensive security baselines.",
      problem: "Beginner developers frequently deploy web apps without essential defensive HTTP headers, leaving them vulnerable to clickjacking and injection attacks.",
      solution: "An automated scanner providing actionable remediation snippets and risk grades (A to F) based on standard OWASP guidelines.",
      techStack: ["Python", "Networking", "Cybersecurity", "REST APIs"],
      status: "PLANNED",
      progressPercentage: 15,
      category: "Cybersecurity / Network Defense",
      features: [
        "Automated HTTP security header scanner",
        "SSL/TLS certificate expiration & protocol cipher checker",
        "One-click remediation guidance with sample configs (Nginx, Apache, Vercel)",
        "Terminal output and JSON export"
      ],
      currentProgress: "Architecture documented; basic Python urllib test script written.",
      futurePlans: [
        "Add interactive web dashboard",
        "Integrate CVE database lookups for detected server software"
      ],
      githubUrl: "https://github.com/noumanimran/cyber-sentinel",
      iconName: "ShieldAlert"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Student of the Year",
      subtitle: "Academic Excellence & Diligence Recognition",
      badge: "ACADEMIC HONORS",
      iconName: "Trophy"
    },
    {
      id: "ach-2",
      title: "Outstanding Performance",
      subtitle: "Distinction in Academic Rigor & Character",
      badge: "EXCELLENCE",
      iconName: "Award"
    },
    {
      id: "ach-3",
      title: "ICS Student",
      subtitle: "Enrolled in Intermediate Computer Science, Lahore",
      badge: "EDUCATION",
      iconName: "GraduationCap"
    },
    {
      id: "ach-4",
      title: "Building Real Projects",
      subtitle: "Hands-on implementation of civic & business software",
      badge: "BUILDER",
      iconName: "Code2"
    },
    {
      id: "ach-5",
      title: "Exploring AI & Cybersecurity",
      subtitle: "Continuous self-directed research & practical lab work",
      badge: "FRONTIER",
      iconName: "ShieldCheck"
    }
  ],

  // Radar items specifically requested
  missions: [
    {
      title: "Python",
      currentStatus: "Mastering advanced functions, file I/O & automation scripts",
      nextTarget: "Asynchronous programming (asyncio) & backend API microservices",
      category: "CORE LANGUAGE",
      radarAngle: 45,
      radarRadius: 65
    },
    {
      title: "Artificial Intelligence",
      currentStatus: "Implementing LLM agent workflows & prompt engineering",
      nextTarget: "RAG architectures, vector embeddings & local model deployments",
      category: "INTELLIGENCE",
      radarAngle: 90,
      radarRadius: 75
    },
    {
      title: "Cybersecurity",
      currentStatus: "Studying web security fundamentals & networking protocols",
      nextTarget: "Hands-on CTF challenges (TryHackMe) & OWASP Top 10 auditing",
      category: "SECURITY",
      radarAngle: 140,
      radarRadius: 55
    },
    {
      title: "React",
      currentStatus: "Building modular component systems, hooks & responsive UIs",
      nextTarget: "Advanced state machines, custom hooks & performance profiling",
      category: "FRONTEND",
      radarAngle: 200,
      radarRadius: 80
    },
    {
      title: "TypeScript",
      currentStatus: "Enforcing strict type boundaries across portfolio & web projects",
      nextTarget: "Generics, utility types & strict type-safe full-stack schemas",
      category: "TYPE SYSTEM",
      radarAngle: 250,
      radarRadius: 60
    },
    {
      title: "Networking",
      currentStatus: "Understanding packet travel, TCP/UDP, DNS, HTTP/HTTPS & ports",
      nextTarget: "Wireshark packet sniffing analysis & firewall configuration",
      category: "INFRASTRUCTURE",
      radarAngle: 300,
      radarRadius: 50
    },
    {
      title: "Git & GitHub",
      currentStatus: "Managing repositories, branches, clean commits & project boards",
      nextTarget: "Automated GitHub Actions CI/CD workflows & open-source PRs",
      category: "DEV TOOLS",
      radarAngle: 345,
      radarRadius: 70
    }
  ],

  visionGoals: [
    {
      title: "AI Engineer",
      role: "Next-Gen Intelligent Systems",
      description: "Architect systems where artificial intelligence operates as an active collaborator, augmenting human potential and automating complex workflows.",
      futureFocus: "Autonomous Agents, Multimodal Models, Enterprise Workflows",
      iconName: "Cpu"
    },
    {
      title: "Cybersecurity Professional",
      role: "Digital Defense & Security",
      description: "Safeguard critical digital infrastructure, conduct rigorous penetration testing, and build resilient defense-in-depth software architectures.",
      futureFocus: "Application Security, Network Defense, Ethical Hacking",
      iconName: "Shield"
    },
    {
      title: "Software Developer",
      role: "Scalable Full-Stack Engineering",
      description: "Craft robust, blazing-fast, and accessible software applications that serve millions with zero compromise on craftsmanship and reliability.",
      futureFocus: "Modern Distributed Systems, High-Performance Web Apps",
      iconName: "Terminal"
    },
    {
      title: "Entrepreneur",
      role: "Technology Venture Founder",
      description: "Identify high-friction problems in emerging markets and build sustainable tech ventures that generate employment and economic vitality.",
      futureFocus: "SaaS Products, Civic Tech Platforms, Regional Solutions",
      iconName: "Rocket"
    },
    {
      title: "Product Builder",
      role: "User-Obsessed Technology Design",
      description: "Bridge the gap between complex low-level engineering and beautiful, intuitive digital experiences that delight end users.",
      futureFocus: "UI/UX Systems, Fluid Interactions, Human-Computer Interfaces",
      iconName: "Sparkles"
    },
    {
      title: "Content Creator",
      role: "Knowledge Sharing & Community",
      description: "Document the journey, demystify tech concepts for Pakistani students, and inspire the next wave of young developers to build proudly.",
      futureFocus: "Technical Tutorials, Tech Journey Vlogs, Dev Guides",
      iconName: "Video"
    }
  ],

  services: [
    {
      title: "Modern Websites",
      description: "High-performance, mobile-responsive, SEO-optimized landing pages and brand websites built with clean semantic code.",
      iconName: "Globe",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      available: true
    },
    {
      title: "React Applications",
      description: "Interactive single-page applications with clean component architecture, reactive state, and fluid screen transitions.",
      iconName: "Atom",
      tags: ["React", "TypeScript", "Vite", "Component UI"],
      available: true
    },
    {
      title: "AI-Powered Applications",
      description: "Integration of modern AI capabilities (summarization, chatbots, intelligent workflows) into web applications.",
      iconName: "Bot",
      tags: ["LLMs", "Prompt Systems", "Gemini API", "Automation"],
      available: true
    },
    {
      title: "Cybersecurity Learning Projects",
      description: "Assisting with introductory web security checks, security awareness audits, and secure coding practices.",
      iconName: "ShieldAlert",
      tags: ["OWASP", "Security Awareness", "Best Practices"],
      available: true
    },
    {
      title: "UI / Digital Design",
      description: "Futuristic and minimalist user interface mockups, interactive component designs, and design system tokens.",
      iconName: "Palette",
      tags: ["Design Systems", "Glassmorphism", "Responsive Layout"],
      available: true
    },
    {
      title: "Shopify & E-Commerce",
      description: "Setup, theme customization, and product workflow configuration for modern online stores and merchandise brands.",
      iconName: "ShoppingBag",
      tags: ["E-Commerce", "Store Setup", "Product Catalog"],
      available: true
    },
    {
      title: "Automation Scripts",
      description: "Custom Python automation scripts to eliminate repetitive file tasks, process spreadsheets, and handle web data.",
      iconName: "Cog",
      tags: ["Python", "Automation", "Data Parsing"],
      available: true
    },
    {
      title: "Digital Content & Video",
      description: "Clean visual graphics, presentation decks, and technical promotional video editing for social channels.",
      iconName: "Film",
      tags: ["Video Editing", "Canva", "Visual Assets"],
      available: true
    }
  ],

  socialLinks: {
    email: "noumanimran1244@gmail.com",
    whatsapp: "https://wa.me/923044923000",
    whatsappDisplay: "+92 304 4923000",
    github: "https://github.com/noumanimran",
    linkedin: "https://linkedin.com/in/noumanimran",
    youtube: "https://youtube.com/@noumanimran"
  }
};
