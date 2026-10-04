export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  overview: string;
  problemAddressed: string;
  whatItDoes: string;
  keyFeatures: string[];
  workflow?: string[];
  techStack: string[];
  tags: string[];
  githubUrl: string;
  linkedInUrl?: string;
  liveDemoUrl?: string;
  role?: string;
  outcome?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  badge: string;
  journal: string;
  issn: string;
  volume: string;
  issue: string;
  published: string;
  pages: string;
  paperId: string;
  registrationId?: string;
  researchArea?: string;
  description: string;
  tags: string[];
  paperUrl: string;
  showAuthors?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
  score?: string;
  highlight?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  linkedInUrl?: string;
  details?: string;
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
  supportingText: string;
  projectName?: string;
  isTeam: boolean;
}

export const PERSONAL_INFO = {
  name: "Bhavana Choudhary",
  title: "Computer Science Engineer",
  tagline: "Building practical solutions across software, data, AI, and cybersecurity.",
  aboutText: [
    "Hello, I'm Bhavana — a Computer Science Engineering student who enjoys turning ideas into practical technology. My interests span software development, data, artificial intelligence, and cybersecurity, and I enjoy exploring how these areas can be combined to solve real-world problems.",
    "From building data-driven applications and AI-based systems to working on research and cybersecurity simulations, I’m constantly experimenting, learning, and improving my technical skills. I’m particularly interested in building projects that are not just functional, but meaningful, explainable, and useful.",
    "This portfolio is a collection of the projects, research, and technical experiences that represent my journey as I grow into a software engineer."
  ],
  email: "bhavanachoudhary989@gmail.com",
  phone: "+91 9591027170",
  location: "Bangalore, Karnataka",
  github: "https://github.com/bhavanachoudhary989-sketch",
  linkedin: "https://www.linkedin.com/in/bhavana-choudhary-92478a373/",
  resumePdf: "/resume.pdf",
  photoUrl: "/photo.jpg"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "C++", "C", "Java", "JavaScript", "SQL"]
  },
  {
    category: "Core Computer Science",
    skills: ["Data Structures", "Algorithms", "DBMS"]
  },
  {
    category: "Data",
    skills: ["Data Analysis", "Data Visualization", "Excel"]
  },
  {
    category: "AI / ML",
    skills: ["Artificial Intelligence", "Machine Learning"]
  },
  {
    category: "Tools / Productivity",
    skills: ["PowerPoint"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Creative Thinking", "Communication", "Adaptability to Change"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aegisai",
    title: "AegisAI",
    subtitle: "AI-Powered Security Operations Center (SOC) Simulator",
    description: "An interactive cybersecurity simulation platform demonstrating how AI can assist security analysts in detecting, analyzing and responding to cyber threats in a controlled environment.",
    overview: "AegisAI is an interactive Security Operations Center (SOC) simulation platform engineered to showcase real-time threat detection, AI-guided incident analysis, risk scoring, and automated defensive workflows within a controlled environment.",
    problemAddressed: "Modern SOC analysts are inundated with high volumes of security alerts, leading to alert fatigue and delayed incident response. AegisAI addresses this by using AI to correlate attack chains and assist human analysts.",
    whatItDoes: "Simulates security events, calculates real-time threat risk, correlates multi-stage attack chains, predicts upcoming attack vectors, and provides actionable defensive recommendations requiring human analyst authorization prior to containment execution.",
    keyFeatures: [
      "Suspicious security event detection",
      "AI-based threat analysis",
      "Threat risk calculation",
      "Attack-chain correlation",
      "Next attack-stage prediction",
      "Defensive recommendations",
      "Analyst authorization before response",
      "Simulated defensive actions",
      "Threat containment tracking",
      "Defense scoring"
    ],
    workflow: [
      "Security Event",
      "Threat Detection",
      "Risk Analysis",
      "Attack Chain Correlation",
      "AI Prediction",
      "Defensive Recommendation",
      "Analyst Authorization",
      "Simulated Defense",
      "Threat Containment"
    ],
    techStack: ["React.js", "Vite", "FastAPI", "Python", "REST APIs", "JavaScript", "AI-based analysis"],
    tags: ["AI", "Cybersecurity", "React", "Python", "FastAPI"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch",
    linkedInUrl: "https://www.linkedin.com/posts/bhavana-choudhary-92478a373_cybersecurity-ai-aegisai-activity-7502394110528393219-Tu3o",
    role: "Lead Developer & Cybersecurity Simulation Architect",
    outcome: "Successfully demonstrated automated attack chain correlation and AI-assisted analyst authorization workflows."
  },
  {
    id: "fluenti",
    title: "Fluenti",
    subtitle: "Python Language Translation Application",
    description: "A Python-based language translation application designed to provide convenient translation functionality through a simple user interface.",
    overview: "Fluenti is a desktop translation tool built using Python to provide fast, reliable, and user-friendly multi-language translation capability with clean UI controls.",
    problemAddressed: "Provides lightweight, instant text translation across multiple languages without relying on heavy browser interfaces.",
    whatItDoes: "Translates input text seamlessly between target languages using Python translation models and presents converted text in a clean output window.",
    keyFeatures: [
      "Multi-language text translation",
      "Intuitive input and output interface",
      "Fast translation execution",
      "Clean user-friendly desktop experience"
    ],
    techStack: ["Python"],
    tags: ["Python", "Translation", "Desktop App"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  },
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn Prediction",
    subtitle: "Predictive Analytics & Customer Retention Modeling",
    description: "A machine-learning project focused on analyzing telecom customer data and identifying patterns associated with customer churn.",
    overview: "This project analyzes historical customer demographics, account information, and service usage data from a telecommunications provider to predict which subscribers are at high risk of churning.",
    problemAddressed: "Customer acquisition costs far outweigh customer retention costs in telecom. Identifying early warning signals of subscriber churn enables proactive retention strategies.",
    whatItDoes: "Processes raw customer data, conducts exploratory feature analysis, trains predictive classification models, and highlights critical risk drivers for targeted customer retention.",
    keyFeatures: [
      "Data preprocessing & missing value imputation",
      "Exploratory data analysis & feature visualization",
      "Key churn driver identification",
      "Machine learning classification model training",
      "Predictive customer churn scoring"
    ],
    techStack: ["Python", "Machine Learning", "Data Analysis", "Data Visualization"],
    tags: ["Python", "Machine Learning", "Data Analysis", "Data Visualization"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  },
  {
    id: "stock-market-analysis",
    title: "Stock Market Analysis & Visualization",
    subtitle: "Financial Data Exploration & Visual Insights",
    description: "A Python-based data analysis project focused on exploring stock-market data, identifying trends and presenting insights through visualizations.",
    overview: "An analytical application built to ingest historical financial market datasets, compute moving averages and volatility metrics, and generate clear graphical visual trends.",
    problemAddressed: "Raw stock market price histories are difficult to analyze without visual technical indicators and trend visualization.",
    whatItDoes: "Fetches historical price feeds, computes statistical summary metrics, and renders detailed interactive chart visualizations of price movement and volume trends.",
    keyFeatures: [
      "Historical price data ingestion",
      "Trend identification & moving average plotting",
      "Volatility analysis",
      "Interactive technical chart visualizations"
    ],
    techStack: ["Python", "Data Analysis", "Data Visualization"],
    tags: ["Python", "Data Analysis", "Data Visualization", "Finance"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  },
  {
    id: "sales-data-analysis",
    title: "Sales Data Analysis",
    subtitle: "Business Intelligence & Sales Trend Reporting",
    description: "A data-analysis project focused on examining sales data, identifying patterns and transforming raw data into meaningful visual insights.",
    overview: "A comprehensive data analytics workflow designed to process multi-channel sales records, uncover purchasing patterns, evaluate regional performance, and present executive summaries.",
    problemAddressed: "Unstructured transactional sales records obscure revenue opportunities and seasonal purchasing trends.",
    whatItDoes: "Aggregates raw transaction data, cleans dataset fields, runs statistical aggregation, and builds clear visual reporting dashboards in Python and Excel.",
    keyFeatures: [
      "Sales revenue aggregation",
      "Seasonal trend & product performance analysis",
      "Regional demographic breakdown",
      "Data cleaning & visual chart generation"
    ],
    techStack: ["Python", "Data Analysis", "Data Visualization", "Excel"],
    tags: ["Python", "Data Analysis", "Data Visualization", "Excel"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  },
  {
    id: "water-turbidity-testing",
    title: "Water Turbidity Testing",
    subtitle: "Environmental Water Quality Monitoring System",
    description: "A water quality testing system designed to measure and analyze water turbidity levels for environmental and health safety assessments.",
    overview: "This project provides an automated sensor and software framework to measure water clarity and particulate concentration, categorizing water purity levels according to safety standards.",
    problemAddressed: "Manual water quality inspection is slow and subject to error; automated turbidity testing offers instant assessment for potability.",
    whatItDoes: "Reads light-scattering measurement data, computes Nephelometric Turbidity Units (NTU), and alerts users to contamination thresholds.",
    keyFeatures: [
      "Turbidity sensor data acquisition",
      "NTU clarity level classification",
      "Water purity threshold alerts",
      "Data reporting & trend visualization"
    ],
    techStack: ["C++", "Python", "Data Analysis", "Sensors"],
    tags: ["C++", "Data Analysis", "Hardware/IoT", "Environmental"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  },
  {
    id: "password-generator",
    title: "Password Generator and Strength Checker",
    subtitle: "Security Utility for Credential Generation & Analysis",
    description: "A utility application for generating passwords and evaluating password strength based on security-related characteristics.",
    overview: "A dual-purpose cybersecurity tool engineered to create cryptographically secure random passwords and perform heuristic strength evaluation on existing credentials.",
    problemAddressed: "Weak and repeated passwords are the leading cause of unauthorized system access; users require clear feedback on password entropy.",
    whatItDoes: "Generates custom strong passwords according to user length and character constraints, while evaluating password candidate strength across entropy, length, and character complexity factors.",
    keyFeatures: [
      "Cryptographically random password generation",
      "Customizable character sets (uppercase, symbols, numbers)",
      "Real-time password strength scoring",
      "Entropy and vulnerability characteristic evaluation"
    ],
    techStack: ["Python"],
    tags: ["Python", "Cybersecurity", "Utility"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    subtitle: "C-Based Record & Inventory Management Operations",
    description: "A C-based library management application designed to manage library-related records and operations.",
    overview: "A streamlined CLI library administration system implemented in procedural C, featuring binary file storage, efficient record lookup algorithms, and structured book transaction tracking.",
    problemAddressed: "Manual book checkout and catalog tracking leads to misplaced inventory and inaccurate return logs.",
    whatItDoes: "Allows librarians to add, update, search, issue, and return books while keeping persistent records updated on local storage.",
    keyFeatures: [
      "Book catalog record management (Add, Edit, Delete)",
      "Student borrowing and return tracking",
      "Fast file-based binary record searching",
      "Structured console user interface"
    ],
    techStack: ["C"],
    tags: ["C", "Data Structures", "CLI"],
    githubUrl: "https://github.com/bhavanachoudhary989-sketch"
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "smart-waste-detection",
    title: "SMART WASTE IMAGE DETECTION",
    badge: "Published Research Paper",
    journal: "International Journal of Emerging Technologies and Innovative Research (JETIR)",
    issn: "2349-5162",
    volume: "12",
    issue: "12",
    published: "December 2025",
    pages: "e469–e472",
    paperId: "JETIR2512457",
    researchArea: "Engineering",
    description: "Smart Waste Image Detection is a software-based waste classification system that uses image processing to identify and categorize waste from uploaded images. The system analyzes visual features such as color, texture and shape to classify materials into categories including plastic, paper, metal, glass and organic waste. The application provides a user-friendly interface for uploading and previewing waste images and displays the detected waste type, category, visual features, moisture information and confidence level. The project focuses on reducing manual effort, supporting efficient waste segregation and improving recycling-oriented waste management.",
    tags: ["Image Processing", "Java", "Waste Classification", "Computer Vision", "Smart Waste Management", "Recycling"],
    paperUrl: "https://www.jetir.org/papers/JETIR2512457.pdf",
    showAuthors: false
  },
  {
    id: "ai-student-life-pattern",
    title: "AI STUDENT LIFE PATTERN ANALYZER",
    badge: "Published Research Paper",
    journal: "TIJER – International Research Journal",
    issn: "2349-9249",
    volume: "13",
    issue: "6",
    published: "June 2026",
    pages: "a238–a242",
    paperId: "TIJER2606023",
    registrationId: "TIJER_162936",
    description: "An intelligent system designed to analyze and monitor students’ daily activities and behavioral patterns using Machine Learning, R Programming, Web Development, Mobile Application Development and IoT. The system analyzes factors such as study hours, sleep time, screen usage, productivity, burnout and academic performance to identify behavioral patterns, predict trends and provide personalized recommendations.",
    tags: ["Machine Learning", "AI", "Data Analysis", "R Programming", "IoT", "Student Analysis", "Pattern Recognition", "Educational Technology"],
    paperUrl: "https://tijer.org/tijer/papers/TIJER2606023.pdf",
    showAuthors: false
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Sapthagiri NPS University, Bengaluru",
    degree: "Bachelor of Technology (B.Tech) — Computer Science and Engineering (CSE)",
    period: "2024 – Present",
    details: "Focusing on Software Engineering, Data Structures & Algorithms, Database Systems, Artificial Intelligence, and Cybersecurity.",
    highlight: "Currently Pursuing"
  },
  {
    institution: "Vidya Soudha PU College",
    degree: "Pre-University Education (Science Stream)",
    period: "2022 – 2024",
    details: "Focused on Physics, Chemistry, Mathematics, and Computer Science / Biology.",
    highlight: "Completed with Distinction"
  },
  {
    institution: "Lourdes High School",
    degree: "Secondary Education (SSLC / 10th Standard)",
    period: "Passed Out: 2022",
    score: "95.84%",
    details: "Academic excellence with outstanding performance across science and mathematics.",
    highlight: "95.84% Score"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Generative AI for All",
    issuer: "Infosys Springboard",
    details: "Comprehensive training covering generative AI fundamentals, LLM capabilities, prompt engineering techniques, and practical applications.",
    credentialUrl: "https://www.linkedin.com/in/bhavana-choudhary-92478a373/"
  },
  {
    title: "Introduction to Microcontrollers & Coding",
    issuer: "Infosys Springboard",
    details: "Explored hardware programming concepts, embedded control, logic design, and microcontroller instruction sets.",
    credentialUrl: "https://www.linkedin.com/in/bhavana-choudhary-92478a373/"
  },
  {
    title: "Excel Data Analysis & Visualization Certification",
    issuer: "Data Analysis & Business Intelligence",
    details: "Advanced data manipulation, spreadsheet modeling, pivot tables, chart visualizations, and data analysis workflows.",
    linkedInUrl: "https://www.linkedin.com/in/bhavana-choudhary-92478a373/"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "SIH 2026 — Top 100 Team Selection",
    event: "Smart India Hackathon 2026 Precursor Event",
    description: "Selected among the Top 100 Teams in the SIH Precursor Event 2026 as part of Smart India Hackathon 2026.",
    supportingText: "Team achievement — Smart India Hackathon 2026",
    projectName: "Project: Auryvex",
    isTeam: true
  }
];

export const LANGUAGES: { name: string; level: string; percentage: number }[] = [
  { name: "English", level: "Full Professional Proficiency", percentage: 95 },
  { name: "Kannada", level: "Native / Full Proficiency", percentage: 95 },
  { name: "Hindi", level: "Full Professional Proficiency", percentage: 90 },
  { name: "Marwadi", level: "Native Proficiency", percentage: 90 }
];
