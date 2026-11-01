// Single source of truth for portfolio content.
// Any field set to `null` is treated as "pending confirmation": it is shown as a
// dashed placeholder in development (`npm start`) and hidden in production builds.

import {
  FiCloud,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiLink,
  FiMonitor,
  FiServer,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";

// Aesthetic Notes images
import aestheticLanding from "../assets/aestheticNotes/LandingPage.png";
import aestheticDashboard from "../assets/aestheticNotes/dashboard.png";
import aestheticSummarize from "../assets/aestheticNotes/summarize.png";
import aestheticSummarize1 from "../assets/aestheticNotes/summarize1.png";
import aestheticAI from "../assets/aestheticNotes/AI-Companion.png";
import aestheticRewrite from "../assets/aestheticNotes/professionalRewrite.png";
import aestheticDiary from "../assets/aestheticNotes/Diary.png";
import aestheticTags from "../assets/aestheticNotes/tags.png";

// Task Manager images
import taskManager1 from "../assets/taskManager/taskmanager1.png";
import taskManager2 from "../assets/taskManager/taskmanager2.png";
import taskManager3 from "../assets/taskManager/taskmanager3.png";
import taskManager4 from "../assets/taskManager/taskmanager4.png";
import taskManager5 from "../assets/taskManager/taskmanager5.png";
import taskManager6 from "../assets/taskManager/taskmanager6.png";
import taskManager7 from "../assets/taskManager/taskmanager7.png";

// Mind Space images
import mindSpace1 from "../assets/mindSpace/mindSpace1.png";
import mindSpace2 from "../assets/mindSpace/mindSpace2.png";
import mindSpace3 from "../assets/mindSpace/mindSpace3.png";
import mindSpace4 from "../assets/mindSpace/mindSpace4.png";
import mindSpace5 from "../assets/mindSpace/mindSpace5.png";
import mindSpace6 from "../assets/mindSpace/mindSpace6.png";

export const profile = {
  name: "Ishika Kumari",
  title: "Software Engineer",
  focus: ["Full-Stack Development", "Backend Systems", "AI Integrations"],
  experience: "3+ years",
  intro:
    "Software Engineer with 3+ years of experience building full-stack web applications, backend systems and business workflows. I work with React, Next.js, TypeScript, Node.js, NestJS and PostgreSQL, and have built AI-powered applications and integrated third-party services.",
  coreStack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
};

// Headline figures, taken from the experience section below
export const stats = [
  { value: "3+", label: "Years building full-stack applications" },
  { value: "15+", label: "Clinics using healthcare platforms I've built" },
  { value: "35%", label: "Faster API responses through query optimization" },
  { value: "60%", label: "Less manual data entry with document AI" },
];

export const links = {
  email: "kumariishika874@gmail.com",
  linkedin: "https://www.linkedin.com/in/ishika-kumari",
  github: "https://github.com/ishika1214",
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  // Getform endpoint used by the contact form
  contactForm: "https://getform.io/f/31313319-e886-40c5-af98-21b4317d9014",
};

export const about = {
  paragraphs: [
    "I'm a Software Engineer focused on building complete web applications: from the interface users work in, to the APIs, data models and background processes behind it.",
    "Most of my work has been on healthcare platforms used by 15+ clinics: turning complex care workflows into reliable software, designing and optimizing the PostgreSQL and API layer behind them, securing sensitive data with JWT and role-based access control, and connecting to the third-party services they depend on. I've also built AI features, including an agentic assistant with RAG and pgvector similarity search, and document data extraction with Azure AI Document Intelligence.",
  ],
  highlights: [
    {
      title: "Full-stack applications",
      icon: FiLayers,
      text: "End-to-end features across React / Next.js frontends and Node.js / NestJS backends.",
    },
    {
      title: "Backend & REST APIs",
      icon: FiServer,
      text: "Designing and building REST APIs and the service logic behind them.",
    },
    {
      title: "Database design",
      icon: FiDatabase,
      text: "Modeling and optimizing PostgreSQL schemas and queries with Prisma and TypeORM.",
    },
    {
      title: "Business workflows",
      icon: FiGitBranch,
      text: "Translating multi-step, rule-heavy business processes into maintainable code.",
    },
    {
      title: "Third-party integrations",
      icon: FiLink,
      text: "Payments, scheduling, documents and other external APIs, e.g. Stripe, Nylas and PandaDoc.",
    },
    {
      title: "AI-powered applications",
      icon: FiCpu,
      text: "LLM features with Gemini, LangChain / LangGraph, RAG and pgvector semantic search.",
    },
  ],
};

export const education = {
  degree: "B.Tech, Information Technology",
  school: "National Institute of Science and Technology, Berhampur",
  period: "2019 – 2023",
};

export const experience = [
  {
    company: "BrainerHub Solutions",
    role: "Full Stack Software Engineer",
    period: "2023 – Present",
    current: true,
    location: "Ahmedabad, India",
    summary:
      "Full-stack engineering on healthcare platforms for ABA therapy management and live-in care coordination, plus AI and document automation work.",
    groups: [
      {
        title: "Healthcare Platforms (ABA Therapy Management & Live-in Care Coordination)",
        items: [
          "Built full-stack healthcare applications with React.js, TypeScript, Redux, NestJS and PostgreSQL, adopted by 15+ health clinics for day-to-day therapy and care operations.",
          "Engineered end-to-end care workflows (client and carer onboarding, document management, placement matching, availability scheduling and handover management), reducing manual coordination time by 40%.",
          "Designed PostgreSQL schemas and optimized SQL queries and indexes, improving API response times by 35% while strengthening data integrity.",
          "Secured REST APIs with JWT authentication, role-based access control (RBAC), input validation and authorization to protect sensitive patient and care data.",
          "Developed admin dashboards with advanced filtering, status tracking, form validation and review workflows used by operations teams across 15+ clinics.",
          "Integrated third-party services, background job processing and automated email notifications, cutting manual follow-ups by 50%.",
        ],
      },
      {
        title: "AI-Powered Learning Platform",
        items: [
          "Built an agentic AI assistant using LangGraph, LangChain.js, Gemini and tool calling for search and exports.",
          "Implemented RAG with Gemini embeddings and pgvector similarity search, improving answer relevance by 30%.",
          "Added PII redaction and human-in-the-loop guardrails, plus BullMQ/Redis workers for async processing.",
        ],
      },
      {
        title: "Document Automation",
        items: [
          "Integrated Azure AI Document Intelligence to extract structured data from uploaded documents, cutting manual data entry by 60%.",
        ],
      },
      {
        title: "DevOps & Collaboration",
        items: [
          "Containerized applications with Docker and contributed to GitHub Actions CI/CD pipelines, production deployments and issue troubleshooting across cross-functional Agile teams.",
        ],
      },
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Redux",
      "NestJS",
      "PostgreSQL",
      "JWT / RBAC",
      "LangGraph",
      "LangChain.js",
      "Gemini",
      "pgvector",
      "BullMQ",
      "Redis",
      "Azure AI Document Intelligence",
      "Docker",
      "GitHub Actions",
    ],
  },
];

export const projects = [
  {
    id: "aesthetic-notes",
    title: "Aesthetic Notes",
    tagline: "AI-enhanced writing and knowledge workspace",
    summary:
      "A writing studio with built-in AI tools to summarize notes, rewrite text and chat with your own content, powered by Google's Gemini.",
    cover: aestheticLanding,
    images: [
      { src: aestheticLanding, caption: "Landing page" },
      { src: aestheticDashboard, caption: "Notebook-style writing interface" },
      { src: aestheticSummarize, caption: "AI summarization" },
      { src: aestheticSummarize1, caption: "AI insights" },
      { src: aestheticAI, caption: "AI companion: chat with your notes" },
      { src: aestheticRewrite, caption: "Professional rewrite" },
      { src: aestheticDiary, caption: "Diary mode" },
      { src: aestheticTags, caption: "Tags and notifications" },
    ],
    tech: [
      "Gemini",
      "LangChain",
      "LangGraph",
      "RAG",
      "PostgreSQL",
      "pgvector",
      "Semantic search",
    ],
    live: "https://aesthetic-notes-git-devlop-ishika1214s-projects.vercel.app/",
    code: "https://github.com/ishika1214/AestheticNotes-Backend",
    caseStudy: {
      overview:
        "Aesthetic Notes is a distraction-free writing workspace with AI tools built in. Users write in a notebook-style interface and can summarize, rewrite and extract insights from their notes, or chat directly with their own content.",
      problem: null,
      solution: null,
      contribution: null,
      architecture: [
        "LLM features powered by Google Gemini, orchestrated with LangChain / LangGraph.",
        "Retrieval-augmented generation (RAG) so AI responses are grounded in the user's own notes.",
        "Embeddings stored in PostgreSQL with pgvector to support semantic search.",
        "Background processing for long-running AI tasks.",
      ],
      features: [
        "Notebook-style, single-page focused writing interface",
        "AI summarization, insights and professional rewrite",
        "Chat with your own notes (AI companion)",
        "Manual pagination with pages and chapters",
        "Studio, Novel (chapter-based) and Diary (date-stamped) modes",
        "Light and dark themes",
        "Toast notifications for note actions (Sonner)",
      ],
      challenges: null,
    },
  },
  {
    id: "task-manager",
    title: "Task Manager",
    tagline: "Task and project management with role-based access",
    summary:
      "A task and project management app for organizations, with role-based access control. Built with Next.js, Redux and Tailwind CSS.",
    cover: taskManager1,
    images: [
      taskManager1,
      taskManager2,
      taskManager3,
      taskManager4,
      taskManager5,
      taskManager6,
      taskManager7,
    ].map((src, i) => ({ src, caption: `Task Manager screen ${i + 1}` })),
    tech: ["Next.js", "React", "Redux", "Tailwind CSS"],
    live: "https://ishika1214.github.io/Task-Manager/",
    code: "https://github.com/ishika1214/Task-Manager",
    caseStudy: {
      overview:
        "A task and project management application that lets teams manage organizations, projects and tasks, with role-based access control over what each user can see and do.",
      problem: null,
      solution: null,
      contribution: null,
      architecture: [
        "Next.js and React for the application UI.",
        "Redux for application state management.",
        "Tailwind CSS for styling.",
      ],
      features: [
        "Organization, project and task management",
        "Role-based access control",
      ],
      challenges: null,
    },
  },
  {
    id: "mind-space",
    title: "Mind Space",
    tagline: "Offline-first mood and reflection tracker",
    summary:
      "A calm place to track your mood, breathe, reflect and check in with yourself. Built with React, Redux and Tailwind CSS, with data stored locally in IndexedDB.",
    cover: mindSpace1,
    images: [mindSpace1, mindSpace2, mindSpace3, mindSpace4, mindSpace5, mindSpace6].map(
      (src, i) => ({ src, caption: `Mind Space screen ${i + 1}` })
    ),
    tech: ["React", "Redux", "Tailwind CSS", "IndexedDB"],
    live: "https://ishika1214.github.io/Mind-Space/",
    code: "https://github.com/ishika1214/Mind-Space",
    caseStudy: {
      overview:
        "Mind Space is a personal wellbeing app for tracking mood, guided breathing and reflection. All data is stored in the browser with IndexedDB.",
      problem: null,
      solution: null,
      contribution: null,
      architecture: [
        "React with Redux for state management.",
        "IndexedDB for local, in-browser persistence.",
        "Tailwind CSS for styling.",
      ],
      features: ["Mood tracking", "Breathing exercises", "Reflection / check-ins"],
      challenges: null,
    },
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: FiMonitor,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Redux Toolkit", "Material UI", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: FiServer,
    items: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "REST APIs", "JWT / RBAC", "BullMQ"],
  },
  {
    category: "Database",
    icon: FiDatabase,
    items: ["PostgreSQL", "Prisma", "TypeORM", "Redis", "pgvector"],
  },
  {
    category: "AI",
    icon: FiCpu,
    items: ["Gemini", "LangChain", "LangGraph", "RAG", "Embeddings", "Semantic search", "Azure AI Document Intelligence"],
  },
  {
    category: "DevOps & Cloud",
    icon: FiCloud,
    items: ["Docker", "GitHub Actions", "CI/CD", "GCP", "Azure"],
  },
  {
    category: "Integrations",
    icon: FiLink,
    items: ["Stripe", "Nylas", "PandaDoc", "Third-party APIs"],
  },
];

export const services = [
  {
    title: "Full-stack web applications",
      icon: FiLayers,
    text: "New web applications built end to end with React / Next.js and Node.js / NestJS.",
  },
  {
    title: "Backend API development",
      icon: FiServer,
    text: "REST APIs, data models and service logic on PostgreSQL.",
  },
  {
    title: "Improving existing applications",
      icon: FiTrendingUp,
    text: "Refactoring, performance work and new features on an existing codebase.",
  },
  {
    title: "Third-party integrations",
      icon: FiLink,
    text: "Connecting payments, scheduling, documents and other external APIs.",
  },
  {
    title: "AI-powered features",
      icon: FiCpu,
    text: "LLM features, RAG and semantic search added to new or existing products.",
  },
  {
    title: "Maintenance & feature development",
      icon: FiTool,
    text: "Ongoing technical maintenance and incremental feature delivery.",
  },
];

export const enquiryTopics = [
  { value: "opportunity", label: "Software engineering opportunity" },
  { value: "project", label: "Project collaboration" },
  { value: "other", label: "Something else" },
];
