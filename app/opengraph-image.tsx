import { ImageResponse } from "next/og";

export const alt = "The 90s Club Taproom and Kitchen — Kerala food and craft beer in Electronic City";
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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E4B4B",
          color: "#F5EDE0",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#D4A017" }}>
          ELECTRONIC CITY
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 0.95 }}>The 90s Club</div>
          <div style={{ display: "flex", fontSize: 36, marginTop: 16 }}>Taproom and Kitchen</div>
        </div>
        <div style={{ display: "flex", fontSize: 28 }}>
          Kerala food · Flying Fox craft beer · Rooftop
        </div>
      </div>
    ),
    { ...size },
  );
}
