// All content below is drawn directly from Abhijeet Kumar Singh's resume.
// No employers, metrics, projects, or technologies have been invented.

export const profile = {
  name: "Abhijeet Kumar Singh",
  role: "Senior Java Backend Developer",
  location: "Noida, India",
  email: "abhijeetksinghdev@gmail.com",
  phone: "+91 7739839779",
  linkedin: "abhijeetksinghdev",
  github: "abhijeetksinghdev",
  linkedinUrl: "https://www.linkedin.com/in/abhijeetksinghdev/",
  githubUrl: "https://github.com/abhijeetksinghdev",
  // Split around the years-of-experience figure so it can be rendered live via <ExperienceYears />.
  summaryBefore: "Java Backend Developer with ",
  summaryAfter:
    " of experience across telecom and tax-technology domains. At Rakuten Symphony, built Java microservices and Kafka/Spark-based pipelines running on Kubernetes infrastructure for real-time network performance monitoring and incident alerting. Currently at Infosys, developing Spring Boot/IBM DB2 backend modules for the Income Tax Department's AO Portal, with RedHat-based CI/CD and AI-assisted tools (GitHub Copilot, Claude Code). Strong fundamentals in REST APIs and Microservices. Looking to bring this backend depth and ownership to a product engineering team.",
  heroTaglineBefore: "Senior Java Backend Developer — ",
  heroTaglineAfter:
    " turning high-volume, high-stakes data into dependable backend systems. National tax infrastructure by day, live telecom networks before that.",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "SQL"],
  },
  {
    label: "Frameworks & Technologies",
    items: ["Spring Boot", "Spring MVC", "Hibernate / JPA", "REST APIs", "Microservices"],
  },
  {
    label: "Databases",
    items: ["IBM DB2", "MySQL", "Apache Cassandra"],
  },
  {
    label: "Big Data & Messaging",
    items: ["Apache Spark (Batch & Streaming)", "Apache Kafka"],
  },
  {
    label: "Cloud & DevOps",
    items: ["RedHat (RHEL / OpenShift CI-CD)", "Docker", "Kubernetes", "Jenkins", "Artifactory"],
  },
  {
    label: "Build & Version Control",
    items: ["Maven", "Git", "GitHub"],
  },
  {
    label: "Testing & Quality",
    items: ["JUnit", "Postman", "SonarQube"],
  },
  {
    label: "AI-Assisted Engineering",
    items: ["GitHub Copilot", "Claude Code"],
  },
  {
    label: "Project Management",
    items: ["Jira", "Confluence", "ALM"],
  },
];

export const experience = [
  {
    id: "infosys",
    company: "Infosys Ltd.",
    location: "Noida, India",
    title: "Senior Associate Consultant",
    period: "Nov 2025 – Present",
    current: true,
    project: "TDS CPC – AO Portal, Income Tax Department (Govt. of India)",
    stack: ["Java", "Spring Boot", "REST APIs", "Microservices", "IBM DB2", "Kafka", "RedHat"],
    logo: "/logos/infosys-logo.jpeg",
    points: [
      "Building REST APIs and Spring Boot services with JPA/Hibernate against IBM DB2, writing reliable, well-tested query logic to handle high-volume taxpayer and financial records without data integrity issues.",
      "Using Apache Kafka as a message queue between backend services on the AO Portal, enabling reliable, asynchronous communication across modules.",
      "Translating complex, frequently-changing taxation rules and functional requirements into clean, maintainable backend logic and production-ready features.",
      "Building and deploying backend services through RedHat-based CI/CD pipelines, ensuring consistent, stable, and repeatable production releases across sprint cycles for a government-scale application.",
      "Leveraging GitHub Copilot and Claude Code throughout the development cycle to accelerate feature delivery, speed up debugging, and improve overall code quality and consistency.",
      "Ensuring release stability through JUnit test coverage, structured peer code reviews, and close day-to-day collaboration with QA and DevOps teams during every release cycle.",
    ],
  },
  {
    id: "rakuten",
    company: "Rakuten Symphony India Pvt. Ltd.",
    location: "Bengaluru, India",
    title: "Software Engineer",
    period: "Oct 2021 – Oct 2025",
    current: false,
    project: "Performance Monitor (Telecom OSS – Network Performance & Incident Management)",
    stack: ["Java", "Spring Boot", "Apache Spark", "Kafka", "MySQL", "Cassandra", "Kubernetes"],
    logo: "/logos/rakuten-symphony-logo.jpeg",
    points: [
      "Owned the incident and alarm module within the Performance Monitor platform, handling real-time detection, correlation, and alerting for network faults and device degradation across the telecom network.",
      "Developed backend logic for a Performance Incident Management system using configurable correlation rules that proactively detect and flag degraded network devices before they impact customers.",
      "Built a real-time alerting and notification service for network faults and alarms, including cell-down events, enabling operations teams to respond faster to critical network incidents.",
      "Diagnosed and resolved production issues within the incident/alarm pipeline, improving the reliability, accuracy, and timeliness of critical alerts delivered across the platform.",
      "Processed and published KPI-based incident alerts to Kafka for consumption by downstream monitoring, ticketing, and notification systems across the broader OSS platform.",
      "Built the underlying Java service that runs on Kubernetes-based infrastructure, supporting a scalable, resilient architecture for continuous telecom network monitoring.",
    ],
  },
];

