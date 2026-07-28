/**
 * profile.ts — Single source of truth for Shirisha Mangali's Portfolio
 */

export const personal = {
  name: "Shirisha Mangali",
  title: "Full Stack Developer | Software Engineer",
  roles: ["Software Engineer", "Full Stack Developer", "Problem Solver", "AI Enthusiast"],
  tagline: "Building scalable web apps, solving complex problems & exploring AI innovation.",
  bio: "Passionate Software Engineer & Full Stack Developer dedicated to architecting high-performance scalable web applications, mastering algorithmic problem solving, and leveraging cutting-edge AI tools to build state-of-the-art software.",
  email: "shirisha1862@gmail.com",
  location: "India",
  avatarUrl: "/avatar.png",
  bgUrl: "/hero_bg.png",
};

export const links = {
  github: "https://github.com/Shirisha-Mangali",
  linkedin: "https://www.linkedin.com/in/shirisha-mangali-7242512b0/",
  leetcode: "https://leetcode.com/u/shirisha_m/",
  email: "mailto:shirisha1862@gmail.com",
  resume: "/resume.pdf",
};

export interface TechItem {
  name: string;
  category: "Languages" | "Frontend & Frameworks" | "Backend & Databases" | "Tools, DevOps & AI";
  iconName: string;
  color: string;
  proficiency?: string;
}

export const techCategories: {
  category: "Languages" | "Frontend & Frameworks" | "Backend & Databases" | "Tools, DevOps & AI";
  items: TechItem[];
}[] = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", category: "Languages", iconName: "javascript", color: "#F7DF1E", proficiency: "Advanced" },
        { name: "TypeScript", category: "Languages", iconName: "typescript", color: "#3178C6", proficiency: "Advanced" },
        { name: "Java", category: "Languages", iconName: "java", color: "#007396", proficiency: "Proficient" },
        { name: "HTML5", category: "Languages", iconName: "html5", color: "#E34F26", proficiency: "Expert" },
        { name: "CSS3", category: "Languages", iconName: "css3", color: "#1572B6", proficiency: "Expert" },
      ]
    },
    {
      category: "Frontend & Frameworks",
      items: [
        { name: "React", category: "Frontend & Frameworks", iconName: "react", color: "#61DAFB", proficiency: "Advanced" },
        { name: "Angular", category: "Frontend & Frameworks", iconName: "angular", color: "#DD0031", proficiency: "Proficient" },
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", category: "Backend & Databases", iconName: "nodedotjs", color: "#339933", proficiency: "Advanced" },
        { name: "Express", category: "Backend & Databases", iconName: "express", color: "#FFFFFF", proficiency: "Advanced" },
        { name: "Spring Boot", category: "Backend & Databases", iconName: "springboot", color: "#6DB33F", proficiency: "Proficient" },
        { name: "MongoDB", category: "Backend & Databases", iconName: "mongodb", color: "#47A248", proficiency: "Advanced" },
        { name: "pgAdmin", category: "Backend & Databases", iconName: "postgresql", color: "#4169E1", proficiency: "Proficient" },
      ]
    },
    {
      category: "Tools, DevOps & AI",
      items: [
        { name: "Claude Code", category: "Tools, DevOps & AI", iconName: "anthropic", color: "#D97706", proficiency: "Expert" },
        { name: "GitHub Copilot", category: "Tools, DevOps & AI", iconName: "githubcopilot", color: "#60A5FA", proficiency: "Expert" },
        { name: "Docker", category: "Tools, DevOps & AI", iconName: "docker", color: "#2496ED", proficiency: "Proficient" },
        { name: "Azure", category: "Tools, DevOps & AI", iconName: "azure", color: "#0089D6", proficiency: "Proficient" },
        { name: "Git", category: "Tools, DevOps & AI", iconName: "git", color: "#F05032", proficiency: "Advanced" },
        { name: "GitHub", category: "Tools, DevOps & AI", iconName: "github", color: "#FFFFFF", proficiency: "Advanced" },
        { name: "VS Code", category: "Tools, DevOps & AI", iconName: "visualstudiocode", color: "#007ACC", proficiency: "Expert" },
        { name: "Vercel", category: "Tools, DevOps & AI", iconName: "vercel", color: "#FFFFFF", proficiency: "Advanced" },
        { name: "Render", category: "Tools, DevOps & AI", iconName: "render", color: "#46E3B7", proficiency: "Advanced" },
        { name: "Postman", category: "Tools, DevOps & AI", iconName: "postman", color: "#FF6C37", proficiency: "Advanced" },
        { name: "Linux", category: "Tools, DevOps & AI", iconName: "linux", color: "#FCC624", proficiency: "Proficient" },
      ]
    }
  ];

