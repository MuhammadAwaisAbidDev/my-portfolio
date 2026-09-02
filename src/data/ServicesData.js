import {
  FiGlobe,
  FiPenTool,
  FiGrid,
  FiCode,
  FiUsers,
} from "react-icons/fi";

export const services = [
  {
    id: 1,
    slug: "full-stack-web-applications",
    number: "01",
    icon: FiGlobe,

    title: "Full-Stack Web Applications",

    description:
      "End-to-end web applications built with modern frontend, backend, database, authentication, and business logic.",

    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
    ],

    price: "$900",

    features: [
      "Requirements and architecture plan before a line of code",
      "React or Next.js front end, fully responsive",
      "Node.js / Next.js API layer with MongoDB",
      "Authentication, roles, and permissions",
      "Deployment, environment setup, and handover docs",
    ],
  },

  {
    id: 2,
    slug: "frontend-development",
    number: "02",
    icon: FiPenTool,

    title: "Frontend Development",

    description:
      "Modern, responsive and user-friendly interfaces built from designs or developed from scratch.",

    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
    ],

    price: "$600",

    features: [
      "Pixel-perfect responsive interfaces",
      "React.js and Next.js development",
      "Mobile, tablet, and desktop optimization",
      "Reusable components and clean UI structure",
      "Smooth interactions and modern animations",
    ],
  },

  {
    id: 3,
    slug: "admin-panels-dashboards",
    number: "03",
    icon: FiGrid,

    title: "Admin Panels & Dashboards",

    description:
      "Powerful internal dashboards and admin panels with CRUD operations, roles, analytics, charts, and management tools.",

    technologies: [
      "Next.js",
      "MongoDB",
      "Charts",
      "RBAC",
    ],

    price: "$800",

    features: [
      "Custom admin dashboard design",
      "CRUD operations and data management",
      "Role-based access control",
      "Charts and analytics",
      "Tables, filters, search, and exports",
    ],
  },

  {
    id: 4,
    slug: "api-development-integration",
    number: "04",
    icon: FiCode,

    title: "API Development & Integration",

    description:
      "Reliable REST APIs designed to be used, versioned, documented, rate-limited, and integrated with modern applications.",

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST",
    ],

    price: "$500",

    features: [
      "REST API development",
      "Authentication and authorization",
      "Database integration",
      "API validation and error handling",
      "Third-party API integrations",
    ],
  },

  {
    id: 5,
    slug: "consulting-code-review",
    number: "05",
    icon: FiUsers,

    title: "Consulting & Code Review",

    description:
      "A second pair of eyes on architecture, a stalled codebase, performance problems, or technical decisions.",

    technologies: [
      "Architecture",
      "Code Review",
      "Mentoring",
      
    ],

    price: "$300",

    features: [
      "Existing codebase review",
      "Architecture and technical guidance",
      "Performance and code quality review",
      "Bug and issue investigation",
      "Developer mentoring and recommendations",
    ],
  },
];