// Featured projects are the two resume projects, reframed as outcome-driven cards.
// No metrics or details beyond what the resume states are included.
export const projects = [
  {
    id: "ao-portal",
    title: "AO Portal — TDS CPC",
    org: "Income Tax Department, Govt. of India (via Infosys)",
    summary:
      "Backend modules for a government-scale tax platform: REST APIs and Spring Boot services on IBM DB2, with Kafka handling asynchronous communication between modules.",
    outcome:
      "Reliable, well-tested query logic for high-volume taxpayer and financial records, deployed through RedHat-based CI/CD for consistent, repeatable production releases.",
    stack: ["Java", "Spring Boot", "IBM DB2", "Kafka", "REST APIs", "RedHat CI/CD"],
    logo: "/logos/infosys-logo.jpeg",
    period: "Nov 2025 – Present",
  },
  {
    id: "performance-monitor",
    title: "Performance Monitor — Telecom OSS",
    org: "Rakuten Symphony India Pvt. Ltd.",
    summary:
      "Owned the incident and alarm module of a real-time network performance monitoring platform, including configurable correlation rules to flag degraded devices.",
    outcome:
      "Built the real-time alerting and notification service for network faults, including cell-down events, and published KPI-based incident alerts to Kafka for downstream monitoring and ticketing systems.",
    stack: ["Java", "Spring Boot", "Apache Spark", "Kafka", "MySQL", "Cassandra", "Kubernetes"],
    logo: "/logos/rakuten-symphony-logo.jpeg",
    period: "Oct 2021 – Oct 2025",
  },
];

export const education = {
  degree: "Bachelor of Engineering – Computer Science & Engineering",
  school: "IES College of Technology, Bhopal",
  period: "2016 – 2020",
};

// "How I work" principles derived only from facts present in the resume.
export const howIWork = [
  {
    title: "Backend depth, not just backend duty",
    body: "From telecom alarms to tax records, the work has always been the same core discipline: turning complex, high-volume, high-stakes data into reliable APIs and services that don't break under real load.",
  },
  {
    title: "Domain translation is part of the job",
    body: "Frequently-changing taxation rules and configurable telecom correlation logic both demand the same skill — reading messy real-world requirements and shipping clean, maintainable backend logic from them.",
  },
  {
    title: "AI-assisted, not AI-replaced",
    body: "GitHub Copilot and Claude Code are part of the daily workflow — used to accelerate feature delivery, speed up debugging, and keep code quality and consistency high, not to skip the thinking.",
  },
  {
    title: "Stability is a feature",
    body: "JUnit coverage, structured peer review, and close collaboration with QA and DevOps are treated as core engineering work — especially when the releases in question serve a government-scale application.",
  },
];
