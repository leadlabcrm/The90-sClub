import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "The 90s Club — Kerala food and craft beer rooftop pub in Electronic City";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/logo-90s-club-gold-metallic-transparent-1000.png"),
  );
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0A0907",
          color: "#F4E8CC",
          padding: "48px 64px",
        }}
      >
        <img src={src} width={236} height={416} alt="" />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 56 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#E9C65A" }}>
            ELECTRONIC CITY · HEBBAGODI
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 740,
              fontSize: 58,
              lineHeight: 1.05,
              marginTop: 22,
            }}
          >
            Kerala Food & Craft Beer Rooftop Pub
          </div>
          <div style={{ display: "flex", fontSize: 28, marginTop: 28 }}>
            The 90s Club · Open 12pm–12am
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
