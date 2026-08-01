import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#12161C",
          color: "#E8EBEF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "6px",
            backgroundImage: "linear-gradient(135deg, #7C3AED, #C084FC)",
            marginBottom: "36px",
          }}
        />
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-2px" }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 36, color: "#9AA5B3", marginTop: 16 }}>
          {`${profile.title} — ${profile.subtitle}`}
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: 56,
            fontSize: 26,
            color: "#A78BFA",
          }}
        >
          {profile.kpis.slice(0, 3).map((kpi) => (
            <div key={kpi.label} style={{ display: "flex", gap: "10px" }}>
              <span style={{ fontWeight: 700 }}>{kpi.value}</span>
              <span style={{ color: "#9AA5B3" }}>{kpi.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
