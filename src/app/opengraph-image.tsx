import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: Senior Software Engineer & AI Engineer`;
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
          justifyContent: "space-between",
          background: "#f3f1ea",
          color: "#121411",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 4, color: "#6a6d65" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 12, height: 12, background: "#2a44f0" }} />
            ADDIS ABABA, ETHIOPIA
          </div>
          <div>SOFTWARE · FULL-STACK · AI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: -5, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 44, marginTop: 24, color: "#393c36", letterSpacing: -1 }}>
            Building intelligent software that solves real-world problems.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #121411", paddingTop: 24, fontSize: 24 }}>
          <div>Senior Software Engineer &amp; AI Engineer</div>
          <div style={{ color: "#2a44f0" }}>gezahegngulilat.vercel.app</div>
        </div>
      </div>
    ),
    size,
  );
}
