from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


OUTPUT = "output/pdf/Abhijeet-Kumar-Singh-Resume.pdf"
INK = colors.HexColor("#14151D")
MIST = colors.HexColor("#555C73")
INDIGO = colors.HexColor("#4F46E5")
LINE = colors.HexColor("#DDE1EA")


def bullet(text, style):
    return Paragraph(f'<font color="#4F46E5">&#8226;</font>&nbsp;&nbsp;{text}', style)


styles = getSampleStyleSheet()
title = ParagraphStyle("title", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=INK)
role = ParagraphStyle("role", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=14, textColor=INDIGO, spaceBefore=3)
contact = ParagraphStyle("contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.8, leading=12, textColor=MIST, spaceBefore=8)
section = ParagraphStyle("section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=INDIGO, spaceBefore=14, spaceAfter=4)
heading = ParagraphStyle("heading", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=INK)
meta = ParagraphStyle("meta", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4, leading=11, textColor=MIST)
body = ParagraphStyle("body", parent=styles["Normal"], fontName="Helvetica", fontSize=8.7, leading=12, textColor=INK, spaceAfter=5)
item = ParagraphStyle("item", parent=body, leftIndent=2, firstLineIndent=0, spaceAfter=3)

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=18 * mm,
    rightMargin=18 * mm,
    topMargin=16 * mm,
    bottomMargin=15 * mm,
    title="Abhijeet Kumar Singh - Resume",
    author="Abhijeet Kumar Singh",
)

story = [
    Paragraph("ABHIJEET KUMAR SINGH", title),
    Paragraph("Senior Java Backend Developer", role),
    Paragraph("Noida, India &nbsp; | &nbsp; +91 7739839779 &nbsp; | &nbsp; abhijeetksinghdev@gmail.com &nbsp; | &nbsp; linkedin.com/in/abhijeetksinghdev &nbsp; | &nbsp; github.com/abhijeetksinghdev", contact),
    Spacer(1, 5),
    HRFlowable(width="100%", thickness=1, color=LINE),
    Paragraph("PROFILE", section),
    Paragraph("Java backend developer with 4.5+ years of experience across telecom and tax-technology domains. Builds reliable Spring Boot services, REST APIs, and event-driven data pipelines with Kafka and Spark. Experienced with IBM DB2, MySQL, Cassandra, Kubernetes, RedHat CI/CD, and AI-assisted engineering tools.", body),
    Paragraph("EXPERIENCE", section),
]

experiences = [
    (
        "Senior Associate Consultant | Infosys Ltd.",
        "Nov 2025 - Present | Noida, India",
        "TDS CPC - AO Portal, Income Tax Department (Govt. of India)",
        [
            "Build REST APIs and Spring Boot services with JPA/Hibernate against IBM DB2 for high-volume taxpayer and financial records.",
            "Use Apache Kafka for reliable, asynchronous communication between AO Portal backend modules.",
            "Translate frequently-changing taxation rules into clean, maintainable backend logic and production-ready features.",
            "Build and deploy services through RedHat-based CI/CD pipelines for stable, repeatable releases.",
            "Improve delivery and debugging with GitHub Copilot and Claude Code, supported by JUnit coverage, peer reviews, QA, and DevOps collaboration.",
        ],
    ),
    (
        "Software Engineer | Rakuten Symphony India Pvt. Ltd.",
        "Oct 2021 - Oct 2025 | Bengaluru, India",
        "Performance Monitor (Telecom OSS - Network Performance & Incident Management)",
        [
            "Owned the incident and alarm module for real-time telecom network performance monitoring and incident alerting.",
            "Developed configurable correlation rules to proactively detect degraded network devices before customer impact.",
            "Built real-time alerting and notification services for network faults, alarms, and cell-down events.",
            "Processed and published KPI-based incident alerts to Kafka for downstream monitoring, ticketing, and notification systems.",
            "Built Java services running on Kubernetes infrastructure for continuous, scalable telecom monitoring.",
        ],
    ),
]

for job, period, project, points in experiences:
    block = [Paragraph(job, heading), Paragraph(period, meta), Paragraph(project, meta), Spacer(1, 3)]
    block.extend(bullet(point, item) for point in points)
    story.append(KeepTogether(block))

story.extend([
    Paragraph("TECHNICAL SKILLS", section),
    Paragraph("<b>Languages:</b> Java, SQL<br/><b>Frameworks:</b> Spring Boot, Spring MVC, Hibernate / JPA, REST APIs, Microservices<br/><b>Data:</b> IBM DB2, MySQL, Apache Cassandra, Apache Spark, Apache Kafka<br/><b>Cloud & DevOps:</b> RedHat (RHEL / OpenShift CI-CD), Docker, Kubernetes, Jenkins, Artifactory<br/><b>Tools:</b> Maven, Git, GitHub, JUnit, Postman, SonarQube, GitHub Copilot, Claude Code, Jira, Confluence, ALM", body),
    Paragraph("EDUCATION", section),
    Paragraph("Bachelor of Engineering - Computer Science & Engineering", heading),
    Paragraph("IES College of Technology, Bhopal | 2016 - 2020", meta),
])

doc.build(story)
