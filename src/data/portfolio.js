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

// Aesthetic Notes images and walkthrough video
import aestheticLanding from "../assets/aestheticNotes/landing.jpg";
import aestheticSignIn from "../assets/aestheticNotes/sign-in.jpg";
import aestheticDashboard from "../assets/aestheticNotes/dashboard.jpg";
import aestheticNotesGrid from "../assets/aestheticNotes/dashboard-notes.jpg";
import aestheticEditor from "../assets/aestheticNotes/editor.jpg";
import aestheticStudio from "../assets/aestheticNotes/ai-studio.jpg";
import aestheticSummary from "../assets/aestheticNotes/ai-summary.jpg";
import aestheticRewrite from "../assets/aestheticNotes/ai-rewrite.jpg";
import aestheticNovel from "../assets/aestheticNotes/novel.jpg";
import aestheticDiary from "../assets/aestheticNotes/diary.jpg";
import aestheticCompanion from "../assets/aestheticNotes/ai-companion.jpg";
import aestheticDark from "../assets/aestheticNotes/dashboard-dark.jpg";
import aestheticVideo from "../assets/aestheticNotes/walkthrough.mp4";
import aestheticVideoPoster from "../assets/aestheticNotes/walkthrough-poster.jpg";

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
    tagline: "AI-powered writing and knowledge workspace",
    summary:
      "A calm writing space for notes, novels and diaries, with Gemini-powered tools to summarize, polish and organize your writing, and an AI companion that answers questions from your own notes.",
    cover: aestheticLanding,
    video: {
      src: aestheticVideo,
      poster: aestheticVideoPoster,
      caption: "2-minute narrated walkthrough of the app",
    },
    images: [
      { src: aestheticLanding, caption: "Landing page" },
      { src: aestheticSignIn, caption: "Sign in and sign up" },
      { src: aestheticDashboard, caption: "Dashboard with quick create for notes, novels and diaries" },
      { src: aestheticNotesGrid, caption: "Pinned notes and colour-coded note cards" },
      { src: aestheticEditor, caption: "Rich-text editor with tags" },
      { src: aestheticStudio, caption: "AI Studio: one-click writing tools" },
      { src: aestheticSummary, caption: "AI summary with key points and action items, previewed before applying" },
      { src: aestheticRewrite, caption: "Professional polish: before and after" },
      { src: aestheticNovel, caption: "Novel mode: chapters in a book-style view" },
      { src: aestheticDiary, caption: "Diary mode: date-stamped entries" },
      { src: aestheticCompanion, caption: "AI companion answering from the user's own notes" },
      { src: aestheticDark, caption: "Dark mode" },
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini",
      "RAG",
      "Embeddings",
    ],
    live: "https://aesthetic-notes-zeta.vercel.app",
    code: "https://github.com/ishika1214/AestheticNotes-Backend",
    caseStudy: {
      overview:
        "Aesthetic Notes is a distraction-free writing workspace with AI built in. Users write notes, chapter-based novels and date-stamped diaries, then use the AI Studio to summarize, retitle, tag, polish or extract tasks, or ask the AI companion questions that it answers from their own notes.",
      problem:
        "Notes pile up across apps and quickly become hard to search, and most AI writing tools rewrite text directly with no chance to review the change first. General chatbots also know nothing about what you have written yourself.",
      solution:
        "One calm workspace for every kind of writing, with AI tools that always show a side-by-side preview before anything changes. Every note is embedded when it is saved, so the AI companion can retrieve the most relevant notes and answer from the user's own words.",
      contribution:
        "Designed and built the whole product on my own: UI/UX design, the React front end, the Express and MongoDB API, the Gemini integration and RAG pipeline, and deployment. I also produced the narrated product walkthrough video.",
      architecture: [
        "React 19 and TypeScript front end with Redux Toolkit for state, Tailwind CSS v4 for styling and TipTap for rich-text editing.",
        "Express 5 REST API with JWT authentication, bcrypt-hashed passwords and MongoDB via Mongoose.",
        "Google Gemini 2.5 Flash for summarizing, titles, tags, rewriting, task extraction and formatting.",
        "Retrieval-augmented generation (RAG): notes are embedded with gemini-embedding-001 when saved, and chat questions are matched to the closest notes by cosine similarity.",
        "Embeddings are generated in the background after a save, so writing never waits on the AI.",
        "Chat history is stored per user so the AI companion keeps the context of the conversation.",
      ],
      features: [
        "Three writing modes: Notes, Novels (chapter by chapter) and Diaries (date-stamped entries)",
        "Book-style page view for novels and diaries",
        "AI Studio: summarize, generate a title, suggest tags, professional polish, extract tasks and clean up formatting",
        "Side-by-side preview before any AI change is applied",
        "AI companion that answers questions from your own notes",
        "Search, type filters, tags, pinned and private or public notes",
        "Light and dark themes",
        "Narrated how-to-use walkthrough video on the landing page",
      ],
      challenges: [
        "LLM output is not always valid JSON. The API extracts and validates the JSON block, and the front end normalizes list items the model returns as objects, so a bad response can never crash the UI.",
        "Keeping AI answers grounded: the companion is only given the most relevant notes, retrieved by embedding similarity, and is told to say when the notes don't contain the answer.",
        "Keeping saves fast: embeddings are generated asynchronously after the note is stored, so the writing experience never blocks on an AI call.",
        "Producing the walkthrough video: a Playwright script drives the real app with an on-screen cursor, arrows and captions, Gemini text-to-speech provides the narration, and ffmpeg mixes the two into an MP4 that can be re-recorded whenever the UI changes.",
      ],
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
