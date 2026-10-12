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
    "Java & Spring Boot Engineer",
    "Distributed Systems Engineer",
    "Kafka & Event-Driven Engineer",
    "Production Reliability Engineer",
  ],
  // Split around the years-of-experience figure so it can be rendered live via <ExperienceYears />.
  summaryBefore: "Java Backend Engineer with ",
  summaryAfter:
    " of experience designing and modernizing distributed backend systems across telecom and government platforms. Experienced in Java 8-21, Spring Boot 2/3, Kafka and Spark, event-driven microservices, REST APIs, database optimization, and production troubleshooting for high-volume systems.",
  heroTaglineBefore: "",
  heroTaglineAfter:
    " designing and modernizing high-volume distributed systems across government and telecom platforms.",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java 8 / 11 / 17 / 21", "SQL"],
  },
  {
    label: "Backend & Architecture",
    items: [
      "Spring Boot 2 / 3",
      "Spring MVC",
      "Spring Cloud",
      "Hibernate / JPA",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "High-Availability Design",
      "Idempotency Patterns",
    ],
  },
  {
    label: "Databases",
    items: ["IBM DB2", "MySQL", "Apache Cassandra"],
  },
  {
    label: "Messaging & Streaming",
    items: ["Apache Kafka", "Apache Spark 3"],
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
    label: "DevOps & Observability",
    items: ["Jenkins", "Maven", "SonarQube", "Artifactory", "Git / GitHub", "Grafana", "Kibana (ELK)", "Prometheus"],
  },
  {
    label: "Testing & Engineering",
    items: ["JUnit", "Mockito", "Root Cause Analysis (RCA)", "On-Call Incident Management"],
  },
];

export const experience = [
  {
    id: "infosys",
    company: "Infosys Ltd.",
    title: "Senior Associate Consultant",
    period: "Nov 2025 – Present",
    current: true,
    project: "Income Tax Department, Government of India · TDS-CPC · Noida, India",
    stack: ["Java 21", "Spring Boot 3", "Apache Kafka", "IBM DB2", "JPA / Hibernate", "Red Hat OpenShift", "JUnit", "Mockito"],
    logo: "/logos/infosys-logo.webp",
    points: [
      "Designed and developed 25+ Spring Boot REST APIs for TDS-CPC correction workflows, translating complex tax-processing requirements into modular backend services.",
      "Designed event-driven workflows using Apache Kafka for asynchronous correction processing, decoupling user-facing APIs from downstream backend services.",
      "Designed JPA/Hibernate domain models and optimized IBM DB2 query flows for correction-case lifecycles while maintaining relationships and data consistency with original orders.",
      "Implemented TDS computation and regulatory business rules across multiple assessment years, backed by JUnit and Mockito regression coverage.",
      "Deployed Java 21 and Spring Boot 3 microservices on Red Hat OpenShift through CI/CD pipelines and supported production troubleshooting and root cause analysis.",
    ],
  },
  {
    id: "rakuten",
    company: "Rakuten Symphony India Pvt. Ltd.",
    title: "Software Engineer",
    period: "Oct 2021 – Oct 2025",
    current: false,
    project: "Telecom OSS – Service Assurance Platform · Bengaluru, India",
    stack: ["Java 8 / 11 / 17 / 21", "Spring Boot 2 / 3", "Apache Kafka", "Apache Spark 3", "MySQL", "Cassandra", "Kubernetes", "AWS", "JUnit", "Mockito"],
    logo: "/logos/rakuten-symphony-logo.webp",
    points: [
      "Built backend integrations supporting 200+ network devices across distributed, multivendor telecom environments.",
      "Designed a configurable event-correlation engine for LTE, 5G, and multivendor EMS environments, transforming raw alarms and degradation events into actionable incident profiles.",
      "Improved Apache Spark processing performance by 40% through code-level optimization and efficient data-distribution strategies.",
      "Developed Kafka-based incident-processing workflows that improved system performance by 30%, consolidating redundant incidents from multiple network sources.",
      "Built reliable Kafka event-processing workflows with at-least-once delivery, key-based partitioning, and idempotent handling of duplicate and replayed events.",
      "Contributed to incident-management capabilities that reduced average service-restoration time by 20% while improving visibility into network health and performance.",
      "Modernized services from Java 8 to Java 17/21 and Spring Boot 3 while maintaining 90%+ unit-test coverage; handled L3 troubleshooting using Grafana and Kibana.",
      "Mentored and onboarded 2-3 engineering interns through architecture walkthroughs, code reviews, debugging sessions, and pull-request feedback.",
    ],
  },
];

