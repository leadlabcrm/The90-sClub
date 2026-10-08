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
          alignItems: "stretch",
          background: "#0A3D8F",
          color: "#FFF0CF",
          padding: "64px",
        }}
      >
        <div
          style={{
            width: "100%",
            border: "4px solid #F0BD38",
            borderRadius: 28,
            background: "#18202A",
            display: "flex",
            alignItems: "center",
            padding: "48px",
          }}
        >
          <div
            style={{
              width: 178,
              height: 390,
              border: "5px solid #F0BD38",
              borderRadius: 88,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#F0BD38",
              fontFamily: "serif",
            }}
          >
            <div style={{ display: "flex", fontSize: 22, letterSpacing: 5 }}>THE</div>
            <div style={{ display: "flex", fontSize: 80, fontWeight: 800 }}>90s</div>
            <div style={{ display: "flex", fontSize: 22, letterSpacing: 5 }}>CLUB</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 54 }}>
            <div style={{ display: "flex", fontSize: 23, letterSpacing: 4, color: "#F0BD38" }}>
              ELECTRONIC CITY · HEBBAGODI
            </div>
            <div style={{ display: "flex", maxWidth: 780, fontSize: 70, lineHeight: 0.98, marginTop: 24, fontFamily: "serif", fontWeight: 800 }}>
              Kerala food &amp; craft beer on the rooftop
            </div>
            <div style={{ display: "flex", fontSize: 27, marginTop: 32, color: "#FFF0CF" }}>
              The 90s Club Taproom and Kitchen · Open 12 pm–12 am
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
