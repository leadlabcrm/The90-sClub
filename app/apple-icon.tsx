import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#18202A",
          color: "#F0BD38",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          fontFamily: "serif",
          fontWeight: 800,
        }}
      >
        <div
          style={{
            width: 112,
            height: 154,
            border: "5px solid #F0BD38",
            borderRadius: 56,
            background: "#0A3D8F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          90s
        </div>
      </div>
    ),
    { ...size },
  );
}