// Featured work comprises the two resume projects, reframed as outcome-driven cards.
// No metrics or details beyond what the resume states are included.
export const projects = [
  {
    id: "ao-portal",
    title: "TDS-CPC Correction Workflows",
    org: "Income Tax Department, Govt. of India (via Infosys)",
    summary:
      "Designed and developed 25+ Spring Boot 3 REST APIs for TDS-CPC correction workflows, with Kafka-based asynchronous processing and JPA/Hibernate models on IBM DB2.",
    outcome:
      "Modular Java 21 services with optimized DB2 query flows, regulatory business rules, JUnit/Mockito regression coverage, and production delivery through Red Hat OpenShift.",
    stack: ["Java 21", "Spring Boot 3", "Apache Kafka", "IBM DB2", "JPA / Hibernate", "Red Hat OpenShift", "JUnit", "Mockito"],
    architecture: {
      label: "Correction-processing flow",
      sequential: true,
      nodes: [
        { label: "TDS-CPC", detail: "Correction workflows" },
        { label: "REST APIs", detail: "25+ service endpoints" },
        { label: "Spring Boot 3", detail: "Java 21 business rules" },
        { label: "Apache Kafka", detail: "Asynchronous processing" },
        { label: "IBM DB2", detail: "Optimized case lifecycles" },
        { label: "OpenShift", detail: "CI/CD and production" },
      ],
    },
    logo: "/logos/infosys-logo.webp",
    period: "Nov 2025 – Present",
  },
  {
    id: "performance-monitor",
    title: "Telecom OSS — Service Assurance Platform",
    org: "Rakuten Symphony India Pvt. Ltd.",
    summary:
      "Built backend integrations for 200+ network devices and designed a configurable event-correlation engine spanning LTE, 5G, and multivendor EMS environments.",
    outcome:
      "Improved Spark processing by 40% and Kafka incident workflows by 30%, reduced average service-restoration time by 20%, and maintained 90%+ unit-test coverage during Java and Spring modernization.",
    stack: ["Java 8-21", "Spring Boot 2 / 3", "Apache Kafka", "Apache Spark 3", "MySQL", "Cassandra", "Kubernetes", "AWS", "Grafana", "Kibana"],
    architecture: {
      label: "Service-assurance flow",
      sequential: true,
      nodes: [
        { label: "200+ Devices", detail: "Multivendor network events" },
        { label: "Correlation Engine", detail: "LTE, 5G and EMS rules" },
        { label: "Apache Spark 3", detail: "Optimized processing" },
        { label: "Apache Kafka", detail: "Partitioned event workflows" },
        { label: "Idempotent Services", detail: "Duplicate and replay handling" },
        { label: "Grafana / Kibana", detail: "L3 troubleshooting" },
      ],
    },
    logo: "/logos/rakuten-symphony-logo.webp",
    period: "Oct 2021 – Oct 2025",
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
  school: "IES College of Technology, Bhopal, India",
  university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
  period: "2016 – 2020",
};

export const certifications = [
  {
    id: "claude-certified-developer",
    title: "Claude Certified Developer — Foundations",
    issuer: "Anthropic",
    issued: "September 27, 2026",
    expires: "September 27, 2027",
    credentialId: "a9c8f622-9dbe-49d0-be5c-68b62efe8bff",
    certificationNumber: null,
    image: "/certificates/claude-certified-developer-foundations.png",
    badgeImage: "/certificates/claude-certified-developer-badge.png",
    badgeUrl: "https://www.credly.com/badges/a9c8f622-9dbe-49d0-be5c-68b62efe8bff/public_url",
    verificationLabel: "Verify credential",
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot Certified Professional (GH-300)",
    issuer: "Microsoft · GitHub",
    issued: "September 9, 2026",
    expires: "September 10, 2028",
    credentialId: "AE51D275447325C9",
    certificationNumber: "2CFADE-94DA48",
    image: "/certificates/github-copilot-certificate.png",
    badgeImage: "/certificates/github-copilot-badge.png",
    badgeUrl: "https://www.credly.com/org/github/badge/github-copilot",
    verificationLabel: "Official badge details",
  },
];

// "How I work" principles derived only from facts present in the resume.
export const howIWork = [
  {
    title: "Modernize without destabilizing",
    body: "Upgrade paths from Java 8 to Java 17/21 and Spring Boot 3 are handled with regression coverage and production reliability in mind, not as version changes in isolation.",
  },
  {
    title: "Make event processing reliable",
    body: "Kafka workflows are designed around at-least-once delivery, key-based partitioning, and idempotent handling so duplicate and replayed events do not corrupt downstream behavior.",
  },
  {
    title: "Diagnose production, not symptoms",
    body: "L3 troubleshooting, root cause analysis, Grafana, and Kibana are part of engineering ownership—from finding the failure mode to improving the service that caused it.",
  },
  {
    title: "Raise the team around the system",
    body: "Architecture walkthroughs, code reviews, debugging sessions, and pull-request feedback are used to onboard and mentor engineers while keeping delivery standards high.",
  },
];
