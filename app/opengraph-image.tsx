import { ImageResponse } from "next/og";

export const alt = "Abhijeet Kumar Singh — Java Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", color: "#F2EFE6", background: "#0A0B0A", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 26, display: "flex", border: "1px solid rgba(242,239,230,0.13)" }} />
      <div style={{ position: "absolute", left: 400, top: 26, bottom: 26, width: 1, display: "flex", background: "rgba(242,239,230,0.08)" }} />
      <div style={{ position: "absolute", left: 800, top: 26, bottom: 26, width: 1, display: "flex", background: "rgba(242,239,230,0.08)" }} />
      <div style={{ position: "absolute", width: 650, height: 650, border: "1px solid rgba(184,255,84,.16)", borderRadius: 650, right: -250, top: -180, boxShadow: "0 0 0 80px rgba(184,255,84,.02),0 0 0 180px rgba(255,107,74,.015)" }} />

      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "52px 62px", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="54" height="54" viewBox="0 0 40 40" fill="none">
              <path d="M4 4h12M4 4v12M36 36H24M36 36V24" stroke="#B8FF54" strokeWidth="2" />
              <path d="m11 29 9-19 9 19M14.5 22h11" stroke="#F2EFE6" strokeWidth="2.2" />
              <circle cx="11" cy="29" r="2" fill="#FF6B4A" />
              <circle cx="29" cy="29" r="2" fill="#B8FF54" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", paddingLeft: 16, borderLeft: "1px solid rgba(242,239,230,.2)" }}>
              <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: ".13em" }}>ABHIJEET KUMAR SINGH</span>
              <span style={{ marginTop: 5, color: "#9EA197", fontSize: 12, letterSpacing: ".18em" }}>JAVA BACKEND ENGINEER</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#B8FF54", fontSize: 14, fontWeight: 700, letterSpacing: ".12em" }}>
            <span style={{ width: 9, height: 9, background: "#B8FF54" }} /> OPEN TO JAVA BACKEND ROLES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#FF6B4A", fontSize: 14, fontWeight: 700, letterSpacing: ".2em" }}>JAVA 8-21 · SPRING BOOT 2/3 · DISTRIBUTED SYSTEMS</span>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: .82, letterSpacing: "-.055em" }}>
            <span>ABHIJEET</span>
            <span style={{ marginTop: 18, color: "#B8FF54" }}>KUMAR<span style={{ marginLeft: 18, color: "#FF8B60" }}>SINGH</span></span>
          </div>
          <span style={{ marginTop: 32, maxWidth: 850, color: "#A0A39A", fontSize: 24, lineHeight: 1.4 }}>Designing and modernizing distributed backend systems across government and telecom platforms.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 22, borderTop: "1px solid rgba(242,239,230,.18)" }}>
          <div style={{ display: "flex", gap: 28, color: "#C3C5BD", fontSize: 13, fontWeight: 700, letterSpacing: ".12em" }}>
            <span>SPRING BOOT 3</span><span>KAFKA</span><span>OPENSHIFT</span><span>GRAFANA</span>
          </div>
          <span style={{ color: "#777B72", fontSize: 13 }}>abhijeetksinghdev.netlify.app</span>
        </div>
      </div>
    </div>,
    size
  );
}
