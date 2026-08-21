// All content below is drawn directly from Abhijeet Kumar Singh's resume.
// No employers, metrics, projects, or technologies have been invented.

export const profile = {
  name: "Abhijeet Kumar Singh",
  role: "Java Backend Engineer",
  location: "Noida, India",
  email: "abhijeetksinghdev@gmail.com",
  phone: "+91 7739839779",
  linkedin: "abhijeetksinghdev",
  github: "abhijeetksinghdev",
  linkedinUrl: "https://www.linkedin.com/in/abhijeetksinghdev/",
  githubUrl: "https://github.com/abhijeetksinghdev",
  designations: [
    "Java Backend Engineer",
    "Spring Boot & Microservices Engineer",
    "Distributed Systems Engineer",
    "Event-Driven Backend Engineer",
    "Kafka & Kubernetes Engineer",
  ],
  // Split around the years-of-experience figure so it can be rendered live via <ExperienceYears />.
  summaryBefore: "Java Backend Engineer with ",
  summaryAfter:
    " of experience designing and owning distributed, event-driven systems across telecom and government tax platforms. At Rakuten Symphony, built Java services and Kafka/Spark pipelines running on Kubernetes for real-time network performance monitoring and incident alerting. Currently at Infosys, developing Spring Boot and IBM DB2 backend modules for the Income Tax Department's AO Portal, with Red Hat OpenShift CI/CD and AI-assisted engineering tools.",
  heroTaglineBefore: "",
  heroTaglineAfter:
    " turning high-volume, high-stakes data into dependable backend systems. National tax infrastructure by day, live telecom networks before that.",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "SQL"],
  },
  {
    label: "Backend & Architecture",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate / JPA",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
  },
  {
    label: "Databases",
    items: ["IBM DB2", "MySQL", "Apache Cassandra"],
  },
  {
    label: "Messaging & Streaming",
    items: ["Apache Kafka", "Apache Spark (Batch & Streaming)"],
  },
  {
    label: "Containers & Orchestration",
    items: ["Docker", "Kubernetes"],
  },
  {
    label: "Cloud & Platform",
    items: ["AWS (EC2, S3)", "Red Hat OpenShift"],
  },
  {
    label: "DevOps & CI/CD",
    items: ["Red Hat CI/CD Pipelines", "Jenkins", "Artifactory", "Maven", "Git / GitHub"],
  },
  {
    label: "Testing & Quality",
    items: ["JUnit", "Postman", "SonarQube"],
  },
  {
    label: "Tools & Practices",
    items: ["Jira", "Confluence", "GitHub Copilot", "Claude Code"],
  },
];

export const experience = [
  {
    id: "infosys",
    company: "Infosys Ltd.",
    title: "Senior Associate Consultant",
    period: "Nov 2025 – Present",
    current: true,
    project: "TDS CPC – AO Portal, Income Tax Department (Govt. of India)",
    stack: ["Java", "Spring Boot", "IBM DB2", "Kafka", "Red Hat OpenShift CI/CD"],
    logo: "/logos/infosys-logo.webp",
    points: [
      "Design and build REST APIs and Spring Boot services with JPA/Hibernate on IBM DB2, writing integrity-safe query logic for a national-scale taxpayer records system handling high-volume financial data.",
      "Implement and maintain Apache Kafka producer logic in AO Portal services, publishing messages for asynchronous processing by downstream modules.",
      "Translate frequently changing taxation rules and complex functional requirements into clean, maintainable backend logic, shipping production-ready features every sprint.",
      "Own build and deployment of backend services through Red Hat OpenShift CI/CD pipelines, ensuring consistent, stable, and repeatable production releases for a compliance-critical government platform.",
      "Maintain JUnit test coverage and lead structured peer code reviews with QA and DevOps teams; apply GitHub Copilot and Claude Code to accelerate delivery and improve code consistency.",
    ],
  },
  {
    id: "rakuten",
    company: "Rakuten Symphony India Pvt. Ltd.",
    title: "Software Engineer",
    period: "Oct 2021 – Oct 2025",
    current: false,
    project: "Performance Monitor (Telecom OSS – Network Performance & Incident Management)",
    stack: ["Java", "Spring Boot", "Apache Spark", "Kafka", "MySQL", "Cassandra", "Kubernetes", "AWS (EC2, S3)"],
    logo: "/logos/rakuten-symphony-logo.webp",
    points: [
      "Owned the incident and alarm module of the Performance Monitor platform end-to-end, including real-time detection, correlation, and alerting for network faults and device degradation across a carrier-grade telecom network.",
      "Built configurable correlation rules for a Performance Incident Management system that proactively flagged degraded network devices before they impacted customers.",
      "Built a real-time alerting and notification service for network faults and alarms, including cell-down events, enabling operations teams to respond faster to service-impacting incidents.",
      "Diagnosed and resolved production issues in the incident and alarm pipeline, improving the reliability, accuracy, and timeliness of alerts delivered across the platform.",
      "Built Spark batch and streaming jobs to publish KPI-based incident alerts to Kafka for downstream monitoring, ticketing, and notification systems, and ran the service on Kubernetes-based infrastructure for scalable, resilient operation.",
      "Used Amazon S3 for file and object storage in Amazon EC2-based application environments.",
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
      "Backend modules for a government-scale tax platform: REST APIs and Spring Boot services on IBM DB2, with Kafka producers publishing messages for asynchronous downstream processing.",
    outcome:
      "Integrity-safe query logic for high-volume taxpayer and financial records, deployed through Red Hat OpenShift CI/CD for stable, repeatable production releases.",
    stack: ["Java", "Spring Boot", "IBM DB2", "Kafka", "REST APIs", "Red Hat OpenShift CI/CD"],
    architecture: {
      label: "Backend service landscape",
      sequential: true,
      nodes: [
        { label: "AO Portal", detail: "Tax workflows" },
        { label: "REST APIs", detail: "Request boundary" },
        { label: "Spring Boot", detail: "Business logic" },
        { label: "IBM DB2", detail: "Financial records" },
        { label: "Kafka", detail: "Message publishing" },
      ],
    },
    logo: "/logos/infosys-logo.webp",
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
    stack: ["Java", "Spring Boot", "Apache Spark", "Kafka", "MySQL", "Cassandra", "Kubernetes", "AWS (EC2, S3)"],
    architecture: {
      label: "KPI-to-alert flow",
      sequential: true,
      nodes: [
        { label: "Network KPIs", detail: "Live signals" },
        { label: "Apache Spark", detail: "Stream processing" },
        { label: "MySQL / Cassandra", detail: "Operational data" },
        { label: "Incident Service", detail: "Correlation rules" },
        { label: "Kafka", detail: "Alert publishing" },
        { label: "Downstream", detail: "Monitor · Ticket · Notify" },
      ],
    },
    logo: "/logos/rakuten-symphony-logo.webp",
    period: "Oct 2021 – Oct 2025",
  },
];

export const education = {
  degree: "Bachelor of Engineering – Computer Science & Engineering",
  school: "IES College of Technology, Bhopal, India",
  university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
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
    body: "GitHub Copilot and Claude Code are part of the development workflow — used to accelerate delivery and improve code consistency without compromising engineering judgment or code quality.",
  },
  {
    title: "Stability is a feature",
    body: "JUnit coverage, structured peer review, and close collaboration with QA and DevOps are treated as core engineering work — especially when the releases in question serve a government-scale application.",
  },
];
