export const projects = [
  {
    id: "staffvertex-web-platform",
    slug: "staffvertex-web-platform",

    title: "StaffVertex — Web Platform",
    shortTitle: "ST",

    category: "Enterprise SaaS · Workforce Management",
    status: "Live & Active",

    year: "2025",
    role: "Developer to Team Lead",
    client: "Synexus Technologies",

    description:
      "Multi-tenant web platform for enterprise workforce, time tracking, and project management. Built with role-based access, real-time reporting, and an architecture designed to scale cleanly across organizations.",

    liveUrl: "https://www.staffvertex.com/",

    technologies: [
      "Next.js",
      "MongoDB",
      "Multi-tenant",
      "RBAC",
      "SWR",
      "TypeScript",
    ],

    problem:
      "Organizations needed a centralized platform to manage workforce activity, project tasks, time tracking, and reporting without relying on disconnected tools. The system also needed to support multiple organizations while keeping data and access isolated.",

    solution:
      "I worked on a multi-tenant workforce management platform with role-based access control, dashboards, time tracking, task management, reporting, and organization-level workflows. The interface was designed to keep complex operational data easy to understand and manage.",

    scale:
      "The platform combines multiple business workflows including organizations, users, teams, projects, tasks, timesheets, dashboards, reports, and permissions into one connected application.",

    features: [
      "Multi-tenant organization architecture",
      "Role-based access control",
      "Team and employee management",
      "Project and task management",
      "Time tracking and timesheets",
      "Dashboard analytics and reporting",
      "Responsive web interface",
      "Real-time data synchronization",
    ],

    outcomes:
      "The platform brought workforce management, project tracking, and time reporting into a single system, giving teams a clearer operational view and making important information easier to access.",
  },

  {
    id: "staffvertex-desktop-tracker",
    slug: "staffvertex-desktop-tracker",

    title: "StaffVertex — Desktop Tracker",
    shortTitle: "ST",

    category: "Desktop App · Time Tracking",
    status: "Live & Active",

    year: "2026",
    role: "Developer",
    client: "Synexus Technologies",

    description:
      "Offline-first desktop companion for StaffVertex that captures time and activity reliably, even on unstable networks, and synchronizes data with the cloud.",

    liveUrl: "https://www.staffvertex.com/",

    technologies: [
      "Tauri",
      "Rust",
      "React",
      "SQLite",
      "Zustand",
    ],

    problem:
      "Employees needed a lightweight desktop application capable of tracking work activity even when network connectivity was unreliable.",

    solution:
      "The desktop tracker was designed around an offline-first workflow, locally storing activity and synchronizing information with the main platform when connectivity becomes available.",

    scale:
      "The application combines desktop functionality, local storage, activity tracking, and cloud synchronization.",

    features: [
      "Offline-first tracking",
      "Local SQLite storage",
      "Cloud synchronization",
      "Desktop notifications",
      "Reliable activity tracking",
    ],

    outcomes:
      "Employees can continue tracking work activity without depending completely on a stable internet connection.",
  },

  {
    id: "simple-green-solutions",
    slug: "simple-green-solutions",

    title: "Simple Green Solutions",
    shortTitle: "SGS",

    category: "Healthcare SaaS · Hospital Management",
    status: "Built & Deployed",

    year: "2026",
    role: "Full Stack Developer",
    client: "Simple Green Solutions",

    description:
      "Cloud-based Hospital Management System connecting patients, hospitals, and pharmacies on one platform with scheduling, medical records, and healthcare workflows.",

    liveUrl: "https://www.sgreensolutions.com/",

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "3-sided Platform",
    ],

    problem:
      "Healthcare workflows were spread across different processes and systems, making coordination between patients, hospitals, and pharmacies difficult.",

    solution:
      "A centralized healthcare management platform was designed to connect the major stakeholders and simplify common healthcare workflows.",

    scale:
      "The platform supports multiple healthcare workflows across patients, hospitals, scheduling, medical records, and pharmacy operations.",

    features: [
      "Patient management",
      "Hospital management",
      "Appointment scheduling",
      "Medical records",
      "Pharmacy workflows",
    ],

    outcomes:
      "The system provides a centralized digital platform for managing connected healthcare workflows.",
  },

  {
    id: "kisaan-hisaab",
    slug: "kisaan-hisaab",

    title: "Kisaan Hisaab",
    shortTitle: "KH",

    category: "Mobile App · Farm Expense Management",
    status: "Live",

    year: "2026",
    role: "React Native Developer",
    client: "Personal Project",

    description:
      "Multilingual farm bookkeeping application designed to help Pakistani farmers manage farm expenses, records, and financial information.",

    liveUrl: "#",

    technologies: [
      "React Native",
      "Expo",
      "SQLite",
      "PDF Export",
    ],

    problem:
      "Farm expense records can become difficult to maintain when they depend on manual bookkeeping.",

    solution:
      "A simple mobile-first bookkeeping application was designed to make recording farm expenses and reviewing financial information easier.",

    scale:
      "The application focuses on expense recording, local storage, multilingual usability, and document export.",

    features: [
      "Farm expense tracking",
      "Local SQLite storage",
      "Multilingual interface",
      "PDF export",
    ],

    outcomes:
      "Farmers can maintain their financial records digitally through a simple mobile workflow.",
  },

  {
    id: "pharmacy-inventory-system",
    slug: "pharmacy-inventory-system",

    title: "Pharmacy Inventory System",
    shortTitle: "PIS",

    category: "Business Software · Inventory",
    status: "Production",

    year: "2026",
    role: "Full Stack Developer",
    client: "FreeLance",

    description:
      "Real-time inventory and stock-control system designed for pharmacy operations.",

    liveUrl: "#",

    technologies: [
      "Next.js",
      "MongoDB",
      "API Routes",
      "Zustand",
    ],

    problem:
      "Pharmacies need accurate visibility into products, stock levels, and inventory changes.",

    solution:
      "A centralized inventory system was built to simplify product management and stock monitoring.",

    scale:
      "The application handles products, inventory records, and stock-related workflows through a centralized dashboard.",

    features: [
      "Product management",
      "Inventory tracking",
      "Stock monitoring",
      "Dashboard reporting",
    ],

    outcomes:
      "The system provides a clearer and more organized approach to pharmacy inventory management.",
  },

  {
    id: "desktop-pos-system",
    slug: "desktop-pos-system",

    title: "Desktop POS System",
    shortTitle: "POS",

    category: "Business Software · Point of Sale",
    status: "Production",

    year: "2026",
    role: "Full Stack Developer",
    client: "Personal Project",

    description:
      "Offline-first desktop point-of-sale application designed for reliable retail transactions and local business operations.",

    liveUrl: "#",

    technologies: [
      "React",
      "Electron",
      "SQLite",
      "Node.js",
    ],

    problem:
      "Retail environments often require POS software that remains usable even when internet connectivity is unavailable.",

    solution:
      "An offline-first desktop POS application was designed using local storage and desktop technologies.",

    scale:
      "The system combines sales workflows, local persistence, product management, and desktop application functionality.",

    features: [
      "Point of sale",
      "Offline-first operation",
      "Local SQLite database",
      "Product management",
    ],

    outcomes:
      "The application provides a reliable desktop workflow for everyday point-of-sale operations.",
  },

  {
    id: "alphinex-website-dashboard",
    slug: "alphinex-website-dashboard",

    title: "Alphinex Website & Dashboard",
    shortTitle: "AX",

    category: "Company Website · Public Site + Admin Dashboard",
    status: "Live & Active",

    year: "2025",
    role: "Full Stack Developer",
    

    description:
      "Two-sided build combining a modern public company website with an administrative dashboard for managing content and business information.",

    liveUrl: "#",

    technologies: [
      "Next.js",
      "MongoDB",
      "SWR",
      "Cloudflare R2",
    ],

    problem:
      "The company needed a professional public presence together with a centralized interface for managing website content.",

    solution:
      "A modern company website and connected admin dashboard were developed as one system.",

    scale:
      "The project combines a public-facing website, backend data management, content workflows, and an administrative interface.",

    features: [
      "Company website",
      "Admin dashboard",
      "Content management",
      "Cloud file storage",
    ],

    outcomes:
      "The company gained a centralized digital presence with a connected content management workflow.",
  },

  {
    id: "devxiom-website-admin-cms",
    slug: "devxiom-website-admin-cms",

    title: "Devxiom — Website & Admin CMS",
    shortTitle: "DX",

    category: "Agency Website · Public Site + Admin CMS",
    status: "Built & Deployed",

    year: "2026",
    role: "Lead Developer",
    client: "Devxiom Agency",
    

    description:
      "Full-stack agency website with an administrative CMS for managing content, projects, and website information.",

    liveUrl: "#",

    technologies: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Admin CMS",
    ],

    problem:
      "The agency needed a modern website while also requiring a simple way to manage its content without editing the frontend directly.",

    solution:
      "A full-stack agency website was connected to an administrative CMS for managing website content and project information.",

    scale:
      "The project combines public pages, database-backed content, media management, and administrative workflows.",

    features: [
      "Agency website",
      "Admin CMS",
      "Project management",
      "Cloud media management",
      "Database-backed content",
    ],

    outcomes:
      "The website and CMS provide a connected workflow for presenting and managing agency content.",
  },
 {
  id: 9,
  slug: "college-management-system",
  title: "College Management System",
  shortTitle: "CMS",
  category: "Education SaaS · College Management",
  status: "In Development",
  year: "2026",
  role: "Frontend Developer",
  client: "SYNEXUS TECHNOLOGIES",
  description:
    "A full-stack college management platform designed to manage students, teachers, admissions, attendance, examinations, fees, announcements, and academic operations.",
  liveUrl: "#",
  technologies: [
    "React.js",
    "FastAPI",
    "PostgreSQL",
    "REST API",
    "JWT",
    "RBAC"
  ],
  problem:
    "Colleges need a centralized platform to manage academic and administrative operations across different roles. Managing students, admissions, attendance, examinations, fees, and announcements separately can make the workflow difficult to maintain.",
  solution:
    "I worked on the frontend interface of a multi-role College Management System, building responsive dashboards and user interfaces designed to integrate with backend APIs.",
  scale:
    "The MVP supports multiple roles including Super Admin, College Admin, Teacher, Finance Staff, Student, and Parent.",
  features: [
    "Role-based dashboards",
    "Student management",
    "Teacher and staff management",
    "Online admission management",
    "Attendance management",
    "Examinations and results",
    "Fee management",
    "Announcements and notifications",
    "Academic session and subject management",
    "REST API integration"
  ],
  outcomes:
    "The system provides a centralized interface for managing college operations and allows different users to access functionality according to their assigned roles."
},
];