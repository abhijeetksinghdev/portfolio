"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiApachecassandra,
  SiApachekafka,
  SiApachemaven,
  SiApachespark,
  SiDocker,
  SiGrafana,
  SiHibernate,
  SiJenkins,
  SiJfrog,
  SiJunit5,
  SiKibana,
  SiKubernetes,
  SiMysql,
  SiPrometheus,
  SiRedhatopenshift,
  SiSonarqubeserver,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import { FaAws, FaGithub, FaJava } from "react-icons/fa6";
import { TbActivityHeartbeat, TbApi, TbBug, TbDatabaseCog, TbPhoneCall, TbRefresh, TbShieldCheck, TbSql, TbTestPipe, TbTopologyStar3 } from "react-icons/tb";

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  "Java 8 / 11 / 17 / 21": { icon: FaJava, color: "#f89820" },
  SQL: { icon: TbSql, color: "#74aeff" },
  "Spring Boot 2 / 3": { icon: SiSpringboot, color: "#6db33f" },
  "Spring MVC": { icon: SiSpring, color: "#6db33f" },
  "Spring Cloud": { icon: SiSpring, color: "#6db33f" },
  "Hibernate / JPA": { icon: SiHibernate, color: "#bcae79" },
  "REST APIs": { icon: TbApi, color: "#ff6b4a" },
  Microservices: { icon: TbTopologyStar3, color: "#b8ff54" },
  "Distributed Systems": { icon: TbTopologyStar3, color: "#74aeff" },
  "Event-Driven Architecture": { icon: TbActivityHeartbeat, color: "#ffbf47" },
  "High-Availability Design": { icon: TbShieldCheck, color: "#7de697" },
  "Idempotency Patterns": { icon: TbRefresh, color: "#74aeff" },
  "IBM DB2": { icon: TbDatabaseCog, color: "#3d8bfd" },
  MySQL: { icon: SiMysql, color: "#58a6c0" },
  "Apache Cassandra": { icon: SiApachecassandra, color: "#1287b1" },
  "Apache Kafka": { icon: SiApachekafka, color: "var(--ink)" },
  "Apache Spark 3": { icon: SiApachespark, color: "#e25a1c" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Kubernetes: { icon: SiKubernetes, color: "#4d7ce8" },
  "AWS (EC2, S3)": { icon: FaAws, color: "#ff9900" },
  "Red Hat OpenShift": { icon: SiRedhatopenshift, color: "#ee0000" },
  Jenkins: { icon: SiJenkins, color: "#d24939" },
  Artifactory: { icon: SiJfrog, color: "#41bf47" },
  Maven: { icon: SiApachemaven, color: "#c71a36" },
  "Git / GitHub": { icon: FaGithub, color: "var(--ink)" },
  Grafana: { icon: SiGrafana, color: "#f46800" },
  "Kibana (ELK)": { icon: SiKibana, color: "#00bfb3" },
  Prometheus: { icon: SiPrometheus, color: "#e6522c" },
  JUnit: { icon: SiJunit5, color: "#25a162" },
  Mockito: { icon: TbTestPipe, color: "#7de697" },
  "Root Cause Analysis (RCA)": { icon: TbBug, color: "#ff6b4a" },
  "On-Call Incident Management": { icon: TbPhoneCall, color: "#ffbf47" },
  SonarQube: { icon: SiSonarqubeserver, color: "#4e9bcd" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative border-b border-[var(--line)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="04 / Capability index" title={<>A stack shaped by <span className="text-cyan">real constraints.</span></>} description="Grouped by engineering responsibility rather than a wall of logos—so the depth is easier to assess quickly." className="mb-14 lg:mb-20" />

        <div className="grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            return (
            <motion.article key={group.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.07 }} className={`group border-b border-r border-[var(--line)] p-5 transition-colors hover:bg-[var(--chip)] sm:min-h-56 sm:p-7 ${index === 1 ? "lg:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[15rem] font-display text-lg font-semibold tracking-[-0.025em] text-offwhite group-hover:text-indigo-400">{group.label}</h3>
                <span className="font-mono text-[10px] tracking-[0.13em] text-cyan">S/{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {group.items.map((item) => {
                  const technology = skillIcons[item];
                  const TechnologyIcon = technology.icon;
                  return (
                    <span key={item} className="inline-flex min-h-10 max-w-full items-center gap-2.5 border border-[var(--line-strong)] bg-[var(--chip-strong)] px-3 py-2 font-display text-[11px] font-bold tracking-[0.01em] text-offwhite transition-colors hover:border-indigo-400/65 hover:bg-indigo-400/[0.08] sm:text-xs">
                      <TechnologyIcon aria-hidden="true" className="h-[18px] w-[18px] shrink-0" style={{ color: technology.color }} />
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          );})}
        </div>
      </div>
    </section>
  );
}
