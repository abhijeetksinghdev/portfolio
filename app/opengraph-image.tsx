import { ImageResponse } from "next/og";

export const alt = "Abhijeet Kumar Singh — Java Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#F4F6FB",
          backgroundColor: "#07090E",
          backgroundImage:
            "radial-gradient(circle at 14% 12%, rgba(79, 93, 255, 0.34), transparent 36%), radial-gradient(circle at 90% 82%, rgba(34, 211, 238, 0.23), transparent 32%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 62,
                  height: 62,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #6B7BFF",
                  borderRadius: 16,
                  color: "#8B9AFF",
                  fontSize: 24,
                  fontWeight: 800,
                }}
              >
                AKS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ color: "#22D3EE", fontSize: 18, fontWeight: 700, letterSpacing: "0.18em" }}>
                  JAVA BACKEND ENGINEER
                </span>
                <span style={{ color: "#8A93A8", fontSize: 16 }}>GovTech · Telecom · Production Systems</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                border: "1px solid rgba(52, 211, 153, 0.34)",
                borderRadius: 999,
                color: "#6EE7B7",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              <span style={{ width: 9, height: 9, borderRadius: 999, background: "#34D399" }} />
              OPEN TO JAVA BACKEND ROLES
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 22, fontSize: 76, fontWeight: 800, letterSpacing: "-0.045em" }}>
              <span>ABHIJEET KUMAR</span>
              <span style={{ color: "#7C83FF" }}>SINGH</span>
            </div>
            <div style={{ maxWidth: 870, color: "#AAB2C4", fontSize: 28, lineHeight: 1.45 }}>
              Building dependable Java services for high-stakes, high-volume production environments.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {["JAVA", "SPRING BOOT", "MICROSERVICES", "KAFKA", "KUBERNETES"].map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "10px 14px",
                    border: "1px solid rgba(107, 123, 255, 0.28)",
                    borderRadius: 999,
                    color: "#C5CBDA",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <span style={{ color: "#768096", fontSize: 16 }}>abhijeetksinghdev.netlify.app</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
