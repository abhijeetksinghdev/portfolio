import { ImageResponse } from "next/og";

export const alt = "Abhijeet Kumar Singh — Java Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", color: "#F2EFE6", background: "#080A08", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 26, display: "flex", border: "1px solid rgba(242,239,230,0.13)" }} />
      {[230, 430, 630, 830, 1030].map((left) => <div key={left} style={{ position: "absolute", left, top: 26, bottom: 26, width: 1, display: "flex", background: "rgba(242,239,230,0.045)" }} />)}
      {[170, 340, 510].map((top) => <div key={top} style={{ position: "absolute", left: 26, right: 26, top, height: 1, display: "flex", background: "rgba(242,239,230,0.045)" }} />)}
      <div style={{ position: "absolute", width: 700, height: 700, border: "1px solid rgba(184,255,84,.18)", borderRadius: 700, right: -270, top: -250, boxShadow: "0 0 0 88px rgba(184,255,84,.025),0 0 0 190px rgba(255,107,74,.018)" }} />
      <div style={{ position: "absolute", display: "flex", width: 420, height: 70, right: -105, bottom: 68, transform: "rotate(-17deg)", background: "linear-gradient(90deg, transparent, rgba(184,255,84,.14), rgba(255,107,74,.08), transparent)" }} />

      <div style={{ position: "absolute", left: 26, top: 26, width: 15, height: 15, display: "flex", borderLeft: "3px solid #B8FF54", borderTop: "3px solid #B8FF54" }} />
      <div style={{ position: "absolute", right: 26, bottom: 26, width: 15, height: 15, display: "flex", borderRight: "3px solid #FF6B4A", borderBottom: "3px solid #FF6B4A" }} />

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
              <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: ".13em" }}>ABHIJEET KUMAR SINGH</span>
              <span style={{ marginTop: 5, color: "#9EA197", fontSize: 12, letterSpacing: ".18em" }}>ENGINEERING PORTFOLIO · 2026</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#B8FF54", fontSize: 14, fontWeight: 700, letterSpacing: ".12em" }}>
            <span style={{ width: 9, height: 9, background: "#B8FF54" }} /> OPEN TO JAVA BACKEND ROLES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#FF7A55", fontSize: 15, fontWeight: 800, letterSpacing: ".22em" }}>JAVA BACKEND ENGINEER · DISTRIBUTED SYSTEMS</span>
          <div style={{ marginTop: 19, display: "flex", flexDirection: "column", fontWeight: 900, lineHeight: .82, letterSpacing: "-.06em" }}>
            <span style={{ fontSize: 91, fontWeight: 900 }}>ABHIJEET</span>
            <span style={{ marginTop: 19, color: "#B8FF54", fontSize: 86, fontWeight: 900 }}>KUMAR<span style={{ marginLeft: 19, color: "#FF8B60", fontWeight: 900 }}>SINGH</span></span>
          </div>
          <span style={{ marginTop: 31, maxWidth: 870, color: "#BEC1B7", fontSize: 23, lineHeight: 1.42 }}>Production-focused engineering across government and telecom platforms.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 22, borderTop: "1px solid rgba(242,239,230,.18)" }}>
          <div style={{ display: "flex", gap: 24, color: "#D0D2CB", fontSize: 12, fontWeight: 800, letterSpacing: ".11em" }}>
            <span>JAVA 21</span><span>SPRING BOOT 3</span><span>KAFKA</span><span>OPENSHIFT</span><span>AWS</span>
          </div>
          <span style={{ color: "#777B72", fontSize: 13 }}>abhijeetksinghdev.netlify.app</span>
        </div>
      </div>
    </div>,
    size
  );
}