export interface Project {
  id: string;
  title: string;
  problem: string;
  role: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  domainUrl?: string;
  metrics?: string;
  isLive?: boolean;
  category?: "Live Production" | "Full Stack" | "AI & Automation" | "Algorithms";
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "rgukt-campusmate",
    title: "RGUKT CampusMate — Academic & Study Portal",
    problem: "RGUKT students faced fragmented study material distribution, lost previous year question papers (PYQs), and lack of centralized academic resources across departments.",
    role: "Full Stack Engineer & Core Developer",
    description: "A comprehensive full-stack campus portal empowering RGUKT students to seamlessly browse, upload, filter, and download academic study materials, PYQs, and syllabus guides with secure JWT authentication and real-time backend processing.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API", "Render"],
    githubUrl: "https://github.com/Shirisha1862/RGUKT-CampusMate.git",
    demoUrl: "https://rgukt-campusmate-fe.onrender.com/",
    domainUrl: "rgukt-campusmate.onrender.com",
    isLive: true,
    category: "Live Production",
    metrics: "Active Campus Portal · Multi-Year Notes & PYQ Hub",
    imageUrl: "/projects/rgukt-campusmate.png",
  },
  {
    id: "react-stripe-poc",
    title: "React Stripe — Payment Gateway & Integration POC",
    problem: "Integrating secure, PCI-compliant online checkout flows and managing real-time payment intent lifecycle across front-end and back-end microservices.",
    role: "Full Stack Developer",
    description: "A full-stack payment integration application built with React and Stripe, showcasing seamless checkout workflows, payment intent lifecycle management, secure API handling, and live transaction feedback.",
    techStack: ["React", "Stripe API", "Node.js", "Express", "Tailwind CSS", "Render"],
    githubUrl: "https://github.com/Shirisha-Mangali/ReactStripePOC",
    demoUrl: "https://reactstripepoc.onrender.com",
    domainUrl: "reactstripepoc.onrender.com",
    isLive: true,
    category: "Live Production",
    metrics: "Live Payment Gateway · Stripe API Checkout",
    imageUrl: "/projects/react-stripe.png",
  },
  {
    id: "ai-task-engine",
    title: "AI-Powered Workflow Automation Engine",
    problem: "Manual developer task execution and multi-step pipeline context switching.",
    role: "Lead Full Stack Developer & AI System Architect",
    description: "An enterprise-grade workflow automation system utilizing full-stack Node.js, TypeScript, and MongoDB with integrated LLM agent processing pipelines.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "Azure"],
    githubUrl: "https://github.com/Shirisha-Mangali",
    demoUrl: "https://github.com/Shirisha-Mangali",
    category: "AI & Automation",
    metrics: "99.9% Uptime · 10x Faster Task Execution",
  },
  {
    id: "fullstack-analytics",
    title: "Real-Time Cloud Analytics Dashboard",
    problem: "High data ingestion latency and lack of live microservice telemetry visualization.",
    role: "Backend & Systems Developer",
    description: "Scalable full-stack application built with Spring Boot, React, and PostgreSQL for real-time system metric visualization and anomaly detection.",
    techStack: ["Java", "Spring Boot", "React", "pgAdmin", "Postman", "Docker"],
    githubUrl: "https://github.com/Shirisha-Mangali",
    category: "Full Stack",
    metrics: "< 50ms Latency · Microservice Architecture",
  },
  {
    id: "algo-vault",
    title: "Interactive Algorithmic Problem Solver",
    problem: "Complex algorithmic optimization visualization and memory complexity benchmarking.",
    role: "Algorithm Specialist & Frontend Developer",
    description: "Comprehensive repository and solution visualizer showcasing optimized DSA implementations, time-complexity analysis, and test suites.",
    techStack: ["Java", "TypeScript", "Linux", "VS Code", "Vercel"],
    githubUrl: "https://github.com/Shirisha-Mangali",
    demoUrl: "https://leetcode.com/u/shirisha_m/",
    category: "Algorithms",
    metrics: "Optimized O(1) Memory Solutions",
  }
];

export interface Quest {
  id: string;
  title: string;
  company: string;
  period: string;
  status: "COMPLETED" | "IN PROGRESS";
  directive: string;
  techStack: string[];
  highlights: string[];
}

export const quests: Quest[] = [
  {
    id: "quest-1",
    title: "Full Stack Developer",
    company: "Core Tech Innovations",
    period: "2024 — PRESENT",
    status: "IN PROGRESS",
    directive: "Architecting high-availability full-stack services, AI agent integrations, and microservices.",
    techStack: ["React", "Node.js", "TypeScript", "Docker", "Azure", "MongoDB"],
    highlights: [
      "Engineered resilient full-stack applications with responsive UI and sub-second API response times.",
      "Integrated AI copilot and agentic automation workflows into daily development lifecycle.",
      "Optimized CI/CD deployment pipelines on Docker and Vercel cloud platforms."
    ]
  },
  {
    id: "quest-2",
    title: "Software Engineering Specialist",
    company: "Algorithm & Systems Lab",
    period: "2023 — 2024",
    status: "COMPLETED",
    directive: "Developing backend APIs in Java/Spring Boot & Node.js while crafting responsive frontend dashboards.",
    techStack: ["Java", "Spring Boot", "Angular", "pgAdmin", "Linux", "Postman"],
    highlights: [
      "Built multi-tenant RESTful APIs handling high throughput data queries with zero downtime.",
      "Created reusable UI component libraries using modern CSS design systems and TypeScript.",
      "Conducted rigorous API security, unit testing, and database query optimization."
    ]
  }
];

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  highlights: string[];
}

export const educationList: EducationEntry[] = [
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT Basar)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    period: "2021 — 2025",
    location: "Basar, Telangana, India",
    highlights: [
      "Specialized in Data Structures, Algorithms, Full-Stack Software Architecture, and AI engineering.",
      "Architected web applications, RESTful microservices, and database management systems.",
      "Active participant in technical symposiums, competitive coding hackathons, and open-source initiatives."
    ]
  }
];
