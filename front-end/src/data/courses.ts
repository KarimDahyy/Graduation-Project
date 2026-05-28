export const COURSES = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Kent C. Dodds",
    duration: "4h 30m",
    rating: 4.9,
    level: "Advanced",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["React", "Hooks", "Performance"],
    description: "Master advanced React patterns and hooks to build scalable, performant, and maintainable applications. This course covers everything from compound components to state reducers.",
    syllabus: [
      { title: "Introduction to Advanced Patterns", duration: "45m" },
      { title: "Compound Components", duration: "1h 15m" },
      { title: "Control Props Pattern", duration: "50m" },
      { title: "Custom Hooks & Composition", duration: "1h 40m" }
    ],
    students: 1240,
    lastUpdated: "March 2024"
  },
  {
    id: 2,
    title: "Complete Figma Masterclass",
    instructor: "Gary Simon",
    duration: "12h 15m",
    rating: 4.8,
    level: "Beginner",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["UI/UX", "Prototyping", "Wireframing"],
    description: "Learn Figma from scratch. Design beautiful user interfaces, create interactive prototypes, and collaborate with developers efficiently.",
    syllabus: [
      { title: "Figma Interface Basics", duration: "1h 30m" },
      { title: "Wireframing & Layouts", duration: "2h 45m" },
      { title: "Components & Variants", duration: "3h 00m" },
      { title: "Prototyping & Animation", duration: "2h 30m" },
      { title: "Handoff to Developers", duration: "2h 30m" }
    ],
    students: 850,
    lastUpdated: "Feb 2024"
  },
  {
    id: 3,
    title: "TypeScript for Professionals",
    instructor: "Matt Pocock",
    duration: "6h 45m",
    rating: 5.0,
    level: "Intermediate",
    category: "Development",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["TypeScript", "Generics", "Zod"],
    description: "Go beyond the basics of TypeScript. Learn generics, conditional types, and how to build type-safe applications at scale.",
    syllabus: [
      { title: "TypeScript Configuraton", duration: "45m" },
      { title: "Generics Deep Dive", duration: "2h 00m" },
      { title: "Advanced Types", duration: "2h 30m" },
      { title: "Zod & Validation", duration: "1h 30m" }
    ],
    students: 2100,
    lastUpdated: "Jan 2024"
  },
  {
    id: 4,
    title: "CSS Grid & Flexbox Deep Dive",
    instructor: "Kevin Powell",
    duration: "5h 20m",
    rating: 4.9,
    level: "Intermediate",
    category: "Development",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["CSS", "Layout", "Responsive"],
    description: "Stop guessing with CSS. Master Grid and Flexbox to create complex, responsive layouts with confidence.",
    syllabus: [
      { title: "Flexbox Fundamentals", duration: "1h 20m" },
      { title: "Grid Layout System", duration: "2h 00m" },
      { title: "Responsive Design Patterns", duration: "2h 00m" }
    ],
    students: 3500,
    lastUpdated: "Dec 2023"
  },
  {
    id: 5,
    title: "Product Management 101",
    instructor: "Lenny Rachitsky",
    duration: "8h 00m",
    rating: 4.7,
    level: "Beginner",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["Product", "Strategy", "User Research"],
    description: "The essential guide to modern product management. Learn how to discover, define, and ship products that users love.",
    syllabus: [
      { title: "Role of a PM", duration: "1h 00m" },
      { title: "User Research Methods", duration: "2h 30m" },
      { title: "Prioritization Frameworks", duration: "2h 00m" },
      { title: "Working with Engineers", duration: "2h 30m" }
    ],
    students: 900,
    lastUpdated: "Nov 2023"
  },
  {
    id: 6,
    title: "Node.js Microservices",
    instructor: "Stephen Grider",
    duration: "20h 30m",
    rating: 4.8,
    level: "Advanced",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["Node.js", "Docker", "Kubernetes"],
    description: "Build scalable, production-ready microservices with Node.js, Docker, and Kubernetes.",
    syllabus: [
      { title: "Microservices Architecture", duration: "2h 00m" },
      { title: "Building Services with Express", duration: "5h 00m" },
      { title: "Data Management", duration: "4h 30m" },
      { title: "Docker & Kubernetes Deployment", duration: "9h 00m" }
    ],
    students: 1500,
    lastUpdated: "Oct 2023"
  },
  {
    id: 7,
    title: "Fullstack Next.js 14 Masterclass",
    instructor: "Lee Robinson",
    duration: "10h 45m",
    rating: 4.9,
    level: "Intermediate",
      category: "Development",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*y13qyTAxvTlDdNbzXCjuPw.png",
    tags: ["Next.js", "React", "Server Components"],
    description: "Learn Next.js from the ground up, including the App Router, Server Components, Server Actions, and deploying full-stack apps seamlessly.",
    syllabus: [
      { title: "Routing and Layouts", duration: "1h 30m" },
      { title: "Data Fetching & Caching", duration: "2h 45m" },
      { title: "Authentication with Auth.js", duration: "2h 00m" },
      { title: "Deployment on Vercel", duration: "1h 00m" }
    ],
    students: 5400,
    lastUpdated: "April 2024"
  },
  {
    id: 8,
    title: "System Design for Technical Interviews",
    instructor: "Alex Xu",
    duration: "14h 20m",
    rating: 4.8,
    level: "Advanced",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["System Design", "Architecture", "Scaling"],
    description: "Crack your tech interviews by learning how to design large-scale, distributed systems. Real-world case studies for Chat Apps, Rate Limiters, and Video Streaming.",
    syllabus: [
      { title: "System Design Framework", duration: "1h 30m" },
      { title: "Design a Rate Limiter", duration: "2h 00m" },
      { title: "Design WhatsApp", duration: "3h 00m" },
      { title: "Design Netflix Streaming", duration: "3h 30m" }
    ],
    students: 8200,
    lastUpdated: "May 2024"
  },
  {
    id: 9,
    title: "Python for Data Science & ML",
    instructor: "Andrei Neagoie",
    duration: "18h 00m",
    rating: 4.9,
    level: "Beginner",
    category: "Development",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["Python", "Pandas", "Scikit-learn"],
    description: "Learn Python from zero to hero. Covers data manipulation with Pandas, visualization with Matplotlib, and building ML models with Scikit-learn.",
    syllabus: [
      { title: "Python Fundamentals", duration: "4h 00m" },
      { title: "Data Analysis with Pandas", duration: "5h 00m" },
      { title: "Data Visualization", duration: "3h 00m" },
      { title: "Machine Learning Basics", duration: "6h 00m" }
    ],
    students: 12400,
    lastUpdated: "April 2024"
  },
  {
    id: 10,
    title: "SQL & Database Design Bootcamp",
    instructor: "Joey Blue",
    duration: "9h 15m",
    rating: 4.7,
    level: "Beginner",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["SQL", "PostgreSQL", "Database Design"],
    description: "Master SQL from basics to advanced queries. Learn relational database design, indexing, and query optimization for real-world applications.",
    syllabus: [
      { title: "SQL Basics", duration: "2h 00m" },
      { title: "Joins & Subqueries", duration: "2h 30m" },
      { title: "Database Design", duration: "2h 45m" },
      { title: "Query Optimization", duration: "2h 00m" }
    ],
    students: 6700,
    lastUpdated: "March 2024"
  },
  {
    id: 11,
    title: "AWS Cloud Practitioner Essentials",
    instructor: "Stephane Maarek",
    duration: "11h 30m",
    rating: 4.8,
    level: "Beginner",
    category: "Development",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["AWS", "Cloud", "DevOps"],
    description: "Prepare for the AWS Cloud Practitioner certification. Learn core AWS services, pricing models, security best practices, and cloud architecture fundamentals.",
    syllabus: [
      { title: "Cloud Concepts", duration: "2h 00m" },
      { title: "Core AWS Services", duration: "4h 00m" },
      { title: "Security & Compliance", duration: "2h 30m" },
      { title: "Billing & Pricing", duration: "3h 00m" }
    ],
    students: 9800,
    lastUpdated: "May 2024"
  },
  {
    id: 12,
    title: "Flutter & Dart — The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    duration: "22h 00m",
    rating: 4.8,
    level: "Intermediate",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["Flutter", "Dart", "Mobile"],
    description: "Build beautiful cross-platform mobile apps for iOS and Android using Flutter and Dart. From UI widgets to state management and Firebase integration.",
    syllabus: [
      { title: "Dart Fundamentals", duration: "4h 00m" },
      { title: "Flutter Widgets & UI", duration: "7h 00m" },
      { title: "State Management", duration: "5h 00m" },
      { title: "Firebase Integration", duration: "6h 00m" }
    ],
    students: 7300,
    lastUpdated: "Feb 2024"
  },
  {
    id: 13,
    title: "Ethical Hacking & Cybersecurity",
    instructor: "Heath Adams",
    duration: "25h 00m",
    rating: 4.9,
    level: "Advanced",
    category: "Development",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["Cybersecurity", "Ethical Hacking", "Networking"],
    description: "Learn penetration testing and ethical hacking from scratch. Covers network scanning, exploitation, web app attacks, and report writing.",
    syllabus: [
      { title: "Networking Fundamentals", duration: "5h 00m" },
      { title: "Reconnaissance & Scanning", duration: "6h 00m" },
      { title: "Exploitation Techniques", duration: "8h 00m" },
      { title: "Web Application Attacks", duration: "6h 00m" }
    ],
    students: 15200,
    lastUpdated: "May 2024"
  },
  {
    id: 14,
    title: "Git & GitHub Masterclass",
    instructor: "Colt Steele",
    duration: "6h 30m",
    rating: 4.9,
    level: "Beginner",
    category: "Development",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["Git", "GitHub", "Version Control"],
    description: "Master Git version control and GitHub for collaboration. Learn branching, merging, rebasing, pull requests, and CI/CD workflows.",
    syllabus: [
      { title: "Git Basics", duration: "1h 30m" },
      { title: "Branching & Merging", duration: "2h 00m" },
      { title: "GitHub Collaboration", duration: "1h 30m" },
      { title: "Advanced Git", duration: "1h 30m" }
    ],
    students: 4100,
    lastUpdated: "Jan 2024"
  },
  {
    id: 15,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Cooper",
    duration: "8h 45m",
    rating: 4.7,
    level: "Beginner",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&auto=format&fit=crop&q=60",
    tags: ["UI/UX", "Design Thinking", "Accessibility"],
    description: "Learn the fundamentals of UX and UI design. Covers user research, information architecture, accessibility, and creating stunning interfaces.",
    syllabus: [
      { title: "Design Thinking Process", duration: "2h 00m" },
      { title: "User Research Methods", duration: "2h 30m" },
      { title: "Visual Design Principles", duration: "2h 15m" },
      { title: "Accessibility & Inclusive Design", duration: "2h 00m" }
    ],
    students: 3200,
    lastUpdated: "March 2024"
  },
  {
    id: 16,
    title: "CompTIA Security+ 701",
    instructor: "InfoSec Institute Instructor",
    duration: "8h 45m",
    rating: 4.7,
    level: "Beginner",
    category: "Security",
    image: "https://e-training.ivorytraining.com/attachments/dependence/qwdsAsIO41Q7YzCgIV1EDas0n6ri0kxHxPxDnJbT.png",
    tags: ["Security", "Certification", "Networking"],
    description: "This course prepares individuals to successfuly pass the CompTIA Security+ SY0-701 certification exam. It covers each of the five domains in the Security+ exam: General Security Concepts; Threats, Vulnerabilities, and Mitigations; Security Architecture; Security Operations; and Security Program Management and Oversight. Each course will explain the concepts and terminology covered on the exam and include helpful analogies, memory aids, and practical applications of the material to better remember important key points, with each video providing targeted details of important individual topics or similar, related concepts. The course also includes practice questions and quizzes to help reinforce the material and prepare for the exam.",
    syllabus: [
      { title: "General Security Concepts", duration: "2h 00m" },
      { title: "Threats, Vulnerabilities, and Mitigations", duration: "2h 30m" },
      { title: "Security Architecture", duration: "2h 15m" },
      { title: "Security Operations", duration: "2h 00m" }
    ],
    students: 1200,
    lastUpdated: "March 2026"
  },
  {
    id: 17,
    title: "JavaScript Fundamentals",
    instructor: "InfoSec Institute Instructor",
    duration: "8h 45m",
    rating: 4.7,
    level: "Beginner",
    category: "Development",
    image: "https://www.w3schools.com/JS/img_javascript_480.jpg",
    tags: ["Development", "Programming", "JavaScript"],
    description: "Learn the fundamentals of JavaScript programming. Covers variables, functions, arrays, objects, and DOM manipulation.",
    syllabus: [
      { title: "Introduction to JavaScript", duration: "2h 00m" },
      { title: "Variables and Functions", duration: "7h 30m" },
      { title: "Arrays and Objects", duration: "5h 15m" },
      { title: "DOM Manipulation", duration: "9h 00m" }
    ],
    students: 1200,
    lastUpdated: "April 2026"
  } 
];
